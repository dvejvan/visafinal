'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { 
  Clock, 
  Shield, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Zap,
  Globe,
  Smartphone,
  CreditCard,
  FileCheck,
  Users,
  TrendingUp,
  MapPin,
  Plane
} from 'lucide-react'

const etaCountries = [
  {
    code: 'GB',
    name: 'Velká Británie',
    flag: '🇬🇧',
    processingTime: '72 hodin',
    price: 'od 750 Kč',
    popular: true,
    description: 'Electronic Travel Authorisation pro UK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop'
  },
  {
    code: 'CA',
    name: 'Kanada',
    flag: '🇨🇦',
    processingTime: '10-15 dnů',
    price: 'od 4,800 Kč',
    trending: true,
    description: 'Electronic Travel Authorization pro Kanadu',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=250&fit=crop'
  },
  {
    code: 'LK',
    name: 'Srí Lanka',
    flag: '🇱🇰',
    processingTime: '24-48 hodin',
    price: 'od 1,500 Kč',
    popular: true,
    description: 'Electronic Travel Authorization pro Srí Lanku',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=250&fit=crop'
  },
  {
    code: 'NZ',
    name: 'Nový Zéland',
    flag: '🇳🇿',
    processingTime: '24-72 hodin',
    price: 'od 1,200 Kč',
    description: 'New Zealand Electronic Travel Authority',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=250&fit=crop'
  },
  {
    code: 'KR',
    name: 'Jižní Korea',
    flag: '🇰🇷',
    processingTime: '1-3 dny',
    price: 'od 750 Kč',
    trending: true,
    description: 'Korea Electronic Travel Authorization',
    image: 'https://images.unsplash.com/photo-1549063364-7d7e74a1d7b8?w=400&h=250&fit=crop'
  }
]

const benefits = [
  {
    icon: Plane,
    title: 'Před odletem',
    description: 'ETA musíte mít před nástupem do letadla, vyřiďte si ji včas'
  },
  {
    icon: Clock,
    title: 'Rychlé schválení',
    description: 'Většina ETA do 72 hodin, některé dokonce během několika minut'
  },
  {
    icon: Smartphone,
    title: 'Mobilní aplikace',
    description: 'Oficiální aplikace vlád pro ještě rychlejší vyřízení'
  },
  {
    icon: Globe,
    title: 'Bezvízový cestování',
    description: 'ETA umožňuje cestovat do zemí bez klasického víza'
  },
  {
    icon: Shield,
    title: 'Bezpečnost',
    description: 'ETA zvyšuje bezpečnost hranic pomocí předběžné kontroly'
  },
  {
    icon: CreditCard,
    title: 'Nižší poplatky',
    description: 'ETA jsou obvykle levnější než klasická víza'
  }
]

const steps = [
  {
    number: '1',
    title: 'Kontrola pasů',
    description: 'Ověřte, zda váš pas splňuje podmínky pro ETA'
  },
  {
    number: '2',
    title: 'Online žádost',
    description: 'Vyplňte formulář s osobními údaji a cestovními informacemi'
  },
  {
    number: '3',
    title: 'Okamžitá platba',
    description: 'Zaplaťte poplatek kartou s okamžitým potvrzením'
  },
  {
    number: '4',
    title: 'Elektronické schválení',
    description: 'Obdržíte schválení spojené s vaším pasem'
  }
]

const faqs = [
  {
    question: 'Co je to ETA?',
    answer: 'ETA (Electronic Travel Authorisation/Authorization) je elektronické cestovní povolení, které umožňuje bezvízový vstup do určitých zemí. Je spojeno s vaším pasem elektronicky.'
  },
  {
    question: 'Liší se ETA od e-Visa?',
    answer: 'Ano, ETA je jednodušší forma povolení pro krátkodobé pobyty (obvykle do 90 dnů) pro občany osvobozených zemí. e-Visa je elektronická forma klasického víza.'
  },
  {
    question: 'Jak dlouho je ETA platná?',
    answer: 'Platnost se liší podle země - UK ETA je platná 2 roky, kanadská eTA 5 let, K-ETA 3 roky. Vždy umožňuje opakované vstupy během doby platnosti.'
  },
  {
    question: 'Můžu cestovat bez ETA?',
    answer: 'Ne, pokud vaše země vyžaduje ETA, musíte ji mít před odletem. Letecké společnosti vám nepovolí nastoupit bez platné ETA.'
  }
]

export default function ETALandingPage() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null)

  console.log('✈️ ETA Landing Page rendered')

  const handleCountrySelect = (countryCode: string) => {
    console.log('🚀 Redirecting to country page:', countryCode)
    if (countryCode === 'GB') {
      window.location.href = `/visa/gb`
    } else {
      window.location.href = `/visa/${countryCode.toLowerCase()}`
    }
  }

  const handleStartApplication = () => {
    console.log('🚀 Starting ETA application')
    // Nejpopulárnější ETA
    window.location.href = `/visa/gb`
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-blue-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <Badge className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Cestovní autorizace
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                ETA
              </span><br />
              Rychlá Autorizace
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto">
              Elektronické cestovní povolení pro bezvízový vstup. 
              Vyřiďte si ETA během minut až hodin pro UK, Kanadu, Srí Lanku a další země.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button 
                onClick={handleStartApplication}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Začít žádost o ETA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-semibold px-10 py-4 text-lg rounded-full transition-all duration-300"
                onClick={() => document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Prohlédnout země
                <Globe className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">5+</div>
                <div className="text-sm text-green-200">Zemí</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">1-72h</div>
                <div className="text-sm text-green-200">Vyřízení</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">99%</div>
                <div className="text-sm text-green-200">Úspěšnost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">2-5 let</div>
                <div className="text-sm text-green-200">Platnost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Výhody ETA systému
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elektronické cestovní autorizace zjednodušují mezinárodní cestování a zvyšují bezpečnost
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Země s ETA systémem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vyberte si zemi a získejte rychlou elektronickou cestovní autorizaci
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {etaCountries.map((country) => (
              <Card 
                key={country.code}
                className="group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg overflow-hidden"
                onClick={() => handleCountrySelect(country.code)}
              >
                {(country.popular || country.trending) && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className={`shadow-lg ${
                      country.popular 
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                        : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                    }`}>
                      <Star className="w-3 h-3 mr-1" />
                      {country.popular ? 'Nejoblíbenější' : 'Trending'}
                    </Badge>
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-4xl">{country.flag}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">
                      ETA
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{country.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-green-600">{country.price}</div>
                    <div className="text-sm text-gray-500">{country.processingTime}</div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 group-hover:scale-105 transition-transform">
                    Začít žádost
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak funguje ETA?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Získejte elektronickou cestovní autorizaci ve 4 krocích
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-blue-200 transform -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Často kladené otázky o ETA
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vše co potřebujete vědět o elektronických cestovních autorizacích
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                >
                  <CardTitle className="flex items-center justify-between">
                    <span>{faq.question}</span>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-200 ${selectedFaq === index ? 'rotate-90' : ''}`} />
                  </CardTitle>
                </CardHeader>
                {selectedFaq === index && (
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-900 via-blue-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni na rychlou ETA?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Nezapomeňte si vyřídit ETA před odletem. Většinu schválíme během hodin.
          </p>
          
          <Button 
            onClick={handleStartApplication}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Začít žádost o ETA
            <Plane className="w-6 h-6 ml-2" />
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Oficiální proces</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>1-72h vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Dlouhá platnost</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}