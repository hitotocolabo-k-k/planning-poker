/// <reference types="vite/client" />

// Vite のクライアント側環境変数の型定義
interface ImportMetaEnv {
  // アプリのバージョン: ビルド時に GitHub Actions が git tag を注入
  readonly VITE_APP_VERSION?: string;
  // Firebase プロジェクトエミュレーター使用フラグ
  readonly VITE_USE_FIRESTORE_EMULATOR?: string;
  // Firebase 接続設定
  readonly VITE_FB_API_KEY?: string;
  readonly VITE_FB_AUTH_DOMAIN?: string;
  readonly VITE_FB_PROJECT_ID?: string;
  readonly VITE_FB_STORAGE_BUCKET?: string;
  readonly VITE_FB_MESSAGING_SENDER_ID?: string;
  readonly VITE_FB_APP_ID?: string;
  readonly VITE_FB_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
