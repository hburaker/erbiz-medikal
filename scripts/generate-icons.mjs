// public/favicon.svg'den tarayıcıların otomatik istediği ikon dosyalarını üretir.
// Çalıştırma: npm run icons   (logo değişirse tekrar çalıştırın, çıktıları commit edin)
import sharp from 'sharp';
import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const pub = new URL('../public/', import.meta.url);
const svg = await readFile(new URL('favicon.svg', pub));

const png = (size, opts = {}) => {
  const { padding = 0, background } = opts;
  const inner = size - padding * 2;
  let img = sharp(svg, { density: 384 }).resize(inner, inner);
  if (padding || background) {
    img = img.extend({
      top: padding, bottom: padding, left: padding, right: padding,
      background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
    });
  }
  if (background) img = img.flatten({ background });
  return img.png().toBuffer();
};

// ICO dosyası: içine PNG gömülü 16/32/48 px görüntüler (tüm modern tarayıcılar destekler)
const ico = (images) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries = [];
  let offset = 6 + 16 * images.length;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
};

const sizes = [16, 32, 48];
const icoImages = await Promise.all(sizes.map(async (size) => ({ size, data: await png(size) })));
await writeFile(new URL('favicon.ico', pub), ico(icoImages));

// iOS şeffaf alanı siyaha boyar; beyaz zemin ve kenar boşluğu veriyoruz
const white = { r: 255, g: 255, b: 255, alpha: 1 };
await writeFile(new URL('apple-touch-icon.png', pub), await png(180, { padding: 22, background: white }));
await copyFile(new URL('apple-touch-icon.png', pub), new URL('apple-touch-icon-precomposed.png', pub));

// Manifest ve JSON-LD logosu için kare ikonlar
for (const size of [192, 512]) {
  await writeFile(new URL(`icon-${size}.png`, pub), await png(size, { padding: Math.round(size * 0.1), background: white }));
}
await writeFile(
  new URL('site.webmanifest', pub),
  JSON.stringify({
    name: 'Erbiz Medikal',
    short_name: 'Erbiz Medikal',
    lang: 'tr',
    start_url: '/',
    display: 'browser',
    theme_color: '#0b2545',
    background_color: '#ffffff',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }, null, 2) + '\n',
);

// WhatsApp / Facebook / X paylaşım görseli (1200x630). Telefon numarası site.ts'den okunur
// (Node 22.18+ TypeScript dosyasını doğrudan içe aktarabilir).
const { site } = await import('../src/data/site.ts');
if (!site?.phoneDisplay) throw new Error('site.ts içinde phoneDisplay bulunamadı');
const xml = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const phoneDisplay = xml(site.phoneDisplay);
const logoPaths = svg.toString('utf8').replace(/^.*?<\/defs>/s, '').replace('</svg>', '');
const font = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14b8a6"/><stop offset="1" stop-color="#0e7490"/></linearGradient>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b2545"/><stop offset=".65" stop-color="#0f3d5e"/><stop offset="1" stop-color="#0e7490"/></linearGradient>
</defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<circle cx="1060" cy="120" r="260" fill="#14b8a6" opacity=".10"/>
<circle cx="1110" cy="560" r="180" fill="#5eead4" opacity=".08"/>
<g transform="translate(80 80)"><rect width="128" height="128" rx="30" fill="#fff"/><g transform="translate(8 8) scale(2.8)">${logoPaths}</g></g>
<text x="232" y="138" font-family="${font}" font-size="58" font-weight="800" fill="#fff">Erbiz Medikal</text>
<text x="234" y="184" font-family="${font}" font-size="26" font-weight="600" fill="#5eead4" letter-spacing="3">BATIKENT · ANKARA · 7/24 AÇIK</text>
<text x="80" y="330" font-family="${font}" font-size="54" font-weight="800" fill="#fff">Hasta Yatağı ve Medikal Ürün</text>
<text x="80" y="398" font-family="${font}" font-size="54" font-weight="800" fill="#5eead4">Kiralama &amp; Satış</text>
<text x="80" y="470" font-family="${font}" font-size="30" font-weight="500" fill="#cbd5e1">Ankara’nın her yerine aynı gün ücretsiz teslimat ve kurulum</text>
<rect x="80" y="512" width="420" height="68" rx="34" fill="#0d9488"/>
<text x="290" y="557" text-anchor="middle" font-family="${font}" font-size="32" font-weight="800" fill="#fff">${phoneDisplay}</text>
</svg>`;
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(fileURLToPath(new URL('og-image.png', pub)));

console.log('Üretildi: favicon.ico, apple-touch-icon(-precomposed).png, icon-192/512.png, site.webmanifest, og-image.png');
