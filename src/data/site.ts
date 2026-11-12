// Sitedeki tüm firma bilgileri burada. Bir bilgi değişirse sadece bu dosyayı düzenlemek yeterli.

export const site = {
  name: 'Erbiz Medikal',
  // Google İşletme Profili'ndeki ad (JSON-LD alternateName). Profil adı değişirse burayı da güncelleyin.
  alternateName: 'Batıkent Erbiz Medikal',
  slogan: 'Sağlığınız için 7/24 yanınızdayız',
  url: 'https://erbizmedikal.com',
  // Ana sayfanın Google'da görünen başlığı (≤ 60 karakter) ve açıklaması (≤ 158 karakter)
  defaultTitle: 'Ankara Medikal Ürün Kiralama ve Satış, 7/24 | Erbiz Medikal',
  description:
    'Batıkent’ten tüm Ankara’ya hasta yatağı, havalı yatak, oksijen konsantratörü, CPM ve tekerlekli sandalye kiralama-satış. 7/24 açık, aynı gün ücretsiz kurulum.',
  keywords: [
    'ankara medikal ürün kiralama', 'batıkent medikal', 'yenimahalle medikal', 'nöbetçi medikal ankara',
    '7/24 açık medikal ankara', 'hasta yatağı kiralama ankara', 'oksijen konsantratörü kiralama ankara',
  ],
  phone: '+905070479013',
  phoneDisplay: '0507 047 90 13',
  whatsapp: '905070479013',
  whatsappMessage: 'Merhaba, Erbiz Medikal web sitenizden ulaşıyorum. Bilgi almak istiyorum.',
  address: 'Kentkoop Mah. 1860. Cad. No: 27/A, Batıkent, 06370 Yenimahalle / Ankara',
  mapsUrl: 'https://maps.app.goo.gl/BfAdbnEajouFR47z5',
  lat: 39.9664869,
  lng: 32.7190699,
  hours: '7 gün 24 saat açık',
  serviceArea: 'Ankara’nın tüm ilçeleri',
  experienceYears: 10,
};

