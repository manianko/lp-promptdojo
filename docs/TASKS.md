# TASKS.md — promptdojo

> 運用ルール：
> - 1タスク＝1セッションで完了できる粒度に保つ。大きければ分割してから着手
> - 完了したら `[x]`。中断・保留は行末に `←メモ` を残す
> - Claude Codeに投げるタスクには `[CC]`、Web Claude担当には `[WC]`、自分の手作業には `[ME]` を付ける
> - Phase 1完了の定義：LP公開 + 広告テスト実施 + LP_SPEC.md §6 の判定完了

---

## Phase 1：需要検証LP

### 1-A. 準備
- [x] [WC] 戦略確定（B2C先行・実技採点型・フリーミアム980円）
- [x] [WC] PROJECT_MAP / TASKS / LP_SPEC / KICKOFF 作成
- [ ] [ME] リポジトリ用フォルダ作成：`C:\Users\mania\OneDrive\Desktop\lp-promptdojo`
- [ ] [ME] docs/ に本ドキュメント4点を配置
- [ ] [ME] 仮ドメイン方針決定（独自ドメイン取得 or Vercelサブドメインで先行）←検証だけならVercelサブドメインで可

### 1-B. リポジトリ立ち上げ [CC]
- [x] CLAUDE_CODE_KICKOFF.md をClaude Codeに渡してscaffold実行
- [x] Astro + Tailwind + TS 初期化、`npm run dev` 起動確認
- [x] config.ts 作成（LP_SPEC.md §7 の変数構成）
- [x] CLAUDE.md（作業規律+進捗）をリポジトリ直下に生成

### 1-C. LP実装 [CC]（LP_SPEC.md §4 のセクション順に1つずつ）
- [x] Hero（キャッチ + 登録フォーム）
- [x] Problem(課題提起)
- [x] Solution(3つの約束)
- [x] FeaturePreview(画面モック/スキルツリー図)
- [x] Pricing(予定価格の提示)
- [x] Comparison(スクール/海外アプリ/無料動画との対比表)
- [x] Story(開発者の1年間・信頼性パート)
- [x] Faq
- [x] FinalCta(登録フォーム再掲)
- [ ] Footer + プライバシーポリシーページ
- [x] フォーム送信の疎通確認（テスト送信→受信確認）
- [ ] OGP / meta / favicon
- [ ] スマホ実機確認（LP流入はほぼモバイル前提）

### 1-D. 計測・公開
- [ ] [CC] GA4タグ設置（登録完了イベント `waitlist_submit` を計測）
- [ ] [ME] Vercelデプロイ
- [ ] [ME] 広告アカウント側でCVイベント設定
- [ ] [ME] 広告入稿（予算・訴求はLP_SPEC.md §6）

### 1-E. 判定 [WC+ME]
- [ ] テスト結果集計（表示回数 / クリック / 登録数 / 登録率）
- [ ] LP_SPEC.md §6 の基準で GO / 改善再走 / ピボット を判定
- [ ] 判定結果を PROJECT_MAP.md 決定ログに追記

---

## Phase 2 バックログ（着手はPhase 1のGO判定後。今は触らない）

- [ ] app-promptdojo リポジトリ設計（DB設計書 / API設計 / 画面遷移）
- [ ] Supabaseスキーマ：users / organizations(空でも作る) / lessons / attempts / grading_events / subscriptions
- [ ] Lv1カリキュラム詳細設計（20〜30レッスン。実技は「プロンプト記述」に限定せず、検証型/分解型/改善型/選択型の4タイプを混在させる。比率はプロンプト型5:その他5を目安）
- [ ] 採点プロンプト設計（ルーブリック5項目 / JSON出力 / 原価1円未満の検証）
- [ ] ストリーク・XP・実績バッジ仕様
- [ ] 復習出題の仕様（採点ルーブリックの弱点観点から出題）
- [ ] Stripe連携（月額980円 / 無料枠1日3採点の制御）
- [ ] ウェイトリストへのβ招待メール文面

## 恒常タスク
- [ ] セッション終了ごとに TASKS.md と CLAUDE.md の進捗を同期させる
