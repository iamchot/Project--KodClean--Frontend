
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://iamchot.github.io/Project--KodClean--Frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Project--KodClean--Frontend"
  },
  {
    "renderMode": 2,
    "route": "/Project--KodClean--Frontend/recipes"
  },
  {
    "renderMode": 2,
    "route": "/Project--KodClean--Frontend/favorites"
  },
  {
    "renderMode": 2,
    "route": "/Project--KodClean--Frontend/categories"
  },
  {
    "renderMode": 2,
    "route": "/Project--KodClean--Frontend/contact"
  },
  {
    "renderMode": 2,
    "route": "/Project--KodClean--Frontend/about"
  },
  {
    "renderMode": 2,
    "route": "/Project--KodClean--Frontend/login"
  },
  {
    "renderMode": 2,
    "route": "/Project--KodClean--Frontend/signup"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Project--KodClean--Frontend",
    "route": "/Project--KodClean--Frontend/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 484, hash: '92022bde2a6e8397e1d140ee4fc07306ab6138c911ea5551ef6822630abe03fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 997, hash: '7f3373642636343621f9bd420212a8d70804dd1b42bec7dfebf27e72d79588b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 10273, hash: '774dcc769090d828907f8e600461e4a6d59374a74b44382b779805f958a7d3e3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16233, hash: '5ac11a91e6b7afe0bb8e0bdc39367326539a16fe90a311a2dbaf9fb09bfcc3bb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28019, hash: 'ae9c889a353a76d385f904a3c0cd5be266cefaccd729f1cd7bb21b3beee5db55', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 14750, hash: '5036e90c97679dab05968a5f5d147d02ea4f8837ce225947a72a29b631574f1a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'favorites/index.html': {size: 10289, hash: 'b18703ef4c2740b54725d686a92b3a9fc53d664843b24d0a0aa860f6fe2564e5', text: () => import('./assets-chunks/favorites_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 10292, hash: 'ad9aa82e424c0b7cd5a11808bca00f3d7eeb67fad3cbcb8e2c7eb58c38e775f5', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'recipes/index.html': {size: 20025, hash: '471cc0e36b788549eb90e2ac0c8f48074ce7cd2a3a82b056fcfb1bf32280174c', text: () => import('./assets-chunks/recipes_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 14710, hash: '47b2813af5ff9fc4ed126035d1b303af9ca0b8fa99968e504480b9ccf67f9dd9', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
