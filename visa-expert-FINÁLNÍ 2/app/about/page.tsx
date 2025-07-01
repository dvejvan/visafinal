'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Globe, Users, MapPin, Award, Shield, Clock, CheckCircle, Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/hooks/use-language-v2'

console.log('🏢 About page - rendering')

export default function AboutPage() {
  const { t } = useLanguage()
  const stats = [
    { label: t('about.stats.satisfied_clients'), value: '25,000+', icon: Users },
    { label: t('about.stats.countries'), value: '50+', icon: Globe },
    { label: t('about.stats.success_rate'), value: '98%', icon: CheckCircle },
    { label: t('about.stats.processing_time'), value: '3-5 ' + t('common.days'), icon: Clock }
  ]

  const offices = [
    { city: 'Prague', country: t('common.czech_republic'), flag: '🇨🇿', lat: 50.0755, lng: 14.4378 },
    { city: 'Delhi', country: t('countries.india.name'), flag: '🇮🇳', lat: 28.6139, lng: 77.2090 },
    { city: 'Washington D.C.', country: t('countries.usa.name'), flag: '🇺🇸', lat: 38.9072, lng: -77.0369 },
    { city: 'London', country: t('countries.uk.name'), flag: '🇬🇧', lat: 51.5074, lng: -0.1278 },
    { city: 'Sydney', country: t('countries.australia.name'), flag: '🇦🇺', lat: -33.8688, lng: 151.2093 },
    { city: 'Toronto', country: t('countries.canada.name'), flag: '🇨🇦', lat: 43.6532, lng: -79.3832 },
    { city: 'Istanbul', country: t('countries.turkey.name'), flag: '🇹🇷', lat: 41.0082, lng: 28.9784 },
    { city: 'Dubai', country: 'UAE', flag: '🇦🇪', lat: 25.2048, lng: 55.2708 }
  ]

  const values = [
    {
      icon: Shield,
      title: t('about.security_trust'),
      description: t('about.security_desc')
    },
    {
      icon: Award,
      title: t('about.expertise'),
      description: t('about.expertise_desc')
    },
    {
      icon: Clock,
      title: t('about.speed_efficiency'),
      description: t('about.speed_desc')
    },
    {
      icon: Heart,
      title: t('about.individual_approach'),
      description: t('about.individual_desc')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
                {t('about.company_badge')}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('about.hero_title').split(' víza')[0]}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> víza</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('about.hero_subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.our_story')}</h2>
                <p className="text-xl text-gray-600">
                  {t('about.story_subtitle')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.story_title')}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t('about.story_p1')}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t('about.story_p2')}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.story_p3')}
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
                    <div className="text-center">
                      <Globe className="w-16 h-16 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold mb-2">2008 - 2024</h4>
                      <p className="text-blue-100 mb-4">16 let na trhu</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>2008</span>
                          <span>Start v Praze</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2012</span>
                          <span>První zahraniční partneři</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2018</span>
                          <span>Online platforma</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2024</span>
                          <span>50+ zemí</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.global_network')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.network_subtitle')}
              </p>
            </div>

            {/* World Map Visualization */}
            <div className="mb-16">
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 overflow-hidden">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.where_operate')}</h3>
                  <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>{t('about.main_offices')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>{t('about.partner_offices')}</span>
                    </div>
                  </div>
                </div>
                
                {/* Simplified World Map with Office Locations */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl mb-2">{office.flag}</div>
                        <h4 className="font-semibold text-gray-900">{office.city}</h4>
                        <p className="text-sm text-gray-600">{office.country}</p>
                        <div className="mt-2">
                          <Badge variant="secondary" className="text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {t('about.active')}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.values')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.values_subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{t('about.cta_title')}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('about.cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/application-form" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                {t('about.start_application')}
              </a>
              <a 
                href="/kontakt" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('about.contact_us')}
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}