# CLAUDE.md — lp-promptdojo（Phase 1 需要検証LP）

> Claude Code用の作業規律と進捗管理。**毎セッション、作業開始前に本ファイルと docs/TASKS.md を読むこと。**
> 真実源は `docs/` 配下。本ファイルはその実行規律と進捗を写す場所であり、仕様の書き換え先ではない。

---

## 0. 参照ドキュメント（真実源）

| ファイル | 役割 |
|----------|------|
| `docs/PROJECT_MAP.md` | 全体地図・戦略決定ログ |
| `docs/LP_SPEC.md` | LP要件・コピー・コンプラ規律・config構成・判定基準 |
| `docs/TASKS.md` | タスクリスト（`[CC]` が Claude Code 担当） |
| `docs/CLAUDE_CODE_KICKOFF.md` | 初回指示・セッション定型文 |

---

## 1. 作業規律（このサイクルを厳守）

1. **現物を読む** — 推測で書かない。対象ファイルと該当docsセクションを必ず開く
2. **判断メモ** — 何をどう変えるか、コンプラ上の判断を先に文章化して報告する
3. **編集** — 1セッション1タスク。**複数ファイルの同時変更をしない**（セクション実装は1つずつ）
4. **`npm run dev` 確認** — 起動とレンダリングを実際に確認する
5. **報告してOK待ち** — 変更点 / コンプラ判断 / 確認してほしい箇所 を報告し、ユーザーのOKまで次へ進まない
6. **コミット** — ユーザーのブラウザ確認OKを受けてから、そのセクション単位でコミットする
7. **CLAUDE.md 更新** — 本ファイルの進捗と `docs/TASKS.md` のチェックボックスを同期

補足ルール：
- 構成・命名は `docs/` の記載が真実源。**勝手に変えない。**変えたい場合は「提案」として報告する
- 各 `.astro` ファイル冒頭に**設計意図コメントを1行**残す
- 可変値は `src/config.ts` に集約。ページ内へのハードコードをしない
- ゼロJS方針。JSはフォーム送信まわりの最小限のみ許可（LP_SPEC §9）
- モバイルファースト（広告流入はほぼスマホ）

---

## 2. コンプラ規律（LP_SPEC.md §3 の要約 / 逸脱したら実装しない）

- **成果断定禁止** — 「必ず使いこなせる」「絶対に身につく」はNG。「〜を目指す」「〜のための」に置換
- **料金は予定表記** — 正式リリース前。価格を出す箇所には必ず「（予定・変更の可能性あり）」を併記
- **実績・口コミを創作しない** — 利用者数・受講者の声・星評価などのダミーを置かない（まだ存在しない）。
  信頼性は「開発者自身の1年間の独学プロセスからカリキュラム化」という事実ベースの物語で担保する
- **競合の名指し批判をしない** — 対比表は「海外製学習アプリ」「高額スクール」等の一般名詞で書く
- **プライバシーポリシー必須**（メール収集のため）。特商法表記は販売開始前のため不要
- **ダミー値に本物っぽい架空値を入れない** — `G-XXXXXXXXXX` 形式を維持し、公開直前に一括差し替え

---

## 3. 環境メモ

- スタック：Astro 7 + Tailwind CSS v4（`@tailwindcss/vite`）+ TypeScript（strict）
- Tailwindは `src/styles/global.css` を `src/layouts/Layout.astro` で読み込む構成
- 開発サーバ：`npm run dev`（バックグラウンド運用は `npx astro dev --background` / `stop` / `status` / `logs`）
- ビルド確認：`npm run build`
- `npx astro check` は未導入（初回実行時に `@astrojs/check` のインストール確認が対話で出る）

---

## 4. 進捗（docs/TASKS.md と同期させること）

### 1-B. リポジトリ立ち上げ [CC]
- [x] CLAUDE_CODE_KICKOFF.md をClaude Codeに渡してscaffold実行
- [x] Astro + Tailwind + TS 初期化、`npm run dev` 起動確認
- [x] config.ts 作成（LP_SPEC.md §7 の変数構成）
- [x] CLAUDE.md（作業規律+進捗）をリポジトリ直下に生成

