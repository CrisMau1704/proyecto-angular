
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/CrisMau1704/proyecto-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/CrisMau1704/proyecto-angular"
  },
  {
    "renderMode": 2,
    "route": "/CrisMau1704/proyecto-angular/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7771, hash: 'f6ac155cb095b6baf1da5ab7067e32ce630fe7f1fbd6f6d4b3e47f7d3ccfb226', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8290, hash: 'f334b667dc73017cceb800963515b871329268a60e9280905f7c65a94be7cd22', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 15142, hash: '09c3cb0469f50eb8cb66cb6853aeaf46b9f18e8d9b8df739f3b6f7cf2fd3caa9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 21021, hash: '3c2dc4a7df13ae95bdca8fc8d85b7be6590e3eb0f0431de31d78db25abc36aff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
