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
  Download
} from 'lucide-react'

const eVisaCountries = [
  {
    code: 'EG',
    name: 'Egypt',
    flag: '🇪🇬',
    processingTime: '3-5 dnů',
    price: 'od 2,200 Kč',
    popular: true,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=250&fit=crop'
  },
  {
    code: 'SA',
    name: 'Saudská Arábie',
    flag: '🇸🇦',
    processingTime: '3-7 dnů',
    price: 'od 3,500 Kč',
    trending: true,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop'
  },
  {
    code: 'TR',
    name: 'Turecko',
    flag: '🇹🇷',
    processingTime: '24-48 hodin',
    price: 'od 1,800 Kč',
    popular: true,
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=250&fit=crop'
  },
  {
    code: 'VN',
    name: 'Vietnam',
    flag: '🇻🇳',
    processingTime: '3-5 dnů',
    price: 'od 2,200 Kč',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop'
  },
  {
    code: 'IN',
    name: 'Indie',
    flag: '🇮🇳',
    processingTime: '3-5 dnů',
    price: 'od 2,500 Kč',
    popular: true,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop'
  },
  {
    code: 'QA',
    name: 'Katar',
    flag: '🇶🇦',
    processingTime: '24-72 hodin',
    price: 'od 1,900 Kč',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=250&fit=crop'
  }
]

const benefits = [
  {
    icon: Smartphone,
    title: 'Kompletně online',
    description: 'Celý proces probíhá online, žádné návštěvy konzulátu'
  },
  {
    icon: Clock,
    title: 'Rychlé vyřízení',
    description: 'Většina e-Visa do 72 hodin, nejrychlejší do 24 hodin'
  },
  {
    icon: CreditCard,
    title: 'Snadné platby',
    description: 'Platba kartou online, žádné složité bankovní převody'
  },
  {
    icon: FileCheck,
    title: 'Digitální doklady',
    description: 'Vízum obdržíte elektronicky, jen vytisknete a cestujete'
  },
  {
    icon: Shield,
    title: '98% úspěšnost',
    description: 'Vysoká úspěšnost díky našim odborníkům na víza'
  },
  {
    icon: Users,
    title: 'Podpora 24/7',
    description: 'Naši specialisté vám pomohou kdykoliv během procesu'
  }
]

const steps = [
  {
    number: '1',
    title: 'Vyberte zemi',
    description: 'Zvolte si destinaci a typ e-Visa podle účelu vaší cesty'
  },
  {
    number: '2',
    title: 'Vyplňte formulář',
    description: 'Zadejte základní údaje a nahrajte požadované dokumenty'
  },
  {
    number: '3',
    title: 'Zaplaťte online',
    description: 'Bezpečná platba kartou s okamžitým potvrzením'
  },
  {
    number: '4',
    title: 'Obdržte e-Visa',
    description: 'Elektronické vízum na email během 24-72 hodin'
  }
]

const faqs = [
  {
    question: 'Co je to e-Visa?',
    answer: 'e-Visa je elektronické vízum, které se vyřizuje kompletně online bez nutnosti návštěvy konzulátu. Po schválení obdržíte dokument elektronicky.'
  },
  {
    question: 'Jak dlouho trvá vyřízení?',
    answer: 'Většina e-Visa se vyřizuje do 72 hodin. Nejrychlejší země jako Turecko nebo Katar do 24-48 hodin. Nabízíme i expresní služby.'
  },
  {
    question: 'Jaké dokumenty potřebujem?',
    answer: 'Základně stačí platný pas, fotografie a vyplněný formulář. Některé země mohou vyžadovat dodatečné dokumenty jako letenky nebo potvrzení o ubytování.'
  },
  {
    question: 'Je e-Visa stejně platné jako klasické?',
    answer: 'Ano, e-Visa má stejnou právní platnost jako klasické vízum. Na hranicích stačí předložit vytištěnou kopii spolu s pasem.'
  }
]

export default function EVisaLandingPage() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null)

  console.log('🌐 e-Visa Landing Page rendered')

  const handleCountrySelect = (countryCode: string) => {
    console.log('🚀 Redirecting to country page:', countryCode)
    window.location.href = `/visa/${countryCode.toLowerCase()}`
  }

  const handleStartApplication = () => {
    console.log('🚀 Starting e-Visa application')
    // Můžeme redirectovat na nejpopulárnější nebo nechat uživatele vybrat
    window.location.href = `/visa/tr` // Turecko jako nejrychlejší
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Nejrychlejší způsob k vízům
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                e-Visa
              </span><br />
              Rychle a Online
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Získejte elektronické vízum během 24-72 hodin. Kompletně online, bez návštěvy konzulátu. 
              Podporujeme 6+ zemí s 98% úspěšností.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button 
                onClick={handleStartApplication}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Začít žádost o e-Visa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-10 py-4 text-lg rounded-full transition-all duration-300"
                onClick={() => document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Prohlédnout země
                <Globe className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">6+</div>
                <div className="text-sm text-blue-200">Zemí</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">24-72h</div>
                <div className="text-sm text-blue-200">Vyřízení</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">98%</div>
                <div className="text-sm text-blue-200">Úspěšnost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">100%</div>
                <div className="text-sm text-blue-200">Online</div>
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
              Proč zvolit e-Visa?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elektronická víza revolucionizují způsob, jakým cestujeme. Objevte výhody moderního přístupu k vízům.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
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
              Podporované země pro e-Visa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vyberte si ze zemí, které nabízejí rychlé elektronické víza
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eVisaCountries.map((country) => (
              <Card 
                key={country.code}
                className="group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg overflow-hidden"
                onClick={() => handleCountrySelect(country.code)}
              >
                {(country.popular || country.trending) && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className={`shadow-lg ${
                      country.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
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
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl">{country.flag}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-600">{country.price}</div>
                    <div className="text-sm text-gray-500">{country.processingTime}</div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-transform">
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
              Jak funguje e-Visa?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Získejte své elektronické vízum ve 4 jednoduchých krocích
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-8"></div>
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
              Často kladené otázky
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vše co potřebujete vědět o e-Visa
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
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni na rychlé e-Visa?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nečekejte týdny na vízum. Získejte své e-Visa během 24-72 hodin a začněte cestovat.
          </p>
          
          <Button 
            onClick={handleStartApplication}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Začít žádost nyní
            <Zap className="w-6 h-6 ml-2" />
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Bezpečné platby</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24-72h vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>98% úspěšnost</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}