### 1-C. LP実装 [CC]（LP_SPEC.md §4 のセクション順に1つずつ）
- [x] Hero（キャッチ + 登録フォーム）
- [x] Problem(課題提起)
- [x] Solution(3つの約束)
- [ ] FeaturePreview(画面モック/スキルツリー図)
- [ ] Pricing(予定価格の提示)
- [ ] Comparison(スクール/海外アプリ/無料動画との対比表)
- [ ] Faq
- [ ] FinalCta(登録フォーム再掲)
- [ ] Footer + プライバシーポリシーページ
- [x] フォーム送信の疎通確認（テスト送信→受信確認）
- [ ] OGP / meta / favicon
- [ ] スマホ実機確認（LP流入はほぼモバイル前提）

---

## 5. セッションログ（新しいものを下に追記）

### 2026-08-25 — scaffold（1-B）
- `npm create astro@latest`（minimal / TS strict）で初期化、`npx astro add tailwind` で Tailwind v4 追加
- `src/config.ts` を LP_SPEC §7 のとおり作成（ダミー値そのまま、創作なし）
- `src/layouts/Layout.astro` を作成（`lang="ja"` / viewport / global.css読み込み）
- `src/pages/index.astro` はscaffold表示のみ。セクションは未実装（1-Cで1つずつ）
- `npm run build` 成功、`npm run dev` で http://localhost:4321 が 200 応答することを確認

---

### 2026-08-25 — D8追記 + Hero実装（1-C）
- ユーザー決定：Astro 7 / Tailwind v4 のまま進行（ダウングレードしない）。`docs/PROJECT_MAP.md` の決定ログに **D8** を追記
- `src/components/Hero.astro` 新規：キャッチ候補A + サブコピー + メール1項目フォーム（LP_SPEC §5 準拠）
- `src/pages/index.astro`：Heroを差し込み、title/descriptionを設定。以降のセクションはTODOコメントで待機
- 配色：深緑ベース（emerald-950）+ 明るいアクセント1色（amber-400）。Tailwind標準色のみでトークン未定義（LP_SPEC §9）
- フォームはHTML標準のPOSTのみ。**JSゼロを維持**（GA4の `waitlist_submit` 送信は 1-D で追加）
- コンプラ：価格は「月980円（予定・変更の可能性あり）」、成果断定なし、実績・口コミの記載なし、競合言及なし
- `npm run build` 成功 / dev server 200応答を確認

---

### 2026-08-25 — リネーム/git初期化 + Problem実装（1-C）
- `docs/PROJECT_MAP_3.md` を `docs/PROJECT_MAP.md` にリネーム（相互参照との不一致を解消。CLAUDE.md の注記も削除）
- `git init` + 初回コミット `2743ed2 chore: scaffold Astro7+Tailwind4, docs, Hero section`（branch: master）
- Hero はユーザーのブラウザ確認OK済み
- `src/components/Problem.astro` 新規：共感型の課題提起3点 + Solutionへ橋を架ける1行（LP_SPEC §4-2 / §2）
- 背景を白にしてHero（深緑）とコントラストを付け、番号付きリストで縦読みできる構成に
- コンプラ：数値・利用者数の類は一切書かず主観的な状況描写のみ。競合は「数十万円のスクール」「無料の動画」と一般名詞で表現
- `npm run build` 成功 / dev server 200応答を確認

---

### 2026-08-25 — Solution実装（1-C）
- ユーザー承認：**各セクションはブラウザ確認OK後にコミット**する運用で固定（作業規律に追記）
- コミット `bf654cb feat: Problem section`（Heroは初回コミット 2743ed2 に含まれていたため差分はProblemのみ）
- `src/components/Solution.astro` 新規：3つの約束をインラインSVGアイコン付きカードで（LP_SPEC §4-3 / §2）
- 背景は emerald-50。Hero(深緑) → Problem(白) → Solution(淡緑) の順で明度に律動を付けた
- コンプラ：断定表現を排し**機能の事実のみ**で構成。「必ず」「絶対」「使いこなせるようになる」は不使用（ビルド出力を grep で確認済み）
- 価格は `PRICE_MONTHLY` 参照で「月980円（予定・変更の可能性あり）」。解約条件も「〜を予定しています」と未確定であることを明示
- `npm run build` 成功 / dev server 200応答を確認

---

## 6. Astro 参考リンク

- ルーティング / ページ追加: https://docs.astro.build/en/guides/routing/
- コンポーネント: https://docs.astro.build/en/basics/astro-components/
- スタイリング: https://docs.astro.build/en/guides/styling/
