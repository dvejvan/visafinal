import { notFound } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import VisaCountryPage from '@/components/visa-country-page'
import UkVisaPage from '@/components/uk-visa-page'
import UkModernVisaPage from '@/components/uk-modern-visa-page'
import UsaModernVisaPage from '@/components/usa-modern-visa-page'
import IndiaModernVisaPage from '@/components/india-modern-visa-page'
import AustraliaModernVisaPage from '@/components/australia-modern-visa-page'
import CanadaModernVisaPage from '@/components/canada-modern-visa-page'
import ColombiaModernVisaPage from '@/components/colombia-modern-visa-page'
import NewZealandModernVisaPage from '@/components/newzealand-modern-visa-page'
import SouthKoreaModernVisaPage from '@/components/southkorea-modern-visa-page'
import TurkeyModernVisaPage from '@/components/turkey-modern-visa-page'
import VietnamModernVisaPage from '@/components/vietnam-modern-visa-page'
import QatarModernVisaPage from '@/components/qatar-modern-visa-page'
import SriLankaModernVisaPage from '@/components/srilanka-modern-visa-page'
import EgyptModernVisaPage from '@/components/egypt-modern-visa-page'
import SaudiArabiaModernVisaPage from '@/components/saudiarabia-modern-visa-page'
import EatvModernVisaPage from '@/components/eatv-modern-visa-page'
import SchengenModernVisaPage from '@/components/schengen-modern-visa-page'

