
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/EmurguiaPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/EmurguiaPortfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/EmurguiaPortfolio/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/EmurguiaPortfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/EmurguiaPortfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/EmurguiaPortfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5115, hash: 'bc841c3069fd22aff54fe7abeb681884e449672b67d106ac241892e700b9ad8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: 'b122134d5e92f7072fb9c0c3560557e994b996fbc13eb71e4402e9c58abc8b19', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 31943, hash: '62a0aa852fc98de6a763162bf6fe2a91a5f8da444a4d7461fa0a98cfd49bad99', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11675, hash: 'af3a05cf788016cf9ce29105d9e5f2072ef9a2e3b8719c9efc1e854475b134c7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 17017, hash: '8de4a0046f48c94e22a821f6fde6b2ad1960bc77090b9956a22040cb6603f618', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 24097, hash: '9efb75985f7401ea8cae5c5cf19dc86b3d9c8517c170a0b91d0e52492b3017d3', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-O26SLNDE.css': {size: 249769, hash: 'rmeR5FWfErw', text: () => import('./assets-chunks/styles-O26SLNDE_css.mjs').then(m => m.default)}
  },
};
