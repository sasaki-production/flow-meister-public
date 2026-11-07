# flow-meister

Next.js（App Router）で作成したコーポレートサイトです。学習用に、お知らせ機能を microCMS と WordPress の両方で実装しています。

## 技術スタック

- Next.js / React / TypeScript
- CSS Modules
- microCMS（お知らせ）
- WordPress REST API（ニュース）
- ESLint / Stylelint

## セットアップ

1. 依存パッケージをインストール

   ```bash
   npm install
   ```

2. `.env.example` をコピーして `.env.local` を作成し、値を設定

   ```bash
   cp .env.example .env.local
   ```

   | 変数名 | 内容 |
   |---|---|
   | `MICROCMS_SERVICE_DOMAIN` | microCMSのサービスドメイン |
   | `MICROCMS_API_KEY` | microCMSのAPIキー |
   | `NEXT_PUBLIC_WORDPRESS_POSTS_URL` | WordPress REST APIの投稿エンドポイント |
   | `NEXT_PUBLIC_WORDPRESS_CATEGORIES_URL` | WordPress REST APIのカテゴリエンドポイント |

3. 開発サーバーを起動

   ```bash
   npm run dev
   ```

   http://localhost:3000 で確認できます。

## 注意

学習用プロジェクトです。サイト内の画像・文章はダミーです。
