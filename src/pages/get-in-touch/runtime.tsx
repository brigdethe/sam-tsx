import { sitePageCode } from '../../content/sitePageCode.js'
import { glassSelectScript, wholeVideoScript } from './content/scripts.js'

export default function PageRuntime() {
  return (
    <>
      <script
        src={'/vendor/jquery.js'}
        type={'text/javascript'}
        integrity={'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0='}
        crossOrigin={'anonymous'}
      ></script>
      <script src={'/vendor/webflow.js'} type={'text/javascript'}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[4] }} />
      <script dangerouslySetInnerHTML={{ __html: glassSelectScript }} />
      <script dangerouslySetInnerHTML={{ __html: wholeVideoScript }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  var form = document.getElementById('email-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var data = new FormData(form);
    var lines = [];
    data.forEach(function (value, key) {
      if (String(value).trim()) lines.push(key + ': ' + value);
    });
    var body = lines.join('\\n');
    var subject = encodeURIComponent('Website enquiry from ' + (data.get('name') || 'Maddy Group site'));
    window.location.href = 'mailto:info@maddygroupltd.com?subject=' + subject + '&body=' + encodeURIComponent(body);
    var done = form.parentElement && form.parentElement.querySelector('.w-form-done');
    var fail = form.parentElement && form.parentElement.querySelector('.w-form-fail');
    if (done) {
      form.style.display = 'none';
      done.style.display = 'block';
    }
    if (fail) fail.style.display = 'none';
  });
})();
`,
        }}
      />
    </>
  )
}
