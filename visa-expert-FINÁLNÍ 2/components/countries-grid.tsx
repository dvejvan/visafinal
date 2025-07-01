'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Star, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language-v2'

interface CountryCard {
  code: string
  name: string
  flag: string
  duration: string
  price: string
  popularity: 'high' | 'medium'
  description: string
  features: string[]
  rating: number
  reviews: number
  image: string
  isEta?: boolean
}

const getCountriesData = (t: any): CountryCard[] => [
  {
    code: 'SCHENGEN',
    name: t('countries.schengen.name'),
    flag: '🇪🇺',
    duration: t('countries.schengen.duration'),
    price: t('countries.schengen.price'),
    popularity: 'high',
    description: t('countries.schengen.description'),
    features: Array.isArray(t('countries.schengen.features')) ? t('countries.schengen.features') : ['26 zemí', 'Turistické', 'Obchodní'],
    rating: 4.8,
    reviews: 2156,
    image: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    code: 'IN',
    name: t('countries.india.name'),
    flag: '🇮🇳',
    duration: t('countries.india.duration'),
    price: t('countries.india.price'),
    popularity: 'high',
    description: t('countries.india.description'),
    features: Array.isArray(t('countries.india.features')) ? t('countries.india.features') : ['e-Víza', 'Turistické', 'Obchodní'],
    rating: 4.9,
    reviews: 1247,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop&crop=center',
  },
  {
    code: 'AU',
    name: t('countries.australia.name'),
    flag: '🇦🇺',
    duration: t('countries.australia.duration'),
    price: t('countries.australia.price'),
    popularity: 'high',
    description: t('countries.australia.description'),
    features: Array.isArray(t('countries.australia.features')) ? t('countries.australia.features') : ['ETA', 'eVisitor', 'Turistické'],
    rating: 4.8,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center',
  },
  {
    code: 'US',
    name: t('countries.usa.name'),
    flag: '🇺🇸',
    duration: t('countries.usa.duration'),
    price: t('countries.usa.price'),
    popularity: 'high',
    description: t('countries.usa.description'),
    features: Array.isArray(t('countries.usa.features')) ? t('countries.usa.features') : ['B1/B2', 'ESTA', 'Turistické'],
    rating: 4.8,
    reviews: 1534,
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=250&fit=crop&crop=center',
  },
  {
    code: 'GB',
    name: t('countries.uk.name'),
    flag: '🇬🇧',
    duration: t('countries.uk.duration'),
    price: t('countries.uk.price'),
    popularity: 'high',
    description: t('countries.uk.description'),
    features: Array.isArray(t('countries.uk.features')) ? t('countries.uk.features') : ['Standard Visitor', 'Transit'],
    rating: 4.6,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop&crop=center',
  },
  {
    code: 'CA',
    name: t('countries.canada.name'),
    flag: '🇨🇦',
    duration: t('countries.canada.duration'),
    price: t('countries.canada.price'),
    popularity: 'high',
    description: t('countries.canada.description'),
    features: Array.isArray(t('countries.canada.features')) ? t('countries.canada.features') : ['eTA', 'Visitor Visa'],
    rating: 4.7,
    reviews: 723,
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=250&fit=crop&crop=center',
  },
  {
    code: 'NZ',
    name: t('countries.newzealand.name'),
    flag: '🇳🇿',
    duration: t('countries.newzealand.duration'),
    price: t('countries.newzealand.price'),
    popularity: 'high',
    description: t('countries.newzealand.description'),
    features: Array.isArray(t('countries.newzealand.features')) ? t('countries.newzealand.features') : ['NZeTA', 'Working Holiday', 'AEWV'],
    rating: 4.8,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=250&fit=crop&crop=center',
  },
  {
    code: 'KR-ETA',
    name: t('countries.southkorea.name'),
    flag: '🇰🇷',
    duration: t('countries.southkorea.duration'),
    price: t('countries.southkorea.price'),
    popularity: 'high',
    description: t('countries.southkorea.description'),
    features: Array.isArray(t('countries.southkorea.features')) ? t('countries.southkorea.features') : ['K-ETA', 'Rychlé', '90 dní'],
    rating: 4.9,
    reviews: 823,
    image: 'https://images.pexels.com/photos/31835410/pexels-photo-31835410.png?auto=compress&cs=tinysrgb&h=350',
    isEta: true,
  },
  {
    code: 'LK-ETA',
    name: t('countries.srilanka.name'),
    flag: '🇱🇰',
    duration: t('countries.srilanka.duration'),
    price: t('countries.srilanka.price'),
    popularity: 'medium',
    description: t('countries.srilanka.description'),
    features: Array.isArray(t('countries.srilanka.features')) ? t('countries.srilanka.features') : ['ETA', 'Rychlé', '30 dní'],
    rating: 4.7,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=250&fit=crop&crop=center',
    isEta: true,
  },
  {
    code: 'TR',
    name: t('countries.turkey.name'),
    flag: '🇹🇷',
    duration: t('countries.turkey.duration'),
    price: t('countries.turkey.price'),
    popularity: 'high',
    description: t('countries.turkey.description'),
    features: Array.isArray(t('countries.turkey.features')) ? t('countries.turkey.features') : ['e-Víza', 'Rychlé', '90 dní'],
    rating: 4.8,
    reviews: 945,
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=250&fit=crop&crop=center',
  },
  {
    code: 'VN',
    name: t('countries.vietnam.name'),
    flag: '🇻🇳',
    duration: t('countries.vietnam.duration'),
    price: t('countries.vietnam.price'),
    popularity: 'high',
    description: t('countries.vietnam.description'),
    features: Array.isArray(t('countries.vietnam.features')) ? t('countries.vietnam.features') : ['e-Víza', 'Turistické', '90 dní'],
    rating: 4.6,
    reviews: 634,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop&crop=center',
  },
  {
    code: 'QA',
    name: t('countries.qatar.name'),
    flag: '🇶🇦',
    duration: t('countries.qatar.duration'),
    price: t('countries.qatar.price'),
    popularity: 'medium',
    description: t('countries.qatar.description'),
    features: Array.isArray(t('countries.qatar.features')) ? t('countries.qatar.features') : ['e-Víza', 'Hayya', 'Rychlé'],
    rating: 4.7,
    reviews: 356,
    image: 'https://images.pexels.com/photos/3069345/pexels-photo-3069345.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    code: 'EG',
    name: t('countries.egypt.name'),
    flag: '🇪🇬',
    duration: t('countries.egypt.duration'),
    price: t('countries.egypt.price'),
    popularity: 'high',
    description: t('countries.egypt.description'),
    features: Array.isArray(t('countries.egypt.features')) ? t('countries.egypt.features') : ['e-Víza', 'Pyramidy', 'Rychlé'],
    rating: 4.6,
    reviews: 1023,
    image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    code: 'SA',
    name: t('countries.saudiarabia.name'),
    flag: '🇸🇦',
    duration: t('countries.saudiarabia.duration'),
    price: t('countries.saudiarabia.price'),
    popularity: 'high',
    description: t('countries.saudiarabia.description'),
    features: Array.isArray(t('countries.saudiarabia.features')) ? t('countries.saudiarabia.features') : ['e-Víza', 'Vision 2030', 'AlUla'],
    rating: 4.5,
    reviews: 756,
    image: 'https://images.pexels.com/photos/35761/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    code: 'CO',
    name: t('countries.colombia.name'),
    flag: '🇨🇴',
    duration: t('countries.colombia.duration'),
    price: t('countries.colombia.price'),
    popularity: 'medium',
    description: t('countries.colombia.description'),
    features: Array.isArray(t('countries.colombia.features')) ? t('countries.colombia.features') : ['Turistické', 'Tranzitní'],
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=250&fit=crop&crop=center',
  },
  {
    code: 'EATV',
    name: t('countries.eatv.name'),
    flag: '🌍',
    duration: t('countries.eatv.duration'),
    price: t('countries.eatv.price'),
    popularity: 'high',
    description: t('countries.eatv.description'),
    features: Array.isArray(t('countries.eatv.features')) ? t('countries.eatv.features') : ['3 země', 'EATV', '90 dní'],
    rating: 4.8,
    reviews: 789,
    image: 'https://images.pexels.com/photos/1049500/pexels-photo-1049500.jpeg?auto=compress&cs=tinysrgb&h=350',
    isEta: true,
  },
]

