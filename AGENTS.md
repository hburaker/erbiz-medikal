# AGENTS.md — Erbiz Medikal Web Sitesi

Bu dosya, bu projede çalışacak yapay zekâ asistanları (Claude, Copilot, Cursor, Gemini vb.) ve geliştiriciler için proje bağlamını içerir. Değişiklik yapmadan önce okuyun; önemli bir karar veya değişiklik yaptığınızda **"Değişiklik Geçmişi"** bölümünü güncelleyin.

## 1. Proje özeti

- **Firma:** Erbiz Medikal (Google'daki işletme adı: "Batıkent Erbiz Medikal")
- **Ne yapıyor:** Ankara genelinde medikal ürün kiralama ve satışı (hasta yatağı, havalı yatak, oksijen konsantratörü, CPM, tekerlekli sandalye, ortez/ortopedi, sarf malzemesi vb.)
- **Site türü:** Statik tanıtım sitesi: ana sayfa (one-page) + 5 hizmet açılış sayfası + 404. Backend yok.
- **Amaç:** Ziyaretçiyi hızla aramaya veya WhatsApp'tan yazmaya yönlendirmek (dönüşüm odaklı). Ziyaretçi sayfayı hemen terk etmemeli: hızlı açılış, net ilk ekran, her yerde görünen Ara/WhatsApp butonları.
- **Referans alınan site:** https://www.batikentmedikal.com/ (içerik akışı referans alındı, tasarım daha modern yapıldı)
- **Domain:** https://erbizmedikal.com
- **Proje sahibi:** Halit Burak Eroğlu (C#/.NET geliştiricisi; sitede Türkçe içerik, iletişim Türkçe)
- **Konum:** `C:\Users\KTN78844\Desktop\PersonalProjects\erbiz-medikal`

## 2. Firma bilgileri (tek doğru kaynak: `src/data/site.ts`)

| Alan | Değer |
|---|---|
| Telefon | +90 507 047 90 13 (`+905070479013`), ekranda `0507 047 90 13` |
| WhatsApp | Telefonla aynı numara (`905070479013`) |
| Adres | Kentkoop Mah. 1860. Cad. No: 27/A, Batıkent, 06370 Yenimahalle / Ankara |
| Google Maps | https://maps.app.goo.gl/BfAdbnEajouFR47z5 |
| Koordinat | 39.9664869, 32.7190699 |
| Çalışma saatleri | 7/24 açık |
| Hizmet bölgesi | Ankara'nın tüm ilçeleri, aynı gün ücretsiz teslimat ve kurulum |
| Kuruluş | 2026 (yeni firma), ekibin sektör tecrübesi 10+ yıl; sitede "10 yılı aşkın tecrübe" olarak geçer |
| Slogan | "Sağlığınız için 7/24 yanınızdayız" |
| Sosyal medya | **Henüz yok**, sitede bilerek gösterilmiyor. Hesap açılınca eklenebilir. |
| E-posta | Verilmedi, sitede yok |
| Logo | Firmanın logosu yok. Sitede kod ile çizilmiş SVG logo kullanılıyor (`Logo.astro`, `public/favicon.svg`). |

> Telefon değişirse `src/data/site.ts` içindeki `phone`, `phoneDisplay`, `whatsapp` alanlarını güncelleyin; tüm site bu değerleri kullanır. Kod içinde numara sabit yazılmamalı, WhatsApp linkleri `waLink()` ile üretilir. Numara paylaşım görselinde (`og-image.png`) de yazılı olduğu için ardından `npm run icons` çalıştırıp çıkan dosyaları commit edin.

## 3. Teknoloji

- **Astro 7.4.0** (+ `@astrojs/sitemap` 3.7.4). Saf CSS, ek UI framework yok (Tailwind/React yok).
- **Node.js >= 22.22.0 zorunlu.** (Node 18 ile `npm run dev` hata verir; kullanıcı bu sorunu yaşadı.)
- Font: Plus Jakarta Sans, Astro Fonts API ile build sırasında indirilip siteyle birlikte sunulur (`astro.config.mjs` → `fonts`, Layout'ta `<Font />`). CSS'te aile adı yerine `var(--font-jakarta)` kullanılır (üretilen ad hash'li).
- İkonlar: `src/components/Icon.astro` içinde inline SVG path'leri (harici ikon kütüphanesi yok).
- Komutlar: `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (çıktı `dist/`), `npm run preview`.
- Yayın: **Cloudflare Workers (statik varlıklar)**, Worker adı `yellow-water-03f0`, alan adı erbizmedikal.com Cloudflare'de. Build komutu `npm run build`, çıktı klasörü `dist`. Yapılandırma `wrangler.jsonc` (`name` paneldeki Worker adıyla aynı kalmalı; `not_found_handling: "404-page"` olmayan adreslerde 404.html'i gösterir).
- İkonlar: `npm run icons` → `public/favicon.svg`'den `favicon.ico`, `apple-touch-icon(-precomposed).png`, `icon-192/512.png`, `site.webmanifest` ve `og-image.png` üretir (`scripts/generate-icons.mjs`, sharp; telefon numarası site.ts'den okunur). Logo veya numara değişirse tekrar çalıştırılıp commit edilir.

## 3.1 Git ve GitHub

- **Repo:** https://github.com/hburaker/erbiz-medikal (kişisel GitHub hesabı `hburaker`; şirket GitLab'ı DEĞİL). Branch: `main`.
- `origin` adresi kullanıcı adıyla tanımlı: `https://hburaker@github.com/hburaker/erbiz-medikal.git`. Bilgisayarda başka GitHub hesabı kayıtlı olsa bile push `hburaker` hesabıyla yapılır; giriş gerekirse Git Credential Manager tarayıcıdan oturum açtırır.
- Commit kimliği (yalnızca bu repo): `Halit Burak Eroğlu <halitburakeroglu@gmail.com>`. Şirket e-postası bu projede kullanılmaz.
- Yerel `.git/config`: `credential "https://github.com".username = hburaker`, `push.autoSetupRemote = true`, `main` → `origin/main` takipli. Günlük kullanım:
  ```bash
  git add .
  git commit -m "açıklama"
  git push
  ```
- `_to_delete/` klasörü `.gitignore`'da (silinmeyi bekleyen dosyalar repoya gitmez).

## 4. Dosya yapısı

```
astro.config.mjs        site URL, fonts (Plus Jakarta Sans), sitemap entegrasyonu
wrangler.jsonc          Cloudflare Workers statik varlık ayarı (404-page)
scripts/generate-icons.mjs  npm run icons → favicon.ico, apple-touch-icon, icon-192/512, site.webmanifest, og-image.png
public/                 favicon.svg/.ico, apple-touch-icon*.png, icon-192/512.png, og-image.png, site.webmanifest, robots.txt
src/data/site.ts        firma bilgileri + ana sayfa içeriği (title/description/keywords, nav, ürünler, kategoriler, avantajlar, adımlar, ilçeler, 25 resmi ilçe, SSS, yorumlar)
src/data/services.ts    hizmet açılış sayfalarının TÜM içeriği (meta, h1, bölümler, SSS, WhatsApp metni)
src/data/schema.ts      JSON-LD düğümleri (WebSite, MedicalBusiness+Store, WebPage, Service, FAQPage, BreadcrumbList)
src/layouts/Layout.astro  <head>: title/description/keywords/robots/canonical, geo, OG+Twitter, ikonlar, font, JSON-LD @graph; props: title, description, keywords, image, noindex, schema
src/styles/global.css   renk değişkenleri, butonlar, kartlar, .sr-only, .reveal animasyonu
src/pages/index.astro   bölümlerin sırası (+ ana sayfa SSS için FAQPage)
src/pages/[slug].astro  hizmet sayfası şablonu (services.ts'deki her kayıt için /<slug>/)
src/pages/404.astro     noindex, hizmet linkleri
src/components/
  Header.astro          üst bant (7/24 + telefon), sticky header, mobil menü
  Hero.astro            ilk ekran: başlık, Ara/WhatsApp butonları, güven maddeleri, animasyonlu logo görseli
  Features.astro        4 avantaj kartı (hero'nun altına taşan şerit)
  Rentals.astro         #kiralama: öne çıkan 4 ürün + "Nasıl çalışıyoruz" 4 adım
  Categories.astro      #urunler: 12 kategori + "listede yoksa arayın" kutusu
  About.astro           #hakkimizda: istatistikler + hakkımızda metni
  Reviews.astro         #yorumlar: yorum yoksa "Google'da değerlendirin" kartı
  Areas.astro           #bolgeler: ilçe etiketleri + SSS (details/summary)
  CtaBand.astro         Ara/WhatsApp çağrı bandı (ana sayfa + hizmet sayfaları)
  Contact.astro         #iletisim (bilgiler + Google Maps iframe)
  Footer.astro
  FloatingContact.astro sabit Ara/WhatsApp butonları (mobilde altta tam genişlik bar)
  Icon.astro, Logo.astro
```

## 5. Tasarım kuralları

- Renk paleti (`global.css` `:root`): lacivert `--navy #0b2545`, teal `--teal-600 #0d9488` (ana vurgu), `--teal-500 #14b8a6`, açık yeşil zemin `--mint-50 #effcf9`, WhatsApp yeşili `--wa #25d366`.
- Köşeler yuvarlak (`--radius 18px`), yumuşak gölgeler, bol boşluk; mobil öncelikli.
- Bölümler `.reveal` sınıfıyla ekrana girerken belirir; `prefers-reduced-motion` desteği var.
- Mobilde yatay kaydırma olmamalı (390px genişlikte test edildi).
- Yeni bölüm eklerken mevcut sınıfları kullanın: `.section`, `.section--tint`, `.section-head`, `.eyebrow`, `.card`, `.icon-badge`, `.btn--primary/--wa/--ghost/--white`.

## 6. Önemli kararlar ve dikkat edilecekler

- **Sahte müşteri yorumu eklenmeyecek.** Kullanıcı istedi ama uydurma yorumu gerçekmiş gibi göstermek yanıltıcı ve tüketici mevzuatı açısından riskli olduğu için eklenmedi. Gerçek Google yorumları geldikçe `site.ts` içindeki `reviews` dizisine `{ name, text, rating }` olarak eklenir; dizi doluysa bölüm otomatik yorum kartlarına döner.
- **Markalar:** Referans sitede marka listesi yoktu, bu yüzden sitede marka bölümü yok.
- **Ürün listesi** referans sitenin kategorilerinden alındı; firmada "hemen hemen bütün medikal ürünler" var. Bu nedenle sitede "listede olmayan ürün için bizi arayın" mesajı bulunuyor.
- **Mobil menü:** Header `backdrop-filter` kullandığı için içindeki `position: fixed` menü bozuluyordu (şeffaf/arka plansız görünüyordu). Çözüm: mobilde `.nav` `position: absolute; top: 100%; height: calc(100dvh - 76px)` ve beyaz arka plan. Hamburger ikonu açıkken ✕'e döner. Icon bileşenine verilen class'lar Astro scoped CSS'e takılmasın diye `:global(...)` ile seçiliyor. Bu yapıyı `fixed`'e geri çevirmeyin.
- "Fiyat sor" linkleri WhatsApp'ı ürün adıyla hazır mesajla açar.
- Google Maps iframe'i koordinat ile gömülü (`site.lat`, `site.lng`).

### SEO kararları (2026-11-12)
- **Hizmet sayfaları:** /hasta-yatagi-kiralama-ankara/, /havali-yatak-kiralama-ankara/, /oksijen-konsantratoru-kiralama-ankara/, /cpm-cihazi-kiralama-ankara/, /tekerlekli-sandalye-kiralama-ankara/. Her biri "[ürün] kiralama ankara" kelimesini hedefler. Yeni hizmet eklemek için `services.ts`'e kayıt eklemek yeterli (sayfa, sitemap, footer, 404 linkleri, JSON-LD otomatik).
- **Ana sayfa** genel/yerel kelimeleri hedefler: "Ankara medikal ürün kiralama", Batıkent, Yenimahalle, "7/24 açık / nöbetçi medikal". Ürün kelimeleriyle hizmet sayfalarıyla yarışmasın diye title'da ürün adı yok.
- **İlçe sayfası açılmayacak.** Rakiplerin yaptığı gibi ilçe başına ince sayfalar Google'ın doorway/scaled content politikasına aykırı. İlçeler ana sayfada, hizmet sayfalarında tek paragrafta ve JSON-LD `areaServed`'da.
- **İçerik kuralları (YMYL):** fiyat, SGK/devlet ödemesi, depozito, marka/model, tüp dolum, "en ucuz/en iyi", uydurma istatistik yazılmaz (firma onayı yok). Tıbbi bilgiler genel tutulur, "doktorunuz/fizyoterapistiniz belirler" çerçevesinde kalır. Firma 2026 kuruluşlu: "10 yıl" ifadesi daima **ekibin** tecrübesi olarak yazılır.
- Title ≤ 60, description ≤ 158 karakter. `meta keywords` Google tarafından kullanılmaz, yalnızca kısa liste olarak duruyor; asıl etki title/H1/H2/metin/URL'den gelir.
- JSON-LD'de AggregateRating/Review **eklenmez** (gerçek ve doğrulanabilir yorum yok). FAQPage işaretlemesi geçerli ama Google 2023'ten beri SSS zengin sonucunu çoğu siteye göstermiyor.
- `alternateName` = Google İşletme Profili adı "Batıkent Erbiz Medikal"; ad/adres/telefon (NAP) GBP ile birebir aynı kalmalı.
- Paylaşım görseli `og-image.png` telefon numarasını site.ts'den okur; numara değişirse `npm run icons` çalıştırılıp commit edilmeli.

## 7. Yapılabilecekler (henüz yapılmadı)

- Gerçek ürün ve mağaza fotoğrafları (şu an ikon ve SVG görseller kullanılıyor; gelince hizmet sayfalarına ve og görsellerine eklenmeli)
- Sosyal medya linkleri (hesaplar açılınca; JSON-LD `sameAs`'a da eklenmeli)
- Gerçek Google yorumları
- Google Search Console + Bing Webmaster (Cloudflare DNS TXT ile doğrulama, sitemap gönderimi) ve Analytics kurulumu
- Firma onaylarsa: fiyat bilgisi ("…'den başlayan"), SGK bilgisi, oksijen tüpü hizmeti, akülü sandalye/hasta lifti için ayrı sayfa, bilgi/blog yazıları (bası yarası, oksijen cihazı kullanımı vb.)
- Google İşletme Profili'nde ürün/hizmetlerin bu sayfalara linklenmesi

## 8. Değişiklik geçmişi

- **2026-10-16:** Proje oluşturuldu (Astro 7, tek sayfa, tüm bölümler, SEO, sitemap, robots.txt, SVG logo).
- **2026-10-16:** Hero metnindeki eksik boşluk düzeltildi; mobilde yatay taşma giderildi.
- **2026-10-16:** Kullanıcı Node 18 ile hata aldı; Node 22+ kurulumu önerildi.
- **2026-10-16:** Mobil menü düzeltildi (beyaz arka plan, kart görünümlü linkler, ✕ ikonu).
- **2026-10-17:** Telefon ve WhatsApp numarası `+905532892961` → `+905070479013` olarak değiştirildi (yalnızca `site.ts`).
- **2026-10-17:** Bu AGENTS.md dosyası ve CLAUDE.md oluşturuldu.
- **2026-11-11:** Git deposu oluşturuldu, GitHub (hburaker/erbiz-medikal) bağlantısı ve kişisel commit kimliği ayarlandı; Git bölümü (3.1) eklendi, konum bilgisi PersonalProjects olarak düzeltildi.
- **2026-11-12:** Cloudflare metriklerinde yüksek 4xx görüldü. Nedenler: tarayıcıların otomatik istediği `favicon.ico` / `apple-touch-icon*.png` yoktu (eklendi, `npm run icons`); 404.html servis edilmiyordu, boş 404 dönüyordu (`wrangler.jsonc` ile `404-page` açıldı); kalan 4xx'ler `/wp-login.php`, `/.env` gibi bot taramaları (zararsız, Cloudflare WAF kuralıyla engellenebilir).
- **2026-11-12:** SEO çalışması: anahtar kelime/rakip araştırması, 5 hizmet açılış sayfası (`services.ts` + `[slug].astro`), yeni title/description/keywords, robots, geo, OG/Twitter + og-image.png, JSON-LD @graph (WebSite, MedicalBusiness+Store, WebPage, Service, FAQPage, BreadcrumbList), H1'e anahtar kelime, başlık hiyerarşisi (sr-only h2, footer başlıkları p), iç linkler (kartlar/kategoriler/footer → hizmet sayfaları, nav `/#...`), font self-host, 404 noindex, manifest, logo gradient id çakışması düzeltildi, `Kazan` → `Kahramankazan`.
