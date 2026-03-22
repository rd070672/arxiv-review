import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/arxiv-review/',
  srcDir: 'src',
  title: "arXiv review",
  description: "物性物理・計算材料科学・マテリアルズ・インフォマティクス",
    
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
      })(window,document,'script','dataLayer','GTM-M9BP5Z66');`
    ],

    ["link", { rel: "icon", href: "https://rd070672.github.io/arxiv-review/images/favicon.png" }],
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'
    }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'arXiv review ' }],
    ["meta", { property: "og:image", content: "https://rd070672.github.io/arxiv-review/images/back.jpg" }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    // ["meta", { property: "twitter:card", content: "summary" }],
    // ["meta", { property: "twitter:site", content: "@arXiv-review"}],
    // ["meta", { property: "twitter:title", content: "arXiv-review"}],
    // ["meta", { property: "twitter:description", content: "物性物理・計算材料科学・マテリアルズ・インフォマティクス"}],
    // ["meta", { property: "twitter:image", content: "https://rd070672.github.io/arxiv-review/images/top.jpg" }]
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
      { text: '物性物理', link: '/#物性物理に関する論文' },
      { text: '計算材料科学', link: '/#計算材料科学に関する論文' },
      { text: 'マテリアルズ・インフォマティクス', link: '/#マテリアルズ・インフォマティクスに関する論文' },
      { text: '放射光実験', link: '/#放射光実験に関する論文' },
      { text: '量子機能デバイス', link: '/#量子機能デバイスに関する論文' },

      { text: 'その他', items: [
        { text: 'About', link: '/about' },
        { text: 'Changelog', link: '/changelog' },
        { text: 'Website', link: '/#' },
        { text: 'Github', link: 'https://github.com/rd070672/arxiv-review' },
      ]},
    ],

    sidebar: [
      { text: 'arXiv review', collapsed: false, items: [

        { text: '2026-03-08-物性物理', link: '/phys/2026-03-08' },
        { text: '2026-03-09-物性物理', link: '/phys/2026-03-09' },
        { text: '2026-03-10-物性物理', link: '/phys/2026-03-10' },
        { text: '2026-03-10-計算材料科学', link: '/calc/2026-03-10' },
        { text: '2026-03-10-マテインフォ', link: '/mi/2026-03-10' },
        { text: '2026-03-11-物性物理', link: '/phys/2026-03-11' },
        { text: '2026-03-11-計算材料科学', link: '/calc/2026-03-11' },
        { text: '2026-03-11-マテインフォ', link: '/mi/2026-03-11' },
        { text: '2026-03-12-計算材料科学', link: '/calc/2026-03-12' },
        { text: '2026-03-12-マテインフォ', link: '/mi/2026-03-12' },
        { text: '2026-03-14-計算材料科学', link: '/calc/2026-03-14' },
        { text: '2026-03-14-マテインフォ', link: '/mi/2026-03-14' },
        { text: '2026-03-15-物性物理', link: '/phys/2026-03-15' },
        { text: '2026-03-15-計算材料科学', link: '/calc/2026-03-15' },
        { text: '2026-03-15-マテインフォ', link: '/mi/2026-03-15' },
        { text: '2026-03-16-物性物理', link: '/phys/2026-03-16' },
        { text: '2026-03-16-計算材料科学', link: '/calc/2026-03-16' },
        { text: '2026-03-16-マテインフォ', link: '/mi/2026-03-16' },
        { text: '2026-03-17-物性物理', link: '/phys/2026-03-17' },
        { text: '2026-03-17-計算材料科学', link: '/calc/2026-03-17' },
        { text: '2026-03-17_1-計算材料科学', link: '/calc/2026-03-17_1' },
        { text: '2026-03-17-マテインフォ', link: '/mi/2026-03-17' },
        { text: '2026-03-18-物性物理', link: '/phys/2026-03-18' },
        { text: '2026-03-18-計算材料科学', link: '/calc/2026-03-18' },
        { text: '2026-03-18-マテインフォ', link: '/mi/2026-03-18' },
        { text: '2026-03-18-放射光実験', link: '/beam/2026-03-18' },
        { text: '2026-03-19-物性物理', link: '/phys/2026-03-19' },
        { text: '2026-03-19-計算材料科学', link: '/calc/2026-03-19' },
        { text: '2026-03-19-マテインフォ', link: '/mi/2026-03-19' },
        { text: '2026-03-19-放射光実験', link: '/beam/2026-03-19' },
        { text: '2026-03-19-量子機能デバイス', link: '/quantum/2026-03-19' },
        { text: '2026-03-20-量子機能デバイス', link: '/quantum/2026-03-20' },
        { text: '2026-03-21-物性物理', link: '/phys/2026-03-21' },
        { text: '2026-03-21-計算材料科学', link: '/calc/2026-03-21' },
        { text: '2026-03-21-マテインフォ', link: '/mi/2026-03-21' },
        { text: '2026-03-21-放射光実験', link: '/beam/2026-03-21' },
        { text: '2026-03-21-量子機能デバイス', link: '/quantum/2026-03-21' },
        { text: '2026-03-21-材料工学', link: '/eng/2026-03-21' },
        { text: '2026-03-22-量子機能デバイス', link: '/quantum/2026-03-22' },
        { text: '2026-03-22-材料工学', link: '/eng/2026-03-22' },
        { text: '2026-03-22-物性物理', link: '/phys/2026-03-22' },
        // { text: '2026-03-22-計算材料科学', link: '/calc/2026-03-22' },
        { text: '2026-03-22-マテインフォ', link: '/mi/2026-03-22' },
        { text: '2026-03-22-放射光実験', link: '/beam/2026-03-22' },



        { text: '物性物理', collapsed: true, items: [
          { text: '2026-03-08-物性物理', link: '/phys/2026-03-08' },
          { text: '2026-03-09-物性物理', link: '/phys/2026-03-09' },
          { text: '2026-03-10-物性物理', link: '/phys/2026-03-10' },
          { text: '2026-03-11-物性物理', link: '/phys/2026-03-11' },
          { text: '2026-03-15-物性物理', link: '/phys/2026-03-15' },
          { text: '2026-03-16-物性物理', link: '/phys/2026-03-16' },
          { text: '2026-03-17-物性物理', link: '/phys/2026-03-17' },
          { text: '2026-03-18-物性物理', link: '/phys/2026-03-18' },
          { text: '2026-03-19-物性物理', link: '/phys/2026-03-19' },
          { text: '2026-03-21-物性物理', link: '/phys/2026-03-21' },
          { text: '2026-03-22-物性物理', link: '/phys/2026-03-22' },

        ]},

        { text: '計算材料科学', collapsed: true, items: [
          { text: '2026-03-10-計算材料科学', link: '/calc/2026-03-10' },
          { text: '2026-03-11-計算材料科学', link: '/calc/2026-03-11' },
          { text: '2026-03-12-計算材料科学', link: '/calc/2026-03-12' },
          { text: '2026-03-14-計算材料科学', link: '/calc/2026-03-14' },
          { text: '2026-03-15-計算材料科学', link: '/calc/2026-03-15' },
          { text: '2026-03-16-計算材料科学', link: '/calc/2026-03-16' },
          { text: '2026-03-17-計算材料科学', link: '/calc/2026-03-17' },
          { text: '2026-03-17_1-計算材料科学', link: '/calc/2026-03-17_1' },
          { text: '2026-03-18-計算材料科学', link: '/calc/2026-03-18' },
          { text: '2026-03-19-計算材料科学', link: '/calc/2026-03-19' },
          { text: '2026-03-21-計算材料科学', link: '/calc/2026-03-21' },
          // { text: '2026-03-22-計算材料科学', link: '/calc/2026-03-22' },
        ]},

        { text: 'マテリアルズ・インフォマティクス', collapsed: true, items: [
          { text: '2026-03-10-マテインフォ', link: '/mi/2026-03-10' },
          { text: '2026-03-11-マテインフォ', link: '/mi/2026-03-11' },
          { text: '2026-03-12-マテインフォ', link: '/mi/2026-03-12' },
          { text: '2026-03-14-マテインフォ', link: '/mi/2026-03-14' },
          { text: '2026-03-15-マテインフォ', link: '/mi/2026-03-15' },
          { text: '2026-03-16-マテインフォ', link: '/mi/2026-03-16' },
          { text: '2026-03-17-マテインフォ', link: '/mi/2026-03-17' },
          { text: '2026-03-18-マテインフォ', link: '/mi/2026-03-18' },
          { text: '2026-03-19-マテインフォ', link: '/mi/2026-03-19' },
          { text: '2026-03-21-マテインフォ', link: '/mi/2026-03-21' },
          { text: '2026-03-22-マテインフォ', link: '/mi/2026-03-22' },
        ]},

        { text: '放射光実験', collapsed: true, items: [
          { text: '2026-03-18-放射光実験', link: '/beam/2026-03-18' },
          { text: '2026-03-19-放射光実験', link: '/beam/2026-03-19' },
          { text: '2026-03-21-放射光実験', link: '/beam/2026-03-21' },
          { text: '2026-03-22-放射光実験', link: '/beam/2026-03-22' }

        ]},

        { text: '量子機能デバイス', collapsed: true, items: [
          { text: '2026-03-19-量子機能デバイス', link: '/quantum/2026-03-19' },
          { text: '2026-03-20-量子機能デバイス', link: '/quantum/2026-03-20' },
          { text: '2026-03-21-量子機能デバイス', link: '/quantum/2026-03-21' },
          { text: '2026-03-22-量子機能デバイス', link: '/quantum/2026-03-22' },
        ]},

        { text: '材料工学', collapsed: true, items: [
          { text: '2026-03-21-材料工学', link: '/eng/2026-03-21' },
          { text: '2026-03-22-材料工学', link: '/eng/2026-03-22' },
        ]},
        
        // { text: 'テスト', collapsed: true, items: [
        //   { text: '2026-03-08_1', link: '/arxiv/2026-03-08_1' },
        //   { text: '2026-03-08_2', link: '/arxiv/2026-03-08_2' },
        //   { text: '2026-03-08_3', link: '/arxiv/2026-03-08_3' },
        //   { text: '2026-03-08', link: '/arxiv/2026-03-08' },
        //   { text: '2026-03-09', link: '/arxiv/2026-03-09' },
        //   { text: '2026-03-09_1', link: '/arxiv/2026-03-09_1' },
        //   { text: '2026-03-10', link: '/arxiv/2026-03-10' },
        // ]},

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
      copyright: '© 2026 - arXiv review. All rights reserved.',
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
