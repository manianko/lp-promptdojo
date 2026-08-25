// OGP画像とfaviconのPNGを生成するワンオフスクリプト。
// SERVICE_NAME やキャッチコピーを変更したら `node scripts/generate-images.cjs` で作り直す。
// 画像アセットを持たないため、SVGをsharpでラスタライズして public/ に出力する。
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "public");
const JP_FONT = "Yu Gothic, Meiryo, MS Gothic, sans-serif";

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#022c22"/>
  <rect x="0" y="0" width="1200" height="8" fill="#fbbf24"/>
  <text x="80" y="150" font-family="${JP_FONT}" font-size="34" font-weight="700" fill="#6ee7b7">プロンプト道場（仮称）</text>
  <text x="80" y="290" font-family="${JP_FONT}" font-size="72" font-weight="700" fill="#ecfdf5">AI、&#8220;見て学ぶ&#8221;は もう終わり。</text>
  <text x="80" y="400" font-family="${JP_FONT}" font-size="72" font-weight="700" fill="#fbbf24">1日5分、書いて、直される。</text>
  <text x="80" y="520" font-family="${JP_FONT}" font-size="34" font-weight="400" fill="#a7f3d0">日本語ネイティブのAIトレーニングアプリ</text>
</svg>`;

// favicon：SERVICE_NAME の頭文字1字のみ。凝らない
const iconSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 128 128">
  <rect width="128" height="128" rx="28" fill="#022c22"/>
  <text x="64" y="64" font-family="${JP_FONT}" font-size="82" font-weight="700" fill="#fbbf24" text-anchor="middle" dominant-baseline="central">プ</text>
</svg>`;

fs.writeFileSync(path.join(OUT, "favicon.svg"), iconSvg(128));

const jobs = [
  [ogSvg, "og-image.png", null],
  [iconSvg(128), "favicon-32.png", 32],
  [iconSvg(128), "apple-touch-icon.png", 180],
];

Promise.all(
  jobs.map(([svg, name, size]) => {
    let p = sharp(Buffer.from(svg));
    if (size) p = p.resize(size, size);
    return p.png().toFile(path.join(OUT, name)).then((i) => console.log(name, i.width + "x" + i.height, i.size + "B"));
  })
).then(() => console.log("favicon.svg written")).catch((e) => { console.error(e.message); process.exit(1); });