// Definice podporovaných zemí
const countries = {
  'in': {
    code: 'IN',
    name: 'Indie',
    flag: '🇮🇳',
    duration: '3-5 dnů',
    price: 'od 2,500 Kč',
    description: 'Elektronické turistické vízum pro návštěvu Indie',
    features: ['e-Visa', 'Turistické', 'Obchodní'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Fotografie v digitální podobě',
      'Potvrzení o ubytování',
      'Letenky tam a zpět',
      'Potvrzení o finančních prostředcích'
    ],
    processingTime: {
      standard: '3-5 pracovních dnů',
      express: '24-48 hodin',
      urgent: '4-8 hodin'
    },
    pricing: {
      standard: 2500,
      express: 3500,
      urgent: 4500
    }
  },
  'au': {
    code: 'AU',
    name: 'Austrálie',
    flag: '🇦🇺',
    duration: '7-14 dnů',
    price: 'od 4,500 Kč',
    description: 'Elektronické vízum pro návštěvu Austrálie',
    features: ['ETA', 'eVisitor', 'Turistické'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný evropský pas',
      'Čistý trestní rejstřík',
      'Potvrzení o finančních prostředcích',
      'Zdravotní pojištění',
      'Letenky tam a zpět'
    ],
    processingTime: {
      standard: '7-14 pracovních dnů',
      express: '3-5 pracovních dnů',
      urgent: '1-2 pracovní dny'
    },
    pricing: {
      standard: 4500,
      express: 6500,
      urgent: 8500
    }
  },
  'co': {
    code: 'CO',
    name: 'Kolumbie',
    flag: '🇨🇴',
    duration: '2-4 dny',
    price: 'od 1,800 Kč',
    description: 'Rychlé vyřízení víza do Kolumbie',
    features: ['Turistické', 'Tranzitní'],
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Vyplněný formulář',
      'Fotografie',
      'Potvrzení o ubytování',
      'Finanční záruky'
    ],
    processingTime: {
      standard: '2-4 pracovní dny',
      express: '24 hodin',
      urgent: '4-6 hodin'
    },
    pricing: {
      standard: 1800,
      express: 2800,
      urgent: 3800
    }
  },
  'gb': {
    code: 'GB',
    name: 'Velká Británie',
    flag: '🇬🇧',
    duration: '5-10 dnů',
    price: 'od 3,200 Kč',
    description: 'Návštěvnické vízum do Spojeného království',
    features: ['Standard Visitor', 'Transit'],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas',
      'Vyplněný online formulář',
      'Biometrické údaje',
      'Doklady o finančních prostředcích',
      'Potvrzení o ubytování a cestovním plánu'
    ],
    processingTime: {
      standard: '5-10 pracovních dnů',
      express: '3-5 pracovních dnů',
      urgent: '1-2 pracovní dny'
    },
    pricing: {
      standard: 3200,
      express: 4800,
      urgent: 6800
    }
  },
  'us': {
    code: 'US',
    name: 'USA',
    flag: '🇺🇸',
    duration: '7-21 dnů',
    price: 'od 5,500 Kč',
    description: 'Turistické a obchodní vízum do USA',
    features: ['B1/B2', 'ESTA', 'Turistické'],
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Vyplněný formulář DS-160',
      'Fotografie dle požadavků',
      'Doklady o vazbách na ČR',
      'Finanční dokumenty'
    ],
    processingTime: {
      standard: '7-21 pracovních dnů',
      express: '5-10 pracovních dnů',
      urgent: '3-5 pracovních dnů'
    },
    pricing: {
      standard: 5500,
      express: 7500,
      urgent: 9500
    }
  },
  'ca': {
    code: 'CA',
    name: 'Kanada',
    flag: '🇨🇦',
    duration: '10-15 dnů',
    price: 'od 4,800 Kč',
    description: 'Elektronické cestovní povolení do Kanady',
    features: ['eTA', 'Visitor Visa'],
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas',
      'Email adresa',
      'Platební karta',
      'Odpovědi na otázky o zdraví a kriminalitě',
      'Detaily o cestě'
    ],
    processingTime: {
      standard: '10-15 pracovních dnů',
      express: '5-7 pracovních dnů',
      urgent: '2-3 pracovní dny'
    },
    pricing: {
      standard: 4800,
      express: 6800,
      urgent: 8800
    }
  },
  'eg': {
    code: 'EG',
    name: 'Egypt',
    flag: '🇪🇬',
    duration: '3-5 dnů',
    price: 'od 2,200 Kč',
    description: 'Elektronické vízum do země faraonů',
    features: ['e-Visa', 'Pyramidy', 'Rychlé'],
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Fotografie v digitální podobě', 
      'Potvrzení o ubytování',
      'Letenky tam a zpět',
      'Potvrzení o finančních prostředcích'
    ],
    processingTime: {
      standard: '3-5 pracovních dnů',
      express: '24-48 hodin',
      urgent: '4-8 hodin'
    },
    pricing: {
      standard: 2200,
      express: 3200,
      urgent: 4200
    }
  },
  'sa': {
    code: 'SA',
    name: 'Saudská Arábie',
    flag: '🇸🇦',
    duration: '3-7 dnů',
    price: 'od 3,500 Kč',
    description: 'Elektronické vízum do země Vision 2030',
    features: ['e-Visa', 'Vision 2030', 'AlUla'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Fotografie v digitální podobě',
      'Potvrzení o ubytování',
      'Letenky tam a zpět', 
      'Potvrzení o finančních prostředcích'
    ],
    processingTime: {
      standard: '3-7 pracovních dnů',
      express: '24-48 hodin',
      urgent: '12-24 hodin'
    },
    pricing: {
      standard: 3500,
      express: 5500,
      urgent: 7500
    }
  },
  'qa': {
    code: 'QA',
    name: 'Katar',
    flag: '🇶🇦',
    duration: '24-72 hodin',
    price: 'od 1,900 Kč',
    description: 'Elektronické vízum do Kataru',
    features: ['e-Visa', 'Hayya', 'Rychlé'],
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Fotografie v digitální podobě',
      'Potvrzení o ubytování',
      'Letenky tam a zpět',
      'Potvrzení o finančních prostředcích'
    ],
    processingTime: {
      standard: '24-72 hodin',
      express: '12-24 hodin',
      urgent: '2-6 hodin'
    },
    pricing: {
      standard: 1900,
      express: 2900,
      urgent: 3900
    }
  },
  'lk': {
    code: 'LK',
    name: 'Srí Lanka',
    flag: '🇱🇰',
    duration: '24-48 hodin',
    price: 'od 1,500 Kč',
    description: 'Elektronická cestovní autorizace do Srí Lanky',
    features: ['ETA', 'Rychlé', '30 dnů'],
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Fotografie v digitální podobě',
      'Potvrzení o ubytování',
      'Letenky tam a zpět',
      'Potvrzení o finančních prostředcích'
    ],
    processingTime: {
      standard: '24-48 hodin',
      express: '12-24 hodin', 
      urgent: '2-6 hodin'
    },
    pricing: {
      standard: 1500,
      express: 2500,
      urgent: 3500
    }
  },
  'nz': {
    code: 'NZ',
    name: 'Nový Zéland',
    flag: '🇳🇿',
    duration: '24-72 hodin',
    price: 'od 1,200 Kč',
    description: 'Elektronická cestovní autorizace do Nového Zélandu',
    features: ['NZeTA', 'Rychlé vyřízení', '90 dnů'],
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 3 měsíce',
      'Platební karta',
      'Email adresa',
      'Letenky tam a zpět',
      'Potvrzení o ubytování'
    ],
    processingTime: {
      standard: '24-72 hodin',
      express: '12-24 hodin',
      urgent: '2-6 hodin'
    },
    pricing: {
      standard: 1200,
      express: 2200,
      urgent: 3200
    }
  },
  'kr': {
    code: 'KR',
    name: 'Jižní Korea',
    flag: '🇰🇷',
    duration: '1-3 dny',
    price: 'od 750 Kč',
    description: 'Elektronická cestovní autorizace do Jižní Koreje',
    features: ['K-ETA', 'Rychlé', '90 dnů'],
    image: 'https://images.unsplash.com/photo-1549063364-7d7e74a1d7b8?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Fotografie v digitální podobě',
      'Email adresa',
      'Letenky tam a zpět',
      'Potvrzení o ubytování'
    ],
    processingTime: {
      standard: '1-3 dny',
      express: '12-24 hodin',
      urgent: '2-6 hodin'
    },
    pricing: {
      standard: 750,
      express: 1750,
      urgent: 2750
    }
  },
  'tr': {
    code: 'TR',
    name: 'Turecko',
    flag: '🇹🇷',
    duration: '24-48 hodin',
    price: 'od 1,800 Kč',
    description: 'Elektronické vízum do Turecka',
    features: ['e-Visa', 'Rychlé', '90 dnů'],
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Fotografie v digitální podobě',
      'Potvrzení o ubytování',
      'Letenky tam a zpět',
      'Potvrzení o finančních prostředcích'
    ],
    processingTime: {
      standard: '24-48 hodin',
      express: '12-24 hodin',
      urgent: '2-6 hodin'
    },
    pricing: {
      standard: 1800,
      express: 2800,
      urgent: 3800
    }
  },
  'vn': {
    code: 'VN',
    name: 'Vietnam',
    flag: '🇻🇳',
    duration: '3-5 dnů',
    price: 'od 2,200 Kč',
    description: 'Elektronické vízum do Vietnamu',
    features: ['e-Visa', 'Turistické', '90 dnů'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop&crop=center',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Fotografie v digitální podobě',
      'Potvrzení o ubytování',
      'Letenky tam a zpět',
      'Potvrzení o finančních prostředcích'
    ],
    processingTime: {
      standard: '3-5 dnů',
      express: '24-48 hodin',
      urgent: '6-12 hodin'
    },
    pricing: {
      standard: 2200,
      express: 3200,
      urgent: 4200
    }
  },
  'eatv': {
    code: 'EATV',
    name: 'East Africa Tourist Visa',
    flag: '🌍',
    duration: '7-14 dnů',
    price: 'od 3,200 Kč',
    description: 'Turistické vízum pro Keňu, Ugandu a Rwandu',
    features: ['3 země', 'EATV', '90 dnů'],
    image: 'https://images.pexels.com/photos/1049500/pexels-photo-1049500.jpeg?auto=compress&cs=tinysrgb&h=350',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Fotografie v digitální podobě',
      'Potvrzení o ubytování v Keni, Ugandě nebo Rwandě',
      'Letenky nebo potvrzení o cestě',
      'Potvrzení o finančních prostředcích',
      'Vyplněný online formulář'
    ],
    processingTime: {
      standard: '7-14 pracovních dnů',
      express: '3-5 pracovních dnů',
      urgent: '24-48 hodin'
    },
    pricing: {
      standard: 3200,
      express: 4800,
      urgent: 6500
    }
  },
  'schengen': {
    code: 'SCHENGEN',
    name: 'Schengen',
    flag: '🇪🇺',
    duration: '5-15 dnů',
    price: 'od 2,200 Kč',
    description: 'Schengenské vízum pro 26 evropských zemí',
    features: ['26 zemí', 'Turistické', 'Obchodní'],
    image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&h=350',
    requirements: [
      'Platný pas s platností min. 6 měsíců',
      'Biometrické fotografie 35x45mm',
      'Cestovní pojištění min. 30,000 EUR',
      'Potvrzení o ubytování',
      'Letenky tam a zpět',
      'Potvrzení o finančních prostředcích'
    ],
    processingTime: {
      standard: '10-15 pracovních dnů',
      express: '5-7 pracovních dnů',
      urgent: '24-48 hodin'
    },
    pricing: {
      standard: 2200,
      express: 3500,
      urgent: 5500
    }
  }
}

