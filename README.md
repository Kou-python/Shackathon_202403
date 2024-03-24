## Next.jsアプリケーションの起動方法

### 前提条件

- `Shackathon_202403`リポジトリをローカル環境にクローンできている
- ターミナルを開いていて、 `Shackathon_202403` フォルダーにいる

### 動かすまでの流れ

```bash
# ① score_roomフォルダに移動
Shackathon_202403 % cd score_room 

# ② 依存関係のインストール「npm install」or「yarn install」 
score_room % npm install 

up to date in 729ms

138 packages are looking for funding
  run `npm fund` for details

# ③ ローカルサーバーの起動「npm run dev」or「yarn dev」
score_room % npm run dev 

> score_room@0.1.0 dev
> next dev

   ▲ Next.js 14.1.4
   - Local:        http://localhost:3000

 ✓ Ready in 1911ms
```