// WhatsApp linki: hazır mesajla açılır. Tüm WhatsApp linkleri bu fonksiyonla üretilmeli.
export const waLink = (text: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const whatsappLink = waLink();
export const telLink = `tel:${site.phone}`;

export const nav = [
  { label: 'Ürünler', href: '/#urunler' },
  { label: 'Kiralama', href: '/#kiralama' },
  { label: 'Hakkımızda', href: '/#hakkimizda' },
  { label: 'Hizmet Bölgeleri', href: '/#bolgeler' },
  { label: 'İletişim', href: '/#iletisim' },
];

// Kiralama + satış öne çıkan ürünler
export const rentals = [
  {
    title: 'Hasta Yatağı',
    desc: '2, 3 ve 4 motorlu, uzaktan kumandalı hasta karyolaları. Havalı yatak ile birlikte kurulum.',
    icon: 'bed',
    slug: 'hasta-yatagi-kiralama-ankara',
  },
  {
    title: 'Oksijen Konsantratörü',
    desc: 'Evde kullanım için sessiz çalışan oksijen cihazları, gerektiğinde tüp desteği.',
    icon: 'lungs',
    slug: 'oksijen-konsantratoru-kiralama-ankara',
  },
  {
    title: 'CPM Cihazı',
    desc: 'Diz ve kalça ameliyatı sonrası rehabilitasyon için CPM cihazı kiralama.',
    icon: 'knee',
    slug: 'cpm-cihazi-kiralama-ankara',
  },
  {
    title: 'Tekerlekli Sandalye',
    desc: 'Manuel, katlanabilir ve akülü tekerlekli sandalyeler. Kısa ve uzun dönem kiralama.',
    icon: 'wheelchair',
    slug: 'tekerlekli-sandalye-kiralama-ankara',
  },
];

// Ürün kategorileri. slug verilenler kendi hizmet sayfasına bağlanır (src/data/services.ts)
export const categories: { title: string; icon: string; slug?: string }[] = [
  { title: 'Hasta Yatağı', icon: 'bed', slug: 'hasta-yatagi-kiralama-ankara' },
  { title: 'Havalı Yatak', icon: 'mattress', slug: 'havali-yatak-kiralama-ankara' },
  { title: 'Oksijen Konsantratörü', icon: 'lungs', slug: 'oksijen-konsantratoru-kiralama-ankara' },
  { title: 'Tekerlekli Sandalye', icon: 'wheelchair', slug: 'tekerlekli-sandalye-kiralama-ankara' },
  { title: 'Fizik Tedavi & CPM', icon: 'knee', slug: 'cpm-cihazi-kiralama-ankara' },
  { title: 'Tıbbi Cihaz', icon: 'pulse' },
  { title: 'Ortez, Korse & Ortopedi', icon: 'brace' },
  { title: 'Tıbbi Sarf Malzemeleri', icon: 'syringe' },
  { title: 'Yara & Yanık Bakım', icon: 'bandage' },
  { title: 'Cerrahi Alet', icon: 'scalpel' },
  { title: 'Aile Hekimliği', icon: 'stethoscope' },
  { title: 'Veteriner Malzemeleri', icon: 'paw' },
];

export const features = [
  { title: 'Aynı Gün Ücretsiz Kurulum', desc: 'Siparişiniz aynı gün adresinize teslim edilir, kurulumu ve kullanım eğitimi ücretsiz yapılır.', icon: 'truck' },
  { title: '7/24 Destek', desc: 'Gece ya da hafta sonu fark etmez; telefon ve WhatsApp hattımız her an açık.', icon: 'clock' },
  { title: 'Uygun Fiyat', desc: 'Kiralama ve satışta uygun fiyatlar. 2. ay kiralamada ek indirim.', icon: 'tag' },
  { title: 'Hijyen Garantisi', desc: 'Kiralık tüm ürünler her teslimattan önce dezenfekte edilir ve bakımdan geçer.', icon: 'shield' },
];

export const steps = [
  { title: 'Bizi arayın', desc: 'Telefon ya da WhatsApp ile ihtiyacınızı anlatın, size en uygun ürünü önerelim.' },
  { title: 'Aynı gün teslimat', desc: 'Ürünü Ankara’nın neresinde olursanız olun adresinize getirelim.' },
  { title: 'Kurulum ve eğitim', desc: 'Kurulumu yapıp hasta yakınlarına kullanımı adım adım gösterelim.' },
  { title: 'Sürekli destek', desc: 'Kullanım süresince her sorunuzda 7/24 ulaşabileceğiniz bir ekip.' },
];

// Sitede etiket olarak görünen ilçe ve semtler
export const districts = [
  'Yenimahalle', 'Batıkent', 'Etimesgut', 'Sincan', 'Çankaya', 'Keçiören', 'Mamak', 'Altındağ',
  'Pursaklar', 'Gölbaşı', 'Eryaman', 'Ümitköy', 'Çayyolu', 'Demetevler', 'Kahramankazan', 'Polatlı',
];

// Ankara'nın 25 resmi ilçesi (JSON-LD areaServed için)
export const ankaraIlceleri = [
  'Akyurt', 'Altındağ', 'Ayaş', 'Bala', 'Beypazarı', 'Çamlıdere', 'Çankaya', 'Çubuk', 'Elmadağ',
  'Etimesgut', 'Evren', 'Gölbaşı', 'Güdül', 'Haymana', 'Kahramankazan', 'Kalecik', 'Keçiören',
  'Kızılcahamam', 'Mamak', 'Nallıhan', 'Polatlı', 'Pursaklar', 'Sincan', 'Şereflikoçhisar', 'Yenimahalle',
];

export const faqs = [
  { q: 'Kiralama için minimum süre nedir?', a: 'Ürüne göre değişmekle birlikte genellikle aylık kiralama yapıyoruz. Kısa süreli ihtiyaçlar için de bizi arayabilirsiniz.' },
  { q: 'Teslimat ve kurulum ücretli mi?', a: 'Ankara içinde teslimat, kurulum ve kullanım eğitimi ücretsizdir.' },
  { q: 'Gece acil ihtiyaç olursa ne yapmalıyım?', a: '7/24 hizmet veriyoruz. Telefon veya WhatsApp hattımızdan her saatte bize ulaşabilirsiniz.' },
  { q: 'Gece açık bir medikal arıyorum, nöbetçi medikal aramam gerekir mi?', a: 'Gerek yok. Erbiz Medikal hafta sonu ve bayramlar dahil 7 gün 24 saat açık. Gece de arayabilir ya da WhatsApp’tan yazabilirsiniz.' },
  { q: 'Mağazanız nerede, hangi ilçelere teslimat yapıyorsunuz?', a: 'Mağazamız Batıkent’te, Kentkoop Mahallesi 1860. Cadde No: 27/A (Yenimahalle) adresinde. Yenimahalle, Etimesgut, Sincan, Çankaya, Keçiören başta olmak üzere Ankara’nın tüm ilçelerine teslimat yapıyoruz.' },
  { q: 'Listede olmayan bir ürün arıyorum.', a: 'Sitede yer alanlar ürün yelpazemizin yalnızca bir kısmı. Aradığınız ürün için bizi arayın; temin edip edemeyeceğimizi hemen söyleyelim.' },
];

// Müşteri yorumları: Google'da gelen GERÇEK yorumları buraya ekleyin.
// Liste boşken sitede "Bizi değerlendirin" kartı gösterilir.
// Örnek: { name: 'Ayşe K.', text: 'Aynı gün kurulum yaptılar...', rating: 5 }
export const reviews: { name: string; text: string; rating: number }[] = [];
