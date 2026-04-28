# 4月の arXiv 研究動向レビュー：物性・材料科学の注目トピックを俯瞰する

- **対象期間**：2026年4月（2026-04-01〜2026-04-27）
- **参照データ**：reported_papers.csv
- **対象論文数**：381本
- **anchor 論文数**：53本
- **related 論文数**：328本
- **主な研究領域**：Computation and Theory（138本）、Devices and Functional Materials（70本）、Nonequilibrium and Dynamic Response（28本）、Magnetism and Spin（27本）、Structure and Microstructure（26本）、Superconductivity and Strongly Correlated Systems（25本）
- **主な手法タグ**：Machine Learning（135件）、First-Principles Calculations（95件）、Monte Carlo（68件）、Molecular Dynamics（66件）、Transport Measurements（33件）

---

## 1. 4月に見えた全体像

2026年4月に取り上げた381本の論文群を俯瞰すると、まず目に飛び込んでくるのは「計算科学と機械学習が研究の中核インフラとして完全に定着した」という事実である。主要領域別に見ると、Computation and Theory が138本と全体の36%以上を占め、次いで Devices and Functional Materials が70本（18%）を占める。この数字が示すのは、2026年現在の材料科学研究において、実験と理論の二項対立はすでに時代遅れの枠組みであり、計算・理論・実験・データ科学が一つのエコシステムとして機能しつつあるという現実だ。

なぜ計算科学がこれほど支配的なのか。その背景には、機械学習ポテンシャル（Machine Learning Interatomic Potential; MLIP）の急速な成熟がある。かつては第一原理計算（First-Principles Calculations）の精度を得るためには膨大な計算コストが必要であり、10〜100原子スケールの系しか扱えなかった。ところが今では、MLIPが第一原理品質の精度を保ちながら、分子動力学（MD）シミュレーションを10,000〜1,000,000原子スケールで実行することを可能にし、さらにモンテカルロ法（MC）との組み合わせで平衡統計量を効率よく計算できるようになった。4月の論文群では、MACE（`2603.14700`）やmMACE（`2604.08143`）、GeSbTe用MLIP（`2604.13843`）など、特定用途に最適化されたMLIPが相次いで報告されており、汎用基盤モデルから応用特化型モデルへの分化が進んでいることが読み取れる。

一方、Devices and Functional Materials の70本が示すもう一つの潮流は、「材料の実用機能を設計レベルで制御する」という志向の強まりである。カロリック効果（弾性カロリック・電気カロリック）、相変化メモリ材料、強誘電体、磁気メモリ、ニューロモーフィックコンピューティングといった機能性材料が多数登場しており、いずれも「材料の特定の自由度（スピン・電荷・格子・軌道）を外場で制御して機能を引き出す」という設計思想で貫かれている。

| 領域 | 論文数 | 割合 |
|------|--------|------|
| Computation and Theory | 138 | 36.2% |
| Devices and Functional Materials | 70 | 18.4% |
| Nonequilibrium and Dynamic Response | 28 | 7.3% |
| Magnetism and Spin | 27 | 7.1% |
| Structure and Microstructure | 26 | 6.8% |
| Superconductivity and Strongly Correlated Systems | 25 | 6.6% |
| Measurement and Spectroscopy | 18 | 4.7% |
| Multiphysics and Coupled Phenomena | 14 | 3.7% |
| Electronic Structure | 14 | 3.7% |
| Phonons and Thermal Properties | 12 | 3.1% |
| Materials Synthesis and Processing | 8 | 2.1% |
| Semiconductors and Electronic Materials | 1 | 0.3% |

4月の論文群を貫く最大のキーワードは「相転移（Phase Transitions）」である。sub-area の集計を見ると、何らかの形で Phase Transitions を含む分類が突出して多く、ガラス転移・結晶化・秩序-無秩序転移・量子相転移・非平衡相転移と、あらゆる種類の相転移が取り上げられていた。これは偶然ではなく、材料の「機能スイッチング」が本質的に相転移に依拠していることを反映している。

---

## 2. 分野別に見た研究トピックの偏り

4月の論文群は、以下の5つの大きな研究クラスターに整理できる。

### クラスター A：機械学習ポテンシャルとアトミスティックシミュレーションの高度化

最大のクラスターは、MLIPを中心とした原子スケールシミュレーションの方法論開発である。MACE（`2603.14700`）は自己無撞着な静電相互作用を組み込んだMLIPの設計空間を体系的に調査し、GeSbTe系（`2604.13843`）では相変化過程をMLIPで再現している。mMACE（`2604.08143`）は磁気自由度を等変（equivariant）なメッセージパッシング構造で記述し、磁気材料へのMLIPの適用範囲を大きく拡張した。さらに、ガラスや非晶質材料の中距離秩序（MRO）がMLIPでどこまで再現できるかを検証する研究（`2604.21222`）も登場しており、MLIPの限界と可能性を探る批判的検証の段階に入っていることが分かる。

### クラスター B：非平衡ダイナミクスとアモルファス物質の物理

アモルファス・ガラス系を非平衡・動的観点から理解しようとする研究が集中した。GST（Ge₂Sb₂Te₅）のベータ緩和とパーコレーション駆動の結晶化（`2603.01559`）、超冷却液体のアバランシェ臨界性と動的不均一性（`2604.03573`）、アモルファスGSTのギャップ内状態（`2602.15446`）、金属ガラスの転移温度近傍の深い緩和（`2503.04443`）と延性のシアーバンド統計（`2512.20121`）などが相互補完的な研究群を形成している。これらは全て「アモルファス固体における局所構造の多様性が巨視的な機能・力学・転移に直結する」という共通の物理的問いに答えようとしている。

### クラスター C：カロリック効果・強誘電体・機能性相転移

カロリック材料のレコード更新（`2503.01186`：Heuslerの巨大弾性カロリック効果）、ナノドメイン形成による電気カロリック効果の増強（`2602.21520`）、エピタキシャルハフニア強誘電相の同定（`2604.15081`）、モアレ強誘電体のドメイン壁ダイナミクス（`2604.20277`）、2次元NbOI₂の光誘起フォノン制御（`2604.14894`）など、強誘電・カロリック材料を対象とした研究が非常に多かった。これらは「固相での可逆的相転移を利用して熱・電気エネルギーを変換・蓄積する」という固体冷却・省エネデバイスの材料基盤を整備する試みとして位置付けられる。

### クラスター D：磁性・スピンダイナミクスと磁気デバイス

スピン液体とゼロ点エントロピー（`2604.00115`）、ツイストFe₃GeTe₂のトポロジカルホール効果（`2603.14192`）、磁気共鳴コンピューティング（スピン波リザーバー計算、`2603.22696`）、マグノン-フォノン結合（`2603.18137`、`2604.12866`）、反強磁性バルクハウゼンノイズ（`2602.14713`）など、磁性物理からデバイス応用まで多層的な研究群が形成された。強磁性コンドー効果の実験的観測（`2604.07174`）は特に基礎物理として重要で、1量子スピンとフェルミ海の結合が新しい様相を示すことが示された。

### クラスター E：強相関電子系と量子多体物理

ドープされたHubbardモデルにおけるd波超流動スティフネスの符号問題なしQMC証拠（`2604.01737`）、Ruddlesden-Popper型ニッケル酸塩超伝導体のARPES（`2604.08430`）、励起子Mott転移（`2604.06897`）、長距離スピン-1鎖の非慣用的量子臨界性（`2604.20831`）、対称性分解エンタングルメント（`2604.02307`）など、強相関電子系と量子情報の交差領域が活発であった。

---

## 3. 特に重要だった研究テーマ

### テーマ A：機械学習ポテンシャルはどこまで物質の「多様性」を学習できるのか

4月の最も重要な計算材料科学的問いの一つは、「MLIPは短距離秩序（SRO）だけでなく中距離秩序（MRO）まで再現できるか」という問いである。`2604.21222`（シリカガラスの中距離秩序）はこの問いに真正面から向き合い、中性子・X線回折データと照合することでMLIPの限界を定量化した。これは単なる方法論の比較ではなく、「どのような記述子と相互作用カットオフ半径を選べば、実験で観測されるMROを再現できるのか」という構造設計の問いに直結する。

関連する research として、MACE（`2603.14700`）は静電相互作用の自己無撞着な組み込みがMLIPの精度にどう影響するかを系統的に調べ、従来の単純な電荷平衡法では不十分な場合があることを示した。また、mMACE（`2604.08143`）は磁気モーメントの大きさと方向の両方をスピン等変なアーキテクチャで記述することで、磁気相転移をともなう材料のMLIPを初めて実用的に構築した。これらの研究は相互に補完的であり、「汎用性の高いMLIPから、特定の物理（静電、磁気、非調和性）を意識した専用MLIPへ」という設計哲学の進化を示している。

