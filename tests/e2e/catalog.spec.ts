import { expect, test, type Page } from '@playwright/test'
import {
  categoryPath,
  securityTechnologies,
  serviceCategories,
  servicePages,
  technologyPath,
} from '../../src/content/catalog/index.js'
import { site } from '../../src/content/site.js'
import { technologyNavItems } from '../../src/content/technologyNav.js'
import { gotoReady, isDesktop, openMobileMenu } from './helpers.js'

const technologiesMenu = (page: Page) => page.locator('.navbar .w-dropdown').nth(0)

const cloud = serviceCategories.find((category) => category.slug === 'cloud-security')!
const containerSecurity = servicePages.find((page) =>
  page.path.endsWith('/cloud-security/container-security'),
)!
const securityAssessment = technologyNavItems.find(
  (item) => item.href === '/cybersecurity-services',
)!
const emailSecurity = securityTechnologies.find((item) => item.slug === 'email-security')!

test.describe('services page', () => {
  test('Services is a plain link, not a dropdown', async ({ page }) => {
    await gotoReady(page, '/')
    await openMobileMenu(page)
    const link = page.locator('.navbar .nav-menu > a.nav-link', { hasText: 'Services' })
    await expect(link).toHaveAttribute('href', '/services')
  })

  test('"What we deliver" has a card per practice area that opens its page', async ({ page }) => {
    await gotoReady(page, '/services')
    const cards = page.locator('.svc-coverage')
    await expect(cards).toHaveCount(serviceCategories.length)
    // Title and description only, like the Software products cards.
    await expect(cards.locator('a')).toHaveCount(0)
    const cloudCard = cards.filter({ hasText: cloud.name }).first()
    await expect(cloudCard).toHaveAttribute('href', categoryPath(cloud))
    await cloudCard.scrollIntoViewIfNeeded()
    await cloudCard.click()
    await expect(page).toHaveURL(new RegExp(`${categoryPath(cloud)}$`))
    await expect(page.locator('#services .cat-link')).toHaveCount(cloud.services.length)
  })
})

