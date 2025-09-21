# 家計簿アプリ (TypeScript + React + Storybook)

React 18とTypeScriptで構築された家計簿管理アプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-app-household-budget/demo/

## 主要機能

### 取引管理
- 収入・支出の追加・編集・削除
- 取引の永続化（localStorage）
- 日付、内容、金額、カテゴリの管理
- リアルタイムでの収支計算

### サマリー表示
- **残高**: 収入 - 支出の計算結果
- **収入**: 総収入額の表示
- **支出**: 総支出額の表示
- プラス/マイナスに応じた色分け表示

### フィルタリング・絞り込み
- **月別絞り込み**: 年月指定での取引履歴フィルタリング
- **カテゴリ別絞り込み**: カテゴリ指定での取引履歴フィルタリング
- **すべて表示**: 全取引の表示

### データ視覚化
- 支出カテゴリ別のドーナツチャート
- 月別の収支グラフ
- カテゴリ別の割合表示

### 操作方法
- **取引追加**: フォームに情報を入力して追加ボタン
- **編集**: 取引項目の編集ボタンからフォームに値を反映
- **削除**: 削除ボタンで確認ダイアログ後削除
- **絞り込み**: 月・カテゴリで取引履歴を絞り込み

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール
- **Chart.js** - グラフ描画ライブラリ

## プロジェクト構造

```
src/
├── features/                       # 機能別モジュール
│   └── household-budget/           # 家計簿機能
│       ├── components/             # 機能専用コンポーネント
│       │   ├── Summary/            # サマリーセクション
│       │   ├── TransactionForm/    # 取引入力フォーム
│       │   ├── TransactionList/    # 取引リスト
│       │   ├── TransactionItem/    # 取引項目行
│       │   ├── SummaryCard/        # サマリーカード
│       │   ├── FilterControls/     # フィルターコントロール
│       │   ├── ExpenseChart/       # 支出チャート
│       │   └── FormField/          # フォームフィールド
│       ├── HouseholdBudgetApp/     # 機能ルートコンポーネント
│       ├── useTransactions.ts      # 取引管理フック
│       ├── useFilter.ts            # フィルタ管理フック
│       └── types.ts                # 機能固有の型定義
├── components/                     # 共通UIコンポーネント
│   ├── Button/                     # 操作ボタン
│   ├── Input/                      # 入力フィールド
│   ├── Select/                     # セレクトボックス
│   ├── Text/                       # テキスト表示
│   └── Label/                      # フォームラベル
├── stories/                        # Storybook用ストーリー
├── utils/                          # ユーティリティ関数
├── Config.ts                       # 設定値
├── App.tsx                         # メインアプリ
└── main.tsx                        # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License