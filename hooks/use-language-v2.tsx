'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LanguageCurrencyOption {
  flag: string
  label: string
  languageCode: string
  currencyCode: string
  currencySymbol: string
}

interface LanguageContextType {
  currentLanguage: string
  currentCurrency: string
  setLanguageCurrency: (langCode: string, currencyCode: string) => void
  t: (key: string) => string
  languageCurrencyOptions: LanguageCurrencyOption[]
  formatPrice: (price: number) => string
}

const languageCurrencyOptions: LanguageCurrencyOption[] = [
  { flag: '🇨🇿', label: 'Čeština (CZK)', languageCode: 'cz', currencyCode: 'CZK', currencySymbol: 'Kč' },
  { flag: '🇺🇸', label: 'English (USD)', languageCode: 'en', currencyCode: 'USD', currencySymbol: '$' },
  { flag: '🇪🇺', label: 'English (EUR)', languageCode: 'en', currencyCode: 'EUR', currencySymbol: '€' }
]

// Complete translations object - v2
const translations = {
  cz: {
    // Navigation
    'nav.how_it_works': 'Jak to funguje',
    'nav.destinations': 'Destinace',
    'nav.about': 'O nás',
    'nav.contact': 'Kontakt',
    'nav.popular_destinations': 'Oblíbené destinace',
    'nav.get_visa': 'Získat víza',
    'nav.login': 'Přihlásit se',
    'nav.register': 'Registrovat se',
    'nav.account': 'Účet',
    'nav.rating': 'hodnocení',
    
    // Hero section
    'hero.title': 'Víza do celého světa',
    'hero.subtitle': 'Získejte své víza rychle a spolehlivě. Vyřizujeme víza do více než 50 zemí světa s 98% úspěšností schválení.',
    'hero.select_destination': 'Vyberte destinaci',
    'hero.where_travel': 'Kam chcete cestovat?',
    'hero.from_country': 'Odkud cestujete',
    'hero.to_country': 'Kam cestujete',
    'hero.select_country': 'Vyberte zemi...',
    'hero.guaranteed': 'Garantované',
    'hero.secure_payments': 'Bezpečné platby',
    'hero.protected_data': 'Chráněná data',
    'hero.support_24_7': '24/7 podpora',
    'hero.popular_destinations_title': 'Nejoblíbenější destinace',
    'hero.verified_trusted_fast': 'Ověřeno • Důvěryhodné • Rychlé',
    
    // Trust section
    'trust.title': 'Důvěryhodná služba s garancí úspěchu',
    'trust.subtitle': 'Více než 50 000 spokojených klientů po celém světě',
    'trust.clients_satisfied': 'Spokojených klientů',
    'trust.success_rate': 'Úspěšnost schválení',
    'trust.client_rating': 'Hodnocení klientů',
    'trust.certifications_title': 'Certifikace a bezpečnost',
    'trust.testimonials_title': 'Hodnocení klientů',
    'trust.processed_visas': 'Vyřízených víz',
    'trust.days': 'dní',
    'trust.avg_processing': 'Průměrná doba vyřízení',
    'trust.countries_worldwide': 'zemí po celém světě',
    'trust.secure': 'Bezpečné',
    
    // Countries grid
    'countries_grid.title': 'Víza a ETA do všech zemí',
    'countries_grid.subtitle': 'Rychlé a spolehlivé vyřízení víz do více než 150 zemí světa',
    'countries_grid.visa_to': 'Víza do',
    'countries_grid.get_eta': 'Získat ETA',
    'countries_grid.get_visa': 'Získat víza',
    'countries_grid.popular_destinations': 'Oblíbené destinace',
    'countries_grid.most_requested': 'Nejžádanější',
    'countries_grid.popular': 'Populární',
    'countries_grid.available': 'Dostupné',
    'countries_grid.reviews': 'hodnocení',
    'countries_grid.not_found': 'Nenašli jste svou destinaci? Kontaktujte nás a rádi vám pomůžeme.',
    'countries_grid.contact_us': 'Kontaktujte nás',
    
    // How it works
    'how_it_works.title': 'Jak to funguje',
    'how_it_works.subtitle': 'Jednoduchý 3-krokový proces k získání vašeho víza',
    'how_it_works.step1_title': '1. Vyplňte formulář',
    'how_it_works.step1_desc': 'Jednoduše vyplňte online formulář se svými údaji',
    'how_it_works.step2_title': '2. Nahrajte dokumenty',
    'how_it_works.step2_desc': 'Nahrajte potřebné dokumenty a fotografii',
    'how_it_works.step3_title': '3. Získejte víza',
    'how_it_works.step3_desc': 'Vaše víza vám zašleme emailem nebo poštou',
    'how_it_works.step6_title': 'Odborná podpora',
    'how_it_works.step6_desc': '24/7 zákaznická podpora v českém jazyce',
    'how_it_works.processing_days': 'dnů zpracování',
    'how_it_works.fast_processing': 'Rychlé zpracování',
    'how_it_works.support_24_7': 'Podpora 24/7',
    'how_it_works.success_rate': 'Úspěšnost',
    'how_it_works.badge': 'Ověřeno',
    'how_it_works.why_choose': 'Proč si vybrat nás',
    'how_it_works.start_now': 'Začít nyní',
    
    // Footer
    'footer.company_description': 'Specializujeme se na vyřizování víz do celého světa s 98% úspěšností.',
    'footer.certified': 'Certifikovaní',
    'footer.quick_links': 'Rychlé odkazy',
    'footer.popular_destinations': 'Oblíbené destinace',
    'footer.contact': 'Kontakt',
    'footer.phone_hours': 'Po-Pá 9:00-18:00',
    'footer.email_response': 'Odpověď do 24 hodin',
    'footer.visit_by_appointment': 'Návštěva po domluvě',
    'footer.support_24_7': 'Podpora 24/7',
    'footer.chat_email': 'Chat nebo email',
    'footer.start_chat': 'Začít chat',
    'footer.secure': 'Bezpečné',
    'footer.ssl_encryption': 'SSL šifrování',
    'footer.protected_payments': 'Chráněné platby',
    'footer.pci_certification': 'PCI certifikace',
    'footer.fast_processing': 'Rychlé zpracování',
    'footer.average_days': 'Průměrně 5-7 dní',
    'footer.copyright': '© 2024 VisaExpert. Všechna práva vyhrazena.',
    
    // Visa types
    'visa.india': 'Indie',
    'visa.usa': 'USA',
    'visa.australia': 'Austrálie',
    'visa.uk': 'Velká Británie',
    
    // Countries - Complete data
    'countries.schengen.name': 'Schengen',
    'countries.schengen.duration': '5-15 dnů',
    'countries.schengen.price': 'od 2 200 Kč',
    'countries.schengen.description': 'Schengenské víza pro 26 evropských zemí',
    'countries.schengen.features': ['26 zemí', 'Turistické', 'Obchodní'],
    
    'countries.india.name': 'Indie',
    'countries.india.duration': '3-5 dní',
    'countries.india.price': 'od 2 500 Kč',
    'countries.india.description': 'Elektronické turistické víza pro návštěvu Indie',
    'countries.india.features': ['e-Víza', 'Turistické', 'Obchodní'],
    
    'countries.australia.name': 'Austrálie',
    'countries.australia.duration': '7-14 dnů',
    'countries.australia.price': 'od 4 500 Kč',
    'countries.australia.description': 'Elektronické víza pro návštěvu Austrálie',
    'countries.australia.features': ['ETA', 'eVisitor', 'Turistické'],
    
    'countries.usa.name': 'USA',
    'countries.usa.duration': '7-21 dnů',
    'countries.usa.price': 'od 5 500 Kč',
    'countries.usa.description': 'Turistické a obchodní víza do USA',
    'countries.usa.features': ['B1/B2', 'ESTA', 'Turistické'],
    
    'countries.uk.name': 'Velká Británie',
    'countries.uk.duration': '5-10 dnů',
    'countries.uk.price': 'od 3 200 Kč',
    'countries.uk.description': 'Návštěvnické víza do Spojeného království',
    'countries.uk.features': ['Standard Visitor', 'Transit'],
    
    'countries.canada.name': 'Kanada',
    'countries.canada.duration': '10-15 dnů',
    'countries.canada.price': 'od 4 700 Kč',
    'countries.canada.description': 'Elektronické cestovní povolení do Kanady',
    'countries.canada.features': ['eTA', 'Visitor Visa'],
    
    'countries.newzealand.name': 'Nový Zéland',
    'countries.newzealand.duration': '24-72 hodin',
    'countries.newzealand.price': 'od 1 200 Kč',
    'countries.newzealand.description': 'NZeTA a všechny typy víz do Nového Zélandu',
    'countries.newzealand.features': ['NZeTA', 'Working Holiday', 'AEWV'],
    
    'countries.southkorea.name': 'Jižní Korea K-ETA',
    'countries.southkorea.duration': '1-3 dny',
    'countries.southkorea.price': 'od 700 Kč',
    'countries.southkorea.description': 'Elektronická cestovní autorizace do Jižní Koreje',
    'countries.southkorea.features': ['K-ETA', 'Rychlé', '90 dní'],
    
    'countries.srilanka.name': 'Srí Lanka ETA',
    'countries.srilanka.duration': '24-48 hodin',
    'countries.srilanka.price': 'od 1 500 Kč',
    'countries.srilanka.description': 'Elektronická cestovní autorizace do Srí Lanky',
    'countries.srilanka.features': ['ETA', 'Rychlé', '30 dní'],
    
    'countries.turkey.name': 'Turecko',
    'countries.turkey.duration': '24-48 hodin',
    'countries.turkey.price': 'od 1 700 Kč',
    'countries.turkey.description': 'Elektronické víza do Turecka',
    'countries.turkey.features': ['e-Víza', 'Rychlé', '90 dní'],
    
    'countries.vietnam.name': 'Vietnam',
    'countries.vietnam.duration': '3-5 dní',
    'countries.vietnam.price': 'od 2 200 Kč',
    'countries.vietnam.description': 'Elektronické víza do Vietnamu',
    'countries.vietnam.features': ['e-Víza', 'Turistické', '90 dní'],
    
    'countries.qatar.name': 'Katar',
    'countries.qatar.duration': '24-72 hodin',
    'countries.qatar.price': 'od 2 000 Kč',
    'countries.qatar.description': 'Elektronické víza do Kataru',
    'countries.qatar.features': ['e-Víza', 'Hayya', 'Rychlé'],
    
    'countries.egypt.name': 'Egypt',
    'countries.egypt.duration': '3-5 dní',
    'countries.egypt.price': 'od 2 200 Kč',
    'countries.egypt.description': 'Elektronické víza do země faraonů',
    'countries.egypt.features': ['e-Víza', 'Pyramidy', 'Rychlé'],
    
    'countries.saudiarabia.name': 'Saúdská Arábie',
    'countries.saudiarabia.duration': '3-7 dní',
    'countries.saudiarabia.price': 'od 3 500 Kč',
    'countries.saudiarabia.description': 'Elektronické víza do země Vision 2030',
    'countries.saudiarabia.features': ['e-Víza', 'Vision 2030', 'AlUla'],
    
    'countries.colombia.name': 'Kolumbie',
    'countries.colombia.duration': '2-4 dny',
    'countries.colombia.price': 'od 1 700 Kč',
    'countries.colombia.description': 'Rychlé vyřízení víz do Kolumbie',
    'countries.colombia.features': ['Turistické', 'Tranzitní'],
    
    'countries.eatv.name': 'East Africa Tourist Visa',
    'countries.eatv.duration': '7-14 dnů',
    'countries.eatv.price': 'od 3 200 Kč',
    'countries.eatv.description': 'Turistické víza pro Keňu, Ugandu a Rwandu',
    'countries.eatv.features': ['3 země', 'EATV', '90 dní'],
    
    // From countries
    'from_countries.cz': 'Česká republika',
    'from_countries.sk': 'Slovensko',
    'from_countries.pl': 'Polsko',
    'from_countries.de': 'Německo',
    'from_countries.fr': 'Francie',
    'from_countries.it': 'Itálie',
    'from_countries.es': 'Španělsko',
    'from_countries.nl': 'Nizozemsko',
    'from_countries.be': 'Belgie',
    'from_countries.at': 'Rakousko',
    'from_countries.ch': 'Švýcarsko',
    'from_countries.gb': 'Velká Británie',
    'from_countries.ie': 'Irsko',
    'from_countries.se': 'Švédsko',
    'from_countries.no': 'Norsko',
    'from_countries.dk': 'Dánsko',
    'from_countries.fi': 'Finsko',
    'from_countries.pt': 'Portugalsko',
    'from_countries.gr': 'Řecko',
    'from_countries.us': 'Spojené státy',
    'from_countries.ca': 'Kanada',
    'from_countries.br': 'Brazílie',
    'from_countries.ar': 'Argentina',
    'from_countries.cl': 'Chile',
    'from_countries.mx': 'Mexiko',
    'from_countries.jp': 'Japonsko',
    'from_countries.kr': 'Jižní Korea',
    'from_countries.sg': 'Singapur',
    'from_countries.au': 'Austrálie',
    'from_countries.nz': 'Nový Zéland',
    'from_countries.za': 'Jihoafrická republika',
    'from_countries.il': 'Izrael',
    'from_countries.ae': 'Spojené arabské emiráty'
  },
  
  en: {
    // Navigation
    'nav.how_it_works': 'How it works',
    'nav.destinations': 'Destinations',
    'nav.about': 'About us',
    'nav.contact': 'Contact',
    'nav.popular_destinations': 'Popular destinations',
    'nav.get_visa': 'Get visa',
    'nav.login': 'Sign in',
    'nav.register': 'Sign up',
    'nav.account': 'Account',
    'nav.rating': 'reviews',
    
    // Hero section
    'hero.title': 'Get Your Visa Fast and Hassle-Free',
    'hero.subtitle': 'Professional visa processing to over 150 countries worldwide. Fast, secure, and with guaranteed results.',
    'hero.select_destination': 'Select Destination',
    'hero.where_travel': 'Where do you want to travel?',
    'hero.from_country': 'From which country',
    'hero.to_country': 'To which country',
    'hero.select_country': 'Select country',
    'hero.secure_payments': 'Secure payments',
    'hero.protected_data': 'Protected data',
    'hero.support_24_7': '24/7 support',
    'hero.popular_destinations_title': 'Most Popular Destinations',
    'hero.guaranteed': 'Guaranteed',
    'hero.verified_trusted_fast': 'Verified • Trusted • Fast',
    
    // Trust section
    'trust.title': 'Trusted service with guaranteed success',
    'trust.subtitle': 'More than 50,000 satisfied clients worldwide',
    'trust.clients_satisfied': 'Satisfied clients',
    'trust.success_rate': 'Approval success rate',
    'trust.client_rating': 'Client rating',
    'trust.certifications_title': 'Certifications and security',
    'trust.testimonials_title': 'Client reviews',
    'trust.processed_visas': 'Processed visas',
    'trust.days': 'days',
    'trust.avg_processing': 'Average processing time',
    'trust.countries_worldwide': 'countries worldwide',
    'trust.secure': 'Secure',
    
    // Countries grid
    'countries_grid.title': 'Visas and ETA to all countries',
    'countries_grid.subtitle': 'Fast and reliable visa processing to over 150 countries worldwide',
    'countries_grid.visa_to': 'Visa to',
    'countries_grid.get_eta': 'Get ETA',
    'countries_grid.get_visa': 'Get visa',
    'countries_grid.popular_destinations': 'Popular destinations',
    'countries_grid.most_requested': 'Most requested',
    'countries_grid.popular': 'Popular',
    'countries_grid.available': 'Available',
    'countries_grid.reviews': 'reviews',
    'countries_grid.not_found': 'Can\'t find your destination? Contact us and we\'ll be happy to help.',
    'countries_grid.contact_us': 'Contact us',
    
    // How it works
    'how_it_works.title': 'How it works',
    'how_it_works.subtitle': 'Simple 3-step process to get your visa',
    'how_it_works.step1_title': '1. Fill out the form',
    'how_it_works.step1_desc': 'Simply fill out the online form with your details',
    'how_it_works.step2_title': '2. Upload documents',
    'how_it_works.step2_desc': 'Upload required documents and photo',
    'how_it_works.step3_title': '3. Get your visa',
    'how_it_works.step3_desc': 'We\'ll send your visa by email or mail',
    'how_it_works.step6_title': 'Expert support',
    'how_it_works.step6_desc': '24/7 customer support in English',
    'how_it_works.processing_days': 'processing days',
    'how_it_works.fast_processing': 'Fast processing',
    'how_it_works.support_24_7': '24/7 Support',
    'how_it_works.success_rate': 'Success rate',
    'how_it_works.badge': 'Verified',
    'how_it_works.why_choose': 'Why choose us',
    'how_it_works.start_now': 'Start now',
    
    // Footer
    'footer.company_description': 'We specialize in processing visas worldwide with 98% success rate.',
    'footer.certified': 'Certified',
    'footer.quick_links': 'Quick links',
    'footer.popular_destinations': 'Popular destinations',
    'footer.contact': 'Contact',
    'footer.phone_hours': 'Mon-Fri 9:00-18:00',
    'footer.email_response': 'Response within 24 hours',
    'footer.visit_by_appointment': 'Visit by appointment',
    'footer.support_24_7': '24/7 Support',
    'footer.chat_email': 'Chat or email',
    'footer.start_chat': 'Start chat',
    'footer.secure': 'Secure',
    'footer.ssl_encryption': 'SSL encryption',
    'footer.protected_payments': 'Protected payments',
    'footer.pci_certification': 'PCI certification',
    'footer.fast_processing': 'Fast processing',
    'footer.average_days': 'Average 5-7 days',
    'footer.copyright': '© 2024 VisaExpert. All rights reserved.',
    
    // Visa types
    'visa.india': 'India',
    'visa.usa': 'USA',
    'visa.australia': 'Australia',
    'visa.uk': 'United Kingdom',
    
    // Countries data (complete)
    'countries.schengen.name': 'Schengen',
    'countries.schengen.duration': '5-15 days',
    'countries.schengen.price': 'from €89',
    'countries.schengen.description': 'Schengen visa for 26 European countries',
    'countries.schengen.features': ['26 countries', 'Tourist', 'Business'],
    
    'countries.india.name': 'India',
    'countries.india.duration': '3-5 days',
    'countries.india.price': 'from €99',
    'countries.india.description': 'Electronic tourist visa for visiting India',
    'countries.india.features': ['e-Visa', 'Tourist', 'Business'],
    
    'countries.australia.name': 'Australia',
    'countries.australia.duration': '7-14 days',
    'countries.australia.price': 'from €179',
    'countries.australia.description': 'Electronic visa for visiting Australia',
    'countries.australia.features': ['ETA', 'eVisitor', 'Tourist'],
    
    'countries.usa.name': 'USA',
    'countries.usa.duration': '7-21 days',
    'countries.usa.price': 'from €219',
    'countries.usa.description': 'Tourist and business visa to USA',
    'countries.usa.features': ['B1/B2', 'ESTA', 'Tourist'],
    
    'countries.uk.name': 'United Kingdom',
    'countries.uk.duration': '5-10 days',
    'countries.uk.price': 'from €129',
    'countries.uk.description': 'Visitor visa to the United Kingdom',
    'countries.uk.features': ['Standard Visitor', 'Transit'],
    
    'countries.canada.name': 'Canada',
    'countries.canada.duration': '10-15 days',
    'countries.canada.price': 'from €189',
    'countries.canada.description': 'Electronic travel authorization to Canada',
    'countries.canada.features': ['eTA', 'Visitor Visa'],
    
    'countries.newzealand.name': 'New Zealand',
    'countries.newzealand.duration': '24-72 hours',
    'countries.newzealand.price': 'from €49',
    'countries.newzealand.description': 'NZeTA and all types of visas to New Zealand',
    'countries.newzealand.features': ['NZeTA', 'Working Holiday', 'AEWV'],
    
    'countries.southkorea.name': 'South Korea K-ETA',
    'countries.southkorea.duration': '1-3 days',
    'countries.southkorea.price': 'from €29',
    'countries.southkorea.description': 'Electronic travel authorization to South Korea',
    'countries.southkorea.features': ['K-ETA', 'Fast', '90 days'],
    
    'countries.srilanka.name': 'Sri Lanka ETA',
    'countries.srilanka.duration': '24-48 hours',
    'countries.srilanka.price': 'from €59',
    'countries.srilanka.description': 'Electronic travel authorization to Sri Lanka',
    'countries.srilanka.features': ['ETA', 'Fast', '30 days'],
    
    'countries.turkey.name': 'Turkey',
    'countries.turkey.duration': '24-48 hours',
    'countries.turkey.price': 'from €69',
    'countries.turkey.description': 'Electronic visa to Turkey',
    'countries.turkey.features': ['e-Visa', 'Fast', '90 days'],
    
    'countries.vietnam.name': 'Vietnam',
    'countries.vietnam.duration': '3-5 days',
    'countries.vietnam.price': 'from €89',
    'countries.vietnam.description': 'Electronic visa to Vietnam',
    'countries.vietnam.features': ['e-Visa', 'Tourist', '90 days'],
    
    'countries.qatar.name': 'Qatar',
    'countries.qatar.duration': '24-72 hours',
    'countries.qatar.price': 'from €79',
    'countries.qatar.description': 'Electronic visa to Qatar',
    'countries.qatar.features': ['e-Visa', 'Hayya', 'Fast'],
    
    'countries.egypt.name': 'Egypt',
    'countries.egypt.duration': '3-5 days',
    'countries.egypt.price': 'from €89',
    'countries.egypt.description': 'Electronic visa to the land of pharaohs',
    'countries.egypt.features': ['e-Visa', 'Pyramids', 'Fast'],
    
    'countries.saudiarabia.name': 'Saudi Arabia',
    'countries.saudiarabia.duration': '3-7 days',
    'countries.saudiarabia.price': 'from €139',
    'countries.saudiarabia.description': 'Electronic visa to the Vision 2030 country',
    'countries.saudiarabia.features': ['e-Visa', 'Vision 2030', 'AlUla'],
    
    'countries.colombia.name': 'Colombia',
    'countries.colombia.duration': '2-4 days',
    'countries.colombia.price': 'from €69',
    'countries.colombia.description': 'Fast visa processing to Colombia',
    'countries.colombia.features': ['Tourist', 'Transit'],
    
    'countries.eatv.name': 'East Africa Tourist Visa',
    'countries.eatv.duration': '7-14 days',
    'countries.eatv.price': 'from €129',
    'countries.eatv.description': 'Tourist visa for Kenya, Uganda and Rwanda',
    'countries.eatv.features': ['3 countries', 'EATV', '90 days'],
    
    // From countries
    'from_countries.cz': 'Czech Republic',
    'from_countries.sk': 'Slovakia',
    'from_countries.pl': 'Poland',
    'from_countries.de': 'Germany',
    'from_countries.fr': 'France',
    'from_countries.it': 'Italy',
    'from_countries.es': 'Spain',
    'from_countries.nl': 'Netherlands',
    'from_countries.be': 'Belgium',
    'from_countries.at': 'Austria',
    'from_countries.ch': 'Switzerland',
    'from_countries.gb': 'United Kingdom',
    'from_countries.ie': 'Ireland',
    'from_countries.se': 'Sweden',
    'from_countries.no': 'Norway',
    'from_countries.dk': 'Denmark',
    'from_countries.fi': 'Finland',
    'from_countries.pt': 'Portugal',
    'from_countries.gr': 'Greece',
    'from_countries.us': 'United States',
    'from_countries.ca': 'Canada',
    'from_countries.br': 'Brazil',
    'from_countries.ar': 'Argentina',
    'from_countries.cl': 'Chile',
    'from_countries.mx': 'Mexico',
    'from_countries.jp': 'Japan',
    'from_countries.kr': 'South Korea',
    'from_countries.sg': 'Singapore',
    'from_countries.au': 'Australia',
    'from_countries.nz': 'New Zealand',
    'from_countries.za': 'South Africa',
    'from_countries.il': 'Israel',
    'from_countries.ae': 'United Arab Emirates'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState('cz')
  const [currentCurrency, setCurrentCurrency] = useState('CZK')

  console.log('LanguageProvider V2 FINAL initialized with language:', currentLanguage, 'at', new Date().toISOString())

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage')
    const savedCurrency = localStorage.getItem('preferredCurrency')
    
    if (savedLanguage && savedCurrency) {
      setCurrentLanguage(savedLanguage)
      setCurrentCurrency(savedCurrency)
      console.log('Loaded saved language preferences:', savedLanguage, savedCurrency)
    }
  }, [])

  const setLanguageCurrency = (langCode: string, currencyCode: string) => {
    console.log('Setting language and currency:', langCode, currencyCode)
    setCurrentLanguage(langCode)
    setCurrentCurrency(currencyCode)
    localStorage.setItem('preferredLanguage', langCode)
    localStorage.setItem('preferredCurrency', currencyCode)
  }

  const t = (key: string): string => {
    const langTranslations = translations[currentLanguage as keyof typeof translations] || translations.cz
    
    // Direct key lookup since our translations use flat structure
    const value = langTranslations[key as keyof typeof langTranslations]

    if (!value) {
      console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`)
      return key
    }

    // Handle both string and array values (for features)
    if (Array.isArray(value)) {
      return value.join(', ')
    }

    return value as string
  }

  const formatPrice = (price: number): string => {
    const currencyOption = languageCurrencyOptions.find(opt => opt.currencyCode === currentCurrency)
    if (!currencyOption) return `${price} EUR`
    
    return `${price.toLocaleString()} ${currencyOption.currencySymbol}`
  }

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      currentCurrency,
      setLanguageCurrency,
      t,
      languageCurrencyOptions,
      formatPrice
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}