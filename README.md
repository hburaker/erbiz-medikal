# Erbiz Medikal Web Sitesi (Astro)

## Çalıştırma
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # çıktı: dist/ klasörü
```

## Bilgileri güncelleme
Telefon, adres, ürün kategorileri, SSS ve müşteri yorumları `src/data/site.ts` dosyasında.

## Yayına alma (ücretsiz)
- **Cloudflare Pages / Netlify / Vercel:** Projeyi GitHub'a yükleyin, build komutu `npm run build`, çıktı klasörü `dist`.
- Ya da `npm run build` sonrası `dist` klasörünü Netlify'a sürükleyip bırakın.
- Ardından `erbizmedikal.com` alan adını panelden bağlayın.
