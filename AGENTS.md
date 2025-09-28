# Repository Guidelines

このリポジトリの出力は全て日本語で記載してください。

## プロジェクト構成とモジュール配置

`webinars/` はトピックごとの資料をまとめるルートです。`webinars/responsive_design` には講義原稿やスライド案が Markdown で格納され、`webinars/web_components` はコードデモ、画像、ワークショップ用スクリプトを保持します。`webinars/web_components/samples` 配下には `multiple-frameworks`（React/Vue/Angular 例）、`custom-elements`、`shadow-dom` などのサブフォルダがあり、各デモは関連アセットを同階層にまとめてください。スピーカー準備用メモは `CANDIDATE.md` にあります。新しいウェビナーは `webinars/<topic>` に作成し、README と実行可能なサンプルを必ず追加します。

## ビルド・テスト・開発コマンド

リポジトリ直下で `pnpm install` を実行し、ワークスペース依存関係をセットアップします。`webinars/web_components` で `pnpm react`、`pnpm vue`、`pnpm vue_ce` を起動すると、対応する Vite 設定がポート 3001〜3003 で立ち上がります。純粋な HTML デモには `pnpm exec live-server samples/custom-elements/basic` を使って軽量サーバーを起動してください。その他のコマンドは担当したウェビナーの README に追記します。

## コーディングスタイルと命名規約

TypeScript・JavaScript・Markdown の混在を前提に、インデントは 2 スペース、サンプルコードではアロー関数を優先します。ファイル名は `shadow-dom-demo.ts` のようにダッシュ区切りで統一し、共通コードはフレームワークに依存しない設計を心掛けます。外部 URL をハードコードせず、アセットは利用するセッション配下の `img/` に配置してください。コードを編集した際は `pnpm exec prettier --write <path>` で整形します。

## テストガイドライン

自動テストはまだ整備されていないため、Vite のライブプレビューで動作確認とレスポンシブ挙動を検証します。新しいデモを追加する際は、手動確認手順とチェックすべきブレークポイントを `README.md` に明記してください。Vitest や Playwright などのテストツールを導入する場合は `package.json` にスクリプトを追加し、このガイドを更新します。

## コミットとプルリクエスト

コミットメッセージは既存の `type : summary` 形式（例: `feat : add shadow dom walkthrough`, `doc() : update agenda`）に合わせ、変更をウェビナーディレクトリ単位でまとめます。プルリクエストでは関連するアジェンダ Issue をリンクし、実行した検証コマンドやスクリーンショットを記載し、新たに使用するポートや環境変数があれば明示してください。

## セキュリティと構成の注意

Vite 5 を利用するデモは Node 18 以上での実行を推奨します。動作前に `node -v` でバージョンを確認してください。`.env` ファイルや録画素材はリポジトリにコミットせず、共有ドライブに保管し、README から参照リンクを記載します。
