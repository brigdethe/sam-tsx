import { expect, test } from '@playwright/test'
import { siteRoutes } from '../../src/app/routes.js'
import { gotoReady } from './helpers.js'

// Read-only checks, safe to run against a preview or the live site.
test.describe('every page loads @smoke', () => {
  for (const route of siteRoutes) {
    test(`${route} renders without errors`, async ({ page, baseURL }) => {
      const origin = new URL(baseURL!).origin
      const pageErrors: string[] = []
      const failedRequests: string[] = []
      page.on('pageerror', (error) => pageErrors.push(error.message))
      page.on('response', (response) => {
        if (response.url().startsWith(origin) && response.status() >= 400) {
          failedRequests.push(`${response.status()} ${response.url()}`)
        }
      })
      page.on('requestfailed', (request) => {
        const reason = request.failure()?.errorText ?? ''
        // Media requests are cancelled when the browser has buffered enough.
        if (request.url().startsWith(origin) && !reason.includes('ERR_ABORTED')) {
          failedRequests.push(`${reason} ${request.url()}`)
        }
      })

      const response = await gotoReady(page, route)

      expect(response?.status()).toBe(200)
      await expect(page).toHaveTitle(/\S/)
      await expect(page.locator('h1').first()).toBeVisible()
      expect(pageErrors, 'JavaScript errors on the page').toEqual([])
      expect(failedRequests, 'failed requests for the site’s own files').toEqual([])
    })
  }

  test('an unknown address shows the 404 page', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist')
    expect(response?.status()).toBe(404)
    await expect(page.locator('body')).toContainText(/\S/)
  })
})

test('software product accordion shows product summaries without Security Ops', async ({
  page,
}) => {
  await gotoReady(page, '/')

  const products = page.locator('.product-showcase .acc__panel')
  await expect(products).toHaveCount(3)
  await expect(page.locator('.product-showcase .acc__label')).toHaveText([
    'Maddy Memo',
    'MaddyOps',
    'BeaconOS',
  ])
  await expect(page.locator('.product-showcase')).not.toContainText('Maddy Security Ops')
  await expect(page.locator('.product-showcase .acc__description')).toHaveText([
    'Manage official memos, correspondence and document approvals in one secure workspace. Route documents through clear approval stages, track decisions and keep searchable records under your organisation’s control.',
    'Connect fleet, assets, energy, safety, shifts, inventory and operational activity in one configurable environment. Give teams central visibility and clearer reporting across departments and locations.',
    'Manage the employee lifecycle—from recruitment and onboarding through attendance, leave, payroll and performance—in one connected HR platform. Give HR teams, managers and employees practical self-service tools.',
  ])
  await expect(page.locator('.product-showcase__slide')).toHaveCount(3)

  const memoImages = page.locator('.acc__panel').first().locator('.acc__image-button')
  await memoImages.first().click()
  const gallery = page.getByRole('dialog', { name: 'Product image gallery' })
  await expect(gallery).toBeVisible()
  const activeGallery = gallery.locator('.acc-gallery__product:not([hidden])')
  await expect(activeGallery.locator('.acc-gallery__caption')).toHaveText('Maddy Memo')
  await expect(gallery).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(page.locator('html')).toHaveCSS('overflow', 'hidden')
  const scrollY = await page.evaluate(() => window.scrollY)
  await page.mouse.move(8, (page.viewportSize()?.height ?? 800) / 2)
  await page.mouse.wheel(0, 400)
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(scrollY)
  const image = activeGallery.locator('.acc-gallery__image')
  const imageSizing = await image.evaluate((element) => {
    const frame = element.closest('.acc-gallery__frame')
    if (!frame) throw new Error('Gallery image is missing its frame')
    const imageRect = element.getBoundingClientRect()
    const frameRect = frame.getBoundingClientRect()
    return {
      width: imageRect.width,
      height: imageRect.height,
      frameWidth: frameRect.width,
      frameHeight: frameRect.height,
      maxWidth: getComputedStyle(element).maxWidth,
    }
  })
  expect(imageSizing.width).toBeLessThanOrEqual(imageSizing.frameWidth)
  expect(imageSizing.height).toBeLessThanOrEqual(imageSizing.frameHeight)
  expect(imageSizing.maxWidth).toBe('100%')
  const count = activeGallery.locator('.acc-gallery__count')
  await expect(count).toHaveText('1 / 3')
  await activeGallery.getByRole('button', { name: 'Next image' }).click()
  await expect(count).toHaveText('2 / 3')
  await expect(activeGallery.locator('.acc-gallery__image')).toHaveAttribute('alt', 'Memo Two')
  await activeGallery.getByRole('button', { name: 'Previous image' }).click()
  await expect(count).toHaveText('1 / 3')
  await page.keyboard.press('Escape')
  await expect(gallery).toBeHidden()
  await expect(page.locator('html')).not.toHaveCSS('overflow', 'hidden')
  await expect(memoImages.first()).toBeFocused()
})

