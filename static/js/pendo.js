const isArmoryEmployeeCS = () => {
  const armoryEmployeeIdentificationCookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('iae'))
    ?.split('=')[1]
  if (!armoryEmployeeIdentificationCookieValue) { return false }
  return armoryEmployeeIdentificationCookieValue.trim() === 'true'
}
(function (apiKey) {
  (function (p, e, n, d, o) {
      var v, w, x, y, z;
      o = p[d] = p[d] || {};
      o._q = o._q || [];
      v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
      for (w = 0, x = v.length; w < x; ++w) (function (m) {
          o[m] = o[m] || function () {
              o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0)));
          };
      })(v[w]);
      y = e.createElement(n);
      y.async = !0;
      y.src = 'https://content.guides.cloud.armory.io/agent/static/' + apiKey + '/pendo.js';
      z = e.getElementsByTagName(n)[0];
      z.parentNode.insertBefore(y, z);
  })(window, document, 'script', 'pendo');
})('dfe1b660-07c8-4f36-798a-997e3fc1e10b');
if (!isArmoryEmployeeCS()) {
  pendo.initialize()
}