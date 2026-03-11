import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/arxiv-review/',
  srcDir: 'src',
  title: "arXiv review",
  description: "物性物理・計算物質科学・マテリアルズインフォマティクス",
    
  lang: 'ja-JP',

  lastUpdated: {
    text: '最終更新',
    formatOptions: { dateStyle: 'short', timeStyle: 'medium' }
  },

  cleanUrls: true,

  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },

  head: [
    
    ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WX6PN5RH');`
    ],

    ["link", { rel: "icon", href: "https://rd070672.github.io/arxiv-review/images/favicon.png" }],
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'
    }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'arXiv review ' }],
    ["meta", { property: "og:image", content: "https://rd070672.github.io/arxiv-review/images/top.jpg" }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    ["meta", { property: "twitter:card", content: "summary" }],
    ["meta", { property: "twitter:site", content: "@arXiv-review"}],
    ["meta", { property: "twitter:title", content: "arXiv-review"}],
    ["meta", { property: "twitter:description", content: "物性物理・計算科学・マテリアルズインフォマティクス"}],
    ["meta", { property: "twitter:image", content: "https://rd070672.github.io/arxiv-review/images/top.jpg" }]
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // search: {
    //   provider: 'local'
    // },
    search: { provider: 'local' },

    returnToTopLabel: 'Return to top',

    // editLink: {
    //   pattern: 'https://github.com/rd070672/arxiv-review/edit/main/src/:path',
    //   text: 'Edit this page on GitHub'
    // },

    nav: [
      { text: 'ホーム', link: '/' },
      { text: '物性物理', link: '/#物性物理' },
      { text: '計算物質科学', link: '/#計算物質科学' },
      { text: 'マテリアルズ・インフォマティクス', link: '/#マテリアルズ・インフォマティクス'},
      { text: 'その他', items: [
        { text: 'About', link: '/about' },
        { text: 'Changelog', link: '/changelog' },
        { text: 'Website', link: '/#' },
        { text: 'Github', link: 'https://github.com/rd070672/arxiv-review' },
      ]},
    ],

    sidebar: [
      { text: 'arXiv review', collapsed: false, items: [

        { text: '物性物理', collapsed: false, items: [
          { text: '2026-03-08', link: '/phys/2026-03-08' },
          { text: '2026-03-09', link: '/phys/2026-03-09' },
          { text: '2026-03-10', link: '/phys/2026-03-10' },
        ]},

        { text: '計算物質科学', collapsed: false, items: [
          { text: '2026-03-10', link: '/calc/2026-03-10' },
          { text: '2026-03-11', link: '/calc/2026-03-11' },
        ]},

        { text: 'マテリアルズ・インフォマティクス', collapsed: false, items: [
          { text: '2026-03-10', link: '/mi/2026-03-10' },
        ]},
        
        { text: 'テスト', collapsed: false, items: [
          { text: '2026-03-08_1', link: '/arxiv/2026-03-08_1' },
          { text: '2026-03-08_2', link: '/arxiv/2026-03-08_2' },
          { text: '2026-03-08_3', link: '/arxiv/2026-03-08_3' },
          { text: '2026-03-08', link: '/arxiv/2026-03-08' },
          { text: '2026-03-09', link: '/arxiv/2026-03-09' },
          { text: '2026-03-09_1', link: '/arxiv/2026-03-09_1' },
          { text: '2026-03-10', link: '/arxiv/2026-03-10' },
        ]},

      ]},

      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Changelog', link: '/changelog' },
      // { text: 'Website', link: 'https://antimeron.com' },
      // { text: 'Github', link: 'https://github.com/rd070672/arxiv-review' },
    ],

    socialLinks: [
      { icon: 'x', link: '/' },
      { icon: 'github', link: '/' }
    ],

    footer: {
      copyright: '© 2026 - arXiv review',
    },
  },

  // https://vitepress.dev/guide/extending-default-theme#overriding-internal-components
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHome.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBarHamburger\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNavBarHamburger.vue', import.meta.url)
          )
        }

      ]
    },
    ssr: {
      noExternal: ['katex']
    }
  }
})