まだ不確定な点として、MLIPの学習データセットの偏りと汎化性能の問題が残る。特に、高圧・高温などの極端条件下での精度保証や、化学空間の広い多主元素合金（MPEA）への適用には、アクティブラーニングや不確実性定量化（UQ）との統合が必要である。今後は、MLIPの「どこで信頼できてどこで信頼できないか」を実験データとの照合で継続的にキャリブレーションする研究が増加すると見込まれる。

### テーマ B：相変化材料・金属ガラスにおける非平衡ダイナミクスの普遍性

GST（Ge₂Sb₂Te₅）と金属ガラスという一見異なる材料系が、4月には同じ物理的枠組みで議論された。`2603.01559`は、GST のベータ緩和がパーコレーション転移と結びついており、これが結晶化速度の共鳴的加速を引き起こすことを分子動力学とMLIPで明らかにした。一方、`2604.03573` は超冷却液体の動的不均一性がゼロ温度アバランシェ臨界性に支配されていることを示し、従来の平均場理論では捉えきれない臨界揺らぎの重要性を示唆した。さらに、`2512.20121`（金属ガラスの延性とシアーバンド相互作用）と`2503.04443`（深い緩和後のガラス転移）は、熱履歴と局所構造の不均一性が巨視的な力学応答を決定するメカニズムを原子論的に解明している。

これらの研究が共通して示しているのは、「アモルファス固体の物性は局所的な構造の揺らぎと協同的な再配列の競合で決まる」という原理であり、それがガラス形成合金・相変化合金・酸化物ガラスにわたって普遍的に成立することへの認識の深まりである。今後の重要な実験的検証として、4次元電子顕微鏡（4D-STEM）などによるナノスケールでの動的構造可視化や、超高速分光法による緩和プロセスのリアルタイム観測が鍵を握るだろう。

### テーマ C：カロリック効果はなぜここまで効率が上がったのか

弾性カロリック効果（`2503.01186`）と電気カロリック効果（`2602.21520`）は、4月の機能材料研究の中でも特に注目を集めた。All-d-metal Heusler合金（Fe₂CoGa系）における巨大な断熱温度変化（ΔT ≈ 20 K 超）の達成は、フォンノイマン型冷凍サイクルに頼らない固体冷却の実用化に向けた重要なマイルストーンである。この材料系の鍵は、d-d 結合の強さによって磁気秩序と構造相転移が同時に結合していることにあり、印加応力に対して大きなエントロピー変化が生じる。

一方、NaNbO₃系フェロジストーティブリラクサー（`2602.21520`）では、極性フラストレーションによって形成されるナノドメイン構造が、電場に対する大きな分極応答とエントロピー変化をもたらすことが中性子散乱と第一原理計算の組み合わせで明らかにされた。これは「秩序と無秩序の中間状態」、すなわちリラクサー的なナノスケールの不均一性が機能にとって有利に働くという設計思想の実証例である。

関連する研究として、ハフニア強誘電体（`2604.15081`）のエピタキシャル薄膜での相同定は、CMOS互換プロセスで使用可能な強誘電メモリや固体冷却素子の基盤材料として、HfO₂系の重要性を改めて確認するものである。まだ不確定な点は、サイクル疲労（cycling fatigue）の機構と、ナノドメイン構造を再現性よく制御するための合成条件の最適化である。

---

## 4. 手法から見た4月の特徴

4月の論文群における手法タグの集計では、機械学習（Machine Learning）が135件と最多であり、続いて第一原理計算（95件）、モンテカルロ法（68件）、分子動力学（66件）と計算手法が上位4位を占めた。実験手法の中では輸送測定（Transport Measurements、33件）、シンクロトロン計測（23件）、ポンプ-プローブ計測（18件）が目立つ。

第一原理計算（DFT・TDDFT・GW等）は、電子構造・フォノン・交換相互作用・巨視的カロリック効果の第一原理パラメータ推定など多目的に使われており、今や単独で論文を構成するというよりも、他の手法への「インプット生成器」として機能することが多い。`2604.22484`（TDDFT によるマグノン分類）や `2603.14590`（準結晶の DFT）のように電子構造そのものを問う研究では依然として単独主役だが、多くの論文では DFT → MLIP学習 → MD/MC という計算パイプラインの上流に位置している。

機械学習は「単なるデータ近似器」から「物理の意味を持つアーキテクチャ」への移行が鮮明であった。等変ニューラルネットワーク（MACE、mMACE）、物理情報付きニューラルネットワーク（PINNs）、ニューラルオペレーター（NO）がそれぞれ独自の役割を担いつつある。PINNs は `2603.28932` でフォノンボルツマン輸送方程式の多スケール解法に適用され、境界条件の自動満足という従来の有限要素法より有利な点を活かしている。ニューラルオペレーターは `2603.27430` で粘弾性の原子-連続体マルチスケール計算に使われ、高価なアトミスティックシミュレーションを連続体シミュレーターが呼び出す頻度を劇的に削減した。

実験手法との接続として特筆すべきは、ポンプ-プローブ計測（超高速分光）との組み合わせである。`2604.08218`（光誘起ひずみ in BaTiO₃）や `2604.06897`（励起子Mott転移）は、フェムト秒レーザー励起後の超高速ダイナミクスをARPES・X線回折で観測し、第一原理計算で解釈する、という実験と計算の緊密な連携を示している。また、TEM（透過型電子顕微鏡）は機械学習との組み合わせ（`2603.23210`：生成的逆解析によるアモルファス構造解析）で、局所構造のリアルタイム解析を高精度・高速化する方向に進化している。

今後、複数手法の統合が重要になりそうな領域として、強相関電子系の計算が挙げられる。`2603.25557`（DMFT+ニューラルネットワークサロゲート）は、強相関問題の核心にある不純物ソルバーをニューラルネットワークで置き換えることで、DMFT計算を従来比で桁違いに高速化することに成功した。これはDFT+DMFTのような多段階計算スキームを大規模材料探索に適用可能にする可能性を持ち、今後の強相関材料インフォマティクスの基盤技術となりうる。

---

## 5. 材料科学として何が一般化できるか

4月の論文群から浮かび上がる最も汎用性の高い設計原理として、以下の3点を挙げることができる。

**第1の原理：「不均一性」の積極的活用**

従来の材料設計は「欠陥を最小化し、均一な構造を追求する」という方向性を基本としてきた。しかし4月の研究群はこれとは逆の思想を示している。NaNbO₃リラクサー強誘電体のナノドメイン不均一性、アモルファス材料の動的不均一性、高エントロピー合金の化学的短距離秩序（SRO）、金属ガラスのシアーバンド不均一性、これらはいずれも「秩序と無秩序の中間の不均一状態」が機能発現の源泉であることを示している。材料設計において、均一性への収束ではなく、制御された不均一性の導入という方向性が今後さらに重要になる。

**第2の原理：自由度間の結合による機能の創出**

スピン-格子結合（マグノン-フォノン相互作用、`2603.18137`、`2604.12866`）、電荷-格子結合（光誘起ひずみ、`2604.08218`）、スピン-トポロジー結合（トポロジカルホール効果、`2603.14192`）など、4月の研究の多くが「複数の自由度が結合した協同現象」から新機能を引き出している。単一の自由度で材料を特徴付けるのではなく、スピン・軌道・電荷・格子の4自由度の間の結合の強さと符号を設計変数として捉える視点が、現代の機能材料設計の本質となっている。

**第3の原理：データ・計算・実験の閉ループ設計**

4月の論文群では、第一原理計算 → MLIP → 大規模シミュレーション → 実験検証 という閉ループが多数観察された。また、`2512.02916`（因果的機械学習による強誘電体スイッチング最適化）や `2604.02270`（結晶構造生成モデル）に代表されるように、「前向き計算（性質予測）」だけでなく「逆向き設計（目的の性質から材料を探索）」へのシフトも進んでいる。計算インフォマティクスが「発見の後追い」から「発見の先取り」に移行しつつある。

---

## 6. 研究室・教育への接続

4月の研究動向は、大学研究室における研究テーマ設定にいくつかの明確な示唆を与える。

今後の研究テーマとして展開しやすい方向の筆頭は、磁気自由度を考慮したMLIPの開発と応用である。mMACE（`2604.08143`）の登場により、磁性材料への原子スケールシミュレーションが現実的になった。スピンカロリトロニクス材料、磁気秩序材料のフォノン特性、磁気秩序-構造相転移連成の大規模シミュレーションは、今後2〜3年で急増すると予想される研究領域であり、材料工学・物性物理・計算科学の交差する研究室にとっては理想的な参入機会がある。