export default function CountriesGrid() {
  const { t } = useLanguage()
  console.log('CountriesGrid component rendered')
  
  const countries = getCountriesData(t)

  const handleCountryClick = (countryCode: string, isEta?: boolean) => {
    console.log('🔄 Country clicked:', countryCode, 'isEta:', isEta)
    
    if (isEta) {
      // Pro ETA použijeme přímé odkazy na světlé landing pages
      if (countryCode === 'US-ESTA') {
        console.log('🇺🇸 Navigating to ESTA light page: /esta-usa-light')
        window.location.href = `/esta-usa-light`
      } else if (countryCode === 'GB-ETA') {
        console.log('🇬🇧 Navigating to UK ETA light page: /uk-eta-light')
        window.location.href = `/uk-eta-light`
      } else if (countryCode === 'CA-ETA') {
        console.log('🇨🇦 Navigating to Canada ETA light page: /canada-eta-light')
        window.location.href = `/canada-eta-light`
      } else if (countryCode === 'NZ-ETA') {
        console.log('🇳🇿 Navigating to NZeTA light page: /nzeta-light')
        window.location.href = `/nzeta-light`
      } else if (countryCode === 'KR-ETA') {
        console.log('🇰🇷 Navigating to K-ETA light page: /k-eta-light')
        window.location.href = `/k-eta-light`
      } else if (countryCode === 'AU-ETA') {
        console.log('🇦🇺 Navigating to Australia eVisitor light page: /australia-evisitor-light')
        window.location.href = `/australia-evisitor-light`
      } else if (countryCode === 'LK-ETA') {
        console.log('🇱🇰 Navigating to ETA page: /eta/lk')
        window.location.href = `/eta/lk`
      } else if (countryCode === 'EATV') {
        console.log('🌍 Navigating to EATV visa page: /visa/eatv')
        window.location.href = `/visa/eatv`
      } else {
        // Fallback pro ostatní ETA - přes redirect systém
        const etaCountry = countryCode.replace('-ETA', '').toLowerCase()
        console.log(`🌍 Navigating to ETA page: /eta/${etaCountry}`)
        window.location.href = `/eta/${etaCountry}`
      }
    } else {
      const visaCountry = countryCode.toLowerCase()
      console.log(`📄 Navigating to visa page: /visa/${visaCountry}`)
      window.location.href = `/visa/${visaCountry}`
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('countries_grid.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('countries_grid.subtitle')}
          </p>
        </div>

        {/* Popular Countries */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              {t('countries_grid.popular_destinations')}
            </h3>
            <Badge className="bg-visa-gold-100 text-visa-gold-700">
              <TrendingUp className="w-4 h-4 mr-1" />
              {t('countries_grid.most_requested')}
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <Card 
                key={country.code} 
                className="country-card animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`${
                      country.popularity === 'high' 
                        ? 'bg-visa-green-100 text-visa-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {country.popularity === 'high' ? t('countries_grid.popular') : t('countries_grid.available')}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 text-3xl">
                    {country.flag}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {country.isEta ? country.name : `${t('countries_grid.visa_to')} ${country.name}`}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {country.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {country.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-visa-blue-600" />
                        <span className="text-gray-600">{country.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-visa-blue-700">
                          {country.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-visa-gold-500 text-visa-gold-500" />
                        <span className="text-sm font-medium">{country.rating}</span>
                        <span className="text-xs text-gray-500">
                          ({country.reviews} {t('countries_grid.reviews')})
                        </span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleCountryClick(country.code, country.isEta)}
                      className="w-full visa-gradient hover:shadow-lg transition-all duration-200"
                    >
                      {country.isEta ? t('countries_grid.get_eta') : t('countries_grid.get_visa')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              {t('countries_grid.not_found')}
            </p>
            <Button variant="outline" className="border-visa-blue-600 text-visa-blue-600 hover:bg-visa-blue-50">
              {t('countries_grid.contact_us')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}