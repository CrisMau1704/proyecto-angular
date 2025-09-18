
export default {
  basePath: 'https://github.com/CrisMau1704/proyecto-angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