計算材料学・材料インフォマティクス教育において使いやすい題材として、カロリック効果の第一原理シミュレーションが挙げられる。弾性カロリック効果や電気カロリック効果は、熱力学的サイクル・エントロピー計算・DFT フォノン計算というカリキュラムの流れで自然に教えることができ、さらに「冷凍機の未来」という応用インセンティブで学生の興味を維持しやすい。また、アモルファス材料の相転移（GST系）は、分子動力学の実習題材として使い勝手がよく、ラジアル分布関数・平均二乗変位・動的構造因子という基礎的な解析量と直結している。

実験・計算・AI解析を横断する統合的研究テーマの具体例として、「2次元磁性材料の非平衡ダイナミクスとMLIP開発」がある。CrSBr（`2604.12866`）のようなファン・デル・ワールス積層磁性体は、超高速分光・STM・ラマン分光で実験側から攻め、MLIPでシミュレーション側から補完し、機械学習でパターン認識するという三位一体の研究が可能であり、研究室での分業体制とも相性がよい。

初学者が学ぶべき基礎概念として、4月の論文群から特に重要なものを列挙すると、エンタングルメントエントロピー・量子モンテカルロ法・相転移の対称性破れ・フォノン分散・スピン波（マグノン）・リラクサー誘電体・MLIPのアーキテクチャ（メッセージパッシング・等変性）が挙げられる。これらは個別の論文を読む前に理解しておくことで、論文の「主張の位置付け」がはるかに明確になる。

---

## 7. 最近の論文を読むための基礎概念

4月の論文群を読み解くうえで必須となる基礎概念を、学部4年生レベルから丁寧に説明する。

### 7.1 機械学習原子間ポテンシャル（MLIP）

**直感的説明**

原子と原子の間の相互作用（ポテンシャルエネルギー）を記述する関数を、大量の第一原理計算データから機械学習で学ぶ手法である。料理に例えるなら、「食材（原子配置）を入力すると料理（エネルギー・力）が出力される」レシピを、量子力学の計算から自動的に作る料理ロボットである。

**正確な説明**

従来の原子間ポテンシャルは、関数形を人間が決める（Lennard-Jones、EAM、TERSEOFFなど）。MLIPは代わりに、原子環境の記述子（neighborhood descriptor）を特徴量とし、ニューラルネットワークや線形回帰でポテンシャルエネルギー面を学習する。重要な性質として、(1) 並進・回転・置換不変性（equivariance/invariance）を満たすこと、(2) エネルギーが局所的な原子寄与の和として書けること、(3) 力はエネルギーの解析的微分として計算されることが要求される。

数式で書くと、全エネルギー $E$ は各原子 $i$ の局所エネルギー $\varepsilon_i$ の和で表される：

$$E = \sum_i \varepsilon_i(\{\mathbf{r}_{ij}\}_{j \in \mathcal{N}_i})$$

ここで $\mathbf{r}_{ij} = \mathbf{r}_j - \mathbf{r}_i$ は原子 $j$ から原子 $i$ への相対位置ベクトル、$\mathcal{N}_i$ はカットオフ半径 $r_{\rm cut}$ 以内の近傍原子集合を表す。$\varepsilon_i$ の関数形をニューラルネットワークで学習するのがMLIPである。

等変ニューラルネットワーク（MACE、NequIP など）では、球面調和関数 $Y_l^m$ を使って原子環境のテンソル特徴量を構築し、SO(3)対称性（3次元回転対称性）を厳密に保証する。これにより少ない学習データで高精度なMLIPが構築できる。

**今回の論文群との関係**

MACE（`2603.14700`）は静電相互作用の自己無撞着な取り扱い（電荷平衡）を等変MLIPに組み込み、イオン性材料への適用精度を向上させた。mMACE（`2604.08143`）はスピン自由度（磁気モーメントの大きさと方向）を特徴量に加え、磁気相転移をともなう材料への適用を可能にした。`2604.21222` は、MLIPのカットオフ半径が中距離秩序（1〜2 nm）の再現に直接影響することを実験回折データとの比較で示し、MLIPの適用限界を明確化した。

### 7.2 相変化材料とアモルファス・結晶相転移

**直感的説明**

相変化メモリ（PCM）材料の代表であるGST（Ge₂Sb₂Te₅）は、電流パルスによってアモルファス相（電気抵抗が高い：「0」）と結晶相（電気抵抗が低い：「1」）の間を可逆的に行き来する。この性質がフラッシュメモリの次世代候補として注目される理由だが、「なぜアモルファス → 結晶の転移がこれほど速くできるのか（ナノ秒オーダー）」という基礎的な問いはまだ完全に解明されていなかった。

**正確な説明**

アモルファス固体の結晶化は、核生成（nucleation）と成長（growth）の競合で決まる。古典的な核生成理論では、臨界核の自由エネルギー障壁 $\Delta G^*$ を越える確率が温度の指数関数として表される：

$$J = J_0 \exp\!\left(-\frac{\Delta G^*}{k_{\rm B} T}\right)$$

ここで $J$ は核生成速度、$k_{\rm B}$ はボルツマン定数、$T$ は温度である。GSTのベータ緩和（`2603.01559`）が鍵なのは、この緩和過程がアモルファス相内の局所的な構造再配列を通じて結晶化の「前段階」を準備し、パーコレーション転移として協同的に進行することが分かったからである。これは古典的な核生成理論を超えた描像であり、局所構造の不均一性が巨視的な転移速度を決定していることを示している。

ゾロ温度アバランシェ臨界性（`2604.03573`）は、超冷却液体の動的不均一性（dynamical heterogeneity; DH）を「非熱的な協同的再配列領域（CRR）のアバランシェ」として理解する枠組みを提供する。ランダム場イジングモデル的な描像で、局所的な障壁を越えた原子グループが隣接グループの障壁を下げるという連鎖反応が臨界的ダイナミクスの源泉とされる。

**今回の論文群との関係**

GSTの研究群（`2603.01559`、`2602.15446`、`2604.13843`）は相補的な視点を提供している。`2603.01559` はダイナミクス（結晶化速度）の機構を解明し、`2602.15446` はアモルファス相のギャップ内状態（trap states）の起源を原子スケールで同定し、`2604.13843` はMLIPによるGe-rich組成での相分離過程を追跡した。これらを統合すると、「組成・熱処理・局所構造の制御によってPCMの書き込み速度と保持特性を独立に最適化できる」という材料設計の見通しが得られる。

### 7.3 カロリック効果と固体冷却

**直感的説明**

圧電素子を強く押すと熱くなる（ピエゾ-カロリック効果）。これと同様に、固体材料に応力・電場・磁場などの外場を断熱的に加えると、相転移を通じて温度が変化する現象がカロリック効果である。フロンガスを使う従来の冷凍機の代替技術として、環境負荷の小さい「固体冷却」の実現を目指した研究が急増している。

**正確な説明**

カロリック効果の大きさは、断熱温度変化 $\Delta T_{\rm ad}$ や等温エントロピー変化 $\Delta S$ で評価される。熱力学的な関係から：

$$\Delta T_{\rm ad} = -\int_0^X \frac{T}{C_X}\left(\frac{\partial S}{\partial X}\right)_T dX$$

ここで $X$ は外場（応力 $\sigma$、電場 $E$、磁場 $H$ など）、$C_X$ は外場一定での比熱、$\left(\frac{\partial S}{\partial X}\right)_T$ は等温でのエントロピーの外場依存性である。この量が大きいのは、相転移点近傍で秩序変数が外場に強く応答するためである。

弾性カロリック（`2503.01186`）では、Heusler合金 Fe₂CoGa のマルテンサイト相転移に伴うエントロピー変化が応力印加によって誘起され、$\Delta T_{\rm ad} \approx 20$ K を超える値が達成された。電気カロリック（`2602.21520`）では、NaNbO₃ベース材料のリラクサー的なナノドメイン構造が外場応答を最大化する。

重要な材料設計指針は、「相転移の潜熱を利用する」ことである。一次相転移近傍では潜熱に対応する大きなエントロピー変化が得られるが、同時に疲労（cycling fatigue）の問題も発生しやすい。二次相転移はサイクル安定性に優れるが変化量が小さい。このトレードオフをナノスケールの不均一構造（リラクサー化）で克服しようとするのが現在の主流アプローチである。

**今回の論文群との関係**

弾性カロリック（`2503.01186`）・電気カロリック（`2602.21520`）・光誘起ひずみ（`2604.08218`）・フォノン制御相転移（`2604.14894`）は、それぞれ異なる外場を使って相転移を制御するという共通の設計思想をもつ。これらを横断的に見ると、「外場-秩序変数-格子-電子系の結合をエンジニアリングする」という統一的な設計方法論の輪郭が見えてくる。

### 7.4 強相関電子系とHubbardモデル

**直感的説明**

金属の電気伝導を担う電子は通常「独立粒子」として扱えるが、電子間の強いクーロン反発（相関）が無視できない材料（Mott絶縁体、高温超伝導体、重いフェルミオン系など）では、この独立粒子描像が根本的に崩壊する。このような「強相関電子系」を最も簡素にモデル化したのがHubbardモデルであり、4月の計算研究の多くがこの枠組みで議論された。

