
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://CrisMau1704.github.io/proyecto-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/proyecto-angular"
  },
  {
    "renderMode": 2,
    "route": "/proyecto-angular/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7770, hash: '9dbbf137813951486951d1391fdbaa42a81086508a25d8de20e50472724b8811', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8289, hash: '9fd675538875b293f2b70aca8643ba4577e52f6c97115a5380d99038595931cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21020, hash: '5c39c853fff0d21e94976ab214926e9a94e7f19473025f43a97a6f303b43f256', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 15141, hash: '11dfa91f5953e1af10b859d4aa89213145e88f43826dfa1f5ad790f4efd15254', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
