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
- [x] FeaturePreview(画面モック/スキルツリー図)
- [x] Pricing(予定価格の提示)
- [x] Comparison(スクール/海外アプリ/無料動画との対比表)
- [x] Story(開発者の1年間・信頼性パート)
- [x] Faq
- [x] FinalCta(登録フォーム再掲)
- [x] Footer + プライバシーポリシーページ
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

### 2026-08-25 — Formspree差し替え + FeaturePreview実装（1-C）
- `FORM_ENDPOINT` を実URL（Formspree）に差し替え。コミット `9d45080 chore: set Formspree endpoint`
- Solution はユーザーのブラウザ確認OK → コミット `5ea14d3 feat: Solution section`
- フォーム疎通確認（テスト送信→Formspree受信→削除）をユーザーが実施。TASKS.md のチェックを `[x]` に同期（`c58473c`）
- `src/components/FeaturePreview.astro` 新規：レッスン→実技→採点結果（62点+改善コメント）の画面モック3枚 + スキルツリー図（LP_SPEC §4-4）
- 実画像アセットが無いため、モックは **CSSで組んだダミーUI**（枠・バー・テキスト）で構成。画像を後から差し替える前提の構造にはしていない
- 背景は emerald-950（Heroと同じ深緑）。Hero(深緑)→Problem(白)→Solution(淡緑)→FeaturePreview(深緑) と、白いモック画面を最も目立たせる配置を優先して明度の交互配置を1回崩した
- **開発中である旨の注記を4箇所**：セクション冒頭の注記1 + 各モック枠内のバッジ3。さらにスキルツリーに「構想中のカリキュラム案」、採点結果に「サンプル表示」を明示
- モック画面の内側は `aria-hidden="true"`。意味は各モック下のテキストキャプションが担う（スクリーンリーダーがダミーUIを読み上げない）
- コンプラ：成果断定なし（ビルド出力を grep で確認：必ず/絶対/確実に/保証 いずれも0件）。62点・観点別バーはすべてサンプル値で、実績・利用者数・口コミは不使用。競合への言及なし
- ゼロJS維持（`dist` に .js 出力0件 / `<script>` タグ0件）
- `npm run build` 成功 / dev server 200応答を確認

---

### 2026-08-25 — Pricing実装（1-C）
- FeaturePreview はユーザーのブラウザ確認OK → コミット `b247bc8 feat: FeaturePreview section`
- `src/components/Pricing.astro` 新規：無料プラン / プレミアムの2カード（LP_SPEC §4-5）
- 背景は白。FeaturePreview(深緑) → Pricing(白) で明度の交互配置を回復
- **景表法まわりの実装判断（本LPで最も事故りやすい箇所）**：
  - 二重価格表示を禁止。取り消し線・通常価格・定価・割引・OFF の類は一切書かない（ビルド出力を grep で0件確認）
  - 倍率訴求（「1/100」等）を不使用。具体的な比較対象を持たないため根拠を示せない
  - スクールとの比較は「学ぶ場は、数十万円規模のスクールから無料の動画まで幅があります」という一般的事実の記述に留め、特定サービス名・その価格は書かない
  - 「（予定・変更の可能性あり）」を価格の直下に `text-base font-bold` で配置。脚注に落とさない
  - 無料枠は「無料」を強調せず、`0円` の直下に条件「1日3回まで採点」を同じ `text-base font-bold text-slate-900` で並記（色を薄くしない）
- 価格・回数は `PRICE_MONTHLY` / `FREE_GRADING_PER_DAY` を参照。ページ内ハードコードなし
- プレミアム側の機能は「〜を予定」で統一し、確定事項として書かない
- CTAはHeroのフォームへのアンカー `#hero-email`。FinalCta 実装時にそちらへ向け直す想定
- **未処理の不整合**：`docs/LP_SPEC.md` §4-5 の表に「高額スクールの1/100以下」の記述が残存。今回の実装方針と矛盾するため、docs側の修正可否をユーザーに確認中（真実源を勝手に書き換えないため未編集）
- コンプラ：成果断定なし / 実績・口コミなし / 競合名指しなし（いずれもビルド出力を grep で0件確認）
- ゼロJS維持（`dist` に .js 出力0件 / `<script>` タグ0件）
- `npm run build` 成功 / dev server 200応答を確認

