---
marp: true
theme: classmethod
paginate: true
title: Transformers.jsを使ってWebブラウザ上でAIモデルを動かしてみた
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

![lg-logo w:400px](../lt-logo-bk.png)

# Transformers.jsを使ってWebブラウザ上でAIモデルを動かしてみた

2025/09/30
@ebi-yu

---

# はじめに

### ○ このLTで話すこと

- Transformers.jsの概要
- 簡単な仕組みの説明
- Webブラウザでのデモ

<br>

### ○ 話さないこと

- 具体的なTransformers.jsの仕組み
- カスタムモデルの作り方
- Node.jsでのデモ

---

# アジェンダ

1. Transformers.jsとは
2. 簡単な仕組みの説明
3. なぜTransformers.jsを使うのか
4. デモ
5. 早く動かすための工夫
6. まとめ

---

# 1. Transformers.jsとは

Transformers.jsは「AIモデルを簡単に扱うためのJSライブラリ」です。

Hugging Faceという「機械学習のためのツールを共有、利用するためのオープンソースプラットフォーム」を提供している企業により開発されています。

**Transformers.jsを使うと 「Node.jsやWebブラウザ上にAIモデルを展開し、外部との通信なしで推論を実行」できます。**

<br>

<https://github.com/huggingface/transformers.js>

---

# 使えるモデルの例

##### 自然言語処理

| ID | タスク | 説明 |
|----|--------|------|
| translation | 翻訳 | 文章をある言語から別の言語に翻訳します。 |
| question-answering | 質問応答 | 質問に対して、文章中から答えを見つけて返します。 |
| text-generation | テキスト生成 | 文章の続きを生成します。 |

##### 画像処理

| ID | タスク | 説明 |
|----|--------|------|
| background-removal | 背景除去 | 画像の背景を除去し、透明にします。 |
| object-detection | 物体検出 | 画像中の物体を検出し、位置とラベルを返します。 |

##### 音声処理

| ID | タスク | 説明 |
|----|--------|------|
| automatic-speech-recognition | 音声認識 | 音声をテキストに変換します。 |
| text-to-speech | テキスト読み上げ |   テキストを音声に変換します。 |

---

# 2. 簡単な仕組みの説明

Transformers.jsは、ダウンロードしたモデルをブラウザのIndexedDBに保存します。

保存されたモデルは`WebGL/WebGPU/WASM(WebAssembly)`などの技術を使用して、ブラウザ上に展開され、初期化されます。
モデルの展開にどれを使うかは、環境に応じて自動的に選択されます。

推論の要求が来ると、Transformers.jsは非同期でモデルを実行し、結果をメインスレッドに返します。

<br>

<pre class="mermaid">
%%{init:{'theme':'default'}}%%
graph LR
  A[ブラウザ] --> B[Transformers.js<br/>読み込み]
  B --> C[モデルダウンロード<br/>IndexedDB保存]
  C --> D[モデル読み込み<br/>メモリ展開]
  D --> E[推論実行<br/>非同期処理]
  E --> F[結果をメインスレッドに<br/>返す]

  subgraph WebGL_WebGPU_WASM ["WebGL/WebGPU/WASMでの処理"]
    D
    E
  end
</pre>

---

# WebGL/WebGPU/WASMとは

- **WebGL** : ブラウザ上で3Dグラフィックスを描画するためのAPI。推論速度はWASMよりも高速。しかし、WASMよりモデルの展開に時間がかかることがある。
- **WebGPU** : WebGLの後継技術。推論速度はWebGLよりも高速だが、対応しているブラウザが少ない。
- **WASM(WebAssembly)** : ブラウザ上でJS以外の言語で書かれたコードを実行するための技術。
推論速度はWebGL/WebGPUよりも遅いことが多い。

<br>

#### 推論速度

WebGPU > WebGL > WASM

#### 初回の展開速度

WASM > WebGL > WebGPU

---

# AIモデルの形式

Transformers.jsでは`.onnx`形式のモデルのみがサポートされています。

`.onnx`形式は、Microsoftが開発した「AIモデルの相互運用性を保つためのオープンフォーマット」です。

Pythonを使って学習したモデルは`.onnx`形式ではなく、`.pt`や`.bin`などの形式で保存されることが多く、Transformers.jsで利用するには`.onnx`形式に変換する必要があります。

変換はOptimumというHugging Faceが提供しているツールを使うと簡単にできます。

<br>

<https://huggingface.co/docs/optimum/index>

---

# 3. なぜTransformers.jsを使うのか

### 普通にGPT-4やClaude Sonnetなどの汎用モデルを使った方が良いのでは？

<br>

→ 「オフラインで動作する」「コストを抑えられる」「プライバシー保護ができる」などのメリットがあります

<br>

- **オフラインで動作する** : ネットワーク接続が不要で、インターネット環境に依存しない
- **コストを抑えられる** : API利用料金が一切かからない
- **プライバシー保護ができる** : ユーザーデータを外部に送信せず、完全にローカルで処理される

<br>

→ 逆に言うとこれらのメリットが不要な場合は、汎用モデルを使った方が良い。

---

# 4. デモ : HTML+JS

- 生のHTML+JSで実装
- `object-detection`を使って画像中の物体を検出する
- `Xenova/detr-resnet-50`モデルを使用

<br>

<https://github.com/ebi-yu/study-transformers-js/tree/main/samples/vanilla-app>

---

# 4. デモ : Vue.js

- Vue.jsで実装
- `translation`を使って英語の文章を日本語に翻訳する
- `Xenova/m2m100_418M`モデルを使用
- モデルの展開の進捗をプログレスバーで表示

<https://github.com/ebi-yu/study-transformers-js/tree/main/samples/vue-app>

---

# 5. 早く動かすための工夫

#### ○ できるだけ軽量なモデルを使う

→ モデルのサイズが小さいほど、ダウンロードと展開が速くなる

#### ○ web-workerを使い、メインスレッドとは別スレッドで推論を実行する

→ メインスレッドがブロックされないため、UIの応答性が向上する

#### ○ モデルの展開を初回のページ読み込み時にバックグラウンドで行う

→ ユーザーが推論を要求する前にモデルが準備されているため、待ち時間が短縮される

#### ○ IndexedDBに保存されたモデルをキャッシュする

→ `env.allowLocalModels`オプションを有効にすることで、モデルの再ダウンロードを防ぎ、展開時間を短縮できる

---

# 避けられない課題

#### ○ 初回のモデル展開時間

→ モデルの展開はサイトにアクセスした後に行われるため、初回の展開時間はどうしてもかかる  

#### ○ モデルのサイズと精度のトレードオフ

→ 軽量なモデルを使うことはできるが、精度が犠牲になる可能性がある

#### ○ ブラウザの互換性

→ WebGL/WebGPU/WASMのサポート状況がブラウザによって異なるため、すべてのユーザーに同じ体験を提供するのが難しい

---

# 6. まとめ

- Transformers.jsはブラウザ上でAIモデルを動かすための強力なツール
- オフライン動作、コスト削減、プライバシー保護などのメリットがある
- 軽量なモデルの選択、web-workerの活用、バックグラウンドでのモデル展開などの工夫でパフォーマンスを向上できる
- ただし、初回の展開時間、モデルのサイズと精度のトレードオフ、ブラウザの互換性などの課題も存在する
- 一部AIモデルはライセンスに注意が必要

---

<!-- _class: all-text-center align-center -->

![classmethod-logo w:400px](../lt-logo-bk.png)

# ご清聴ありがとうございました
