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
        { text: 'X.com', link: 'https://x.com/antimeron' },
        { text: 'Github', link: 'https://github.com/rd070672/arxiv-review' },
      ]},
    ],

    sidebar: [

      { text: 'Topic summary', collapsed: false, items: [

        { text: '2026-03-24', collapsed: false, items: [
          { text: 'アモルファス固体のエネルギーランドスケープ', link: '/review/2026-03_amorphous-energy-landscape' },
          { text: 'ドメインウォールダイナミクス', link: '/review/2026-03_domain-wall-dynamics-ferrimagnet' },
          { text: '電子テスラバルブ', link: '/review/2026-03_electron-tesla-valve' },
          { text: 'ユニバーサルMLIPによる電解質のイオン輸送', link: '/review/2026-03_universal-MLIP-electrolyte' },
          { text: '破壊力学のマルチスケールシミュレーション', link: '/review/2026-03_fracture-mechanics-multiscale-simulation' },
          { text: 'Kitaevスピンガラス', link: '/review/2026-03_kitaev-spin-glass' },
        ]},

        { text: '2026-03-23', collapsed: false, items: [
          { text: '交替磁性のトポロジカル物性', link: '/review/2026-03_hall-altermagnet' },
          { text: 'カゴメ平坦バンド共鳴', link: '/review/2026-03_kagome-flat-band-resonance' },
          { text: '強誘電性p波磁性体', link: '/review/2026-03_p-wave-magnet' },
          { text: 'TaIrTe4超格子メモリ', link: '/review/2026-03_TaIrTe4-superlattice-memory' },
          { text: 'UTe2多成分超伝導体', link: '/review/2026-03_UTe2-multicomponent-SC' },
          { text: '双層ニッケル酸化物の半ドーム特性', link: '/review/2026-03_bilayer-nickelate-halfdome' },
          { text: '化学組成の最適化によるFeTe超伝導体', link: '/review/2026-03_stoichiometric-FeTe-superconductor' },
          { text: 'モアレ・マグノニクス', link: '/review/2026-03_moire-magnonics-superlattice' },
          { text: '2D応力変換器', link: '/review/2026-03_2D-strain-transformer' },
          { text: 'GeO2のフォノン輸送', link: '/review/2026-03_GeO2-phonon-transport' },
          { text: '原子電子トモグラフィーのML解析', link: '/review/2026-03_low-dose-AET-PANN' },
        ]},

        { text: '2026-03-23', collapsed: false, items: [
          { text: '高磁化多元素合金の発見', link: '/focus/ML-FeCo-Ir-Pt' },
          { text: 'FeCoIrのXMCD解析', link: '/focus/FeCoIr/FeCoIr-xmcd' },
          { text: 'スピングラス動力学', link: '/focus/spin-glass/spin-glass-dynamics' },
        ]},
      ]},

      { text: 'arXiv review', collapsed: false, items: [

        { text: '2026-03-23', collapsed: false, items: [
          { text: '量子機能デバイス', link: '/quantum/2026-03-23' },
          { text: '材料工学', link: '/eng/2026-03-23' },
          { text: '放射光実験', link: '/beam/2026-03-23' }
        ]},

        { text: '2026-03-22', collapsed: false, items: [
          { text: '物性物理', link: '/phys/2026-03-22' },
          { text: '計算材料科学', link: '/calc/2026-03-22' },
          { text: 'マテインフォ', link: '/mi/2026-03-22' },
          { text: '放射光実験', link: '/beam/2026-03-22' },
          { text: '量子機能デバイス', link: '/quantum/2026-03-22' },
          { text: '材料工学', link: '/eng/2026-03-22' },
        ]},

        { text: '2026-03-21', collapsed: false, items: [
          { text: '物性物理', link: '/phys/2026-03-21' },
          { text: '計算材料科学', link: '/calc/2026-03-21' },
          { text: 'マテインフォ', link: '/mi/2026-03-21' },
          { text: '放射光実験', link: '/beam/2026-03-21' },
          { text: '量子機能デバイス', link: '/quantum/2026-03-21' },
          { text: '材料工学', link: '/eng/2026-03-21' },
        ]},

        { text: '2026-03-20', collapsed: true, items: [
          { text: '量子機能デバイス', link: '/quantum/2026-03-20' },  
        ]},

        { text: '2026-03-20', collapsed: true, items: [
          { text: '物性物理', link: '/phys/2026-03-20' },
          { text: '計算材料科学', link: '/calc/2026-03-20' },
          { text: 'マテインフォ', link: '/mi/2026-03-20' },
          { text: '放射光実験', link: '/beam/2026-03-20' },
          { text: '量子機能デバイス', link: '/quantum/2026-03-20' },
        ]},

        { text: '2026-03-18', collapsed: true, items: [
          { text: '物性物理', link: '/phys/2026-03-18' },
          { text: '計算材料科学', link: '/calc/2026-03-18' },
          { text: 'マテインフォ', link: '/mi/2026-03-18' },
          { text: '放射光実験', link: '/beam/2026-03-18' },
        ]},

        { text: '2026-03-17', collapsed: true, items: [
          { text: '物性物理', link: '/phys/2026-03-17' },
          { text: '計算材料科学1', link: '/calc/2026-03-17' },
          { text: '計算材料科学2', link: '/calc/2026-03-17_1' },
          { text: 'マテインフォ', link: '/mi/2026-03-17' },
        ]},

        { text: '2026-03-16', collapsed: true, items: [
          { text: '物性物理', link: '/phys/2026-03-16' },
          { text: '計算材料科学', link: '/calc/2026-03-16' },
          { text: 'マテインフォ', link: '/mi/2026-03-16' },
        ]},

        { text: '2026-03-15', collapsed: true, items: [
          { text: '物性物理', link: '/phys/2026-03-15' },
          { text: '計算材料科学', link: '/calc/2026-03-15' },
          { text: 'マテインフォ', link: '/mi/2026-03-15' },
        ]},

        { text: '2026-03-14', collapsed: true, items: [
          { text: '計算材料科学', link: '/calc/2026-03-14' },
          { text: 'マテインフォ', link: '/mi/2026-03-14' },
        ]},

        { text: '2026-03-12', collapsed: true, items: [
          { text: '計算材料科学', link: '/calc/2026-03-12' },
          { text: 'マテインフォ', link: '/mi/2026-03-12' },
        ]},

        { text: '2026-03-11', collapsed: true, items: [
          { text: '物性物理', link: '/phys/2026-03-11' },
          { text: '計算材料科学', link: '/calc/2026-03-11' },
          { text: 'マテインフォ', link: '/mi/2026-03-11' },
        ]},

        { text: '2026-03-10', collapsed: true, items: [
          { text: '物性物理', link: '/phys/2026-03-10' },
          { text: '計算材料科学', link: '/calc/2026-03-10' },
          { text: 'マテインフォ', link: '/mi/2026-03-10' },
        ]},

        { text: '2026-03-09', collapsed: true, items: [
          { text: '物性物理', link: '/phys/2026-03-09' },
        ]},

        { text: '2026-03-08', collapsed: true, items: [
          { text: '物性物理', link: '/phys/2026-03-08' },
        ]},

      ]},

      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'X.com', link: 'https://x.com/antimeron' },
      { text: 'Github', link: 'https://github.com/rd070672/arxiv-review' },
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/antimeron' },
      { icon: 'github', link: 'https://github.com/rd070672/arxiv-review' }
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