---

### 2026-08-25 — LP_SPEC改訂 + Comparison実装（1-C）
- ユーザー承認により `docs/LP_SPEC.md` §4 表の Pricing 行を改訂。「高額スクールの1/100以下」の位置づけ →
  「学びの選択肢の価格帯の中での位置づけを一般的事実の範囲で示す（特定サービス名・価格・倍率訴求は不可）」。
  Pricing 本体と分けて `a5eeb22 docs: fix pricing positioning wording in LP_SPEC` としてコミット
- `src/components/Pricing.astro` にTODOコメント追加：FinalCta 実装後にCTAリンク先を `#final-cta` へ向け直す
- `docs/TASKS.md` Phase 2 バックログに「復習出題の仕様（採点ルーブリックの弱点観点から出題）」を追加
- `src/components/Comparison.astro` 新規：一般名詞3カテゴリ + 当方（LP_SPEC §4-6）
- 背景は emerald-50。Pricing(白) → Comparison(淡緑) で明度の交互を維持
- **○×の対比表にしない実装判断**：比較記号（×/✗/✕）を一切使わず、各カテゴリを「形式 / 費用 / 向いている人」の3項目で
  記述するカード形式にした。表形式にすると空欄・×が「劣っている」の含意を持つため回避（ビルド出力に比較記号0件を確認）
- 他カテゴリには**客観属性のみ**を記述。「高すぎる」「不自然」「続かない」等の欠点断定は書かない（grep 0件確認）
- 「向いている人」を全カテゴリに等しく置き、当方だけが優れているという構図を作らない
- **当方の列のみ事実を提示**：実技採点 / 日本語で書き下ろし / 1レッスン3〜5分 / 無料枠あり・月980円（予定・変更の可能性あり）
- 一般化による誤認を避けるため、末尾に「※ 上記は一般的なカテゴリごとの傾向です。個々のサービスによって形式・費用は異なります」を明記
- コンプラ：特定サービス名0件 / 倍率訴求・二重価格0件 / 成果断定0件（いずれもビルド出力を grep で確認）
- ゼロJS維持（`dist` に .js 出力0件 / `<script>` タグ0件）
- `npm run build` 成功 / dev server 200応答を確認

---

### 2026-08-26 — Comparison修正 + Story実装（1-C）
- Comparison 修正2点（ユーザー指示）：
  - 海外製の学習アプリの「向いている人」を「英語で学びたい人。海外の最新の題材に触れたい人。」に差し替え
  - 当方カードのバッジを `{SERVICE_NAME}（開発中）` に変更。文字列のハードコードを排し config 参照に統一
- `src/components/Story.astro` 新規：開発者の1年間を4ステップの時系列で（LP_SPEC §4-7）
- 背景は白。Comparison(淡緑) → Story(白) で明度の交互を維持
- **情報商材の文法に寄せないための実装判断**：
  - 変化の物語（「人生が変わった」等）・収入・実績・独立/脱サラの示唆を一切書かない（ビルド出力を grep で0件確認）
  - 到達点を「毎回ゼロから考えなくなった」「書き出すまでの時間が短くなりました」という**行動の変化**に留め、成果や金銭に接続しない
  - 各ステップは事実の記述のみ（壁打ち → 複数AIでクロスレビュー → AI併用で開発 → 指示の型が残る）
  - 「このLPも同じ進め方で作っています」は検証可能な事実として記載
  - 締めは指示どおり「この過程で効いた練習を、カリキュラムにしています。」
  - 体験談規制を踏まえ「※ 開発者個人の経験です。同じ手順で同じ結果になることをお約束するものではありません。」を末尾に明記
