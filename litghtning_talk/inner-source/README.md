---
marp: true
theme: classmethod
paginate: true
title: サンプルタイトル
---

<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true });
</script>

<style>
.mermaid {
  background: transparent !important;
}
</style>

<!-- _class: title -->
<!-- _paginate: false -->

![classmethod-logo w:400px](../lt-logo-bk.png)

# Inner Sourceのススメ

2025/09/30
@ebi-yu

---

# アジェンダ

- Inner Sourceとは
- 具体的に何をする活動なのか
- なぜ導入したいのか
- 導入で得られる副次的な効果
- 導入のために必要なこと
- まとめ
- 他企業での事例

---

# Inner Sourceとは

**「意思決定プロセス」「コードの透明性」「共創」といったオープンソース開発の考え方を企業など組織内でのソフトウエア開発に取り入れる取り組み**

<br>

> InnerSourceはオープンソースソフトウェア開発から学んだ教訓を、企業が社内でのソフトウェア開発方法に適用します。
>
> 主にクローズドソースのソフトウェアを構築している企業にとって、InnerSourceはサイロを打破し、内部コラボレーションを促進し、新しいエンジニアのオンボーディングを加速し、ソフトウェアをオープンソース世界に還元する機会を特定するための素晴らしいツールとなります。

<https://innersourcecommons.org/ja/>

---

# 具体的に何をする活動なのか

- 社内で管理されているソースコードを **「組織やチームの壁」** を越えて公開します。
- 社内の誰もが **「ソースコードを修正したり、新しい機能を提案」** できるようにします。
- **InnerSourceに参加しない選択をすることも可能です。**
  - 社内に公開できないプロジェクト、機能提案を必要としないプロジェクトなど。

<br>

## → OSSのような「オープンなコラボレーションを促進する文化」を社内に取り入れる

---

# なぜ導入したいのか

#### サービスの部品化の促進

「サービスの部品化と再利用」を進めるには **「作られた部品がきちんとメンテナンスされていること」** が重要である。一つのチームや個人だけではメンテナンスの維持は難しい。

<br>

#### 組織間コラボレーションの促進

組織間の壁を越えたコラボレーションができないと新しいアイデアや技術が生まれにくい。
これは長期的に見て **「イノベーションの阻害」** に繋がる。

<br>

#### 他のチーム管理のサービスが律速になる

あるチームが管理しているサービスに機能を追加しり、バグを修正したい場合に **「そのチームの対応を待つ必要がある」** といったことが発生する。これにより開発のスピードが落ちる。

---

# 導入で得られる副次的な効果

#### ドキュメントの整備の促進

InnerSourceを導入するにはチーム外の人が理解できるように **「READMEやCONTRIBUTINGなどのドキュメントを整備する」** 必要がある。結果的に **「ドキュメントの質が向上」** する。

<br>

#### 社員のエンゲージメントの向上

自分の所属するチーム以外のプロジェクトに参加できることで **「新しい刺激を得たり、成長を感じる」** ことができる。これにより社員の精神的な満足度が向上し、離職率の低下が期待できる。

<br>

#### 採用活動でのアピールポイントになる

InnerSourceを導入していることは **「技術的に先進的な企業である」** ことのアピールポイントになる。これによりより優秀な人材を採用できる可能性が高まる。

---

# 導入のために必要なこと

#### 権限の明確化

InnerSourceを導入するためには **「誰がどのコードにアクセスできるか」** を明確にする必要がある。これにより **「セキュリティリスクを最小化」** できる。

<br>

#### ドキュメントの整備

チーム外の人が理解できるように **「READMEやCONTRIBUTINGなどのドキュメントを整備する」** 必要がある。また、IssueやPull Requestのテンプレートも用意する必要がある。

<br>

#### チーム外のタスクを行うことを許容する

InnerSourceを導入するためには自分の本業以外のタスクを行うことを許容する必要がある。
プロジェクトやチーム内だけではなく **「組織全体の目標を達成するために貢献する」** 文化や **「心理的安全性」** を醸成する必要がある。

---

# まとめ

- InnerSourceは **「組織やチームの壁を越えたコラボレーションを促進する」** 取り組み
- InnerSourceを導入することで **「サービスの部品化の促進」「組織間コラボレーションの促進」「他のチーム管理のサービスが律速になる問題の解消」** などの効果が期待できる
- 導入には **「権限の明確化」「ドキュメントの整備」「チーム外のタスクを行うことを許容する」** などが必要

---

<!-- _class: all-text-center align-center -->

![classmethod-logo w:400px](../lt-logo-bk.png)

# ご清聴ありがとうございました

---

# 他企業での事例

#### Microsoft

製品群を横断してInnerSourceを実践。
5年以上の運用実績を持ち、ガバナンスやプロセス設計の知見を蓄積。
「どのプロジェクトを開くか」を明確にし、透明性と品質を両立。

<https://innersourcecommons.org/ja/stories/?utm_source=chatgpt.com>

<br>

#### Salesforce

共通GitモジュールをInnerSource化。
各プロジェクトから機能追加や改善のPRが行われるようになり、
チーム横断の共創文化が芽生えた。

<https://engineering.salesforce.com/stronger-together-an-inner-sourcing-case-study-b616ff5c1923/?utm_source=chatgpt.com>

---

# 他企業での事例

#### ニフティ株式会社

社内にインナーソースを段階的に導入。まず業務周辺ツールや共通機能モジュールから「お試し導入」し、徐々に範囲を拡げていく方式を採用。複数部署からプラットフォームチームへのコントリビュートを発生させ、透明性強化と開発効率化を目指している。

<https://engineering.nifty.co.jp/blog/30163?utm_source=chatgpt.com>

<br>

#### バンダイナムコスタジオ

プラットフォームエンジニアリング／技術共通基盤分野で、インナーソース的な開発コラボレーションを実践。社内共通モジュールやAPI設計改善のために部署横断でプルリクエストを受け付ける体制を整えつつある。

<https://www.docswell.com/s/yaegashi/ZXEERP-cedec-2024?utm_source=chatgpt.com>

---

# 他企業での事例

#### メルカリ

<https://github.com/customer-stories/mercari>

#### Spotify

<https://github.com/customer-stories/spotify>

#### GitLab

<https://about.gitlab.com/topics/version-control/what-is-innersource/>

#### Zendesk

<https://github.com/customer-stories/zendesk>
