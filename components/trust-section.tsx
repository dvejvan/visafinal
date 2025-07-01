'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Users, Award, Clock, CheckCircle, Star } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language-v2'

export default function TrustSection() {
  const { t, currentLanguage } = useLanguage()
  console.log('TrustSection component rendered')

  const trustFeatures = [
    {
      icon: Shield,
      title: 'Bezpečnost na prvním místě',
      titleEn: 'Security first',
      description: 'SSL šifrování, chráněné platby a bezpečné zpracování osobních údajů podle GDPR.',
      descriptionEn: 'SSL encryption, protected payments and secure processing of personal data according to GDPR.',
      stats: '256-bit SSL',
    },
    {
      icon: Users,
      title: 'Zkušený tým expertů',
      titleEn: 'Experienced team of experts',
      description: 'Náš tým má více než 10 let zkušeností s vyřizováním víz po celém světě.',
      descriptionEn: 'Our team has more than 10 years of experience processing visas around the world.',
      stats: '15+ let zkušeností',
      statsEn: '15+ years of experience',
    },
    {
      icon: Award,
      title: 'Oficiální partnerství',
      titleEn: 'Official partnerships',
      description: 'Jsme oficiálním partnerem konzulátů a ambasád pro vyřizování víz.',
      descriptionEn: 'We are an official partner of consulates and embassies for visa processing.',
      stats: '50+ zemí',
      statsEn: '50+ countries',
    },
    {
      icon: Clock,
      title: 'Rychlé vyřízení',
      titleEn: 'Fast processing',
      description: 'Průměrná doba vyříeení je o 40% rychlejší než u standardního postupu.',
      descriptionEn: 'Average processing time is 40% faster than standard procedure.',
      stats: '3-5 dnů průměr',
      statsEn: '3-5 days average',
    },
  ]

  const certifications = [
    { name: 'IATA', desc: 'Mezinárodní asociace leteckých dopravců', descEn: 'International Air Transport Association' },
    { name: 'GDPR', desc: 'Ochrana osobních údajů', descEn: 'Personal data protection' },
    { name: 'SSL', desc: 'Bezpečné spojení', descEn: 'Secure connection' },
    { name: 'PCI DSS', desc: 'Bezpečné platby', descEn: 'Secure payments' },
  ]

  const testimonials = [
    {
      name: 'Marie Nováková',
      nameEn: 'Marie Johnson',
      location: 'Praha',
      locationEn: 'Prague',
      rating: 5,
      text: 'Vízum do Indie vyřízeno za 3 dny! Perfektní komunikace a profesionální přístup.',
      textEn: 'India visa processed in 3 days! Perfect communication and professional approach.',
      country: '🇮🇳',
    },
    {
      name: 'Jan Svoboda',
      nameEn: 'John Smith',
      location: 'Brno', 
      locationEn: 'Brno',
      rating: 5,
      text: 'Doporučuji! Australské vízum bez problémů, vše vysvětleno krok za krokem.',
      textEn: 'I recommend! Australian visa without problems, everything explained step by step.',
      country: '🇦🇺',
    },
    {
      name: 'Petra Dvořáková',
      nameEn: 'Petra Wilson',
      location: 'Ostrava',
      locationEn: 'Ostrava',
      rating: 5,
      text: 'Rychlé vyřození víza do USA. Skvělý zákaznický servis, vše proběhlo hladce.',
      textEn: 'Fast US visa processing. Great customer service, everything went smoothly.',
      country: '🇺🇸',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('trust.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('trust.subtitle')}
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="trust-badge animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-visa-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-8 h-8 text-visa-blue-600" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {currentLanguage === 'en' ? feature.statsEn || feature.stats : feature.stats}
                  </Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'en' ? feature.titleEn : feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLanguage === 'en' ? feature.descriptionEn : feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            {t('trust.certifications_title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 px-6 py-4 rounded-lg border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="font-semibold text-visa-blue-700">{cert.name}</div>
                  <div className="text-xs text-gray-600">
                    {currentLanguage === 'en' ? cert.descEn : cert.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            {t('trust.testimonials_title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-visa-gold-500 text-visa-gold-500" />
                      ))}
                    </div>
                    <span className="text-2xl">{testimonial.country}</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{currentLanguage === 'en' ? testimonial.textEn : testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">
                        {currentLanguage === 'en' ? testimonial.nameEn : testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {currentLanguage === 'en' ? testimonial.locationEn : testimonial.location}
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-visa-green-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-visa-blue-600 to-visa-blue-800 rounded-2xl p-8 text-white animate-fade-in">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15,247</div>
              <div className="text-visa-blue-100">
                {t('trust.processed_visas')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98.4%</div>
              <div className="text-visa-blue-100">
                {t('trust.success_rate')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3.2 {t('trust.days')}</div>
              <div className="text-visa-blue-100">
                {t('trust.avg_processing')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-visa-blue-100">
                {t('trust.countries_worldwide')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}