test.describe('"What we deliver" cards on laptop widths', () => {
  test.skip(({ isMobile }) => isMobile, 'desktop browser only')

  // Long area names wrap to three lines here and used to cover the links.
  for (const width of [1024, 1280]) {
    test(`titles never cover the description at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await gotoReady(page, '/services')
      const covered = await page.evaluate(() =>
        [...document.querySelectorAll('.svc-coverage')]
          .filter((card) => {
            const title = card.querySelector('.svc-coverage__title')!.getBoundingClientRect()
            const text = card.querySelector('p')!.getBoundingClientRect()
            return title.bottom > text.top + 0.5
          })
          .map((card) => card.querySelector('.svc-coverage__title')!.textContent),
      )
      expect(covered).toEqual([])
    })
  }
})

test.describe('technologies dropdown on desktop', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(!isDesktop(testInfo), 'desktop layout only')
    await gotoReady(page, '/')
  })

  test('pointing at a solution opens its technologies inside the dropdown', async ({ page }) => {
    await technologiesMenu(page).locator('.w-dropdown-toggle').hover()
    const row = page.locator('.nav-flyout.has-children').first()
    await expect(row.locator('.nav-flyout__list')).not.toBeInViewport()
    await row.locator('.nav-solution').hover()
    await expect(row).toHaveClass(/is-open/)
    await expect(row.locator('.nav-flyout__link:visible')).toHaveCount(
      securityAssessment.technologies!.length,
    )
    // No counts, arrow buttons or arrow circles beside the items.
    await expect(page.locator('.nav-flyout__toggle, .nav-flyout__count')).toHaveCount(0)
    await expect(technologiesMenu(page).locator('.arrow-fill')).toHaveCount(0)

    await row.locator('.nav-flyout__link', { hasText: emailSecurity.name }).click()
    await expect(page).toHaveURL(new RegExp(`${technologyPath(emailSecurity)}$`))
  })

  test('opening a lower solution never moves the rows above it', async ({ page }) => {
    await technologiesMenu(page).locator('.w-dropdown-toggle').hover()
    const rows = page.locator('.nav-flyout.has-children')
    await rows.nth(0).locator('.nav-solution').hover()
    await expect(rows.nth(0)).toHaveClass(/is-open/)
    await page.waitForTimeout(500) // let the opening animation settle
    const lower = rows.nth(1).locator('.nav-solution')
    const before = await lower.boundingBox()
    await lower.hover()
    await expect(rows.nth(1)).toHaveClass(/is-open/)
    await expect(rows.nth(0)).toHaveClass(/is-open/)
    await page.waitForTimeout(500)
    expect((await lower.boundingBox())!.y).toBeCloseTo(before!.y, 0)
    // Pointing back up closes the ones below.
    await rows.nth(0).locator('.nav-solution').hover()
    await expect(rows.nth(1)).not.toHaveClass(/is-open/)
  })

  test('a technology page highlights Technologies and breadcrumbs its solution', async ({
    page,
  }) => {
    await gotoReady(page, technologyPath(emailSecurity))
    await expect(technologiesMenu(page).locator('.w-dropdown-toggle')).toHaveClass(/w--current/)
    // Its solution starts opened, so the current technology is in view.
    await expect(page.locator('.nav-flyout.has-children').first()).toHaveClass(/is-open/)
    await expect(page.locator('.cat-crumbs a')).toHaveText(['Home', securityAssessment.label])
  })
})

test.describe('technologies dropdown on a phone', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(isDesktop(testInfo), 'phone layout only')
    await gotoReady(page, '/')
    await openMobileMenu(page)
  })

  test('tapping a solution opens its technologies without leaving the page', async ({ page }) => {
    await technologiesMenu(page).locator('.w-dropdown-toggle').tap()
    const row = page.locator('.nav-flyout.has-children').first()
    await row.locator('.nav-solution').tap()
    await expect(row).toHaveClass(/is-open/)
    await expect(page).toHaveURL(/\/$/)
    await expect(page.locator('html')).not.toHaveClass(/is-page-loading/)
    await expect(row.locator('.nav-flyout__overview a')).toHaveAttribute(
      'href',
      securityAssessment.href,
    )
    const link = row.locator('.nav-flyout__link', { hasText: emailSecurity.name })
    await expect(link).toBeVisible()
    await link.tap()
    await expect(page).toHaveURL(new RegExp(`${technologyPath(emailSecurity)}$`))
  })
})

test.describe('catalogue pages @smoke', () => {
  test('a service page links back up its breadcrumb trail', async ({ page }) => {
    await gotoReady(page, containerSecurity.path)
    const crumbs = page.locator('.cat-crumbs a')
    await expect(crumbs).toHaveText(['Home', 'Services', cloud.name])
    await expect(crumbs.nth(2)).toHaveAttribute('href', categoryPath(cloud))
    await expect(page.locator('.cat-card')).toHaveCount(3)
    await expect(page.locator('.cat-checks li')).toHaveCount(4)
  })

  test('a practice area lists all of its services', async ({ page }) => {
    await gotoReady(page, categoryPath(cloud))
    await expect(page.locator('#services .cat-link')).toHaveCount(cloud.services.length)
  })

  test('structured data carries the full breadcrumb and the service', async ({ request }) => {
    const html = await (await request.get(containerSecurity.path)).text()
    const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)![1]!
    const graph = JSON.parse(json)['@graph'] as Record<string, unknown>[]
    const breadcrumb = graph.find((node) => node['@type'] === 'BreadcrumbList') as {
      itemListElement: { name: string; item: string }[]
    }
    expect(breadcrumb.itemListElement.map((item) => item.name)).toEqual([
      'Home',
      'Services',
      cloud.name,
      containerSecurity.service.name,
    ])
    expect(breadcrumb.itemListElement[2]!.item).toBe(`${site.url}${categoryPath(cloud)}`)
    expect(graph.some((node) => node['@type'] === 'Service')).toBe(true)
  })

  test('llms.txt lists every practice area and technology', async ({ request }) => {
    const llms = await (await request.get('/llms.txt')).text()
    for (const category of serviceCategories) expect(llms).toContain(category.name)
    for (const technology of securityTechnologies) {
      expect(llms).toContain(`${site.url}${technologyPath(technology)}`)
    }
  })
})