**正確な説明**

Hubbardモデルのハミルトニアンは：

$$\hat{H} = -t \sum_{\langle i,j \rangle, \sigma} \hat{c}^{\dagger}_{i\sigma}\hat{c}_{j\sigma} + U\sum_i \hat{n}_{i\uparrow}\hat{n}_{i\downarrow} - \mu\sum_{i,\sigma}\hat{n}_{i\sigma}$$

ここで $t$ はホッピング積分（電子の運動エネルギーを特徴付ける）、$U$ はオンサイトのクーロン反発エネルギー、$\mu$ は化学ポテンシャル（電子数を制御）、$\hat{c}^{\dagger}_{i\sigma}$（$\hat{c}_{i\sigma}$）はスピン $\sigma$ の電子の生成（消滅）演算子、$\hat{n}_{i\sigma} = \hat{c}^{\dagger}_{i\sigma}\hat{c}_{i\sigma}$ は粒子数演算子である。$\langle i,j \rangle$ は最近接格子点のペアを表す。

$U/t \gg 1$ の極限（強相関領域）では半充填（半分の格子点に電子が1個ずつ）で Mott 絶縁体となり、ドープによって超伝導・反強磁性・電荷密度波などの競合する秩序状態が生じる。この「ドープされたMott絶縁体」の物理が銅酸化物高温超伝導体の問題に直結しており、40年以上にわたる集中的な研究の対象である。

`2604.01737`（符号問題なし DQMC）が重要なのは、行列式量子モンテカルロ（DQMC）法を使って符号問題（正負の符号の相殺による統計誤差の爆発）のない経路でd波超流動スティフネスのドーピング依存性を直接計算し、d波ドーム構造を数値的に確立した点である。これは銅酸化物超伝導のHubbard模型起源説を支持する重要な数値証拠となる。

動的平均場理論（DMFT）は、格子上の強相関問題を単一不純物アンダーソン模型に置き換え（埋め込み近似）、自己無撞着に解く手法である。この不純物ソルバーの計算コストがDMFTのボトルネックであり、`2603.25557`はこれをニューラルネットワークで近似することで劇的な高速化を達成した。

**今回の論文群との関係**

`2604.01737`（Hubbard d波超伝導）、`2604.02307`（QMC対称性分解エンタングルメント）、`2604.08430`（ニッケル酸塩ARPES）、`2604.06897`（励起子Mott転移）、`2604.20831`（長距離スピン-1鎖量子臨界）は、それぞれ異なるアプローチで強相関・量子多体物理に切り込んでいる。実験・理論・数値計算がそれぞれ補完的な役割を担い、銅酸化物・ニッケル酸塩・ナノグラフェン系にわたって強相関物理の理解が深まっている。

### 7.5 マグノン-フォノン相互作用と熱スピントロニクス

**直感的説明**

磁石の中では、隣り合うスピンが整列して磁気秩序をつくる。このスピンの集団的振動モードを「マグノン」と呼ぶ。一方、格子の集団的振動モードは「フォノン」と呼ばれる。マグノンとフォノンは互いに独立ではなく、スピン-格子結合を通じて相互作用する。この相互作用を利用すると、熱（フォノン）流によってスピン（マグノン）流を誘起したり、逆に磁場でフォノンを制御したりすることができる。

**正確な説明**

マグノン-フォノン相互作用のハミルトニアンは一般的に：

