// JSON-LD (schema.org) yapısal veri yardımcıları. Google'ın işletmeyi, hizmetleri ve SSS'yi anlaması için.
// Doğrulama: https://search.google.com/test/rich-results ve https://validator.schema.org
import { site, ankaraIlceleri } from './site';
import type { Service } from './services';

const base = site.url.replace(/\/$/, '');
export const ids = {
  website: `${base}/#website`,
  business: `${base}/#business`,
};

export const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: `${base}/`,
  name: site.name,
  alternateName: site.alternateName,
  inLanguage: 'tr-TR',
  publisher: { '@id': ids.business },
});

export const businessNode = (services: Service[]) => ({
  '@type': ['MedicalBusiness', 'Store'],
  '@id': ids.business,
  name: site.name,
  alternateName: site.alternateName,
  slogan: site.slogan,
  description: site.description,
  url: `${base}/`,
  logo: `${base}/icon-512.png`,
  image: [`${base}/og-image.png`],
  telephone: site.phone,
  currenciesAccepted: 'TRY',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kentkoop Mah. 1860. Cad. No: 27/A, Batıkent',
    addressLocality: 'Yenimahalle',
    addressRegion: 'Ankara',
    postalCode: '06370',
    addressCountry: 'TR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.lat, longitude: site.lng },
  hasMap: site.mapsUrl,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [
    { '@type': 'City', name: 'Ankara' },
    ...ankaraIlceleri.map((name) => ({ '@type': 'AdministrativeArea', name: `${name}, Ankara` })),
  ],
  knowsAbout: services.map((s) => `${s.name} kiralama ve satışı`),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Medikal ürün kiralama ve satışı',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: `${s.name} Kiralama`, url: serviceUrl(s) },
    })),
  },
});

export const serviceUrl = (s: Service) => `${base}/${s.slug}/`;

export const webPageNode = (url: string, name: string, description: string, extras: object = {}) => ({
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  name,
  description,
  inLanguage: 'tr-TR',
  isPartOf: { '@id': ids.website },
  about: { '@id': ids.business },
  ...extras,
});

export const serviceNode = (s: Service) => ({
  '@type': 'Service',
  '@id': `${serviceUrl(s)}#service`,
  name: `${s.name} Kiralama ve Satışı`,
  serviceType: `${s.name} kiralama`,
  description: s.metaDescription,
  url: serviceUrl(s),
  provider: { '@id': ids.business },
  areaServed: { '@type': 'City', name: 'Ankara' },
});

export const faqNode = (faqs: { q: string; a: string }[], url: string) => ({
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  isPartOf: { '@id': `${url}#webpage` },
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbNode = (items: { name: string; url: string }[], url: string) => ({
  '@type': 'BreadcrumbList',
  '@id': `${url}#breadcrumb`,
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
});
