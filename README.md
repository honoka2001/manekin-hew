# MANEKIN
![](https://i.imgur.com/8ALNb8m.jpg)

## 概要
 コーディネートごと服を売買できるフリマサイトです。
コーディネートごと売ることで、1着ずつ売るよりもまとまった利益を得ることができるので、服を **捨てずに売る** ことを促進でき、**服の廃棄量削減**に繋がります。

![](https://i.imgur.com/1JA6eWR.jpg)
![](https://i.imgur.com/2flcDUn.png)
![](https://i.imgur.com/Qf83goz.png)
![](https://i.imgur.com/zTql0C8.png)

## 背景
![](https://i.imgur.com/tqBtkbm.png)

 衣服のプチプラブームにより、最新の流行のスタイルを低価格かつ、短いサイクルで大量生産、販売するファストファッションが流行しています。流行に敏感で同じ服をワンシーズンしか着用しないという消費者層に支持されている一方で、安い分、大量生産・大量消費の流れが出来上がりました。気軽に洋服を買い、捨てる人が増加しています。それにより、服の廃棄焼却処分で発生する二酸化炭素（CO2）が、地球温暖化などの環境問題を加速させています。

## 企画目的
 捨てるはずだった服の再利用を促進し、服の廃棄量削減を目指すことを企画の目的としました。

## 画面
### TOPページ
![](https://i.imgur.com/iRR6drG.jpg)
### MANEKIN詳細ページ
![](https://i.imgur.com/hlIsuOb.png)
### 出品ページ
![](https://i.imgur.com/8NkXKbM.png)
![](https://i.imgur.com/znw37JS.png)
### マイページ
![](https://i.imgur.com/Y3RRt0m.png)
### MANEKIN利用分析ページ
![](https://i.imgur.com/AFzGafm.png)

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
### サーバの停止
`docker-compose down`

## 使用技術
- Ruby on Rails
- Next.js
- TailwindCSS
- Docker