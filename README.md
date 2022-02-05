# manekin-hew

## 実行手順

### コンテナをビルド
`docker-compose build`

### npmインストール
`docker-compose run front npm install`

### コンテナの起動
`docker-compose up -d`

### DB作成
`docker-compose run api rails db:create`

### マイグレーションファイルを反映
`docker-compose run api rails db:migrate`

### seedの読み込み
`docker-compose run api rails db:seed`

### サーバの停止
`docker-compose down`


## 便利コマンド

### マイグレーションのリセット
`docker-compose run api rails db:migrate:reset`