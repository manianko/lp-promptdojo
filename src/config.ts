// 単一真実源：サイト全体で使う可変値をここに集約する（LP_SPEC.md §7 準拠）。
// ダミー値は本物っぽい架空値を入れず、公開直前に一括差し替えする。

export const SERVICE_NAME = "プロンプト道場";      // 仮称。確定時に一括変更
export const SERVICE_NAME_EN = "promptdojo";
export const GA4_ID = "G-XXXXXXXXXX";              // ダミー。公開直前に一括差し替え
export const GADS_ID = "AW-XXXXXXXXXX";            // 広告媒体をMetaにする場合は不使用
export const CV_LABELS = { waitlist: "DUMMY_WAITLIST_LABEL" };
export const FORM_ENDPOINT = "https://formspree.io/f/mnpakelp";
export const PRICE_MONTHLY = 980;                  // 「予定」表記とセットで使用
export const FREE_GRADING_PER_DAY = 3;

// 公開先の絶対URL。OGPの og:image / og:url / canonical を絶対URLで出力するために必須。
// 相対パスだとX/Facebook/LINE等のクローラが og:image を解決できずカードに画像が出ない。
// 独自ドメイン移行時はこの1行を差し替える。
export const SITE_URL = "https://lp-promptdojo.vercel.app";

// 運営者情報。公開前に必ず実値へ差し替える（本物っぽい架空値を入れない）
export const OPERATOR_NAME = "【要確認：屋号または氏名】";
export const CONTACT_EMAIL = "【要確認：連絡先メールアドレス】";
export const PRIVACY_ESTABLISHED = "2026年8月26日";  // 公開直前に公開日へ差し替え
export const LAUNCH_NOTE = "※価格・仕様は開発中のため変更になる場合があります";
