// Sitedeki tüm firma bilgileri burada. Bir bilgi değişirse sadece bu dosyayı düzenlemek yeterli.

export const site = {
  name: 'Erbiz Medikal',
  slogan: 'Sağlığınız için 7/24 yanınızdayız',
  url: 'https://erbizmedikal.com',
  description:
    'Erbiz Medikal: Ankara genelinde hasta yatağı, oksijen konsantratörü, CPM cihazı, tekerlekli sandalye kiralama ve satışı. Aynı gün ücretsiz teslimat ve kurulum, 7/24 destek.',
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

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const telLink = `tel:${site.phone}`;

export const nav = [
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Kiralama', href: '#kiralama' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Hizmet Bölgeleri', href: '#bolgeler' },
  { label: 'İletişim', href: '#iletisim' },
];

// Kiralama + satış öne çıkan ürünler
export const rentals = [
  {
    title: 'Hasta Yatağı',
    desc: '2, 3 ve 4 motorlu, uzaktan kumandalı hasta karyolaları. Havalı yatak ile birlikte kurulum.',
    icon: 'bed',
  },
  {
    title: 'Oksijen Konsantratörü',
    desc: 'Evde kullanım için sessiz çalışan oksijen cihazları, gerektiğinde tüp desteği.',
    icon: 'lungs',
  },
  {
    title: 'CPM Cihazı',
    desc: 'Diz ve kalça ameliyatı sonrası rehabilitasyon için CPM cihazı kiralama.',
    icon: 'knee',
  },
  {
    title: 'Tekerlekli Sandalye',
    desc: 'Manuel, katlanabilir ve akülü tekerlekli sandalyeler. Kısa ve uzun dönem kiralama.',
    icon: 'wheelchair',
  },
];

// Ürün kategorileri
export const categories = [
  { title: 'Hasta Yatağı & Havalı Yatak', icon: 'bed' },
  { title: 'Tekerlekli Sandalye', icon: 'wheelchair' },
  { title: 'Tıbbi Cihaz', icon: 'pulse' },
  { title: 'Fizik Tedavi', icon: 'knee' },
  { title: 'Ortez Ürünleri', icon: 'brace' },
  { title: 'Ortopedi Ürünleri', icon: 'bone' },
  { title: 'Sarf Malzemesi', icon: 'box' },
  { title: 'Tıbbi Sarf Malzemeler', icon: 'syringe' },
  { title: 'Yara & Yanık Bakım', icon: 'bandage' },
  { title: 'Cerrahi Alet', icon: 'scalpel' },
  { title: 'Aile Hekimliği', icon: 'stethoscope' },
  { title: 'Veteriner Malzemeleri', icon: 'paw' },
];

export const features = [
  { title: 'Aynı Gün Ücretsiz Kurulum', desc: 'Siparişiniz aynı gün adresinize teslim edilir, kurulumu ve kullanım eğitimi ücretsiz yapılır.', icon: 'truck' },
  { title: '7/24 Destek', desc: 'Gece ya da hafta sonu fark etmez; telefon ve WhatsApp hattımız her an açık.', icon: 'clock' },
  { title: 'Uygun Fiyat', desc: 'Kiralama ve satışta şeffaf, ekonomik fiyatlar. 2. ay kiralamada ek indirim.', icon: 'tag' },
  { title: 'Hijyen Garantisi', desc: 'Kiralık tüm ürünler her teslimattan önce dezenfekte edilir ve bakımdan geçer.', icon: 'shield' },
];

export const steps = [
  { title: 'Bizi arayın', desc: 'Telefon ya da WhatsApp ile ihtiyacınızı anlatın, size en uygun ürünü önerelim.' },
  { title: 'Aynı gün teslimat', desc: 'Ürünü Ankara’nın neresinde olursanız olun adresinize getirelim.' },
  { title: 'Kurulum ve eğitim', desc: 'Kurulumu yapıp hasta yakınlarına kullanımı adım adım gösterelim.' },
  { title: 'Sürekli destek', desc: 'Kullanım süresince her sorunuzda 7/24 ulaşabileceğiniz bir ekip.' },
];

export const districts = [
  'Yenimahalle', 'Batıkent', 'Etimesgut', 'Sincan', 'Çankaya', 'Keçiören', 'Mamak', 'Altındağ',
  'Pursaklar', 'Gölbaşı', 'Eryaman', 'Ümitköy', 'Çayyolu', 'Demetevler', 'Kazan', 'Polatlı',
];

export const faqs = [
  { q: 'Kiralama için minimum süre nedir?', a: 'Ürüne göre değişmekle birlikte genellikle aylık kiralama yapıyoruz. Kısa süreli ihtiyaçlar için de bizi arayabilirsiniz.' },
  { q: 'Teslimat ve kurulum ücretli mi?', a: 'Ankara içinde teslimat, kurulum ve kullanım eğitimi ücretsizdir.' },
  { q: 'Gece acil ihtiyaç olursa ne yapmalıyım?', a: '7/24 hizmet veriyoruz. Telefon veya WhatsApp hattımızdan her saatte bize ulaşabilirsiniz.' },
  { q: 'Listede olmayan bir ürün arıyorum.', a: 'Sitede yer alanlar ürün yelpazemizin yalnızca bir kısmı. Aradığınız ürün için bizi arayın, hemen tedarik edelim.' },
];

// Müşteri yorumları: Google'da gelen GERÇEK yorumları buraya ekleyin.
// Liste boşken sitede "Bizi değerlendirin" kartı gösterilir.
// Örnek: { name: 'Ayşe K.', text: 'Aynı gün kurulum yaptılar...', rating: 5 }
export const reviews: { name: string; text: string; rating: number }[] = [];