$$\hat{H}_{\rm mg-ph} = \sum_{k,k',q} V_{k,k',q}^{\rm mg-ph} \hat{\alpha}^{\dagger}_k \hat{\alpha}_{k'} (\hat{b}_q + \hat{b}^{\dagger}_{-q})$$

のような形で書かれる。ここで $\hat{\alpha}_k$（$\hat{\alpha}^{\dagger}_k$）はマグノンの消滅（生成）演算子、$\hat{b}_q$（$\hat{b}^{\dagger}_q$）はフォノンの消滅（生成）演算子、$V_{k,k',q}^{\rm mg-ph}$ は結合定数である。

この結合により、スピンゼーベック効果（温度勾配 → スピン流）、磁気熱伝導率、スピンペルティエ効果（スピン流 → 熱流）などの熱スピントロニクス現象が生じる。`2603.18137`は、圧縮フォノンとせん断フォノンの結合定数の違いが異常磁気熱伝導率の起源であることを示し、フォノンの対称性（音響モードの偏波方向）という新しい設計変数の重要性を指摘した。

CrSBr二層の研究（`2604.12866`）では、音響的に駆動されたマグノンの分散関係を第一原理計算（TDDFT相当）で計算し、特定のフォノン波数でマグノンが効率よく励起される条件を明らかにした。これはレーザー超音波によるスピン制御の設計指針を与える。

**今回の論文群との関係**

`2603.18137`（磁気熱伝導率）、`2604.12866`（CrSBr マグノン-フォノン）、`2603.22696`（スピン波リザーバーコンピューティング）、`2604.22484`（TDDFT マグノン分類）は、マグノンを「信号媒体」「熱媒体」「計算媒体」として使う異なる応用の方向性を示している。これらを統合すると、「マグノンを主役にした熱・情報・エネルギー変換デバイス」という将来像が見えてくる。

### 7.6 量子エンタングルメントと数値計算

**直感的説明**

量子力学では、複数の粒子の状態が古典的には「各粒子の情報の組み合わせ」として記述できないことがある（エンタングル状態）。このエンタングルメントの量は「エンタングルメントエントロピー」で測られ、量子多体系の複雑さ・情報構造・量子相転移の性質を特徴付ける重要な指標となっている。

**正確な説明**

系を部分系 A と部分系 B に分割したとき、エンタングルメントエントロピー $S_A$ はシュミット分解の係数 $\lambda_i$ を使って：

$$S_A = -\text{Tr}\,[\rho_A \log \rho_A] = -\sum_i \lambda_i^2 \log \lambda_i^2$$

で定義される。ここで $\rho_A = \text{Tr}_B|\Psi\rangle\langle\Psi|$ は部分系 A の縮約密度行列である。

**対称性分解エンタングルメント**（`2604.02307`）は、保存電荷（粒子数 $N$、スピン $S_z$ など）ごとにエンタングルメントエントロピーを分解する手法であり、「どの量子数セクターがエンタングルメントに寄与しているか」を精密に調べることができる。量子モンテカルロ法でこれを計算するアルゴリズムを開発した点が新しい。

超伝導相では電子対（クーパー対）の形成に伴う長距離エンタングルメントが特徴的であり、Mott絶縁体とは異なるエンタングルメント構造をもつ。これを計算で直接測定できるようになることで、量子相図の解明が進む。

**今回の論文群との関係**

`2604.02307`と`2604.01737`は相補的な研究である。`2604.01737`がd波超伝導の存在（energy gap structure）を確認したのに対し、`2604.02307`は超伝導相でのエンタングルメント構造を直接測定する道筋を示した。また、`2604.20831`（長距離スピン-1鎖の量子臨界）も対称性分解エンタングルメントを解析に用いており、量子情報的な観点が量子相転移の理解に貢献している。

### 7.7 物理情報付きニューラルネットワーク（PINNs）とニューラルオペレーター

**直感的説明**

偏微分方程式（PDE）を解く従来の数値法（有限要素法、有限差分法など）は格子を切ってから離散化するが、PINNsはニューラルネットワークで解関数そのものを近似し、PDE残差を損失関数に組み込んで学習する。格子なし・境界条件の自動満足・任意の観測点での解の補間という利点がある。

**正確な説明**

フォノンボルツマン輸送方程式（BTE）は：

$$\frac{\partial f_\lambda}{\partial t} + \mathbf{v}_\lambda \cdot \nabla_{\mathbf{r}} f_\lambda = \left.\frac{\partial f_\lambda}{\partial t}\right|_{\rm coll}$$

という形をしており、$f_\lambda$ はフォノンモード $\lambda$（波数 $\mathbf{k}$、偏波 $s$）の分布関数、$\mathbf{v}_\lambda$ は群速度、右辺は散乱項である。この方程式を多スケール・多次元で解くことは計算コストが非常に高い。

`2603.28932`（PINNs for phonon BTE）は、補助ネットワーク付きの統一マルチスケールPINNフレームワークを構築し、Knudsen数（$\rm{Kn} = \ell / L$：平均自由行程 $\ell$ とシステムサイズ $L$ の比）が0（連続体極限、フーリエの熱伝導則）から $\infty$（弾道極限）まで変化する場合に統一的に機能する解法を実現した。

ニューラルオペレーター（NO）は入力関数から出力関数へのマッピング（演算子）をニューラルネットワークで学習する手法である。`2603.27430`では、原子スケールのMDシミュレーションの応力-ひずみ関係を「ニューラルオペレーター（メモリ付き応答演算子）」として学習し、連続体スケールの粘弾性計算に組み込んだ。これにより、毎ステップのアトミスティック計算が不要になり、マルチスケール連成計算が実時間に近い速度で実行できる。

**今回の論文群との関係**

PINNsとニューラルオペレーターは「物理法則を組み込んだ機械学習」という点でMLIPと同根のアプローチである。`2603.28932`（フォノンBTE + PINNs）、`2603.09693`（フェーズフィールド + PINNs）、`2603.27430`（粘弾性 + NO）はそれぞれ異なるPDEへの適用例であり、特定の材料計算における数値法の「次世代」として位置付けられる。今後、より複雑な結合場問題（電磁-熱-力学連成など）へのPINNs適用が広がることが期待される。

### 7.8 準結晶の電子構造と非周期系のDFT

**直感的説明**

結晶は原子が周期的に並んだ構造であり、ブロッホの定理によって電子波動関数を平面波で展開できる。これが通常のDFT（第一原理計算）の基礎となっている。ところが準結晶（quasicrystal）は、回転対称性は高いが並進周期性をもたない非周期的構造である。これをどうDFTで扱うかという問題が `2603.14590` の主題である。

**正確な説明**

準結晶は、5回対称や10回対称など結晶では禁じられた点群対称性をもち、X線・電子線回折パターンは鋭い回折スポットを示しながら非周期的である。数学的には「切射法」（cut-and-project method）で高次元の周期格子から低次元の非周期格子を生成するものとして記述される。

`2603.14590`（Cut-and-Project DFT）は、この高次元周期性を利用してDFTを定式化する。電子波動関数は高次元空間で平面波展開し、射影によって実空間の準周期的波動関数を得る。これにより、準結晶の電子構造・化学結合・フェルミ面トポロジーを第一原理レベルで計算できるようになった。

準結晶は多くのアルミニウム系合金（Al-Mn、Al-Cu-Fe など）で見出されており、その特異な電子構造（フラクタル的バンド構造、擬ギャップ）が低電気伝導率・硬さ・低摩擦係数と関連していると言われる。

**今回の論文群との関係**

`2603.14590`（準結晶DFT）と`2604.07379`（準結晶ナノメカニカル共振器）は異なるアプローチで準結晶を研究しており、相補的な関係にある。前者は電子構造の基礎理解、後者は準結晶の幾何学的秩序をデータ駆動設計でナノデバイスに応用する実用研究である。非周期構造の「美しい数学」が材料科学の「実用性」と交差する稀有な例として注目に値する。

### 7.9 トポロジカルホール効果とスキルミオン物理

**直感的説明**

普通のホール効果は、磁場中を動く電荷キャリアがローレンツ力を受けて横方向に偏向する現象である。強磁性体ではキャリアのスピンとバンド構造のトポロジー（ベリー曲率）による「異常ホール効果」が加わる。さらに、スキルミオンのような「非自明なトポロジーをもつスピンテクスチャー」がある場合には、実空間ベリー位相に由来する「トポロジカルホール効果」が現れる。

**正確な説明**

電子が実空間のスキルミオンスピンテクスチャーを断熱的に通過すると、スピンは局所磁化方向に追随しながら実空間ベリー位相を獲得する。この位相はスキルミオンが張る立体角に対応し、有効磁場 $\mathbf{B}_{\rm eff}$ として：

$$B_{\rm eff}^{z} = \frac{\hbar}{2e}\varepsilon_{\mu\nu z} \mathbf{n}\cdot(\partial_\mu \mathbf{n} \times \partial_\nu \mathbf{n})$$

と表される。ここで $\mathbf{n}$ は単位磁化ベクトル、$\varepsilon_{\mu\nu z}$ はレビ-チビタテンソルである。これが追加のホール抵抗率として可観測であり、スキルミオン密度に比例する。

ツイストFe₃GeTe₂（`2603.14192`）では、単層ではトポロジカルホール効果が見られなかったFe₃GeTe₂の二層体を微小角でツイスト（ねじれ積層）することで、モアレ超格子に起因した巨大なトポロジカルホール効果が出現することを見出した。これはモアレ工学による磁気トポロジーの設計制御という新しい方向性を示している。

**今回の論文群との関係**

`2603.14192`（ツイストFe₃GeTe₂）、`2604.10489`（粒界の交換相互作用）、`2604.07174`（強磁性コンドー効果）はいずれも「電子とスピンテクスチャーの量子力学的絡み合い」を扱うが、それぞれ異なるスケール（モアレ超格子・格子欠陥・単一分子）での現象を議論している。これらをつなぐ共通言語として「ベリー位相」と「トポロジー」の概念が機能している。

---

## 8. 重要キーワード解説

### 1. 機械学習原子間ポテンシャル（MLIP: Machine Learning Interatomic Potential）

**初学者向け**：原子間の力を量子力学計算の精度で、しかし10万〜100万倍高速に計算するニューラルネットワーク。

**研究上の意味**：第一原理計算と分子動力学・モンテカルロ法を橋渡しするキー技術であり、ミクロンスケールの材料シミュレーションを現実の計算機で実行可能にする。

**今回の位置づけ**：4月の最多使用手法（135件）。MACE、mMACE、GST-MLIP、シリカ-MLIPなど多数が登場し、「MLIPの限界と設計指針」が本格的に議論され始めた段階にある。

### 2. 相変化材料（PCM: Phase Change Material）

**初学者向け**：電流パルスで結晶↔アモルファスを高速・可逆的に切り替えられる材料。フラッシュメモリの次世代候補。

**研究上の意味**：書き込み速度・保持特性・サイクル耐性のトレードオフを、原子スケールの局所構造制御によって克服しようとする材料工学の最前線。

**今回の位置づけ**：GST系（`2603.01559`、`2602.15446`、`2604.13843`）が主役。ベータ緩和・パーコレーション・ギャップ内状態の3つの観点から統合的に理解されつつある。

### 3. カロリック効果（Caloric Effect）

**初学者向け**：外場（応力・電場・磁場）の印加で固体材料の温度が変化する現象。フロンガスを使わない固体冷却への応用が期待される。

**研究上の意味**：材料のエントロピー-外場応答を最大化する設計指針の確立が目標。相転移の潜熱・ナノドメイン不均一性・サイクル疲労の機構解明が核心課題。

**今回の位置づけ**：弾性カロリック（`2503.01186`）でのレコード更新と電気カロリック（`2602.21520`）のナノドメイン機構解明が4月の目玉。

### 4. 動的平均場理論（DMFT: Dynamical Mean Field Theory）

**初学者向け**：格子上の強相関電子問題を「一つの格子点に残りの格子点が作る有効浴が結合している」という描像に置き換えて解く理論。

**研究上の意味**：Mott絶縁体・重いフェルミオン系・鉄系超伝導体など、DFTが失敗する強相関系を定量的に扱える数少ない手法。計算コストが高いことが最大のボトルネックであった。

**今回の位置づけ**：`2603.25557`がニューラルネットワークサロゲートでDMFTを大幅高速化。強相関材料インフォマティクスへの道を開いた。

### 5. 量子モンテカルロ法（QMC: Quantum Monte Carlo）

**初学者向け**：量子多体系の基底状態・熱的性質をランダムサンプリングで求める数値計算法。

**研究上の意味**：厳密解に近い精度が得られる一方、「符号問題」（正負の確率振幅の相殺による計算コストの指数的増大）が多くの系で障壁となる。符号問題のない新しい経路の開拓が重要課題。

**今回の位置づけ**：`2604.01737`（DQMC でのd波超伝導証拠）と `2604.02307`（QMCでの対称性分解エンタングルメント）が特に重要。

### 6. 等変ニューラルネットワーク（Equivariant Neural Network）

**初学者向け**：原子配置を回転・鏡映操作しても予測結果が物理的に正しく変換される（エネルギーは不変、力は回転と一緒に変わる）ことを数学的に保証したニューラルネットワーク。

**研究上の意味**：この対称性保証がないMLIPは、少ない学習データでは精度が落ちやすい。等変性を組み込むことで学習効率と精度が大幅に向上する。

**今回の位置づけ**：MACE（`2603.14700`）とmMACE（`2604.08143`）がSO(3)等変アーキテクチャを採用。磁気自由度（スピンベクトル）を等変的に扱うことが磁性MLIP実現の鍵。

### 7. スキルミオン（Skyrmion）

**初学者向け**：渦巻き状のスピンテクスチャーで、トポロジー的に安定な「磁気の泡」。通常の熱ゆらぎでは消滅しない。

**研究上の意味**：スキルミオン1個あたり1ビットの情報を記録する「スキルミオンメモリ」や、スキルミオンを流して情報処理するデバイスへの応用が期待される。その生成・消滅・移動の制御が課題。

**今回の位置づけ**：`2603.14192`（ツイストFe₃GeTe₂）でモアレ誘起スキルミオンのトポロジカルホール効果が観測。モアレ工学が磁気トポロジーの新しい設計手段として台頭。

### 8. 符号なしDQMC（Determinantal QMC without Sign Problem）

**初学者向け**：行列式量子モンテカルロ法において、符号問題（計算コストの指数的増大）が生じない特殊な条件を利用して強相関電子系を解く手法。

**研究上の意味**：Hubbardモデルのd波超伝導相の直接的数値証拠を得ることができる。符号問題のない経路の探索は、理論・計算の重要な研究方向。

**今回の位置づけ**：`2604.01737`がd波超流動スティフネスのドーム構造を確認。銅酸化物超伝導のHubbardモデル記述を支持する決定的証拠の一つ。

### 9. 物理情報付きニューラルネットワーク（PINNs: Physics-Informed Neural Networks）

**初学者向け**：ニューラルネットワークを使って偏微分方程式を解く手法。物理法則（PDEの残差）を損失関数に含めることで、少ないデータで物理的に正しい解を得る。

**研究上の意味**：格子を必要としないため複雑形状の境界条件処理に強く、マルチスケール問題や逆問題（観測値からパラメータを推定）への適用が有望。

**今回の位置づけ**：`2603.28932`（フォノンBTE）と`2603.09693`（フェーズフィールド）での適用例が登場。材料科学の支配方程式をPINNsで解く潮流が本格化。

### 10. 高エントロピー合金（HEA / MPEA: Multi-Principal Element Alloy）

**初学者向け**：4〜5種類以上の金属元素をほぼ等量ずつ混合した合金。従来の「主要元素＋微量添加元素」という合金設計とは根本的に異なる。

**研究上の意味**：広大な組成空間の探索が必要であり、計算・機械学習との相性が非常に良い。化学的短距離秩序（SRO）が機械的特性・拡散挙動・放射線耐性に与える影響の解明が核心課題。

**今回の位置づけ**：`2603.21207`（ML加速MCによる化学秩序）と `2603.24228`（MPEA空孔拡散係数の第一原理計算）がHEAの化学秩序と拡散を系統的に計算。ML加速シミュレーションによるHEA設計が実用段階に近づいている。

---

## 9. 4月後半以降に注目すべき論点

4月の研究動向を踏まえ、今後1〜3年で特に注目すべき論点を整理する。

まず、論文数がさらに増加しそうなテーマとして、**磁気自由度を含むMLIPの実材料への適用**が挙げられる。mMACE（`2604.08143`）の登場により、磁性材料への大規模シミュレーションが現実的になった。スピンカロリトロニクス材料（MnBi₂Te₄など）、マグノン-フォノン結合の強い材料（FeRh、CoFe₂O₄など）への適用と実験検証の論文が急増すると予想される。

次に、**実験的な決定打が必要なテーマ**として、銅酸化物・ニッケル酸塩超伝導体の超伝導機構がある。`2604.01737`の計算的証拠や `2604.08430` のARPES実験は前進を示すが、Fermi面トポロジー・擬ギャップの起源・電荷密度波との競合について実験的に決着していない問題が多く残る。弾道光電子分光（Tr-ARPES）や散漫X線散乱などの超高速・高分解能実験の発展が鍵を握る。

**理論・計算の発展が必要なテーマ**としては、アモルファス固体の非平衡ダイナミクスの統一理論が挙げられる。`2604.03573` のアバランシェ臨界性と `2603.01559` のベータ緩和は重要な洞察を提供したが、これらを統一する場理論的・確率論的な枠組みはまだ存在しない。動的ガラス理論（RFOT理論、モード結合理論）の拡張と計算・実験の接続が重要な研究方向である。

**機械学習・データ駆動手法との接続が進みそうなテーマ**として、カロリック材料の高速スクリーニングが有望である。MLIPによる大規模相転移シミュレーション + 機械学習による逆設計という組み合わせで、「目標ΔT_adと目標サイクル耐性を同時に満たす合金組成の自動探索」が現実的になりつつある。また、因果的機械学習（`2512.02916`）の強誘電体スイッチング制御への適用は、「材料の応答を因果的に理解してから介入する」という新しいパラダイムを示しており、他の機能材料系への展開が期待される。

自分の研究分野（マテリアルズ・インフォマティクス・材料科学）への接続として、**計算材料学と実験の閉ループ**、すなわち「アクティブラーニングで実験条件を最適化しながら材料探索を進める」研究スタイルが急拡大するだろう。`2603.21207`（ML加速MC）や`2604.02270`（結晶構造生成モデル）はその萌芽であり、自動合成ロボット・高スループット測定・逆設計AIの三位一体による材料開発が現実のものとなりつつある。

---

## 10. まとめ

2026年4月の381本の論文群を俯瞰すると、最も強く見えた研究の流れは「計算科学と機械学習の材料科学への完全な統合」である。機械学習ポテンシャルは汎用基盤モデルから応用特化型へ進化し、磁気・静電相互作用を等変に扱う高度なアーキテクチャが実装されるとともに、その限界（中距離秩序の再現能力など）についての批判的検証も始まった。また、PINNsやニューラルオペレーターが物性計算の新しいインフラとして台頭し、従来の有限要素法・差分法を補完・代替しつつある。

材料科学として重要な示唆は、「相転移の制御とエントロピー工学」という設計思想の成熟である。カロリック効果・相変化メモリ・強誘電スイッチング・磁気トポロジーのすべてが、何らかの意味で「秩序変数の自由度に外場を結合させて機能を引き出す」という原理に支えられており、この設計思想は今後さらに洗練されていく。特に、「制御された不均一性（ナノドメイン、リラクサー的構造）」を積極的に活用する設計指針は、均一性追求からの根本的なパラダイムシフトを示している。

まだ不確定な点として、強相関電子系（銅酸化物・ニッケル酸塩超伝導体）の超伝導機構、アモルファス固体の非平衡ダイナミクスの統一理論、MLIPの汎化性能と不確実性定量化の方法論などが残されている。これらは「あと少しで解決できそうな問題」ではなく、今後10年規模の深い研究が必要な本質的な問いである。

今後の研究展開として、機械学習・データ駆動手法と実験の閉ループ化が加速し、「高スループット実験 + MLIPシミュレーション + 逆設計AI」の三位一体による材料探索が主流となっていくだろう。その中で、「物理の理解に基づいた特徴量設計」と「大規模データからの帰納的発見」のバランスをどう取るかが、マテリアルズ・インフォマティクス研究者にとって中心的な問いであり続けると予想される。

---

## 参考論文一覧

| arXiv ID | Title | Role | Main Area | Sub Area | Method | 位置づけ |
|---|---|---|---|---|---|---|
| [2601.05917](https://arxiv.org/abs/2601.05917) | First-principles multiscale modeling of hydrogen diffusion in polycrystalline nickel | anchor | Computation and Theory | Defects and Impurities; Bulk Alloys | First-Principles Calculations; Monte Carlo; Finite Element Method | DFT→kMC→FEMの多スケールモデルでNiの粒界を越える水素拡散を定量化 |
| [2603.21207](https://arxiv.org/abs/2603.21207) | Towards Computational Microscope of Chemical Order-Disorder via ML-Accelerated Monte Carlo Simulation | anchor | Computation and Theory | Bulk Alloys; Phase Transitions | Monte Carlo; Machine Learning; Surrogate Modeling | ML加速MCでHEAの化学的短距離秩序を原子分解能で追跡 |
| [2602.10353](https://arxiv.org/abs/2602.10353) | Self-pinning mechanism for grain boundary stabilization | anchor | Structure and Microstructure | Defects and Impurities; Phase Transitions | Monte Carlo | kMCで粒界自己ピン留め機構を解明し粒成長抑制の設計原理を提示 |
| [2603.01559](https://arxiv.org/abs/2603.01559) | Percolation-driven beta-relaxation enables resonant acceleration of crystallization in amorphous phase-change materials | anchor | Nonequilibrium and Dynamic Response | Phase Transitions; Nonequilibrium Phase Transitions | Molecular Dynamics; Machine Learning | GSTのベータ緩和がパーコレーション転移と結晶化速度を連動させる機構をMLIP+MDで解明 |
| [2603.28932](https://arxiv.org/abs/2603.28932) | A Unified Multiscale Auxiliary PINN Framework for Generalized Phonon Transport | anchor | Computation and Theory | Phonons and Thermal Properties; Thermal Transport | PINNs | フォノンBTEをPINNsで全Knudsen数域で統一的に解くフレームワーク |
| [2603.25557](https://arxiv.org/abs/2603.25557) | Neural network as low-cost surrogates for impurity solvers in quantum embedding methods | anchor | Computation and Theory | Spin Liquids and Quantum Many-Body Systems; Phase Transitions | Machine Learning; Surrogate Modeling | DMFTの不純物ソルバーをNNで置換し強相関計算を大幅高速化 |
| [2510.16721](https://arxiv.org/abs/2510.16721) | Scalable cell filter nudged elastic band (CFNEB) for large-scale transition-path calculations | anchor | Structure and Microstructure | Phase Transitions; Nonequilibrium Phase Transitions | First-Principles Calculations; Machine Learning | MLIPと組み合わせた大規模NEB法で結晶相転移経路を探索 |
| [2603.24228](https://arxiv.org/abs/2603.24228) | Diffusion coefficients of multi-principal element alloys from first principles | anchor | Computation and Theory | Bulk Alloys; Defects and Impurities | First-Principles Calculations; Monte Carlo | MPEA中の空孔拡散係数をKKR-CPA+MCで組成依存性を系統計算 |
| [2603.23210](https://arxiv.org/abs/2603.23210) | Generative Inversion of Spectroscopic Data for Amorphous Structure Elucidation | anchor | Measurement and Spectroscopy | Nanostructures; Defects and Impurities | Machine Learning; Synchrotron Measurements | PDF/XANES → アモルファス構造の生成的逆解析MLモデル |
| [2604.02307](https://arxiv.org/abs/2604.02307) | Detecting Symmetry-Resolved Entanglement: A Quantum Monte Carlo Approach | anchor | Superconductivity and Strongly Correlated Systems | Spin Liquids and Quantum Many-Body Systems; Phase Transitions | Monte Carlo | QMCで対称性分解エンタングルメントエントロピーを直接計算する手法開発 |
| [2604.00115](https://arxiv.org/abs/2604.00115) | A footprint of zero-point entropy in higher-temperature magnetic thermodynamics | anchor | Magnetism and Spin | Spin Liquids and Quantum Many-Body Systems; Low-Temperature Properties | Extreme Condition Measurements | スピンアイスのゼロ点エントロピーが高温磁気熱力学に残す指紋を実験で同定 |
| [2503.01186](https://arxiv.org/abs/2503.01186) | Huge Stress-induced Adiabatic Temperature Change in a High-Toughness All-d-metal Heusler Alloy | anchor | Devices and Functional Materials | Phase Transitions; Coupled-Field Response | Transport Measurements; Extreme Condition Measurements | All-d-metal Heusler合金で巨大弾性カロリック効果（ΔT≈20 K超）を達成 |
| [2602.21520](https://arxiv.org/abs/2602.21520) | Robust Electrocaloric Performance Enabled by Highly-Polar Frustrated Nanodomains in NaNbO3-Based Ferrodistortive Relaxor | anchor | Devices and Functional Materials | Phase Transitions; Coupled-Field Response | Neutron Scattering; First-Principles Calculations | 極性フラストレーションナノドメインが電気カロリック性能を高める機構を解明 |
| [2603.14700](https://arxiv.org/abs/2603.14700) | Design Space of Self-Consistent Electrostatic Machine Learning Interatomic Potentials | anchor | Computation and Theory | Defects and Impurities; Thin Films and Interfaces | Machine Learning; Molecular Dynamics | 自己無撞着静電相互作用を含む等変MLIP設計空間を系統的に調査 |
| [2603.14590](https://arxiv.org/abs/2603.14590) | Cut-and-Project Density Functional Theory for Quasicrystals | anchor | Electronic Structure | Topological Properties; Phase Transitions | First-Principles Calculations | 切射法を用いた準結晶の第一原理DFTフレームワークの構築 |
| [2604.03573](https://arxiv.org/abs/2604.03573) | Zero-temperature Avalanche Criticality Governing Dynamical Heterogeneity in Supercooled Liquids | anchor | Nonequilibrium and Dynamic Response | Phase Transitions; Nonequilibrium Phase Transitions | Molecular Dynamics | 超冷却液体の動的不均一性がゼロ温度アバランシェ臨界性に支配されることをMDで解明 |
| [2603.22696](https://arxiv.org/abs/2603.22696) | Distinct memory properties in spin-wave reservoir computing based on synthetic antiferromagnet | anchor | Devices and Functional Materials | Memory and Information Functionality; Magnons and Spin Dynamics | LLG Simulation; Machine Learning | 合成反強磁性体のスピン波を使ったリザーバーコンピューティング |
| [2604.01737](https://arxiv.org/abs/2604.01737) | Sign-Free Evidence for a d-Wave Superfluid Stiffness Dome in the Doped Hubbard Model | anchor | Superconductivity and Strongly Correlated Systems | Spin Liquids and Quantum Many-Body Systems; Phase Transitions | Monte Carlo | 符号問題なしDQMCでドープHubbardモデルのd波超流動スティフネスドームを直接証明 |
| [2604.08440](https://arxiv.org/abs/2604.08440) | Revealing the nature of the charge density wave order of ErTe3 via Raman scattering under anisotropic strain | anchor | Electronic Structure | Charge Orbital and Spin Order; Low-Dimensional Materials | Synchrotron Measurements; Extreme Condition Measurements | ひずみ下ラマン散乱でErTe₃のCDW秩序の対称性と性質を解明 |
| [2604.07174](https://arxiv.org/abs/2604.07174) | Observation of the Ferromagnetic Kondo Effect | anchor | Superconductivity and Strongly Correlated Systems | Low-Temperature Properties; Low-Dimensional Materials | STM/STS | ナノグラフェン量子ドットで強磁性コンドー効果を初めて実験観測 |
| [2604.08218](https://arxiv.org/abs/2604.08218) | Giant photostriction in lead-free ferroelectric stemming from photo-excited thermalized carriers | anchor | Multiphysics and Coupled Phenomena | Coupled-Field Response; Nonequilibrium Phase Transitions | First-Principles Calculations; Pump-Probe Measurements | 熱化キャリア励起による巨大光誘起ひずみの機構をBaTiO₃で解明 |
| [2604.06897](https://arxiv.org/abs/2604.06897) | Excitonic Mott transition without population inversion | anchor | Nonequilibrium and Dynamic Response | Excitons and Photoinduced Response; Low-Dimensional Materials | Pump-Probe Measurements; First-Principles Calculations | 反転なし励起子Mott転移を超高速分光と第一原理計算で実証 |
| [2604.08430](https://arxiv.org/abs/2604.08430) | Three-Dimensional Electronic Structures in Superconducting Ruddlesden-Popper Bilayer Nickelate Films | anchor | Superconductivity and Strongly Correlated Systems | Electronic Structure; Thin Films and Interfaces | Synchrotron Measurements | 二層ニッケル酸塩超伝導薄膜の3次元フェルミ面をARPESで解明 |
| [2604.08143](https://arxiv.org/abs/2604.08143) | Equivariant Many-body Message Passing Interatomic Potentials for Magnetic Materials | anchor | Computation and Theory | Magnetism and Spin; Low-Dimensional Materials | Machine Learning; First-Principles Calculations | スピン等変メッセージパッシングで磁性材料のMLIP（mMACE）を構築 |
| [2512.02916](https://arxiv.org/abs/2512.02916) | Intervention Strategies for Polarization Switching in Hybrid Improper Ferroelectrics | anchor | Computation and Theory | Phase Transitions; Coupled-Field Response | Machine Learning; First-Principles Calculations | 因果的MLで強誘電分極スイッチングへの最適介入戦略を特定 |
| [2602.15446](https://arxiv.org/abs/2602.15446) | On the origin of in-gap states in amorphous Ge2Sb2Te5 | anchor | Computation and Theory | Phase Transitions; Defects and Impurities | Machine Learning; Molecular Dynamics | MLIP-MDでアモルファスGSTのギャップ内局在状態の起源を原子スケールで同定 |
| [2603.09693](https://arxiv.org/abs/2603.09693) | Physics-informed neural operator for predictive parametric phase-field modelling | anchor | Computation and Theory | Phase Transitions; Nonequilibrium Phase Transitions | PINNs; Machine Learning | PINNsベースのニューラルオペレーターでパラメトリックフェーズフィールド計算を加速 |
| [2604.07867](https://arxiv.org/abs/2604.07867) | Stochastic Thermodynamics for Autoregressive Generative Models: A Non-Markovian Perspective | anchor | Computation and Theory | Nonequilibrium Phase Transitions; Memory and Information Functionality | Machine Learning | 自己回帰生成モデルのエントロピー生成を確率的熱力学の枠組みで分析 |
| [2604.02270](https://arxiv.org/abs/2604.02270) | Crystalite: A Lightweight Transformer for Efficient Crystal Modeling | anchor | Computation and Theory | Nanostructures; Phase Transitions | Machine Learning; Inverse Design | 軽量Transformerで結晶構造生成と性質予測を統合した逆設計モデル |
| [2603.27430](https://arxiv.org/abs/2603.27430) | Neural operator accelerated atomistic to continuum concurrent multiscale simulations of viscoelasticity | anchor | Computation and Theory | Multiphysics and Coupled Phenomena; Nonequilibrium and Dynamic Response | Multiscale Computation; Surrogate Modeling | ニューラルオペレーターで原子-連続体並行マルチスケール粘弾性計算を加速 |
| [2602.10034](https://arxiv.org/abs/2602.10034) | Multiscale Modeling of Metal/Oxide/Metal Conductive Bridging Random Access Memory Cells | anchor | Devices and Functional Materials | Thin Films and Interfaces; Defects and Impurities | Multiscale Computation; First-Principles Calculations | DFT→MD→FEMの多スケールモデルでCBRAMセルの抵抗スイッチング機構を再現 |
| [2604.07379](https://arxiv.org/abs/2604.07379) | Quasicrystal Architected Nanomechanical Resonators via Data-Driven Design | anchor | Devices and Functional Materials | Nanostructures; Sensing | Machine Learning; Finite Element Method | データ駆動設計で準結晶対称性を持つナノメカニカル共振器を最適化 |
| [2603.14192](https://arxiv.org/abs/2603.14192) | Emergent giant topological Hall effect in twisted Fe3GeTe2 metallic system | anchor | Magnetism and Spin | Skyrmions; Low-Dimensional Materials | Transport Measurements | ツイストFe₃GeTe₂二層体でモアレ誘起の巨大トポロジカルホール効果を発見 |
| [2603.18137](https://arxiv.org/abs/2603.18137) | Disentangling Shear and Compression Phonons: Route to Anomalous Magnetothermal Transport | anchor | Multiphysics and Coupled Phenomena | Coupled-Field Response; Thermal Transport | Transport Measurements; First-Principles Calculations | せん断・圧縮フォノンの結合定数の違いが異常磁気熱伝導率の起源であることを解明 |
| [2604.10489](https://arxiv.org/abs/2604.10489) | The effect of grain boundaries on magnetic exchange interactions in iron | anchor | Magnetism and Spin | Magnetic Domains and Domain Walls; Iron Loss and Energy Dissipation | First-Principles Calculations; Monte Carlo | 鉄の粒界近傍で交換相互作用が変調することをDFT+MCで定量化 |
| [2603.27307](https://arxiv.org/abs/2603.27307) | Alloying Controlled Tuning of Interfacial Spin Orbit Interaction and Magnetic Damping in Crystalline FeCo Alloys | anchor | Magnetism and Spin | Thin Films and Interfaces; Spin-Orbit Interaction | Transport Measurements | FeCo合金化でインターフェイスSOCと磁気ダンピングを独立制御 |
| [2604.15081](https://arxiv.org/abs/2604.15081) | Disentangling the ferroelectric phases of epitaxial hafnia | anchor | Devices and Functional Materials | Thin Films and Interfaces; Phase Transitions | Synchrotron Measurements | シンクロトロンXRDでエピタキシャルHfO₂強誘電相を分離同定 |
| [2604.07061](https://arxiv.org/abs/2604.07061) | Topological Defects in Amorphous Solids | anchor | Structure and Microstructure | Defects and Impurities; Bulk Alloys | Molecular Dynamics | アモルファス金属中のトポロジカル欠陥の分類とその力学的役割をMDで解析 |
| [2604.12866](https://arxiv.org/abs/2604.12866) | Acoustically-driven magnons in CrSBr bilayers | anchor | Multiphysics and Coupled Phenomena | Magnons and Spin Dynamics; Low-Dimensional Materials | — | CrSBr二層でのマグノン-フォノン結合を第一原理的に解析 |
| [2604.15394](https://arxiv.org/abs/2604.15394) | Atomic-scale order enables high thermal boundary conductance at β-Ga₂O₃/4H-SiC interfaces | anchor | Phonons and Thermal Properties | Thermal Transport; Heterostructures | Machine Learning; Molecular Dynamics | MLIP-MDで原子スケール界面秩序がβ-Ga₂O₃/SiC界面熱コンダクタンスを高める機構を解明 |
| [2604.14894](https://arxiv.org/abs/2604.14894) | Reversable phase transitions in ferroic two-dimensional Nb2O2I4 through optically excited coherent phonons | anchor | Devices and Functional Materials | Low-Dimensional Materials; Phase Transitions | First-Principles Calculations | コヒーレントフォノン励起で2次元Nb₂O₂I₄の可逆相転移を制御 |
| [2602.14713](https://arxiv.org/abs/2602.14713) | Antiferromagnetic Barkhausen noise induced by weak random-field disorder | anchor | Magnetism and Spin | Magnetic Domains and Domain Walls; Nonequilibrium and Dynamic Response | Monte Carlo | 弱いランダム場障害が誘起する反強磁性バルクハウゼンノイズをMCで解析 |
| [2604.11658](https://arxiv.org/abs/2604.11658) | Neuromorphic computing with optomechanical oscillators | anchor | Devices and Functional Materials | Nonlinear Response; Coupled-Field Response | Machine Learning | 光機械振動子を使ったニューロモーフィックリザーバーコンピューティングの実証 |
| [2604.13843](https://arxiv.org/abs/2604.13843) | On phase separation and crystallization of Ge-rich GeSbTe alloys from atomistic simulations with a machine learning interatomic potential | anchor | Devices and Functional Materials | Phase Transitions; Memory and Information Functionality | Machine Learning; Molecular Dynamics | Ge-rich GeSbTeのMLIP-MDで相分離と結晶化過程を原子スケールで追跡 |
| [2604.20547](https://arxiv.org/abs/2604.20547) | A computational alloy design framework for the promotion of amorphous grain boundary complexions | anchor | Materials Synthesis and Processing | Thin Films and Interfaces; Defects and Impurities | First-Principles Calculations | DFTベースの合金設計フレームワークでアモルファス粒界コンプレクションの促進条件を特定 |
| [2512.20121](https://arxiv.org/abs/2512.20121) | Linking Thermal History to Shear Band Interaction and Macroscopic Ductility in Metallic Glasses | anchor | Structure and Microstructure | Defects and Impurities; Bulk Alloys | Molecular Dynamics | 熱履歴とシアーバンド相互作用の関係から金属ガラスの延性をMDで予測 |
| [2503.13833](https://arxiv.org/abs/2503.13833) | Causal Discovery from Data Assisted by Large Language Models | anchor | Computation and Theory | Phase Transitions; Charge Orbital and Spin Order | Machine Learning; TEM | LLMを補助とした因果発見アルゴリズムの材料データへの適用 |
| [2604.20277](https://arxiv.org/abs/2604.20277) | Domain-Wall-Mediated Ultralow-Barrier Sliding and Pinning in Ferroelectric Moiré Superlattices Revealed by Machine Learning | anchor | Devices and Functional Materials | Low-Dimensional Materials; Memory and Information Functionality | Machine Learning; Molecular Dynamics | MLIP-MDでモアレ強誘電体のドメイン壁ダイナミクスを超低障壁スライドとして解明 |
| [2604.20831](https://arxiv.org/abs/2604.20831) | Unconventional Quantum Criticality in Long-Range Spin-1 Chains: Insights from Entanglement Entropy and Bipartite Fluctuations | anchor | Computation and Theory | Spin Liquids and Quantum Many-Body Systems; Phase Transitions | Monte Carlo | 長距離相互作用スピン-1鎖の非慣用的量子臨界性をQMCで調査 |
| [2604.21222](https://arxiv.org/abs/2604.21222) | Neutron and X-ray Diffraction Reveal the Limits of Long-Range Machine Learning Potentials for Medium-Range Order in Silica Glass | anchor | Computation and Theory | Structure and Microstructure; Bulk Alloys | Molecular Dynamics; Machine Learning; Neutron Scattering | 中性子・X線回折でMLIPのシリカ中距離秩序再現限界を実験的に検証 |
| [2503.04443](https://arxiv.org/abs/2503.04443) | On the nature of the glass transition in metallic glasses after deep relaxation | anchor | Nonequilibrium and Dynamic Response | Bulk Alloys; Phase Transitions | Transport Measurements | 深い緩和後の金属ガラスのガラス転移の性質を輸送測定で解明 |
| [2604.19964](https://arxiv.org/abs/2604.19964) | Nudged Elastic Membranes for Constructing Reduced Two-Dimensional Potential Energy Surfaces | anchor | Computation and Theory | Defects and Impurities; Nonequilibrium Phase Transitions | Monte Carlo; Machine Learning | ナジドエラスティックメンブレン法で2次元ポテンシャルエネルギー面を効率構築 |
| [2604.22484](https://arxiv.org/abs/2604.22484) | Classifying magnons in itinerant ferromagnets from linear response TDDFT: Fe, Ni and Co revisited | anchor | Electronic Structure | Magnons and Spin Dynamics; Bulk Alloys | First-Principles Calculations; Monte Carlo | TDDFTでFe・Ni・Coのマグノンを分類し従来の描像を再検討 |

