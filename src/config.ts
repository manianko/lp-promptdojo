// 単一真実源：サイト全体で使う可変値をここに集約する（LP_SPEC.md §7 準拠）。
// ダミー値は本物っぽい架空値を入れず、公開直前に一括差し替えする。

export const SERVICE_NAME = "プロンプト道場";      // 仮称。確定時に一括変更
export const SERVICE_NAME_EN = "promptdojo";
export const GA4_ID = "G-XXXXXXXXXX";              // ダミー。公開直前に一括差し替え
export const GADS_ID = "AW-XXXXXXXXXX";            // 広告媒体をMetaにする場合は不使用
export const CV_LABELS = { waitlist: "DUMMY_WAITLIST_LABEL" };
export const FORM_ENDPOINT = "https://formspree.io/f/XXXXXXXX"; // ダミー
export const PRICE_MONTHLY = 980;                  // 「予定」表記とセットで使用
export const FREE_GRADING_PER_DAY = 3;
export const LAUNCH_NOTE = "※価格・仕様は開発中のため変更になる場合があります";