interface PageProps {
  params: Promise<{ country: string }>
}

export default async function VisaCountryPageRoute({ params }: PageProps) {
  const { country } = await params
  
  console.log('Visa country page rendered for:', country)
  
  // Kontrola, zda země existuje
  if (!countries[country as keyof typeof countries]) {
    notFound()
  }

  const countryData = countries[country as keyof typeof countries]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {country === 'gb' ? (
          <UkModernVisaPage />
        ) : country === 'us' ? (
          <UsaModernVisaPage />
        ) : country === 'in' ? (
          <IndiaModernVisaPage />
        ) : country === 'au' ? (
          <AustraliaModernVisaPage />
        ) : country === 'ca' ? (
          <CanadaModernVisaPage />
        ) : country === 'co' ? (
          <ColombiaModernVisaPage />
        ) : country === 'nz' ? (
          <NewZealandModernVisaPage />
        ) : country === 'kr' ? (
          <SouthKoreaModernVisaPage />
        ) : country === 'tr' ? (
          <TurkeyModernVisaPage />
        ) : country === 'vn' ? (
          <VietnamModernVisaPage />
        ) : country === 'qa' ? (
          <QatarModernVisaPage />
        ) : country === 'lk' ? (
          <SriLankaModernVisaPage />
        ) : country === 'eg' ? (
          <EgyptModernVisaPage />
        ) : country === 'sa' ? (
          <SaudiArabiaModernVisaPage />
        ) : country === 'eatv' ? (
          <EatvModernVisaPage />
        ) : country === 'schengen' ? (
          <SchengenModernVisaPage />
        ) : (
          <VisaCountryPage country={countryData} />
        )}
      </main>
      <Footer />
    </div>
  )
}

// Generate static params for supported countries
export function generateStaticParams() {
  return Object.keys(countries).map((country) => ({
    country: country,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { country } = await params
  const countryData = countries[country as keyof typeof countries]
  
  if (!countryData) {
    return {
      title: 'Stránka nenalezena',
    }
  }

  return {
    title: `Vízum do ${countryData.name} - Rychlé vyřízení ${countryData.duration}`,
    description: `${countryData.description}. Vyřízení víza do ${countryData.name} ${countryData.price}. Úspěšnost 98%, rychlé a spolehlivé.`,
    keywords: `vízum ${countryData.name}, vízum do ${countryData.name}, ${countryData.name} vízum, cestovní vízum`,
  }
}