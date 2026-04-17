# ---- Stage 1: 依存関係のインストールとビルド ----
FROM node:20-alpine AS builder

WORKDIR /app

# package.json と yarn.lock を先にコピーしてレイヤーキャッシュを有効活用
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ソースコードをコピー
COPY . .

# Vite はビルド時に環境変数を埋め込むため、ここで指定する必要がある
ENV VITE_USE_FIRESTORE_EMULATOR=true
ENV VITE_FB_API_KEY=demo
ENV VITE_FB_AUTH_DOMAIN=demo
ENV VITE_FB_PROJECT_ID=demo
ENV VITE_FB_STORAGE_BUCKET=demo
ENV VITE_FB_MESSAGING_SENDER_ID=demo
ENV VITE_FB_APP_ID=demo
ENV VITE_FB_MEASUREMENT_ID=demo

RUN yarn build


# ---- Stage 2: アプリ + Firestore エミュレーターを実行 ----
FROM node:20-alpine

# Firestore エミュレーターは Java が必要（firebase-tools は JDK 21+ を要求）
RUN apk add --no-cache openjdk21-jre-headless

# Firebase CLI と静的ファイル配信用の serve をインストール
RUN npm install -g firebase-tools serve

# Firestore エミュレーターの jar をビルド時にダウンロードしてキャッシュ
# （実行時にダウンロードしようとするとネットワーク問題で失敗することがあるため）
RUN firebase setup:emulators:firestore

WORKDIR /app

# ビルド成果物とエミュレーター設定をコピー
COPY --from=builder /app/build ./build
COPY firebase.json ./firebase.json

# 公開ポート:
#   3000 - React アプリ (serve)
#   8080 - Firestore エミュレーター
#   4000 - Firebase エミュレーター UI
EXPOSE 3000 8080 4000

# エミュレーターと静的サーバーを同時に起動
CMD ["sh", "-c", "firebase emulators:start --only firestore --project demo & serve -s build -l 3000"]
