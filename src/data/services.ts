// Hizmet (açılış) sayfaları. Her kayıt /<slug>/ adresinde bir sayfa üretir (src/pages/[slug].astro).
// Kurallar: fiyat, SGK, depozito, marka/model yazılmaz; tıbbi bilgiler genel tutulur ve "doktorunuz belirler" çerçevesinde kalır.

export interface Service {
  slug: string;
  name: string; // kısa ad, örn. "Hasta Yatağı"
  icon: string;
  metaTitle: string; // ≤ 60 karakter
  metaDescription: string; // ≤ 158 karakter
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  sections: { h2: string; paragraphs: string[]; bullets: string[] }[];
  faqs: { q: string; a: string }[];
  whatsappText: string;
}

export const services: Service[] = [
  {
    "slug": "hasta-yatagi-kiralama-ankara",
    "name": "Hasta Yatağı",
    "icon": "bed",
    "metaTitle": "Hasta Yatağı Kiralama Ankara – Satış | Erbiz Medikal",
    "metaDescription": "Hasta yatağı kiralama Ankara: 2, 3 ve 4 motorlu modeller, aynı gün ücretsiz teslimat ve kurulum. Güncel fiyat için 7/24 arayın ya da WhatsApp’tan yazın.",
    "keywords": [
      "hasta yatağı kiralama ankara",
      "kiralık hasta yatağı ankara",
      "motorlu hasta yatağı",
      "hasta karyolası kiralama",
      "ev tipi hasta yatağı",
      "hasta yatağı satışı ankara",
      "hasta yatağı fiyatları ankara"
    ],
    "h1": "Ankara’da Hasta Yatağı Kiralama ve Satışı",
    "eyebrow": "Kiralama & Satış · Ankara",
    "lead": "2, 3 ve 4 motorlu hasta yataklarını Ankara’nın her ilçesine aynı gün getiriyor, ücretsiz kuruyor ve kullanımını gösteriyoruz. Hangi modelin uygun olduğundan emin değilseniz 7/24 arayın.",
    "intro": [
      "Yakınınız ameliyattan çıktıysa, uzun süre yatakta kalacaksa ya da evde bakıma geçiyorsa doğru yatak hem onun konforunu hem de sizin bakım yükünüzü doğrudan etkiler. Erbiz Medikal olarak Ankara’da hasta yatağı kiralama ve satışı yapıyor, ekibimizin 10 yılı aşkın tecrübesiyle ihtiyacınıza uygun modeli seçmenize yardımcı oluyoruz.",
      "Batıkent’teki mağazamızdan yatağı aynı gün evinize getiriyoruz. Ankara içinde teslimat, kurulum ve kullanım eğitimi ücretsizdir: yatağı odaya yerleştiriyor, kumandayı sizinle birlikte deneyerek nasıl kullanılacağını gösteriyoruz."
    ],
    "sections": [
      {
        "h2": "2, 3 ve 4 motorlu hasta yatağı: hangisi kime uygun?",
        "paragraphs": [
          "Motorlu hasta yataklarında her motor, yatağın bir bölümünü kumandayla hareket ettirir. Motor sayısı arttıkça ayar seçeneği çoğalır; ancak her hastaya en çok motorlu model gerekmez. Uygun model, hastanın ne kadar hareket edebildiğine ve bakımın nasıl yapılacağına göre değişir.",
          "Hasta kısmen kendi başına doğrulabiliyorsa 2 motorlu bir model çoğu zaman yeterli olabilir. Uzun süre yatakta kalacak ve gün içinde sık bakım gerektirecek hastalarda yükseklik ayarlı 3 motorlu model, bakım verenin daha az eğilerek çalışmasına yardımcı olur. 4 motorlu modellerde yatağın tamamı baş ya da ayak tarafına doğru eğimlendirilebilir; bu pozisyonlar yalnızca hekim önerdiğinde kullanılmalıdır. Motorların sağladığı hareketler modele göre farklılık gösterebilir. Seçimi, hastayı takip eden doktorunuzun, hemşirenizin ya da fizyoterapistinizin önerisine göre yapmanızı öneririz."
        ],
        "bullets": [
          "2 motorlu: genellikle sırt ve diz/ayak bölümü ayarı",
          "3 motorlu: ek olarak yükseklik ayarı",
          "4 motorlu: ek olarak baş ya da ayak tarafına eğim ayarı",
          "Tüm modellerde uzaktan kumanda"
        ]
      },
      {
        "h2": "Kiralamak mı, satın almak mı?",
        "paragraphs": [
          "Çoğu ailenin ilk sorusu bu ve cevap büyük ölçüde yatağın ne kadar süre kullanılacağına bağlı. Ameliyat sonrası iyileşme gibi süresi az çok belli dönemlerde kiralık hasta yatağı pratik bir çözümdür; ihtiyaç bittiğinde evde yer kaplayan bir eşya kalmaz. Kiralama genellikle aylık yapılır ve 2. ay kiralamada ek indirim uygulanır. Daha kısa süreli bir ihtiyacınız varsa bizi arayın.",
          "Bakımın uzun süreceği ya da süresinin belirsiz olduğu durumlarda satın almak daha mantıklı olabilir. Sattığımız yataklarda satış sonrası teknik destek ve garanti sunuyoruz. Kararsız kaldığınızda durumu anlatmanız yeterli; iki seçeneği sizin için açıkça karşılaştırırız."
        ],
        "bullets": [
          "Süresi belli, kısa ihtiyaç: kiralama",
          "Uzun ya da belirsiz süreli bakım: satın alma",
          "Kiralamada 2. ayda ek indirim",
          "Satışta teknik destek ve garanti"
        ]
      },
      {
        "h2": "Temizlik, bakım ve yatakla birlikte kurulabilecekler",
        "paragraphs": [
          "Kiraladığınız yatak evinize gelmeden önce dezenfekte edilir ve bakımdan geçirilir. Böylece yatak, hastanın kullanımına hazır ve temiz olarak teslim edilir.",
          "Uzun süre yatakta kalacak hastalarda hasta yatağıyla birlikte havalı yatak da kurulabilir. Havalı yatağın gerekip gerekmediğine ve hangi tipinin uygun olduğuna doktorunuz ya da hemşireniz karar verir. Yatağın yanında başka bir medikal ürüne ihtiyacınız varsa sipariş verirken sormanız yeterli."
        ],
        "bullets": [
          "Her kiralamadan önce dezenfeksiyon",
          "Teslim öncesi bakım",
          "Havalı yatakla birlikte kurulum imkânı",
          "Ücretsiz kullanım eğitimi"
        ]
      },
      {
        "h2": "Kurulumdan önce oda nasıl hazırlanır?",
        "paragraphs": [
          "Ev tipi hasta yatağı elektrikle çalışır ve bakım verenin iki yandan da rahatça yaklaşabileceği bir alana ihtiyaç duyar. Ekibimiz geldiğinde kurulumun kolay geçmesi için birkaç küçük hazırlık yeterli. Yerleşimden emin değilseniz kurulum sırasında birlikte karar veririz."
        ],
        "bullets": [
          "Yatağın konacağı yeri boşaltın, iki yanda geçiş alanı bırakın",
          "Yakında bir priz olsun, mümkünse uzatma kablosu kullanmayın",
          "Tekerlekleri zorlayabilecek kalın halıları kaldırın",
          "Bina girişi, asansör ve merdiven durumunu telefonda belirtin",
          "Hastanın kapıyı ve pencereyi görebileceği bir yerleşim düşünün"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Hasta yatağını en az ne kadar süreyle kiralayabilirim?",
        "a": "Kiralamalar genellikle aylık olarak yapılır. Birkaç günlük ya da haftalık bir ihtiyaç için telefonla ulaşın; durumunuzu dinleyip neler yapabileceğimizi konuşalım."
      },
      {
        "q": "Kurulum ücretli mi, yatak aynı gün gelir mi?",
        "a": "Ankara içinde teslimat, kurulum ve kullanım eğitimi için ayrıca ücret alınmaz ve yatak aynı gün evinize getirilir. Teslimat saatini telefonda sizinle birlikte planlıyoruz."
      },
      {
        "q": "Hasta yatağı fiyatları neye göre değişir?",
        "a": "Fiyatı; yatağın modeli ve motor sayısı, kiralama süresi ve yatakla birlikte havalı yatak alınıp alınmadığı belirler. Güncel fiyat için bizi arayın ya da WhatsApp’tan yazın."
      },
      {
        "q": "Kiralık yataklar temiz ve bakımlı mı?",
        "a": "Evet. Her teslimattan önce yatak dezenfeksiyon ve bakım işleminden geçer. Kurulumda yatağın tüm hareketlerini sizinle birlikte deneriz."
      },
      {
        "q": "Hasta yatağıyla birlikte havalı yatak da alabilir miyim?",
        "a": "Evet, ikisini aynı teslimatta getirip birlikte kurabiliyoruz. Hastanız için havalı yatağın gerekli olup olmadığını önce doktorunuza ya da hemşirenize danışmanızı öneririz."
      },
      {
        "q": "Hangi yatağı seçeceğimi bilmiyorum, ne yapmalıyım?",
        "a": "Hastanın ne kadar hareket edebildiğini ve bakımı kimin yapacağını bize anlatın, seçenekleri birlikte değerlendirelim. Son kararda hastayı takip eden doktorun ya da fizyoterapistin önerisini esas alın."
      }
    ],
    "whatsappText": "Merhaba, hasta yatağı kiralama hakkında bilgi ve fiyat almak istiyorum."
  },
  {
    "slug": "havali-yatak-kiralama-ankara",
    "name": "Havalı Yatak",
    "icon": "mattress",
    "metaTitle": "Havalı Yatak Kiralama Ankara – Aynı Gün | Erbiz Medikal",
    "metaDescription": "Havalı yatak kiralama Ankara: bası yarası riskini azaltmaya yardımcı havalı yatak aynı gün teslim, ücretsiz kurulum. Güncel fiyat için 7/24 arayın.",
    "keywords": [
      "havalı yatak kiralama ankara",
      "kiralık havalı yatak",
      "havalı hasta yatağı",
      "bası yarası önleyici yatak",
      "boru tipi havalı yatak",
      "baklava tipi havalı yatak",
      "havalı yatak fiyatları"
    ],
    "h1": "Havalı Yatak Kiralama Ankara: Aynı Gün Teslim ve Kurulum",
    "eyebrow": "Havalı Yatak · Kiralama & Satış",
    "lead": "Yatağa bağımlı yakınınız için kiralık havalı yatağı aynı gün evinize getiriyor, ücretsiz kuruyor ve nasıl kullanılacağını yerinde gösteriyoruz. Bize 7/24 ulaşabilirsiniz.",
    "intro": [
      "Yatağa bağımlı bir yakınınıza bakarken akla gelen ilk endişelerden biri bası yarasıdır. Erbiz Medikal ile havalı yatak kiralama Ankara’nın her ilçesinde kolaylaşır: kiralık havalı yatağı aynı gün evinize getiriyor, ücretsiz kuruyor ve kullanımını yerinde anlatıyoruz.",
      "Batıkent’teki mağazamızdan çıkan her kiralık ürün, teslimattan önce dezenfekte edilir ve bakımdan geçirilir. Sektörde 10 yılı aşkın tecrübeye sahip ekibimiz, doktorunuzun ya da hemşirenizin önerisine göre uygun yatağı hazırlar. Gece ya da gündüz, telefonla veya WhatsApp’tan bize ulaşabilirsiniz."
    ],
    "sections": [
      {
        "h2": "Havalı yatak ne işe yarar?",
        "paragraphs": [
          "Uzun süre aynı pozisyonda yatan hastalarda vücut ağırlığı kuyruk sokumu, topuk, kalça ve kürek kemikleri gibi bölgelerde yoğunlaşır. Bu bölgelerde kan dolaşımı zayıfladığında cilt zarar görebilir ve bası yarası (yatak yarası) oluşabilir. Havalı hasta yatağı, bu baskının hep aynı noktada toplanmasını önlemek için tasarlanmıştır.",
          "Yatağın içinde yan yana dizilmiş hava hücreleri bulunur. Yatağa bağlı küçük bir kompresör bu hücreleri belirli aralıklarla sırayla şişirip indirir; böylece vücudun en çok baskı gören noktası sürekli yer değiştirir. Bu yöntem bası yarasının önlenmesine ve bakımına destek olur, ancak düzenli pozisyon değiştirmenin, cilt kontrolünün ve hemşirelik bakımının yerini tutmaz."
        ],
        "bullets": [
          "Değişken basınçla baskı noktalarını değiştirir",
          "Hareketi kısıtlı, yatağa bağımlı hastalar için",
          "Pozisyon değiştirme ve cilt bakımıyla birlikte kullanılır"
        ]
      },
      {
        "h2": "Boru tipi mi, baklava tipi mi?",
        "paragraphs": [
          "Baklava (kabarcık) tipi havalı yatağın yüzeyi küçük, petek benzeri hava hücrelerinden oluşur. Daha ince ve hafif bir yapıdadır; genellikle bası yarası riski daha düşük olan hastalarda koruyucu amaçla tercih edilir.",
          "Boru tipi havalı yatakta ise hücreler enine dizilmiş, daha kalın hava borularıdır. Hücre hacmi büyük olduğu için baskıyı daha geniş bir alana yayar; uzun süre yatağa bağımlı kalacak ya da yara riski yüksek hastalarda daha sık önerilir. Hangi tipin uygun olduğuna hastanın durumunu bilen doktor veya hemşire karar verir; hastada mevcut bir bası yarası varsa bu değerlendirme özellikle önemlidir. Önerilen tipi ve stok durumunu telefonda birlikte netleştiririz."
        ],
        "bullets": [
          "Baklava tipi: ince, hafif, koruyucu kullanım",
          "Boru tipi: genellikle risk daha yüksek olduğunda önerilir",
          "Mevcut bir yara varsa seçimi mutlaka doktor veya hemşire yapmalı",
          "Seçim: doktor veya hemşire önerisiyle"
        ]
      },
      {
        "h2": "Kurulum, kullanım ve temizlik",
        "paragraphs": [
          "Havalı yatak çoğunlukla hasta yatağının mevcut şiltesinin üzerine serilir, kompresör ise karyolanın ayak ucuna asılır. Teslimatta yatağı yerleştiriyor, hortumları bağlıyor ve kompresörün doğru çalışıp çalışmadığını nasıl kontrol edeceğinizi gösteriyoruz. Hasta yatağını da bizden kiralıyorsanız ikisini birlikte kuruyoruz. Havalı yatak yatak yüzeyini yükselttiği için kenar korumalarının yeterli yükseklikte kalıp kalmadığını kurulumda birlikte kontrol ederiz; hastanın düşme riski varsa hemşirenize danışın.",
          "Temizlikte üreticinin talimatlarına uyun; yüzey genellikle nemli bir bezle ve hafif sabunlu suyla silinebilir, kompresöre su gelmemesine dikkat edin. Hastanın altına kalın, çok katlı örtüler koymak yatağın etkisini azaltabilir; ince bir çarşaf genellikle yeterlidir. İğne, makas gibi sivri cisimleri yataktan uzak tutun."
        ],
        "bullets": [
          "Kurulumda yerinde kullanım eğitimi",
          "Hortumlar bükülmeden, sıkışmadan durmalı",
          "Kenar korumalarının yüksekliğini kontrol edin",
          "Üzerinde ince çarşaf kullanımı"
        ]
      },
      {
        "h2": "Kiralama mı, satın alma mı?",
        "paragraphs": [
          "Kiralama genellikle aylık yapılır ve 2. ay kiralamada ek indirim uygulanır. Daha kısa süreli bir ihtiyacınız varsa bizi arayın, birlikte çözüm bulalım. Yatak uzun süre kullanılacaksa satın almak da bir seçenektir; satışlarda satış sonrası teknik destek ve garanti sunuyoruz.",
          "Havalı yatak fiyatları; yatağın tipine, kullanım süresine ve hasta yatağı gibi başka ürünlerle birlikte alınıp alınmadığına göre değişir. Güncel fiyat için bizi arayın ya da WhatsApp’tan yazın."
        ],
        "bullets": [
          "Aylık kiralama, 2. ayda ek indirim",
          "Her teslimat öncesi dezenfeksiyon ve bakım",
          "Ankara içi ücretsiz teslimat ve kurulum",
          "Satışta teknik destek ve garanti"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Havalı yatağın motoru sürekli çalışmalı mı?",
        "a": "Evet. Hücrelerin sırayla şişip inmesi kompresöre bağlıdır, bu yüzden hasta yataktayken cihaz açık kalmalıdır. Çalışırken hafif bir motor sesi duymanız normaldir."
      },
      {
        "q": "Havalı yatak hasta yatağının üstüne mi konur?",
        "a": "Genellikle evet, ancak bu kullanılan modele göre değişebilir. Kurulumu ekibimiz yapar ve yatağın nasıl yerleştirileceğini size yerinde gösterir."
      },
      {
        "q": "Elektrik kesilirse ne olur?",
        "a": "Kompresör elektrikle çalıştığı için kesintide hava döngüsü durur ve yatak zamanla havasını kaybedebilir. Uzun bir kesintide doktorunuzun veya hemşirenizin önerdiği şekilde hastanın pozisyonunu değiştirmeye devam edin; elektrik gelince cihazın yeniden çalıştığını kontrol edin, sorun olursa 7/24 bizi arayın."
      },
      {
        "q": "Havalı yatak bası yarasını tamamen önler mi?",
        "a": "Hiçbir yatak bunu tek başına garanti edemez. Havalı yatak riski azaltmaya yardımcı olur; hastanın ne sıklıkla çevrilmesi ve cildinin nasıl izlenmesi gerektiğini doktorunuz ya da hemşireniz belirler."
      },
      {
        "q": "Kiralık havalı yatak hijyenik mi?",
        "a": "Kiraladığımız tüm ürünler her teslimattan önce temizlenip dezenfekte edilir ve bakımı yapılır. Kullanım süresince yüzeyi nasıl temizleyeceğinizi de kurulumda anlatıyoruz."
      },
      {
        "q": "Havalı yatak fiyatları neye göre değişir?",
        "a": "Fiyatı; yatak tipi, ne kadar süre kiralanacağı ve yanında başka ürün alınıp alınmadığı etkiler. Size uygun güncel fiyatı ve 2. ay indirimini öğrenmek için bizi arayın veya WhatsApp’tan yazın."
      }
    ],
    "whatsappText": "Merhaba, havalı yatak kiralama hakkında bilgi ve fiyat almak istiyorum."
  },
  {
    "slug": "oksijen-konsantratoru-kiralama-ankara",
    "name": "Oksijen Konsantratörü",
    "icon": "lungs",
    "metaTitle": "Oksijen Konsantratörü Kiralama Ankara | Erbiz Medikal",
    "metaDescription": "Oksijen konsantratörü kiralama Ankara: ev tipi oksijen cihazı aynı gün ücretsiz teslim ve kurulumla kapınızda. Güncel fiyat için 7/24 arayın veya yazın.",
    "keywords": [
      "oksijen konsantratörü kiralama ankara",
      "oksijen cihazı kiralama ankara",
      "kiralık oksijen konsantratörü",
      "ev tipi oksijen cihazı",
      "oksijen makinesi kiralama",
      "oksijen konsantratörü fiyatları"
    ],
    "h1": "Ankara’da Oksijen Konsantratörü Kiralama ve Satış",
    "eyebrow": "Kiralama & Satış · Ankara",
    "lead": "Doktorunuzun önerdiği oksijen tedavisi için ev tipi oksijen cihazını aynı gün evinize getiriyor, ücretsiz kurup kullanımını gösteriyoruz. 7/24 arayabilir ya da WhatsApp’tan yazabilirsiniz.",
    "intro": [
      "Hastaneden taburcu olan ya da evde oksijen desteğine ihtiyaç duyan bir yakınınız için hızlı ve güvenilir bir çözüm arıyorsanız yanınızdayız. Erbiz Medikal’de oksijen konsantratörü kiralama Ankara’nın tüm ilçelerinde aynı gün teslimatla yapılır; cihazı ücretsiz olarak evinize getirip kuruyor, kullanımını size ve hastanıza adım adım gösteriyoruz.",
      "Batıkent’teki mağazamızda, sektörde 10 yılı aşkın tecrübeye sahip ekibimize gece gündüz ulaşabilirsiniz. Kiralık oksijen konsantratörü tercih edebileceğiniz gibi, uzun süreli kullanım öngörülüyorsa satın alma seçeneğini de birlikte değerlendirebiliriz. Hangi cihazın uygun olduğunu doktorunuzun önerisi doğrultusunda birlikte belirleriz."
    ],
    "sections": [
      {
        "h2": "Oksijen konsantratörü nedir, nasıl çalışır?",
        "paragraphs": [
          "Halk arasında oksijen makinesi ya da oksijen cihazı olarak da bilinen oksijen konsantratörü, ortam havasını içine çeker, havadaki azotun büyük kısmını ayırır ve yoğunlaştırılmış oksijeni genellikle burun kanülüyle, doktorunuz önerirse maskeyle hastaya iletir. Elektrikle çalıştığı için tüp gibi doldurulması gerekmez; prize takılı ve çalışır durumda olduğu sürece oksijen üretir.",
          "Ev tipi cihazlar evde kullanım için tasarlanmıştır ve görece sessiz çalışır; yine de hafif bir motor sesi duyulabilir. Cihazın üzerindeki akış ayarı litre/dakika cinsindendir. Bu değeri ve günlük kullanım süresini doktorunuz belirler."
        ],
        "bullets": [
          "Ortam havasından oksijeni yoğunlaştırır",
          "Elektrikle çalışır, dolum gerektirmez",
          "Evde kullanıma uygun, sessiz",
          "Doktorun önerdiği burun kanülü veya maske ile kullanılır"
        ]
      },
      {
        "h2": "5 litre mi, 10 litre mi? Hangi oksijen cihazı uygun?",
        "paragraphs": [
          "Oksijen konsantratörleri genellikle verebildikleri en yüksek akışa göre 5 litre ya da 10 litre olarak anılır. Hangi kapasitenin gerektiği, doktorunuzun belirlediği akış değerine bağlıdır. Bizi aradığınızda reçete ya da epikrizdeki bilgiyi paylaşmanız, uygun cihazı ve stok durumunu hızlıca netleştirmemizi sağlar.",
          "Akış ayarını kendi başınıza artırmayın ya da azaltmayın; oksijen, bir ilaç gibi doktor önerisiyle kullanılmalıdır. Hastanızın durumunda bir değişiklik fark ederseniz doktorunuza danışın; nefes darlığı belirgin şekilde artarsa vakit kaybetmeden 112’yi arayın."
        ],
        "bullets": [
          "Doktorunuzun belirlediği litre/dakika değeri",
          "Günlük kullanım süresi",
          "Cihazın kullanılacağı oda",
          "Reçete veya epikriz bilgisi"
        ]
      },
      {
        "h2": "Evde güvenli kullanım ve bakım",
        "paragraphs": [
          "Teslimat sırasında cihazın yerini birlikte belirliyor, kurulumdan sonra kullanım eğitimi veriyoruz. Nemlendirici kabının nasıl doldurulup temizleneceğini, filtrenin nasıl kontrol edileceğini ve kanül ile hortumun temiz tutulmasını bu eğitimde uygulamalı olarak gösteriyoruz.",
          "Kiraya verdiğimiz her cihaz, teslimattan önce dezenfekte edilir ve bakımı yapılır. Kullanım sırasında aklınıza takılan bir şey olursa 7/24 bize ulaşabilirsiniz."
        ],
        "bullets": [
          "Cihaz çalışırken hastanın yanında ve odada sigara içilmesin",
          "Mum, soba, ocak gibi açık alev kaynaklarından uzak durun",
          "Yüze ve buruna vazelin gibi yağ bazlı ürün sürmeyin; doktorunuza danışın",
          "Cihazı doğrudan duvar prizine takın, uzatma kablosu veya çoklu priz kullanmayın",
          "İyi havalandırılan bir odada kullanın",
          "Duvardan ve perdeden biraz uzağa yerleştirin",
          "Hava giriş bölümünün önünü kapatmayın"
        ]
      },
      {
        "h2": "Kiralama mı, satın alma mı? Fiyatı ne belirler?",
        "paragraphs": [
          "Oksijen konsantratörü fiyatları; cihazın kapasitesine, kiralama süresine ve kiralama ya da satın alma tercihinize göre değişir. Kiralama genellikle aylık yapılır ve 2. ay kiralamada ek indirim uygulanır. Daha kısa süreli bir ihtiyacınız varsa bizi arayın, durumunuza uygun çözümü birlikte bulalım.",
          "Uzun süreli kullanım öngörülüyorsa satın almak daha mantıklı olabilir; satışlarımızda satış sonrası teknik destek ve garanti sunuyoruz. Güncel fiyat için bizi arayabilir ya da WhatsApp’tan yazabilirsiniz."
        ],
        "bullets": [
          "Cihazın kapasitesi",
          "Kiralama süresi",
          "Kiralama veya satın alma tercihi"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Oksijen cihazı için doktor önerisi gerekir mi?",
        "a": "Evet, oksijen tedavisi doktor önerisiyle kullanılmalıdır. Cihazın hangi akışla ve günde ne kadar süre kullanılacağına doktorunuz karar verir; biz de cihazı bu öneriye göre hazırlayıp kurarız."
      },
      {
        "q": "Elektrik kesildiğinde ne olur?",
        "a": "Konsantratör elektrikle çalıştığı için kesinti sırasında oksijen üretimi durur. Gerektiğinde tüp desteği sağlıyoruz; kesintilere karşı nasıl bir yedek plan gerektiğini doktorunuzla ve bizimle konuşabilirsiniz."
      },
      {
        "q": "Oksijen tüpü ile konsantratör arasındaki fark nedir?",
        "a": "Tüp, içinde sınırlı miktarda oksijen bulundurur ve bittiğinde yenilenmesi gerekir. Konsantratör ise oksijeni ortam havasından kendisi üretir, bu yüzden elektrik olduğu sürece kesintisiz kullanılabilir."
      },
      {
        "q": "Cihaz ne zaman teslim edilir?",
        "a": "Ankara içinde aynı gün teslimat yapıyoruz; teslimat, kurulum ve kullanım eğitimi ücretsizdir. Taburcu sonrası gibi aceleli durumlarda günün her saatinde arayabilirsiniz."
      },
      {
        "q": "Birkaç haftalığına kiralayabilir miyim?",
        "a": "Kiralamalarımız genellikle aylıktır. Birkaç hafta gibi kısa süreli ihtiyaçlarda telefonla ya da WhatsApp’tan bize ulaşın, sizin için uygun seçeneği konuşalım."
      },
      {
        "q": "Kiralık oksijen konsantratörü ücreti nasıl belirlenir?",
        "a": "Ücret; cihazın kapasitesine ve kullanım süresine göre değişir. Aylık kiralamada ikinci ay için ek indirim uygulanır; güncel fiyatı öğrenmek için bizi arayın ya da WhatsApp’tan yazın."
      }
    ],
    "whatsappText": "Merhaba, oksijen konsantratörü kiralama hakkında bilgi ve fiyat almak istiyorum."
  },
  {
    "slug": "cpm-cihazi-kiralama-ankara",
    "name": "CPM Cihazı",
    "icon": "knee",
    "metaTitle": "CPM Cihazı Kiralama Ankara – Diz ve Kalça | Erbiz Medikal",
    "metaDescription": "CPM cihazı kiralama Ankara: diz ve kalça ameliyatı sonrası aynı gün ücretsiz teslimat, kurulum ve kullanım eğitimi. Güncel fiyat için 7/24 arayın.",
    "keywords": [
      "cpm cihazı kiralama ankara",
      "kiralık cpm cihazı",
      "diz cpm cihazı",
      "kalça cpm cihazı",
      "cpm cihazı nedir",
      "cpm cihazı kiralama fiyatları",
      "ameliyat sonrası diz rehabilitasyonu"
    ],
    "h1": "Ankara’da CPM Cihazı Kiralama ve Satışı",
    "eyebrow": "Ameliyat Sonrası Rehabilitasyon · Ankara",
    "lead": "Diz veya kalça ameliyatı sonrası doktorunuzun önerdiği CPM cihazını aynı gün evinize getiriyor, kuruyor ve nasıl kullanılacağını yerinde, uygulamalı olarak gösteriyoruz.",
    "intro": [
      "Diz ya da kalça ameliyatından sonra eve dönüş, hem hasta hem de hasta yakınları için yeni bir dönemin başlangıcıdır. Doktorunuz evde egzersiz için CPM cihazı önerdiyse, Ankara’da CPM cihazı kiralama sürecini sizin için kolaylaştırıyoruz: cihazı aynı gün kapınıza getiriyor, hastanın yatağına uygun şekilde kuruyor ve kullanımını adım adım anlatıyoruz.",
      "Batıkent’teki mağazamızdan Ankara’nın tüm ilçelerine hizmet veriyoruz. Ekibimizin 10 yılı aşkın tecrübesiyle, cihazla ilgili sorularınızı 7/24 telefon ve WhatsApp üzerinden yanıtlıyoruz. İhtiyacınıza göre kiralık CPM cihazı tercih edebilir ya da uzun süreli kullanım için satın alma seçeneğini birlikte değerlendirebiliriz."
    ],
    "sections": [
      {
        "h2": "CPM cihazı nedir, ne işe yarar?",
        "paragraphs": [
          "CPM cihazının adı, İngilizce “Continuous Passive Motion”, yani sürekli pasif hareket ifadesinden gelir. Cihaz, ameliyat edilen eklemi bir motor yardımıyla, hastanın kas gücü kullanmasına gerek kalmadan, önceden ayarlanan açı aralığında yavaşça bükülüp açılacak şekilde hareket ettirir.",
          "Hastanın bacağı cihazın bacak desteğine yerleştirilir; cihaz da eklemi düzenli ve sakin bir ritimle hareket ettirir. Ameliyat sonrası diz rehabilitasyonunda eklemin hareket açıklığını korumaya yardımcı olması amacıyla doktorlar tarafından önerilebilir. Hangi açıda, hangi hızda ve ne kadar süre kullanılacağı ise tamamen doktorunuzun ve fizyoterapistinizin kararıdır."
        ],
        "bullets": [
          "Sürekli pasif hareket prensibiyle çalışır",
          "Eklemi kas gücü kullanmadan hareket ettirir",
          "Açı aralığı ve hız ayarlanabilir",
          "Diz ve kalça ameliyatları sonrası kullanılır"
        ]
      },
      {
        "h2": "Hangi ameliyatlardan sonra kullanılır?",
        "paragraphs": [
          "Diz CPM cihazının en sık önerildiği durumlardan biri diz protezi ameliyatıdır. Doktorunuz gerekli görürse bazı başka diz ameliyatlarından sonra da kullanılabilir. Kalça için CPM cihazı kullanımı ise bazı kalça ameliyatlarından sonra gündeme gelir; bu durumda bacak pozisyonu ve hareket aralığı da doktorunuz tarafından ayrıca belirlenir.",
          "Her ameliyat sonrasında CPM cihazı gerekmez; cihazın kullanılıp kullanılmayacağına doktorunuz karar verir. Taburcu olurken size verilen egzersiz planını yanınızda bulundurursanız, kurulum sırasında bu değerleri cihaza nasıl gireceğinizi birlikte gösteririz."
        ],
        "bullets": [
          "Diz protezi ameliyatı sonrası",
          "Doktorun uygun gördüğü diğer diz ameliyatları",
          "Doktorun önerdiği kalça ameliyatları sonrası",
          "Her durumda doktor kararıyla"
        ]
      },
      {
        "h2": "Evde kurulum, açı ve hız ayarı",
        "paragraphs": [
          "Cihazı teslim ettiğimizde hastanın yatağına uygun şekilde yerleştiriyor, bacak desteğini hastanın bacak uzunluğuna göre ayarlıyoruz. Ardından cihazın nasıl başlatılıp durdurulacağını, açı ve hız değerlerinin nasıl girileceğini hasta yakınına uygulamalı olarak gösteriyoruz. Kiralık her cihaz, teslimattan önce dezenfekte edilip bakımdan geçirilerek hazırlanır.",
          "Başlangıç açısı, açının zamanla ne kadar artırılacağı, hız ve günlük kullanım süresi kişiye özeldir. Bu değerler doktorunuzun veya fizyoterapistinizin planına göre ayarlanır; biz kendi başımıza bir değer önermiyoruz. Kullanım sırasında ağrı, şişlik ya da beklenmedik bir durum fark ederseniz cihazı durdurup doktorunuza danışmanızı öneririz."
        ],
        "bullets": [
          "Aynı gün ücretsiz teslimat ve kurulum",
          "Yerinde, uygulamalı kullanım eğitimi",
          "Ayarlar doktor veya fizyoterapist planına göre",
          "Her teslimattan önce dezenfeksiyon ve bakım"
        ]
      },
      {
        "h2": "Kiralama süresi ve fiyatı ne belirler?",
        "paragraphs": [
          "CPM cihazına genellikle ameliyat sonrasındaki ilk dönemde ihtiyaç duyulur; toplam süreyi doktorunuzun planı belirler. Kiralamalarımız genellikle aylık yapılır. Daha kısa süreli bir ihtiyacınız varsa bizi arayın, size uygun çözümü birlikte konuşalım. Kiralamayı ikinci aya uzatırsanız ek indirim uyguluyoruz.",
          "CPM cihazı kiralama fiyatları; cihazın modeline ve diz ya da kalça kullanımına uygunluğuna ve kiralama süresine göre değişir. Güncel fiyat bilgisi için bizi arayabilir ya da WhatsApp’tan yazabilirsiniz. Cihazı satın almak isterseniz satış sonrası teknik destek ve garanti de sunuyoruz."
        ],
        "bullets": [
          "Genellikle aylık kiralama",
          "Kısa süreli ihtiyaç için bizi arayın",
          "2. ay kiralamada ek indirim",
          "Satın alma seçeneği, garanti ve teknik destek"
        ]
      }
    ],
    "faqs": [
      {
        "q": "CPM cihazı günde kaç saat kullanılmalı?",
        "a": "Günlük kullanım süresi ve seans sayısı ameliyatın türüne ve iyileşme sürecine göre değişir; bunu doktorunuz ya da fizyoterapistiniz belirler. Biz cihazı onların verdiği plana göre kullanabilmeniz için kuruyor ve ayarların nasıl yapılacağını gösteriyoruz."
      },
      {
        "q": "CPM cihazını ne kadar süre kiralamam gerekir?",
        "a": "Kullanım süresi ameliyatınıza ve doktorunuzun rehabilitasyon planına göre değişir. Doktorunuzun öngördüğü süreyi bize iletirseniz kiralama süresini buna göre birlikte planlarız."
      },
      {
        "q": "Açı ve hız ayarlarını kim belirliyor?",
        "a": "Açı, hız ve süre değerlerini doktorunuz veya fizyoterapistiniz belirler. Kurulumda bu değerleri cihaza nasıl gireceğinizi ve değerler değiştiğinde ayarı nasıl güncelleyeceğinizi hasta yakınına uygulamalı olarak anlatıyoruz."
      },
      {
        "q": "Cihaz aynı gün teslim edilebilir mi?",
        "a": "Evet, Ankara içinde aynı gün teslimat yapıyoruz; teslimat, kurulum ve kullanım eğitimi ücretsizdir. Taburculuk gününüz belli olduğunda bize haber vermeniz planlamayı kolaylaştırır."
      },
      {
        "q": "Kiralık CPM cihazı hijyenik mi?",
        "a": "Evet. Kiralık cihazlarımızın her biri evinize gelmeden önce dezenfekte edilir ve bakımı yapılır; cihaz size temiz ve kullanıma hazır şekilde ulaşır."
      },
      {
        "q": "Fiyat bilgisini nasıl alabilirim?",
        "a": "Fiyat; cihazın modeline ve kiralama süresine göre değişir. Güncel fiyat için bizi 7/24 arayabilir ya da WhatsApp’tan yazabilirsiniz."
      },
      {
        "q": "CPM cihazı satın alabilir miyim?",
        "a": "Evet, kiralamanın yanı sıra satış da yapıyoruz. Satın aldığınız cihaz için satış sonrası teknik destek ve garanti sunuyoruz."
      }
    ],
    "whatsappText": "Merhaba, CPM cihazı kiralama hakkında bilgi ve fiyat almak istiyorum."
  },
  {
    "slug": "tekerlekli-sandalye-kiralama-ankara",
    "name": "Tekerlekli Sandalye",
    "icon": "wheelchair",
    "metaTitle": "Tekerlekli Sandalye Kiralama Ankara | Erbiz Medikal",
    "metaDescription": "Tekerlekli sandalye kiralama Ankara: manuel, katlanabilir ve akülü modeller, aynı gün ücretsiz teslimat. Güncel fiyat için 7/24 arayın veya yazın.",
    "keywords": [
      "tekerlekli sandalye kiralama ankara",
      "kiralık tekerlekli sandalye ankara",
      "akülü tekerlekli sandalye kiralama",
      "katlanır tekerlekli sandalye",
      "manuel tekerlekli sandalye",
      "tekerlekli sandalye satış ankara",
      "tekerlekli sandalye fiyatları"
    ],
    "h1": "Ankara’da Tekerlekli Sandalye Kiralama ve Satış",
    "eyebrow": "Kiralama & Satış · Ankara",
    "lead": "Ameliyat sonrası, taburcu dönüşü ya da uzun süreli kullanım için manuel, katlanabilir ve akülü tekerlekli sandalyeleri aynı gün kapınıza getiriyor, kullanımını yerinde gösteriyoruz.",
    "intro": [
      "Bir yakınınızın hareketi kısıtlandığında, ilk günlerde çoğu zaman en acil ihtiyaçlardan biri güvenli bir tekerlekli sandalyedir. Ankara’da tekerlekli sandalye kiralama ihtiyacınızda Batıkent’teki mağazamızdan kentin her ilçesine aynı gün ücretsiz teslimat yapıyor, sandalyeyi evde hazır hâle getiriyor ve nasıl kullanılacağını hem hastaya hem de refakatçiye uygulamalı olarak anlatıyoruz.",
      "Erbiz Medikal yeni bir firma; ancak ekibimiz bu sektörde 10 yılı aşkın tecrübeye sahip. Hangi modelin uygun olduğundan emin değilseniz endişelenmeyin: kullanıcının hareket durumunu, evin yapısını ve sandalyenin nerede kullanılacağını birkaç soruyla birlikte değerlendirir, seçenekleri anlatır, gerekirse kiralama yerine satın almayı da konuşuruz. Hastanın sağlık durumuna uygunluk konusunda ise hekiminizin veya fizyoterapistinizin önerisini esas alırız. 7/24 telefon ve WhatsApp hattımızdan bize ulaşabilirsiniz."
    ],
    "sections": [
      {
        "h2": "Manuel mi, akülü mü? Doğru sandalyeyi seçmek",
        "paragraphs": [
          "Seçimi belirleyen en önemli şey, sandalyeyi kimin ve nerede kullanacağıdır. Kullanıcının kollarında tekerlekleri çevirecek gücü varsa ya da yanında sürekli bir refakatçi bulunacaksa manuel tekerlekli sandalye çoğu zaman yeterli olur; genellikle daha hafiftir, bakımı kolaydır ve dar alanlarda rahat yönlendirilir.",
          "Kol gücü zayıfsa, kişi gün içinde uzun mesafeler gidecekse veya refakatçi desteği sınırlıysa akülü model bağımsızlığı artırabilir. Ev içinde mi, sokakta mı, hastane koridorlarında mı kullanılacağı da kararı etkiler. Sandalyenin hasta için uygun olup olmadığına ve gün içinde ne kadar oturulabileceğine ise hekiminiz veya fizyoterapistiniz karar verir."
        ],
        "bullets": [
          "Kol gücü yeterliyse veya refakatçi varsa: manuel",
          "Kol gücü zayıfsa, bağımsız hareket için: akülü",
          "Sık araçla taşınacaksa: katlanabilir model",
          "Son karar hekim veya fizyoterapistte"
        ]
      },
      {
        "h2": "Akülü tekerlekli sandalye kiralama",
        "paragraphs": [
          "Akülü tekerlekli sandalye, kolçağa yerleştirilen bir kumandayla yönlendirilir ve kullanıcının kendi başına hareket etmesine imkân tanır. Kalıcı bir karar vermeden önce akülü tekerlekli sandalye kiralama mantıklı bir başlangıç olabilir: kişinin kumandayı rahat kullanıp kullanamadığını, evin kapı ve koridorlarının sandalyeye uygun olup olmadığını gündelik hayatta görmüş olursunuz.",
          "Teslimatta sandalyeyi çalıştırıp kumandanın kullanımını, şarj etmeyi ve frenleri tek tek gösteriyoruz. Akülü modeller manuel olanlara göre daha ağırdır; sık sık araca yüklenecekse bunu baştan konuşmak faydalı olur. Kullanıcının bu sandalyeyi güvenle kullanıp kullanamayacağını hekiminize veya fizyoterapistinize danışmanızı öneririz."
        ],
        "bullets": [
          "Kumandayla kolay yönlendirme",
          "Teslimatta şarj ve kullanım eğitimi",
          "Kalıcı karar öncesi kiralayarak deneyimleme",
          "Kiralama ve satış seçeneği"
        ]
      },
      {
        "h2": "Kısa süreli ihtiyaçlar: ameliyat sonrası ve taburcu dönemi",
        "paragraphs": [
          "Kalça veya diz ameliyatı sonrası iyileşme dönemi, hastaneden eve dönüş, kontrol randevuları gibi durumlarda sandalyeye yalnızca bir süre ihtiyaç duyulur. Böyle zamanlarda satın almak yerine kiralık tekerlekli sandalye kullanmak daha pratik olabilir.",
          "Kiralamalarımız genellikle aylık yapılır ve 2. ay kiralamada ek indirim uygulanır. Daha kısa süreli bir ihtiyacınız varsa bizi arayın; durumunuzu dinleyip size uygun yolu birlikte belirleyelim. Katlanır tekerlekli sandalye modelleri katlandığında az yer kaplar ve çoğu otomobil bagajına sığar; aracınızdan emin değilseniz önceden sorabilirsiniz."
        ],
        "bullets": [
          "Ameliyat sonrası iyileşme dönemi",
          "Taburcu ve hastane kontrolleri",
          "2. ay kiralamada ek indirim"
        ]
      },
      {
        "h2": "Doğru ölçü, temizlik ve evde kurulum",
        "paragraphs": [
          "Oturma genişliği konforu doğrudan etkiler. Oturak, kişi oturduğunda kalça genişliğinden bir miktar geniş olmalıdır: çok dar bir oturak yanlara baskı yapar, fazla geniş bir oturak ise duruşu bozabilir ve tekerlekleri itmeyi zorlaştırır. Bize kullanıcının yaklaşık boyunu, kilosunu ve oturduğundaki kalça genişliğini iletirseniz uygun modeli birlikte seçeriz. Uzun süre oturacak hastalarda minder ve pozisyon desteği gibi konularda hekiminizin veya fizyoterapistinizin yönlendirmesine uyun.",
          "Kiralık her sandalye teslimattan önce dezenfekte edilir ve bakımı yapılır; fren, lastik ve katlama mekanizması gözden geçirilir. Ankara içinde teslimat, kurulum ve kullanım eğitimi ücretsizdir. Tekerlekli sandalye satışlarında ise satış sonrası teknik destek ve garanti sunuyoruz."
        ],
        "bullets": [
          "Oturma genişliğine göre model seçimi",
          "Her teslimattan önce dezenfeksiyon ve bakım",
          "Ücretsiz teslimat, kurulum ve eğitim",
          "Satışlarda teknik destek ve garanti"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Manuel mi yoksa akülü tekerlekli sandalye mi kiralamalıyım?",
        "a": "Bu, kullanıcının tekerlekleri kendi başına çevirip çeviremeyeceğine ve yanında kimin olacağına bağlıdır. Hastanın durumunu önce hekiminiz veya fizyoterapistinizle konuşun; ardından bizi arayın, seçenekleri birlikte değerlendirelim."
      },
      {
        "q": "Katlanabilir tekerlekli sandalye arabaya sığar mı?",
        "a": "Çoğu otomobilde sorun olmaz. Emin değilseniz aracınızın bagaj ölçüsünü bize iletin, önceden birlikte kontrol edelim; teslimatta sandalyeyi katlayıp açmayı da gösteriyoruz."
      },
      {
        "q": "Sadece birkaç günlüğüne tekerlekli sandalye kiralayabilir miyim?",
        "a": "Standart kiralama süremiz genellikle aylıktır. Birkaç günlük bir ihtiyacınız varsa bizi arayın veya WhatsApp’tan yazın, durumunuza göre neler yapabileceğimizi konuşalım."
      },
      {
        "q": "Tekerlekli sandalye fiyatları neye göre değişir?",
        "a": "Fiyat; sandalyenin manuel, katlanabilir veya akülü olmasına ve kiralama süresine göre değişir. Güncel fiyat için bizi arayın ya da WhatsApp’tan yazın."
      },
      {
        "q": "Tekerlekli sandalyeyi aynı gün eve teslim ediyor musunuz?",
        "a": "Evet, Ankara’nın tüm ilçelerine aynı gün teslimat yapıyoruz. Ankara içinde teslimat, kurulum ve kullanım eğitimi için ayrıca ücret alınmaz."
      },
      {
        "q": "Kiralık sandalye hijyenik mi?",
        "a": "Kiralık ürünler farklı kullanıcılara verilebildiği için her sandalye size gelmeden önce dezenfekte edilir ve bakımdan geçirilir."
      },
      {
        "q": "Kiralamak mı, satın almak mı daha mantıklı?",
        "a": "Geçici ihtiyaçlarda kiralama genellikle daha pratiktir; uzun süreli veya kalıcı kullanımda satın almak daha uygun olabilir. İki seçeneği de sunuyoruz ve satışlarda teknik destek ile garanti veriyoruz."
      }
    ],
    "whatsappText": "Merhaba, tekerlekli sandalye kiralama hakkında bilgi ve fiyat almak istiyorum."
  }
];
