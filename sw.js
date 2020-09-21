const version = "df3a3d3";
const currentCacheName = `ELCWEB-${version}`;
const filesToCache = [
    "/?v=25627ab",
    "/about/?v=cb674ba",
    "/archives/?v=1f1c61d",
    "/author/ezequiel-leonardo-castano/?v=975d41d",
    "/author/ezequiel-leonardo-castano/page/2/?v=9f221b8",
    "/authors/?v=b117da2",
    "/blog/iframes/elevator-simulation/simulation-anylogic-iframe.html?v=645b6f6",
    "/blog/iframes/frro-io/lp-2-variables-iframe.html?v=324de80",
    "/blog/iframes/ode-python/foxes-rabbits-iframe.html?v=b178cb9",
    "/blog/iframes/ode-python/home-economy-iframe.html?v=bcbd939",
    "/blog/iframes/ode-python/houses-air_conditioning-iframe.html?v=2da684b",
    "/blog/iframes/ode-python/stock-control-iframe.html?v=ea9e9bb",
    "/blog/iframes/ode-python/useful-life-iframe.html?v=52f331e",
    "/blog/iframes/times-tables/times-table-factor-by-factor-colored-iframe.html?v=73783b7",
    "/blog/iframes/times-tables/times-table-factor-by-factor-iframe.html?v=0fdabf9",
    "/blog/iframes/times-tables/times-table-line-by-line-iframe.html?v=0bcee67",
    "/blog/iframes/times-tables/times-table-parametric-iframe.html?v=66c19e8",
    "/blog/iframes/times-tables/times-table-point-by-point-iframe.html?v=17f7257",
    "/blog/images/chapter-1-1.svg?v=15e9bac",
    "/blog/images/elevator-simulation/elevator-simulation-headerimage-thumbnail.png?v=eb992f2",
    "/blog/images/elevator-simulation/elevator-state-machine-thumbnail.jpg?v=4bdcc71",
    "/blog/images/elevator-simulation/floor-distribution-thumbnail.png?v=b81fd32",
    "/blog/images/elevator-simulation/pedestrian-state-machine-thumbnail.jpg?v=f1bf9b7",
    "/blog/images/elevator-simulation/simulation-part1-thumbnail.jpg?v=1824960",
    "/blog/images/elevator-simulation/simulation-part2-thumbnail.jpg?v=435fc9c",
    "/blog/images/elevator-simulation/simulation-part3-thumbnail.jpg?v=44f5ce9",
    "/blog/images/elevator-simulation/simulation-part4-thumbnail.jpg?v=568e8b6",
    "/blog/images/elevator-simulation/simulation-part5-thumbnail.jpg?v=99e4307",
    "/blog/images/elevator-simulation/simulation-part6-thumbnail.jpg?v=1e01823",
    "/blog/images/elevator-simulation/simulation-part7-thumbnail.jpg?v=2ddede7",
    "/blog/images/elevator-simulation/stats-01-thumbnail.png?v=83a0700",
    "/blog/images/elevator-simulation/stats-02-thumbnail.png?v=cb04f95",
    "/blog/images/elevator-simulation/stats-03-thumbnail.png?v=374f0aa",
    "/blog/images/elevator-simulation/stats-04-thumbnail.png?v=bc85fec",
    "/blog/images/elevator-simulation/stats-05-thumbnail.png?v=e6db0f7",
    "/blog/images/elevator-simulation/student-behavior-thumbnail.jpg?v=2ab987c",
    "/blog/images/embed_interactive_notebooks/embed-interactive-notebooks_headerimage-thumbnail.png?v=3a9f063",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_01-thumbnail.png?v=ed465b9",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_02-thumbnail.png?v=1d53e12",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_03-thumbnail.png?v=e3d1691",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_04-thumbnail.png?v=39e65f8",
    "/blog/images/embed_interactive_notebooks/mybinder_tutorial_01-thumbnail.png?v=c53ef85",
    "/blog/images/embed_interactive_notebooks/mybinder_tutorial_02-thumbnail.png?v=aad8e7d",
    "/blog/images/embed_interactive_notebooks/mybinder_tutorial_03-thumbnail.png?v=185f757",
    "/blog/images/fast-colab-deep-learning/colab-edit-thumbnail.png?v=cc84f71",
    "/blog/images/fast-colab-deep-learning/colab-gpu-thumbnail.png?v=5fa810c",
    "/blog/images/fast-colab-deep-learning/data-science-tools-thumbnail.png?v=922f6ff",
    "/blog/images/fast-colab-deep-learning/fast-colab-deep-learning_headerimage-thumbnail.png?v=9b2e8f3",
    "/blog/images/fast-colab-deep-learning/gartnet-2017-thumbnail.jpg?v=202500d",
    "/blog/images/fast-colab-deep-learning/neural-networks-types-thumbnail.png?v=1575946",
    "/blog/images/fast-colab-deep-learning/sklearn-roadmap-thumbnail.png?v=7a9952c",
    "/blog/images/flask_pyinstaller/flask-pyinstaller_headerimage-thumbnail.png?v=e7fae8c",
    "/blog/images/fractals/factals_headerimage-thumbnail.png?v=9edd09c",
    "/blog/images/git-guide-with-visual-interface/git-guide-with-visual-interface-headerimage-thumbnail.png?v=f264a2b",
    "/blog/images/git-guide-with-visual-interface/image_0-thumbnail.png?v=396c669",
    "/blog/images/git-guide-with-visual-interface/image_1-thumbnail.png?v=39897ab",
    "/blog/images/git-guide-with-visual-interface/image_10-thumbnail.png?v=c5c4ac3",
    "/blog/images/git-guide-with-visual-interface/image_11-thumbnail.png?v=0e42884",
    "/blog/images/git-guide-with-visual-interface/image_12-thumbnail.png?v=ab5d7ac",
    "/blog/images/git-guide-with-visual-interface/image_13-thumbnail.png?v=c5cc1c6",
    "/blog/images/git-guide-with-visual-interface/image_14-thumbnail.png?v=a8fd6d0",
    "/blog/images/git-guide-with-visual-interface/image_15-thumbnail.png?v=76a2d94",
    "/blog/images/git-guide-with-visual-interface/image_16-thumbnail.png?v=9f0a5ac",
    "/blog/images/git-guide-with-visual-interface/image_17-thumbnail.png?v=74909a1",
    "/blog/images/git-guide-with-visual-interface/image_18-thumbnail.png?v=08440ec",
    "/blog/images/git-guide-with-visual-interface/image_19-thumbnail.png?v=405eee1",
    "/blog/images/git-guide-with-visual-interface/image_2-thumbnail.png?v=8d2b211",
    "/blog/images/git-guide-with-visual-interface/image_20-thumbnail.png?v=3e644d7",
    "/blog/images/git-guide-with-visual-interface/image_21-en-thumbnail.png?v=ff4e983",
    "/blog/images/git-guide-with-visual-interface/image_21-thumbnail.png?v=ea30aa7",
    "/blog/images/git-guide-with-visual-interface/image_22-thumbnail.png?v=46caa48",
    "/blog/images/git-guide-with-visual-interface/image_23-thumbnail.png?v=3386159",
    "/blog/images/git-guide-with-visual-interface/image_24-en-thumbnail.png?v=a6ab32a",
    "/blog/images/git-guide-with-visual-interface/image_24-thumbnail.png?v=58a1ad2",
    "/blog/images/git-guide-with-visual-interface/image_25-thumbnail.png?v=e5804de",
    "/blog/images/git-guide-with-visual-interface/image_26-thumbnail.png?v=c4e103c",
    "/blog/images/git-guide-with-visual-interface/image_27-thumbnail.png?v=a021029",
    "/blog/images/git-guide-with-visual-interface/image_28-thumbnail.png?v=5f4c3d3",
    "/blog/images/git-guide-with-visual-interface/image_29-thumbnail.png?v=3195412",
    "/blog/images/git-guide-with-visual-interface/image_3-thumbnail.png?v=a84eef3",
    "/blog/images/git-guide-with-visual-interface/image_30-thumbnail.png?v=d5137e5",
    "/blog/images/git-guide-with-visual-interface/image_31-thumbnail.png?v=8e034f7",
    "/blog/images/git-guide-with-visual-interface/image_32-thumbnail.png?v=6b114cc",
    "/blog/images/git-guide-with-visual-interface/image_33-thumbnail.png?v=f1caeb7",
    "/blog/images/git-guide-with-visual-interface/image_34-thumbnail.png?v=ad2391d",
    "/blog/images/git-guide-with-visual-interface/image_35-thumbnail.png?v=af098a6",
    "/blog/images/git-guide-with-visual-interface/image_36-thumbnail.png?v=7c0a064",
    "/blog/images/git-guide-with-visual-interface/image_37-thumbnail.png?v=b0a93ad",
    "/blog/images/git-guide-with-visual-interface/image_38-thumbnail.png?v=ed2bf32",
    "/blog/images/git-guide-with-visual-interface/image_39-thumbnail.png?v=8ba15a7",
    "/blog/images/git-guide-with-visual-interface/image_4-thumbnail.png?v=cd9aff7",
    "/blog/images/git-guide-with-visual-interface/image_40-thumbnail.png?v=28afa95",
    "/blog/images/git-guide-with-visual-interface/image_41-thumbnail.png?v=f128100",
    "/blog/images/git-guide-with-visual-interface/image_42-thumbnail.png?v=6588dac",
    "/blog/images/git-guide-with-visual-interface/image_43-thumbnail.png?v=e96ee9f",
    "/blog/images/git-guide-with-visual-interface/image_44-thumbnail.png?v=8938b78",
    "/blog/images/git-guide-with-visual-interface/image_45-thumbnail.png?v=bd84187",
    "/blog/images/git-guide-with-visual-interface/image_46-thumbnail.png?v=216158e",
    "/blog/images/git-guide-with-visual-interface/image_47-thumbnail.png?v=db7003f",
    "/blog/images/git-guide-with-visual-interface/image_48-thumbnail.png?v=3ca14eb",
    "/blog/images/git-guide-with-visual-interface/image_49-thumbnail.png?v=d6548af",
    "/blog/images/git-guide-with-visual-interface/image_5-thumbnail.png?v=02f6ea5",
    "/blog/images/git-guide-with-visual-interface/image_50-thumbnail.png?v=dca60d7",
    "/blog/images/git-guide-with-visual-interface/image_51-thumbnail.png?v=d670afe",
    "/blog/images/git-guide-with-visual-interface/image_52-thumbnail.png?v=7c32d5e",
    "/blog/images/git-guide-with-visual-interface/image_53-thumbnail.png?v=1cea4a4",
    "/blog/images/git-guide-with-visual-interface/image_54-thumbnail.png?v=81883a1",
    "/blog/images/git-guide-with-visual-interface/image_55-thumbnail.png?v=0b1356f",
    "/blog/images/git-guide-with-visual-interface/image_56-thumbnail.png?v=1a5b993",
    "/blog/images/git-guide-with-visual-interface/image_57-thumbnail.png?v=696a6ed",
    "/blog/images/git-guide-with-visual-interface/image_58-thumbnail.png?v=6b11622",
    "/blog/images/git-guide-with-visual-interface/image_59-thumbnail.png?v=e63d5a9",
    "/blog/images/git-guide-with-visual-interface/image_6-thumbnail.png?v=6ff1fe8",
    "/blog/images/git-guide-with-visual-interface/image_60-thumbnail.png?v=296cfa4",
    "/blog/images/git-guide-with-visual-interface/image_61-thumbnail.png?v=23d8b46",
    "/blog/images/git-guide-with-visual-interface/image_7-thumbnail.png?v=1ce9b4d",
    "/blog/images/git-guide-with-visual-interface/image_8-thumbnail.png?v=bcb90f5",
    "/blog/images/git-guide-with-visual-interface/image_9-thumbnail.png?v=f338904",
    "/blog/images/haskell_python/haskell_python_headerimage-thumbnail.png?v=6e09b03",
    "/blog/images/juegos-biblicos/arma_la_historia_01-thumbnail.jpg?v=752714d",
    "/blog/images/juegos-biblicos/conoce_la_historia_01-thumbnail.jpg?v=8e14611",
    "/blog/images/juegos-biblicos/descargar_tutorial_01-thumbnail.png?v=ddced0a",
    "/blog/images/juegos-biblicos/descargar_tutorial_02-thumbnail.png?v=58ced86",
    "/blog/images/juegos-biblicos/espadeo_01-thumbnail.jpg?v=e0808e7",
    "/blog/images/juegos-biblicos/espadeo_02-thumbnail.jpg?v=8e7b008",
    "/blog/images/juegos-biblicos/espadeo_03-thumbnail.jpg?v=e650eaf",
    "/blog/images/juegos-biblicos/memo_paralelo_01-thumbnail.jpg?v=910df86",
    "/blog/images/juegos-biblicos/memo_paralelo_02-thumbnail.jpg?v=0391008",
    "/blog/images/juegos-biblicos/tabu_biblico_01-thumbnail.jpg?v=5a3bcff",
    "/blog/images/juegos-biblicos/trivia_adolescentes_01-thumbnail.jpg?v=e732239",
    "/blog/images/ode-python/ordinary-differential-equations-with-python-headerimage-thumbnail.png?v=fae4fd2",
    "/blog/images/online-lyrics/online-lyrics-headerimage-thumbnail.png?v=c1ae18d",
    "/blog/images/online-lyrics/tutorial-thumbnail.png?v=68afe83",
    "/blog/images/times_tables/times-tables-2-100-thumbnail.png?v=e90673c",
    "/blog/images/times_tables/times-tables-headerimage-thumbnail.png?v=3df5cb0",
    "/categories/?v=daf2928",
    "/category/christianity/?v=10f0757",
    "/category/data-visualization/?v=094051a",
    "/category/programming/?v=ea5b9d1",
    "/category/simulation/?v=01a46cc",
    "/category/software-engineer/?v=9470a17",
    "/cv-ref/?v=a735f92",
    "/cv/?v=3423ba0",
    "/drafts/bayesian-roadmap.html?v=71bdf4d",
    "/drafts/my-super-post2.html?v=5ac41bc",
    "/drafts/pelican-mega-tutorial-part-1.html?v=f119f6a",
    "/drafts/probability-world.html?v=d9ed415",
    "/extra/browserconfig.xml?v=8dbb903",
    "/extra/sw_template.js?v=4cee959",
    "/favicon.ico?v=b758f8a",
    "/feeds/all-en.atom.xml?v=b25e6b5",
    "/feeds/all-es.atom.xml?v=97e2dc6",
    "/feeds/all.atom.xml?v=21d02a7",
    "/feeds/ezequiel-leonardo-castano.atom.xml?v=12c0b6d",
    "/feeds/ezequiel-leonardo-castano.rss.xml?v=6400c9c",
    "/interactive-optimization/?v=96d5bf6",
    "/interactive-optimization/basic.js?v=3786385",
    "/interactive-optimization/media_image.png?v=7811da3",
    "/interactive-optimization/nerdamer.js?v=0d3c62a",
    "/interactive-optimization/style.css?v=fe03bd7",
    "/jupyter-map/?v=f721598",
    "/jupyter-map/mapbox.js?v=5474e2e",
    "/jupyter-map/media_image.png?v=2a6bce4",
    "/jupyter-map/style.css?v=1807bc2",
    "/link/CONAIISI2018/?v=f80db09",
    "/link/EMSS-Code/?v=97da644",
    "/link/EMSS-Dataset/?v=058f7da",
    "/link/EMSS-Paper/?v=ec591e8",
    "/link/EMSS-Slides/?v=37d4483",
    "/link/arma-historia-pdf/?v=f910eb5",
    "/link/arma-historia/?v=232700b",
    "/link/certificate-dlr/?v=9d81a25",
    "/link/certificate-iot/?v=9ddce5e",
    "/link/certificate-probabilistic/?v=e4827de",
    "/link/conoce-historia-pdf/?v=6edab1a",
    "/link/conoce-historia/?v=a6b3fc7",
    "/link/cv-ref/?v=a735f92",
    "/link/cv/?v=3423ba0",
    "/link/elevator-simulation/?v=ef8b88e",
    "/link/espadeo-biblico-pdf/?v=657e58c",
    "/link/espadeo-biblico/?v=bb5bd60",
    "/link/genetic_algorithm_repo/?v=04134a6",
    "/link/github/?v=4bc6a23",
    "/link/lyrics_presentation/?v=51b4079",
    "/link/memo-paralelo-pdf/?v=2ecbd05",
    "/link/memo-paralelo/?v=3264f1f",
    "/link/ode_python_binder/?v=41c7cfe",
    "/link/ode_python_gist/?v=486ebdb",
    "/link/pascal_triangle_binder/?v=92900ba",
    "/link/pascal_triangle_gist/?v=7504945",
    "/link/portfolio/?v=fe6d4ce",
    "/link/pyfladesk_repo/?v=a67778a",
    "/link/research/?v=a28eabb",
    "/link/scholar/?v=97cda8d",
    "/link/simulation-model/?v=bf3dae2",
    "/link/soporte-jupyter/?v=e0e1102",
    "/link/tabu-biblico-pdf/?v=8c5fa4b",
    "/link/tabu-biblico-web/?v=fc3cef8",
    "/link/tabu-biblico/?v=e1cb99e",
    "/link/times_table_binder/?v=6d6d64f",
    "/link/trivia-adolescente-pdf/?v=e1cfac3",
    "/link/trivia-adolescente/?v=213af7f",
    "/link/vias/?v=6611b95",
    "/localization.ini?v=a4513c4",
    "/lyrics-presentation/?v=b176d15",
    "/lyrics-presentation/lang.ini?v=96c6a00",
    "/lyrics-presentation/media_image.png?v=58fec9a",
    "/lyrics-presentation/pptx.js?v=3e1f16d",
    "/lyrics-presentation/webl10n.min.js?v=76d86ac",
    "/page/2/?v=91aa76c",
    "/portfolio/?v=fe6d4ce",
    "/posts/2018/?v=2f6538e",
    "/posts/2018/Dec/?v=17e7e1c",
    "/posts/2018/Feb/?v=be18b95",
    "/posts/2018/Nov/?v=98430ef",
    "/posts/2018/Sep/?v=184acc9",
    "/posts/2019/?v=5c7fb6f",
    "/posts/2019/Apr/?v=8ef2b8f",
    "/posts/2019/Jan/?v=5d1a0bb",
    "/posts/2019/May/?v=acdce60",
    "/posts/embed-interactive-notebooks/?v=b8d12aa",
    "/posts/executable-flask-pyinstaller/?v=b0a8648",
    "/posts/fastai-colab-deep-learning/?v=9ff1708",
    "/posts/git-guide-with-visual-interface/?v=76cd30f",
    "/posts/git-guide-with-visual-interface/es/?v=2a5cdb9",
    "/posts/haskell-pattern-matching-in-python/?v=2d84e77",
    "/posts/juegos-biblicos/es/?v=a06c8cf",
    "/posts/multi-floor-elevator-simulation-anylogic/?v=29f18e7",
    "/posts/online-lyrics-presentation-generator/?v=8d2d351",
    "/posts/online-lyrics-presentation-generator/es/?v=decd71e",
    "/posts/ordinary-differential-equations-with-python/?v=01da197",
    "/posts/pascal-triangle-vs-genetic-algorithm/?v=48f250f",
    "/posts/plotting-fractals-step-by-step-with-python/?v=da12151",
    "/posts/plotting-fractals-step-by-step-with-python/es/?v=df7700b",
    "/posts/times-tables/?v=c6958ca",
    "/projects/?v=1aa205f",
    "/publications.html?v=7d6c003",
    "/python-course/?v=14574e3",
    "/research/?v=a28eabb",
    "/safari-pinned-tab.svg?v=4686042",
    "/site.webmanifest?v=7ba4ab1",
    "/sitemap.xml?v=b451389",
    "/tabubiblico/?v=4d48021",
    "/tabubiblico/android-chrome-192x192.png?v=26f8443",
    "/tabubiblico/android-chrome-384x384.png?v=cedeeac",
    "/tabubiblico/apple-touch-icon.png?v=14da187",
    "/tabubiblico/browserconfig.xml?v=509403d",
    "/tabubiblico/css/app.546a4c6b.css?v=31dfda4",
    "/tabubiblico/favicon-16x16.png?v=3735aab",
    "/tabubiblico/favicon-32x32.png?v=60a75b6",
    "/tabubiblico/favicon.ico?v=f5e3666",
    "/tabubiblico/img/check-blk.75f8de22.svg?v=5c594e9",
    "/tabubiblico/img/check.007e9b2e.svg?v=7e51d0a",
    "/tabubiblico/img/checkmark.0240896d.svg?v=49bf7e6",
    "/tabubiblico/img/cross-blk.87dd3042.svg?v=b15117a",
    "/tabubiblico/img/cross.50a0158e.svg?v=da1df8e",
    "/tabubiblico/js/app.d81ec319.js.map?v=19b4c68",
    "/tabubiblico/js/app.d81ec319.js?v=9ee4eba",
    "/tabubiblico/js/chunk-vendors.9fef5d3b.js.map?v=7fd689a",
    "/tabubiblico/js/chunk-vendors.9fef5d3b.js?v=392c51a",
    "/tabubiblico/mstile-150x150.png?v=15511f5",
    "/tabubiblico/safari-pinned-tab.svg?v=01b6b70",
    "/tabubiblico/site.webmanifest?v=0d9ee1e",
    "/tabubiblico/social.png?v=ec5da6e",
    "/tabubiblico/social_large.png?v=3fc00c6",
    "/tag/bible/?v=84bde2d",
    "/tag/christian/?v=a0a5513",
    "/tag/data-visualization/?v=ebcbc6f",
    "/tag/deep-learning/?v=1e50e69",
    "/tag/fastai/?v=ae9ad23",
    "/tag/flask/?v=cd5e6fe",
    "/tag/fractals/?v=5295f3b",
    "/tag/games/?v=0e16e33",
    "/tag/git/?v=3a72ce8",
    "/tag/gitkraken/?v=3e3713e",
    "/tag/gui/?v=0eb24a7",
    "/tag/haskell/?v=23ccf11",
    "/tag/jupyter/?v=2fdc0ed",
    "/tag/math/?v=45450a2",
    "/tag/nbinteract/?v=c107ef1",
    "/tag/pelican/?v=5ec05c8",
    "/tag/probability/?v=a099f2c",
    "/tag/programming/?v=dc870d0",
    "/tag/publishing/?v=dde664c",
    "/tag/pyinstaller/?v=970a671",
    "/tag/python/?v=1d10dcd",
    "/tag/simulation/?v=5c8146a",
    "/tag/tuple-unpacking/?v=0e3a3b2",
    "/tag/turtle/?v=87c8a19",
    "/tag/tutorial/?v=7bd9b49",
    "/tag/webapp/?v=7b97014",
    "/tags/?v=7ea8fb3",
    "/theme/css/style.css?v=7cb1693",
    "/theme/images/DOC.svg?v=5d41948",
    "/theme/images/Jupyter.svg?v=056bcc4",
    "/theme/images/PDF.svg?v=872b33e",
    "/theme/images/RevealJS.svg?v=eb946c8",
    "/theme/js/scripts.js?v=29380c0"
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCacheName)
      .then(cache => cache.addAll(filesToCache))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => cacheNames.filter(cacheName => ! currentCacheName.includes(cacheName) ))
      .then(cachesToDelete => Promise.all(cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete))))
      .then(self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  const scope = self.registration.scope;
  
	if (!url.startsWith(scope)) {
		return;
  }

  event.respondWith(
    caches.open(currentCacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}) )
      .then(response => response || fetch(event.request) )
  );
});