test('service cards scroll without resizing and open details below without navigating', async ({
  page,
}) => {
  await gotoReady(page, '/services/cyber-fusion-platform')

  const selectedCard = page.locator('.cat-service-link').first()
  const movingCard = page.locator('.cat-service-link').nth(1)
  const originalUrl = page.url()
  const collapsedSize = await selectedCard.evaluate((card) => {
    const { width, height } = card.getBoundingClientRect()
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    return { width, height, expectedSize: 15 * rootFontSize }
  })
  expect(collapsedSize.width).toBeCloseTo(collapsedSize.expectedSize, 0)
  expect(collapsedSize.height).toBeCloseTo(collapsedSize.expectedSize, 0)

  await selectedCard.click()

  await expect(selectedCard).toHaveAttribute('aria-expanded', 'true')
  const positionAnimations = await movingCard.evaluate(
    (card) => card.parentElement?.getAnimations().length ?? 0,
  )
  expect(positionAnimations).toBeGreaterThan(0)
  const expandedSize = await selectedCard.evaluate((card) => {
    const { width, height } = card.getBoundingClientRect()
    return { width, height }
  })
  expect(expandedSize.width).toBeCloseTo(collapsedSize.width, 0)
  expect(expandedSize.height).toBeCloseTo(collapsedSize.height, 0)
  const links = page.locator('.cat-service-layout.is-selected .cat-service-links')
  const detail = page.locator('.cat-service-detail:not([hidden])')
  await expect(links).toHaveCSS('flex-wrap', 'nowrap')
  if (page.viewportSize()!.width >= 992) {
    await expect(links).toHaveCSS('flex-direction', 'column')
    await expect(links).toHaveCSS('overflow-y', 'auto')
    const linksRight = await links.evaluate((element) => element.getBoundingClientRect().right)
    const detailLeft = await detail.evaluate((element) => element.getBoundingClientRect().left)
    expect(detailLeft).toBeGreaterThan(linksRight)
  } else {
    await expect(links).toHaveCSS('flex-direction', 'row')
    await expect(links).toHaveCSS('overflow-x', 'auto')
    const linksBottom = await links.evaluate((element) => element.getBoundingClientRect().bottom)
    const detailTop = await detail.evaluate((element) => element.getBoundingClientRect().top)
    expect(detailTop).toBeGreaterThan(linksBottom)
  }
  await expect(detail.getByRole('heading', { name: 'Overview' })).toBeVisible()
  await expect(detail.getByRole('heading', { name: 'What we cover' })).toBeVisible()
  await expect(detail.getByRole('heading', { name: 'Capabilities' })).toBeVisible()
  await expect(detail.getByRole('heading', { name: 'What you receive' })).toBeVisible()
  await expect(detail.getByText(/We design, build and maintain SOAR playbooks/)).toBeVisible()
  await expect(detail.locator('.cat-service-detail__content h4').first()).toHaveCSS(
    'letter-spacing',
    'normal',
  )
  await expect(detail.locator('.cat-service-detail__content li').first()).toHaveCSS(
    'margin-top',
    '0px',
  )
  await expect(detail).toHaveCSS('scrollbar-width', 'thin')
  await expect(detail).toBeVisible()
  const detailDimensions = await detail.evaluate((element) => {
    const styles = getComputedStyle(element)
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    return {
      height: element.getBoundingClientRect().height,
      maxHeight: parseFloat(styles.maxHeight),
      expectedMaxHeight: Math.min(34 * rootFontSize, window.innerHeight - 8 * rootFontSize),
      overflowY: styles.overflowY,
    }
  })
  expect(detailDimensions.overflowY).toBe('auto')
  expect(detailDimensions.height).toBeLessThanOrEqual(detailDimensions.expectedMaxHeight)
  expect(detailDimensions.maxHeight).toBeCloseTo(detailDimensions.expectedMaxHeight, 0)
  await expect(page.locator('html')).not.toHaveClass(/is-page-loading/)
  expect(page.url()).toBe(originalUrl)

  await page.keyboard.press('Escape')
  await expect(selectedCard).toHaveAttribute('aria-expanded', 'false')
  await expect(page.locator('.cat-service-detail:not([hidden])')).toHaveCount(0)

  await selectedCard.click()
  await page.locator('.cat-service-detail:not([hidden]) .cat-service-detail__close').click()
  await expect(selectedCard).toBeFocused()
})

test('service category why-it-matters section shows its benefits responsively', async ({
  page,
}) => {
  await gotoReady(page, '/services/cyber-fusion-platform')

  const section = page.locator('.cat-why-matters')
  const benefits = section.locator('.cat-why-matters__item')
  const grid = section.locator('.cat-why-matters__grid')

  await expect(section.getByRole('heading', { name: 'Why it matters' })).toBeVisible()
  await expect(benefits).toHaveCount(4)
  const gridLayout = await grid.evaluate((element) => {
    const styles = getComputedStyle(element)
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    const gap = parseFloat(styles.columnGap)
    const minimumTwoColumnWidth = 2 * 28 * rootFontSize + gap
    return {
      columnCount: styles.gridTemplateColumns.split(' ').length,
      shouldFitTwoColumns: element.getBoundingClientRect().width >= minimumTwoColumnWidth,
    }
  })
  expect(gridLayout.columnCount).toBe(gridLayout.shouldFitTwoColumns ? 2 : 1)
})

test('engagement approach presents its timeline and image responsively', async ({ page }) => {
  await gotoReady(page, '/services/cyber-fusion-platform')

  const section = page.locator('.cat-approach-section')
  const heading = section.getByRole('heading', { name: 'How every engagement runs' })
  const steps = section.locator('.cat-step')
  const picture = section.locator('.cat-approach__picture')

  await expect(heading).toBeVisible()
  await expect(steps).toHaveCount(4)

  if (page.viewportSize()!.width < 992) {
    await expect(picture).toBeHidden()
  } else {
    await expect(picture).toBeVisible()
    const headingBox = await heading.boundingBox()
    const pictureBox = await picture.boundingBox()
    expect(headingBox).not.toBeNull()
    expect(pictureBox).not.toBeNull()
    expect(pictureBox!.x).toBeGreaterThan(headingBox!.x + headingBox!.width)
  }

  await expect(section.locator('svg.cat-approach-section__shape')).toBeVisible()
})