- 分量：レンダリング後の実テキストで **Story 305文字**。Problem/Solution(304)と同水準まで詰め、
  FeaturePreview/Comparison(625) の半分以下に収めた（読み飛ばされる前提の補強パートのため）
- **docs の欠落を補修**：`docs/TASKS.md` の 1-C リストに Story の行自体が存在しなかったため、
  LP_SPEC §4 の7番目に合わせて Comparison と Faq の間に追加（CLAUDE.md / AGENTS.md も同期）
- コンプラ：成果断定0件 / 実績・口コミ0件 / 競合名指し0件（ビルド出力を grep で確認）
- ゼロJS維持（`dist` に .js 出力0件 / `<script>` タグ0件）
- `npm run build` 成功 / dev server 200応答を確認

---

### 2026-08-26 — Pricing/Comparison/Story コミット + Faq実装（1-C）
- ブラウザ確認OKを受け3コミットに分割：`335e7fa feat: Pricing section` / `f3d6708 feat: Comparison section` / `46da67d feat: Story section`。
  `index.astro` は各コミット時点の差し込み状態を作ってステージし、**3コミットとも単体で `npm run build` が通る**ことを確認
- `docs/PROJECT_MAP.md` に D9（実技の対象を「AI活用の判断力」へ拡張）と D10（Phase 1 LP の訴求はプロンプト採点に絞ったまま維持）を追記済み
- `src/components/Faq.astro` 新規：5問（公開時期 / 無料 / 解約 / 学べること / 初心者）（LP_SPEC §4-8）
- 背景は emerald-50。Story(白) → Faq(淡緑) で明度の交互を維持
- **ゼロJSでアコーディオンを実装**：`<details>/<summary>` のネイティブ開閉。JSは一切追加せず、
  Tailwind の `group-open:rotate-180` で矢印を回転、`[&::-webkit-details-marker]:hidden` で既定マーカーを除去
  （生成CSSに両ルールが出ていること、`dist` に .js 0件 / `<script>` 0件を確認）
- コンプラ判断：
  - 公開時期は**確定日を書かない**。「現在開発中で、公開時期は未定です」＋決まり次第の連絡。年月日表記の混入0件を grep で確認
  - ユーザー指示により「いつ公開?」末尾に「先行登録いただいた方から順にβ版へご招待する予定です」を追加（§4-9 FinalCta の特典訴求と整合）
  - 「何が学べますか?」は **D10 に従いプロンプト採点に絞った説明**を維持。D9 側の語（タスク分解/検証型/AI活用の判断力 等）の混入0件を確認
  - 「初心者でも?」は成果断定を避け、対象者の記述（「ChatGPTなどを触ったことはあるものの、使いこなせている実感がない方を想定」）で回答。
    「身につきます」「できるようになります」「習得できます」等の混入0件を確認
  - 解約・無料枠はすべて「〜を予定しています」で統一。価格・回数は `PRICE_MONTHLY` / `FREE_GRADING_PER_DAY` 参照
- 価格表記の**文字列をサイト全体で統一**：Faq の初稿が「（月980円・予定・変更の可能性あり）」と定型からずれていたため、
  他4箇所と同じ「月980円（予定・変更の可能性あり）」に揃えた（公開前の一括チェックを grep 1本で効かせるため）
- `npm run build` 成功 / dev server 200応答を確認

---

### 2026-08-26 — Faq初期展開の修正 + FinalCta実装（1-C）
- Faq 修正：1問目（公開時期）のみ初期展開。`faqs` 配列に `open: true` を持たせ `<details open={faq.open}>` で出し分ける
  （マークアップ側に分岐を作らない。Astroは `open={false}` で属性自体を出力しないため、出力に `<details open` は1件のみ）。**JSは追加せずゼロJSを維持**
