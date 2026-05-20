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
      { text: '放射光実験', link: '/#放射光実験に関する論文' },
      { text: 'マテリアルズ・インフォマティクス', link: '/#マテリアルズ・インフォマティクスに関する論文' },
      { text: '量子機能デバイス', link: '/#量子機能デバイスに関する論文' },

      { text: 'その他', items: [
        { text: 'About', link: '/about' },
        { text: 'Changelog', link: '/changelog' },
        { text: 'X.com', link: 'https://x.com/antimeron' },
        { text: 'Github', link: 'https://github.com/rd070672/arxiv-review' },
      ]},
    ],

    sidebar: [

      { text: 'May, 2026', collapsed: false, items: [
        
        { text: '2026-05-20', collapsed: false, items: [
          { text: 'タスク適応型物理リザバーコンピューティング', link: '/focus/reservoir/2024-01_task-adaptive-RC' },
          { text: 'ニッケレートにおける常圧超伝導', link: '/topic/2605/2026-05-20_nickelate-ambientpressure-SC' },
        ]},

        { text: '2026-05-19', collapsed: false, items: [
          { text: 'CALPHADとGATを用いた相図予測', link: '/topic/2605/2026-05-19_calphad-gat-phase-diagram' },
          { text: '積層造形における粒界エンベロープのフェーズフィールド法', link: '/topic/2605/2026-05-19_grain-envelope-phasefield-AM' },
          { text: '電子密度の機械学習予測', link: '/topic/2605/2026-05-19_charge-density-ml-prediction' },
          { text: 'WGANを用いたスピン再構築', link: '/topic/2605/2026-05-19_wgan-spin-reconstruction-bkt' },
          { text: 'La3Ni2O7の磁気特性と中性子散乱', link: '/topic/2605/2026-05-19_La3Ni2O7-magnetism-neutron' },
          { text: '磁気秩序を示さないギャップレス量子スピン液体', link: '/topic/2605/2026-05-19_3d-bipartite-qsl-trimer' },
        ]},


        { text: '2026-05-18', collapsed: false, items: [
          { text: 'ドメイン固有のMLIPによる金属材料の設計', link: '/topic/2605/2026-05-18_domain-specific-MLIP-metals' },
          { text: '分散型マルチエージェント材料科学', link: '/topic/2605/2026-05-18_openaaas-distributed-multiagent-materials' },
          { text: '合成プロトコルを主要設計変数としたAI材料探索', link: '/topic/2605/2026-05-18_beyond-structure' },
          { text: 'CALPHADとGATを用いた相図予測', link: '/topic/2605/2026-05-19_calphad-gat-phase-diagram' },
          { text: '積層造形における粒界エンベロープのフェーズフィールド法', link: '/topic/2605/2026-05-19_grain-envelope-phasefield-AM' },
        ]},

        { text: '2026-05-17', collapsed: false, items: [
          { text: 'LLMによる中性子回折データのリートベルト精密化', link: '/topic/2605/2026-05-17_rongzai-rietveld-llm' },
          { text: '高エントロピー合金における電子密度多様体', link: '/topic/2605/2026-05-17_hea-electron-density-ml' },
          { text: 'BCCナノ結晶の塑性を支配する変態媒介双晶', link: '/topic/2605/2026-05-17_bcc-nanocrystal-transformation-twinning' },
          { text: '鉄鋼粒界における軽元素偏析', link: '/topic/2605/2026-05-17_grain-boundary-segregation-DFT-ML' },
          { text: '高エントロピー合金のエネルギー予測におけるグラフ学習', link: '/topic/2605/2026-05-17_HEA-CrysFracGNN' },
        ]},

        { text: '2026-05-16', collapsed: false, items: [
          { text: 'アモルファス軟磁性合金の高靭性の起源', link: '/focus/FePC/2026-05_FePCCu-ductility' },
          { text: '自律型原子間力顕微鏡とLLMの融合', link: '/topic/2605/2026-05-16_autonomous-SPM-LLM-hypothesis' },
          { text: '二重原子触媒と機械学習の融合', link: '/topic/2605/2026-05-16_dual-atom-catalyst-ML' },
          { text: '言語モデルとMLIPの融合', link: '/topic/2605/2026-05-16_lang2mlip-autonomous-mlip' },
          { text: 'LLMによる中性子回折データのリートベルト精密化', link: '/topic/2605/2026-05-17_rongzai-rietveld-llm' },
        ]},

        { text: '2026-05-15', collapsed: false, items: [
          { text: '自律型原子間力顕微鏡とLLMの融合', link: '/topic/2605/2026-05-15_autonomous-SPM-LLM-hypothesis' },
          { text: 'kappa-latによるサロゲートモデルのベンチマーク', link: '/topic/2605/2026-05-15_kappa-lat-surrogate-benchmark' },
        ]},

        { text: '2026-05-14', collapsed: false, items: [
          { text: 'GNNによる交替磁性体の自動発見', link: '/topic/2605/2026-05-14_altermagnet-equivariant-gnn' },
          { text: '結晶生成AIの安定性問題', link: '/topic/2605/2026-05-14_CrystalREPA' },
          { text: '非共線性反強磁性体の超高速ダイナミクス', link: '/topic/2605/2026-05-14_noncollinear_afm_ultrafast' }
        ]},

        
        { text: '2026-05-10', collapsed: false, items: [
          { text: '磁歪と磁気ダンピングの第一原理的解明', link: '/focus/miura/2026-05_magnetostriction-damping' },
          { text: '触媒設計のためのメタ学習', link: '/topic/2605/2026-05-10_meta-legnet-interpretable-catalysis' },
          { text: '原子多極子表現による電気応答と分光スペクトル', link: '/topic/2605/2026-05-10_polarizable-multipole-mlip-spectroscopy' },
          { text: 'β-Ga₂O₃/SiC界面の熱境界コンダクタンス', link: '/topic/2605/2026-05-10_NNP-TBC-Ga2O3-SiC' },
          { text: '組成重み付きシンボリック回帰', link: '/topic/2605/2026-05-10_composition-SR' },
        ]},

        { text: '2026-05-09', collapsed: false, items: [
          { text: 'バッテリー形成のベイズ推定', link: '/topic/2605/2026-05-09_battery-formation-bayesian' },
          { text: 'LLMを用いた材料科学', link: '/topic/2605/2026-05-09_LLM-materials-science' },
          { text: '熱電材料のGNNによる輸送特性予測', link: '/topic/2605/2026-05-09_thermoelectric-GNN-transport' },
          { text: '結晶GNNを用いた共有再帰畳み込みによる材料設計', link: '/topic/2605/2026-05-09_SR-CGCNN' },
          { text: '自己駆動型実験室', link: '/topic/2605/2026-05-09_born-qualified-autonomous-materials' },
          { text: 'スピン緩和時間のAI的予測', link: '/topic/2605/2026-05-09_NV-center-spin-dynamics-ML' },
        ]},

        { text: '2026-05-07', collapsed: false, items: [
          { text: '高エントロピー酸化物における軌道・磁気・構造連成相転移', link: '/topic/2605/2026-05-07_HEO-coupled-phase-transitions' },
          { text: 'メタダイナミクスを用いた空孔拡散', link: '/topic/2605/2026-05-07_metadynamics-vacancy-diffusion' },
          { text: 'シンボリック回帰による材料設計式の発見', link: '/topic/2605/2026-05-07_symbolic-regression-materials' },
        ]},

        { text: '2026-05-06', collapsed: false, items: [
          { text: 'LLG方程式のサロゲートモデル', link: '/topic/2605/2026-05-06_llg-surrogate-model' },
          { text: '非相反カーン・ヒリアード方程式', link: '/topic/2605/2026-05-06_nonreciprocal-active-phase' },
          { text: 'アモルファス材料の破壊エネルギー', link: '/topic/2605/2026-05-06_amorphous-fracture-energy-velocity' },
          { text: 'トポロジカル欠陥と回位ダイナミクス', link: '/topic/2605/2026-05-06_dislocation-defects' },
          { text: 'ニューラル演算子による磁性コアの鉄損予測', link: '/topic/2605/2026-05-06_magnetic-hysteresis-ml' },
          { text: 'MLポテンシャルSevenNetを用いた材料設計', link: '/topic/2605/2026-05-06_sevennet-nano' },
          { text: '拡散モデルによる結晶の逆設計', link: '/topic/2605/2026-05-06_joint-crystal-edesc-diffusion' },
          
        ]},

        { text: '2026-05-04', collapsed: false, items: [
          { text: 'スピン量子ビットの自動調整', link: '/topic/2605/2026-05_spin-qubit-autotuning' },
          { text: 'バンドギャップ予測のGNNベンチマーク', link: '/topic/2605/2026-05_bandgap-GNN-benchmark' },
          { text: '強化学習による等価回路モデル自動生成', link: '/topic/2605/2026-05_EIS-RL-AutoREC' },
          { text: '多体電子モデルの新基盤モデル', link: '/topic/2605/2026-05-04_QERNEL-large-electron-model' },
          { text: 'ナノインデンテーション押し込みサイズ効果補正', link: '/topic/2605/2026-05-04_nanoindentation-size-correction' },
          { text: '磁壁ダイナミクスと過剰損失', link: '/focus/mbn/2026-05_MBN-DomainWall' },
        ]},

        { text: '2026-05-03', collapsed: false, items: [
          { text: '金属有機構造体(MOF)の多形予測', link: '/topic/2605/2026-05_ZIF-polymorph-ML' },
          { text: 'MAX相のLLMによる予測', link: '/topic/2605/2026-05_MAX-phase-LLM' },
          { text: 'Transformerを用いたスピンサンプリング', link: '/topic/2605/2026-05_transformer-spin-sampler' },
          { text: 'Vicsekモデルを用いたMLによる相転移予測', link: '/topic/2605/2026-05_vicsek-ml-phase' },
        ]},

        { text: '2026-05-02', collapsed: false, items: [
          { text: '交替磁性における量子幾何からの巨大スピン磁化', link: '/topic/2605/2026-05_altermagnet-quantum-geometry' },
          { text: '量子幾何からの巨大スピン磁化', link: '/topic/2605/2026-05_altermagnetism_quantum_geometry' },
          { text: 'FeSe超伝導体ダイオード', link: '/topic/2605/2026-05_FeSe-superconducting-diode' },
          { text: 'モアレ超格子における弾道的エキシトン輸送', link: '/topic/2605/2026-05_moire-ballistic-exciton-transport' },
          { text: '二次元強誘電体の超高速分極スイッチング', link: '/topic/2605/2026-05_sliding-ferroelectric-hBN' },
          { text: 'トポロジカル絶縁体の熱輸送', link: '/topic/2605/2026-05_TMD-thermal-transport' },
          { text: '光誘起フォノン電流', link: '/topic/2605/2026-05_optical-phonoelectric' },
        ]},

      ]},
            
      { text: 'April, 2026', collapsed: true, items: [
        { text: '2026-04-30', collapsed: false, items: [
          { text: 'イットリア安定化正方晶ジルコニアの自己治癒機能', link: '/topic/2604/2026-04_self-healing-ceramic' },
        ]},
        { text: '2026-04-29', collapsed: false, items: [
          { text: '欠陥を含む高エントロピー合金の原子配置', link: '/topic/2604/2026-04_HEA-defect-configuration' },
          { text: 'X線光電子回折（XPD）が明かすIrTe₂の表面対称性破れ', link: '/topic/2604/2026-04_photoelectron-diffraction-IrTe2' },
        ]},

        { text: '2026-04-28', collapsed: false, items: [
          { text: '巨大圧電効果に対する量子イオン揺らぎ', link: '/topic/2604/2026-04_quantum-piezoelectricity' },
          { text: 'スピン-格子結合の微視的起源', link: '/topic/2604/2026-04_spin-lattice-coupling' },
          { text: '鉄系化合物への軽元素侵入型添加', link: '/topic/2604/2026-04_LaFeSiH_light_element' },
          { text: '強誘電トポロジカル絶縁体', link: '/topic/2604/2026-04_ferroelectric-topological-insulator' },
          { text: '2026年4月のまとめ', link: '/summary/2026-April' }

        ]},

        { text: '2026-04-27', collapsed: false, items: [
          { text: 'アモルファス金属の深層緩和', link: '/topic/2604/2026-04_metallic-glass-deep-relaxation' },
          { text: 'シリカガラスの中距離秩序', link: '/topic/2604/2026-04_SRO-MRO-MLIP-glass' },
          { text: 'アダプティブ動的モンテカルロ法', link: '/topic/2604/2026-04_adaptive-KMC' },
          { text: '第一原理スピンモンテカルロ', link: '/topic/2604/2026-04_first-principles-spin-monte-carlo' },
        ]},

        { text: '2026-04-26', collapsed: false, items: [
          { text: 'スライディング強誘電体における2次元分極反転', link: '/topic/2604/2026-04_sliding-ferroelectric-moire-pinning' },
          { text: '長距離相互作用に基づく量子相転移', link: '/topic/2604/2026-04_LR-spin1-nonconformal-criticality' },
        ]},

        { text: '2026-04-25', collapsed: false, items: [
          { text: 'アモルファス金属の脆性と熱履歴の関係', link: '/topic/2604/2026-04_metallic-glass-ductility-thermal-history' },
          { text: 'Ge-rich GeSbTe相変化合金の微視的メカニズム', link: '/topic/2604/2026-04_GeSbTe-crystallization' },
          { text: 'アモルファス粒界コンプレキシオン（偏析層）', link: '/topic/2604/2026-04_amorphous-GB-complexion' },
          { text: '顕微鏡データにおける因果推論', link: '/topic/2604/2026-04_causal-MI' },
        ]},
        
        { text: '2026-04-24', collapsed: false, items: [
          { text: '多結晶ニッケルにおける水素拡散の第一原理マルチスケール解析', link: '/topic/2604/2026-04_H-diffusion-kMC-Ni' },
        ]},

        { text: '2026-04-22', collapsed: false, items: [
          { text: 'オプトメカニカル発信器ネットワーク', link: '/topic/2604/2026-04_optomechanical-neuromorphic-RC' },
        ]},

        { text: '2026-04-20', collapsed: false, items: [
          { text: 'マグノン–フォノン結合の第一原理計算', link: '/topic/2604/2026-04_magnon-phonon-coupling' },
          { text: 'Ga2O3/SiCヘテロ構造の熱伝導特性', link: '/topic/2604/2026-04_TBC-Ga2O3-SiC' },
          { text: '2次元強誘電体の多状態強誘電相とフォノンモード', link: '/topic/2604/2026-04_NbOI2-multistate-ferroelectric-phonon' },
          { text: '反強磁性体におけるバルクハウゼンジャンプ', link: '/topic/2604/2026-04_AFM-Barkhausen-noise' },
        ]},


        { text: '2026-04-19', collapsed: false, items: [
          { text: 'HfO2の強誘電相の第一原理的起源', link: '/topic/2604/2026-04_hafnia-ferroelectric-phases' },
          { text: 'アモルファス金属のトポロジカル欠陥', link: '/topic/2604/2026-04_amorphous-metal-topological-defects' },
        ]},

        { text: '2026-04-14', collapsed: false, items: [
          { text: 'ツイストvdW磁性体のマジックアングル', link: '/topic/2604/2026-04_twisted-Fe3GeTe2-magic-angle' },
          { text: 'スピン-フォノン結合のモード選択性と異常輸送', link: '/topic/2604/2026-04_magnon-phonon-magnetothermal' },
          { text: '粒界における交換軟磁性', link: '/topic/2604/2026-04_GB-exchange-soft-magnet' },
          { text: 'FeCo超低減衰材料', link: '/topic/2604/2026-04_FeCo-ultralow-damping' },
        ]},

        { text: '2026-04-13', collapsed: false, items: [
          { text: '結晶生成AIとCrystalite', link: '/topic/2604/2026-04_crystal-gen-diffusion-transformer' },
          { text: '粘弾性応答を学習した再帰型ニューラルオペレータ', link: '/topic/2604/2026-04_multiscale-RNO-viscoelastic' },
          { text: '準結晶のナノメカニカル共鳴器', link: '/topic/2604/2026-04_quasicrystal-nanomechanical-resonator' },
          { text: 'メモリスタのマルチスケール設計', link: '/topic/2604/2026-04_memristor-multiscale-simulation' },
        ]},

        { text: '2026-04-12', collapsed: false, items: [
          { text: 'mMACEを用いた磁性材料のMLIP', link: '/topic/2604/2026-04_mMACE-magnetic-MLIP' },
          { text: '因果推論を用いた強誘電体のスイッチング', link: '/topic/2604/2026-04_causal-ML-ferroelectric-switching' },
          { text: '機械学習ポテンシャルによるアモルファスGSTシミュレーション', link: '/topic/2604/2026-04_amorphous-GST-in-gap-states' },
          { text: 'PiNNsによるフェーズフィールドシミュレーションの加速', link: '/topic/2604/2026-04_PF-PINO-phase-field-neural-operator' },
        ]},

        { text: '2026-04-11', collapsed: false, items: [
          { text: 'スピン波物理リザバーコンピューティング', link: '/topic/2604/2026-04_spinwave-reservoir-computing-SAF' },
          { text: '行列式量子モンテカルロ法とフェルミオン符号問題', link: '/topic/2604/2026-04_dqmc-dwave-hubbard' },
          { text: 'ErTe3における電荷密度波とRaman散乱', link: '/topic/2604/2026-04_ErTe3-CDW-Raman-strain' },
          { text: 'ナノグラフェンにおける強磁性近藤効果の実験的発見', link: '/topic/2604/2026-04_ferromagnetic-kondo-nanographene' },
          { text: '二層ニッケル酸化物超伝導体のARPES実験', link: '/topic/2604/2026-04_nickelate-bilayer-arpes' },
          { text: '反転分布なき励起子モット転移', link: '/topic/2604/2026-04_excitonic-mott-transition' },
          { text: '強誘電体の光歪み効果', link: '/topic/2604/2026-04_photostriction-BaTiO3-thermalized-carriers' },
        ]},

        { text: '2026-04-08', collapsed: false, items: [
          { text: '準結晶の電子構造への第一原理アプローチ', link: '/topic/2604/2026-04_quasicrystal-cutproject-DFT' },
          { text: 'アモルファス金属の動的非一様性とアバランシェ', link: '/topic/2604/2026-04_amorphous-metal-dynamical-heterogeneity-avalanche' },
        ]},

        { text: '2026-04-06', collapsed: false, items: [
          { text: '弾性カロリック効果を持つホイスラー合金', link: '/topic/2604/2026-04_elastocaloric-Heusler-record' },
          { text: 'スピンアイスにおける温度ゼロKエントロピー', link: '/topic/2604/2026-04_spin-ice-zero-point-entropy' },
          { text: '電気熱量材料の極性フラストレーション', link: '/topic/2604/2026-04_electrocaloric-polar-frustration' },
          { text: 'MACEを用いた電気静力学設計空間', link: '/topic/2604/2026-04_MACE-electrostatics-design-space' },
        ]},

        { text: '2026-04-04', collapsed: false, items: [
          { text: '量子モンテカルロで迫るもつれの物理', link: '/topic/2604/2026-04_QMC-symmetry-resolved-entanglement' },
          { text: '生成AIが非晶質構造解析の逆問題に挑む', link: '/topic/2604/2026-04_PDF-amorphous-GLASS' },
        ]},

        { text: '2026-04-02', collapsed: false, items: [
          { text: '多主元素合金における空孔媒介拡散の第一原理的計算', link: '/topic/2604/2026-04_MPEA-vacancy-diffusion-eLCE-KMC' },
        ]},

        { text: '2026-04-01', collapsed: false, items: [
          { text: 'MLアシスト格子モンテカルロ計算', link: '/topic/2604/2026-04_HEA-lattice-MC-chemical-order' },
          { text: '粒界における自己ピンニングのKMCシミュレーション', link: '/topic/2604/2026-04_grain-boundary-self-pinning-KMC' },
          { text: 'GST系相変化材料のアモルファス緩和と結晶化機構', link: '/topic/2604/2026-04_GST-beta-relaxation-percolation' },
          { text: 'DMFTとサロゲートモデルを用いた電子構造の予測', link: '/topic/2604/2026-04_DMFT-NN-surrogate' },
          { text: 'PINNsによるナノスケール熱輸送', link: '/topic/2604/2026-04_PINNs-phonon-BTE' },
          { text: 'NEB法を用いた結晶相転移解析', link: '/topic/2604/2026-04_NEB-crystal-phase-transition' },
        ]},

        { text: '2026-03-31', collapsed: false, items: [
          { text: 'XMCDによる交替磁性体の研究', link: '/topic/2603/2026-03_XMCD-altermagnetism' },
          { text: '円偏光RIXSによるカイラルフォノン', link: '/topic/2603/2026-03_RIXS-chiral-phonon-BaTiO3' },
          { text: '超強束縛励起子の時間分解ARPES', link: '/topic/2603/2026-03_CrSBr-trARPES-exciton' },
          { text: 'スピン超固体相における巨大磁気熱量効果', link: '/topic/2603/2026-03_metallic-spin-supersolid-MCE' },
          { text: '自己修復ビトリマー', link: '/topic/2603/2026-03_self-healing-vitrimer' },
        ]},

        { text: '2026-03-29', collapsed: true, items: [
          { text: 'フォノン熱ホール効果と電荷プール', link: '/topic/2603/2026-03_phonon-thermal-Hall-charge-puddle' },
          { text: '超伝導ダイオード効果', link: '/topic/2603/2026-03_superconducting-diode-effect' },
          { text: 'カゴメ強磁性体Fe3Sn2における圧力下磁気相図', link: '/topic/2603/2026-03_kagome-Fe3Sn2-pressure' },
          { text: 'クラスターモット絶縁体における次元依存性', link: '/topic/2603/2026-03_Nb3Cl8-Mott-exciton-dimension' },
          { text: 'ナノ結晶のゆらぎダイナミクス', link: '/topic/2603/2026-03_liquid-cell-TEM-nanocrystal-dynamics' },
          { text: '軌道交替磁性体の電子構造', link: '/topic/2603/2026-03_orbital-order-altermagnet-2D' },
          { text: '反転対称性の工学的破れと非線形光誘起電流', link: '/topic/2603/2026-03_nonlinear-photocurrent-Bi2Se3' },
        ]},

        { text: '2026-03-28', collapsed: true, items: [
          { text: '軌道交替磁性体の平坦バンド', link: '/topic/2603/2026-03_altermagnet-CrSb-flatband' },
          { text: '強誘電体の高速光応答', link: '/topic/2603/2026-03_BaTiO3-ultrafast-carrier' },
          { text: 'La₃Ni₂O₇における電荷秩序', link: '/topic/2603/2026-03_La3Ni2O7-charge-order' },
          { text: '酸化物異質構造における電荷移転', link: '/topic/2603/2026-03_oxide-heterostructure-charge-transfer' },
          { text: '軌道交替磁性体の電子構造', link: '/review/2026-03_orbital-altermagnetism' },
          { text: '強誘電体における超高速光-電子-フォノン相互作用', link: '/review/2026-03_ultrafast-ferroelectric-phonons' },
          { text: 'カイラルフォノンの軌道熱電変換', link: '/review/2026-03_phonon-orbital-seebeck' },

        ]},

        { text: '2026-03-25', collapsed: true, items: [
          { text: 'PXRDと深層学習を用いた材料解析', link: '/review/2026-03_PXRD-deep-learning' },
          { text: '超高速熱力学', link: '/review/2026-03_ultrafast-phonon-thermodynamics' },
          { text: '高エントロピーセラミックス', link: '/review/2026-03_ultrafast-sintering-HEC' },
          { text: 'ゲートモン量子ビット', link: '/review/2026-03_ultrastrong-coupling-gatemon' },
        ]},

        { text: '2026-03-24', collapsed: true, items: [
          { text: 'アモルファス固体のエネルギー地形', link: '/review/2026-03_amorphous-energy-landscape' },
          { text: 'フェリ磁性の磁壁ダイナミクス', link: '/review/2026-03_domain-wall-dynamics-ferrimagnet' },
          { text: '電子テスラバルブ', link: '/review/2026-03_electron-tesla-valve' },
          { text: 'ユニバーサルMLIPによる電解質のイオン輸送', link: '/review/2026-03_universal-MLIP-electrolyte' },
          { text: '破壊力学のマルチスケールシミュレーション', link: '/review/2026-03_fracture-mechanics-multiscale-simulation' },
          { text: 'Kitaevスピンガラス', link: '/review/2026-03_kitaev-spin-glass' },
        ]},

        { text: '2026-03-23', collapsed: true, items: [
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

        { text: '論文の深読み', collapsed: true, items: [
          { text: '高磁化多元素合金の発見', link: '/focus/ML-FeCo-Ir-Pt' },
          { text: 'FeCoIrのXMCD解析', link: '/focus/FeCoIr/FeCoIr-xmcd' },
          { text: 'X線磁気円二色性とsum-rule則', link: '/focus/MCD/1992-03_XMCD-sum-rules' },
          { text: 'スピングラス動力学', link: '/focus/spin-glass/spin-glass-dynamics' },
          { text: 'mMACE 徹底解説', link: '/focus/mMACE/2026-04_magnetic-mlip' },
        ]},
      ]},

      { text: 'arXiv review', collapsed: true, items: [

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
