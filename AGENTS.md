# AGENTS.md — Erbiz Medikal Web Sitesi

Bu dosya, bu projede çalışacak yapay zekâ asistanları (Claude, Copilot, Cursor, Gemini vb.) ve geliştiriciler için proje bağlamını içerir. Değişiklik yapmadan önce okuyun; önemli bir karar veya değişiklik yaptığınızda **"Değişiklik Geçmişi"** bölümünü güncelleyin.

## 1. Proje özeti

- **Firma:** Erbiz Medikal (Google'daki işletme adı: "Batıkent Erbiz Medikal")
- **Ne yapıyor:** Ankara genelinde medikal ürün kiralama ve satışı (hasta yatağı, havalı yatak, oksijen konsantratörü, CPM, tekerlekli sandalye, ortez/ortopedi, sarf malzemesi vb.)
- **Site türü:** Tek sayfalık (one-page), statik tanıtım sitesi + 404 sayfası. Backend yok.
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

> Telefon değişirse **sadece** `src/data/site.ts` içindeki `phone`, `phoneDisplay`, `whatsapp` alanlarını güncelleyin; tüm site bu değerleri kullanır. Kod içinde numara sabit yazılmamalı.

## 3. Teknoloji

- **Astro 7.4.0** (+ `@astrojs/sitemap` 3.7.4). Saf CSS, ek UI framework yok (Tailwind/React yok).
- **Node.js >= 22.22.0 zorunlu.** (Node 18 ile `npm run dev` hata verir; kullanıcı bu sorunu yaşadı.)
- Font: Google Fonts, Plus Jakarta Sans.
- İkonlar: `src/components/Icon.astro` içinde inline SVG path'leri (harici ikon kütüphanesi yok).
- Komutlar: `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (çıktı `dist/`), `npm run preview`.
- Yayın: Cloudflare Pages / Netlify / Vercel. Build komutu `npm run build`, çıktı klasörü `dist`.

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
astro.config.mjs        site URL + sitemap entegrasyonu
public/                 favicon.svg, robots.txt
src/data/site.ts        TÜM içerik ve firma bilgileri (nav, ürünler, kategoriler, avantajlar, adımlar, ilçeler, SSS, yorumlar)
src/layouts/Layout.astro  <head>, SEO meta, Open Graph, JSON-LD (MedicalBusiness), reveal animasyon scripti
src/styles/global.css   renk değişkenleri, butonlar, kartlar, .reveal animasyonu
src/pages/index.astro   bölümlerin sırası
src/pages/404.astro
src/components/
  Header.astro          üst bant (7/24 + telefon), sticky header, mobil menü
  Hero.astro            ilk ekran: başlık, Ara/WhatsApp butonları, güven maddeleri, animasyonlu logo görseli
  Features.astro        4 avantaj kartı (hero'nun altına taşan şerit)
  Rentals.astro         #kiralama: öne çıkan 4 ürün + "Nasıl çalışıyoruz" 4 adım
  Categories.astro      #urunler: 12 kategori + "listede yoksa arayın" kutusu
  About.astro           #hakkimizda: istatistikler + hakkımızda metni
  Reviews.astro         #yorumlar: yorum yoksa "Google'da değerlendirin" kartı
  Areas.astro           #bolgeler: ilçe etiketleri + SSS (details/summary)
  Contact.astro         CTA bandı + #iletisim (bilgiler + Google Maps iframe)
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

## 7. Yapılabilecekler (henüz yapılmadı)

- Gerçek ürün ve mağaza fotoğrafları (şu an ikon ve SVG görseller kullanılıyor)
- Sosyal medya linkleri (hesaplar açılınca)
- Gerçek Google yorumları
- Kategori başına ayrı sayfalar (SEO için)
- Google Search Console ve Analytics kurulumu

## 8. Değişiklik geçmişi

- **2026-10-16:** Proje oluşturuldu (Astro 7, tek sayfa, tüm bölümler, SEO, sitemap, robots.txt, SVG logo).
- **2026-10-16:** Hero metnindeki eksik boşluk düzeltildi; mobilde yatay taşma giderildi.
- **2026-10-16:** Kullanıcı Node 18 ile hata aldı; Node 22+ kurulumu önerildi.
- **2026-10-16:** Mobil menü düzeltildi (beyaz arka plan, kart görünümlü linkler, ✕ ikonu).
- **2026-10-17:** Telefon ve WhatsApp numarası `+905532892961` → `+905070479013` olarak değiştirildi (yalnızca `site.ts`).
- **2026-10-17:** Bu AGENTS.md dosyası ve CLAUDE.md oluşturuldu.
- **2026-11-11:** Git deposu oluşturuldu, GitHub (hburaker/erbiz-medikal) bağlantısı ve kişisel commit kimliği ayarlandı; Git bölümü (3.1) eklendi, konum bilgisi PersonalProjects olarak düzeltildi.