- `src/components/FinalCta.astro` 新規：`id="final-cta"`、Heroと同一仕様のフォーム再掲（LP_SPEC §4-9）
- フォームは Hero と完全同一仕様：`action={FORM_ENDPOINT}` / `method="POST"` / メール1項目 / `type="email"` / `required` /
  `autocomplete="email"` / `inputmode="email"`。`id` のみ `hero-email` と衝突しないよう `final-email` に分離（labelの`for`も対応）
- 背景は emerald-950。Faq(淡緑) → FinalCta(深緑) で、Heroと同じ配色に戻して「登録する場所」であることを視覚的に揃えた
- コンプラ判断：
  - 見出しは「登録は無料。公開時に、最初にご案内します。」という事実ベース。
    煽り（今だけ/急いで/限定/残りわずか/先着/締切/今すぐ/期間限定 等）の混入0件を grep で確認
  - β訴求は Faq と**同一の文字列**「先行登録いただいた方から順にβ版へご招待する予定です」を使用（ページ内2箇所で表現が揺れないこと確認）
  - 「登録は無料・先行案内のみをお送りします。いつでも配信停止できます。」＋ `LAUNCH_NOTE` を Hero と同様に併記
- `src/components/Pricing.astro` の TODO を消化：CTAリンク先を `#hero-email` → `#final-cta` に変更しTODOコメント削除。
  ページ内アンカーは `#final-cta` の1本のみになり、リンク先の `id` が存在することを出力で確認
- ユーザー判断により、Hero と FinalCta の二重登録に対する重複防止の仕掛けは**実装しない**（Formspree側で同一メールを識別できるため）
- 残TODO：`index.astro` の Footer、`Layout.astro` の OGP/favicon/GA4
- `npm run build` 成功 / dev server 200応答を確認

---

### 2026-08-26 — Footer + プライバシーポリシー実装（1-C）
- `src/components/Footer.astro` 新規：`SERVICE_NAME`（開発中）表記 / `/privacy` へのリンク / 運営者表記（LP_SPEC §4-10）
- 背景は slate-100。FinalCta(深緑) の直後で明度の切れ目を作る（ユーザー承認済みの方針）
- `src/pages/privacy.astro` 新規：指定の7項目を平易な日本語で記述。Layout + Footer を共有
- **config.ts への追加（LP_SPEC §7 に無い項目。要承認）**：
  `OPERATOR_NAME` / `CONTACT_EMAIL` / `PRIVACY_ESTABLISHED` の3定数。
  運営者名は Footer と privacy の2箇所で使うため、ハードコード禁止の規律に従い config へ集約した。
  値は `【要確認：…】` のプレースホルダーで、本物っぽい架空値は入れていない
- **記述の正確性を優先した判断**：
  - 「第三者に提供しません」とは書かず、Formspree への保存を独立項目（3）で明示。処理委託の実態と矛盾させない
  - アクセス解析は GA4_ID がダミーで未設置のため「利用する**予定**です」と現在形にしない
  - Cookie 無効化の選択肢があることを明記
  - 削除依頼は「応じます」と断定（実際に対応可能な範囲のため）
- 特商法表記ページは**作成しない**（販売開始前のため。Phase 2 で作成）。`dist` に該当ページが無いことを確認
- ビルド出力は2ページ（`dist/index.html` / `dist/privacy/index.html`）。相互リンク（トップ→/privacy、/privacy→トップ）を確認
- ゼロJS維持（両ページとも `<script>` 0件 / `.js` 出力0件）
- `npm run build` 成功 / dev server で `/` `/privacy` ともに200応答を確認
- **要確認プレースホルダー**：屋号または氏名 / 連絡先メールアドレス / 制定日（2026年8月26日で仮置き）

---

## 6. Astro 参考リンク

- ルーティング / ページ追加: https://docs.astro.build/en/guides/routing/
- コンポーネント: https://docs.astro.build/en/basics/astro-components/
- スタイリング: https://docs.astro.build/en/guides/styling/
