'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/hooks/use-language-v2'
import { ArrowRight, MapPin, Clock, Shield, Star } from 'lucide-react'

export default function VisaHero() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [fromCountry, setFromCountry] = useState('CZ')
  const { t } = useLanguage()

  console.log('VisaHero component rendered with selectedCountry:', selectedCountry)

  const countries = [
    { code: 'SCHENGEN', name: t('countries.schengen.name'), flag: '🇪🇺', duration: t('countries.schengen.duration'), price: t('countries.schengen.price'), isEta: false },
    { code: 'IN', name: t('countries.india.name'), flag: '🇮🇳', duration: t('countries.india.duration'), price: t('countries.india.price'), isEta: false },
    { code: 'AU', name: t('countries.australia.name'), flag: '🇦🇺', duration: t('countries.australia.duration'), price: t('countries.australia.price'), isEta: false },
    { code: 'US', name: t('countries.usa.name'), flag: '🇺🇸', duration: t('countries.usa.duration'), price: t('countries.usa.price'), isEta: false },
    { code: 'GB', name: t('countries.uk.name'), flag: '🇬🇧', duration: t('countries.uk.duration'), price: t('countries.uk.price'), isEta: false },
    { code: 'CA', name: t('countries.canada.name'), flag: '🇨🇦', duration: t('countries.canada.duration'), price: t('countries.canada.price'), isEta: false },
    { code: 'NZ', name: t('countries.newzealand.name'), flag: '🇳🇿', duration: t('countries.newzealand.duration'), price: t('countries.newzealand.price'), isEta: false },
    { code: 'KR-ETA', name: t('countries.southkorea.name'), flag: '🇰🇷', duration: t('countries.southkorea.duration'), price: t('countries.southkorea.price'), isEta: true },
    { code: 'LK-ETA', name: t('countries.srilanka.name'), flag: '🇱🇰', duration: t('countries.srilanka.duration'), price: t('countries.srilanka.price'), isEta: true },
    { code: 'TR', name: t('countries.turkey.name'), flag: '🇹🇷', duration: t('countries.turkey.duration'), price: t('countries.turkey.price'), isEta: false },
    { code: 'VN', name: t('countries.vietnam.name'), flag: '🇻🇳', duration: t('countries.vietnam.duration'), price: t('countries.vietnam.price'), isEta: false },
    { code: 'QA', name: t('countries.qatar.name'), flag: '🇶🇦', duration: t('countries.qatar.duration'), price: t('countries.qatar.price'), isEta: false },
    { code: 'EG', name: t('countries.egypt.name'), flag: '🇪🇬', duration: t('countries.egypt.duration'), price: t('countries.egypt.price'), isEta: false },
    { code: 'SA', name: t('countries.saudiarabia.name'), flag: '🇸🇦', duration: t('countries.saudiarabia.duration'), price: t('countries.saudiarabia.price'), isEta: false },
    { code: 'CO', name: t('countries.colombia.name'), flag: '🇨🇴', duration: t('countries.colombia.duration'), price: t('countries.colombia.price'), isEta: false },
    { code: 'EATV', name: t('countries.eatv.name'), flag: '🌍', duration: t('countries.eatv.duration'), price: t('countries.eatv.price'), isEta: true },
  ]

  const handleGetVisa = () => {
    console.log('Getting visa for country:', selectedCountry)
    if (selectedCountry) {
      const country = countries.find(c => c.code === selectedCountry)
      
      if (country?.isEta) {
        // Pro ETA typy použijeme speciální routování
        if (selectedCountry === 'KR-ETA') {
          window.location.href = '/k-eta-light'
        } else if (selectedCountry === 'LK-ETA') {
          window.location.href = '/srilanka-eta-light'
        } else if (selectedCountry === 'EATV') {
          window.location.href = '/eatv-light'
        } else {
          // Fallback pro ostatní ETA
          const etaCountry = selectedCountry.replace('-ETA', '').toLowerCase()
          window.location.href = `/eta/${etaCountry}`
        }
      } else {
        // Pro běžné víza
        window.location.href = `/visa/${selectedCountry.toLowerCase()}`
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-visa-blue-50 via-white to-visa-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-visa-gold-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-visa-green-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-visa-blue-200 rounded-full opacity-30 animate-pulse delay-2000"></div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-visa-green-100 text-visa-green-700 hover:bg-visa-green-200">
                ✅ {t('hero.verified_trusted_fast')}
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-visa-blue-600">15,000+</div>
                <div className="text-sm text-gray-600">{t('trust.clients_satisfied')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-visa-green-600">98%</div>
                <div className="text-sm text-gray-600">{t('trust.success_rate')}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-5 h-5 fill-visa-gold-500 text-visa-gold-500" />
                  <span className="text-2xl font-bold text-visa-gold-600">4.9</span>
                </div>
                <div className="text-sm text-gray-600">{t('trust.client_rating')}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visa Selector */}
          <div className="animate-fade-in delay-300">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {t('hero.select_destination')}
                    </h2>
                    <p className="text-gray-600">
                      {t('hero.where_travel')}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('hero.from_country')}
                      </label>
                      <Select value={fromCountry} onValueChange={setFromCountry}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CZ">🇨🇿 {t('from_countries.cz')}</SelectItem>
                          <SelectItem value="SK">🇸🇰 {t('from_countries.sk')}</SelectItem>
                          <SelectItem value="PL">🇵🇱 {t('from_countries.pl')}</SelectItem>
                          <SelectItem value="DE">🇩🇪 {t('from_countries.de')}</SelectItem>
                          <SelectItem value="FR">🇫🇷 {t('from_countries.fr')}</SelectItem>
                          <SelectItem value="IT">🇮🇹 {t('from_countries.it')}</SelectItem>
                          <SelectItem value="ES">🇪🇸 {t('from_countries.es')}</SelectItem>
                          <SelectItem value="NL">🇳🇱 {t('from_countries.nl')}</SelectItem>
                          <SelectItem value="BE">🇧🇪 {t('from_countries.be')}</SelectItem>
                          <SelectItem value="AT">🇦🇹 {t('from_countries.at')}</SelectItem>
                          <SelectItem value="CH">🇨🇭 {t('from_countries.ch')}</SelectItem>
                          <SelectItem value="GB">🇬🇧 {t('from_countries.gb')}</SelectItem>
                          <SelectItem value="IE">🇮🇪 {t('from_countries.ie')}</SelectItem>
                          <SelectItem value="SE">🇸🇪 {t('from_countries.se')}</SelectItem>
                          <SelectItem value="NO">🇳🇴 {t('from_countries.no')}</SelectItem>
                          <SelectItem value="DK">🇩🇰 {t('from_countries.dk')}</SelectItem>
                          <SelectItem value="FI">🇫🇮 {t('from_countries.fi')}</SelectItem>
                          <SelectItem value="PT">🇵🇹 {t('from_countries.pt')}</SelectItem>
                          <SelectItem value="GR">🇬🇷 {t('from_countries.gr')}</SelectItem>
                          <SelectItem value="US">🇺🇸 {t('from_countries.us')}</SelectItem>
                          <SelectItem value="CA">🇨🇦 {t('from_countries.ca')}</SelectItem>
                          <SelectItem value="BR">🇧🇷 {t('from_countries.br')}</SelectItem>
                          <SelectItem value="AR">🇦🇷 {t('from_countries.ar')}</SelectItem>
                          <SelectItem value="CL">🇨🇱 {t('from_countries.cl')}</SelectItem>
                          <SelectItem value="MX">🇲🇽 {t('from_countries.mx')}</SelectItem>
                          <SelectItem value="JP">🇯🇵 {t('from_countries.jp')}</SelectItem>
                          <SelectItem value="KR">🇰🇷 {t('from_countries.kr')}</SelectItem>
                          <SelectItem value="SG">🇸🇬 {t('from_countries.sg')}</SelectItem>
                          <SelectItem value="AU">🇦🇺 {t('from_countries.au')}</SelectItem>
                          <SelectItem value="NZ">🇳🇿 {t('from_countries.nz')}</SelectItem>
                          <SelectItem value="ZA">🇿🇦 {t('from_countries.za')}</SelectItem>
                          <SelectItem value="IL">🇮🇱 {t('from_countries.il')}</SelectItem>
                          <SelectItem value="AE">🇦🇪 {t('from_countries.ae')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('hero.to_country')}
                      </label>
                      <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder={t('hero.select_country')} />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <div className="flex items-center gap-3">
                                <span className="text-lg">{country.flag}</span>
                                <div>
                                  <div className="font-medium">{country.name}</div>
                                  <div className="text-xs text-gray-500">
                                    {country.duration} • {country.price}
                                  </div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {selectedCountry && (
                    <div className="space-y-4 animate-fade-in">
                      {(() => {
                        const country = countries.find(c => c.code === selectedCountry)
                        if (!country) return null
                        
                        return (
                          <div className="bg-visa-blue-50 rounded-lg p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-900">
                                {country.isEta ? country.name : `${t('countries_grid.visa_to')} ${country.name}`}
                              </span>
                              <Badge variant="secondary">
                                {country.price}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-visa-blue-600" />
                                <span className="text-gray-600">{country.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-visa-green-600" />
                                <span className="text-gray-600">{t('hero.guaranteed')}</span>
                              </div>
                            </div>
                          </div>
                        )
                      })()}
                    </div>
                  )}

                  <Button 
                    onClick={handleGetVisa}
                    disabled={!selectedCountry}
                    className="w-full h-12 text-base font-semibold visa-gradient hover:shadow-lg transition-all duration-200"
                  >
                    {t('nav.get_visa')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="text-center text-sm text-gray-500">
                    ✅ {t('hero.secure_payments')} • 🔒 {t('hero.protected_data')} • 📞 {t('hero.support_24_7')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mt-16 animate-fade-in delay-500">
          <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">
            {t('hero.popular_destinations_title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.slice(0, 4).map((country) => (
              <button
                key={country.code}
                onClick={() => setSelectedCountry(country.code)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-visa-blue-300 hover:shadow-md transition-all duration-200"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="text-sm font-medium">{country.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}