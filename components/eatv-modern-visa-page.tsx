'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Clock, 
  CheckCircle, 
  Shield, 
  FileText, 
  Globe,
  Calendar,
  Plane,
  MapPin,
  Award,
  Info
} from 'lucide-react'
import TrustSection from '@/components/trust-section'

export default function EatvModernVisaPage() {
  console.log('EATV Modern Visa Page rendered')

  const requirements = [
    'Platný pas s platností min. 6 měsíců',
    'Fotografie v digitální podobě',
    'Potvrzení o ubytování v Keni, Ugandě nebo Rwandě',
    'Letenky nebo potvrzení o cestě',
    'Potvrzení o finančních prostředcích',
    'Vyplněný online formulář'
  ]

  const countries = [
    { name: 'Keňa', flag: '🇰🇪', capital: 'Nairobi' },
    { name: 'Uganda', flag: '🇺🇬', capital: 'Kampala' },
    { name: 'Rwanda', flag: '🇷🇼', capital: 'Kigali' }
  ]

  const validityInfo = [
    {
      title: 'Platnost víza',
      description: '90 dnů od data vydání',
      icon: Calendar
    },
    {
      title: 'Doba pobytu',
      description: 'Až 90 dnů celkem',
      icon: Clock
    },
    {
      title: 'Počet vstupů',
      description: 'Více vstupů do všech tří zemí',
      icon: Globe
    },
    {
      title: 'Typ víza',
      description: 'Turistické a obchodní',
      icon: Plane
    }
  ]

  const usageInfo = [
    {
      title: 'Turistické účely',
      items: ['Prohlídka památek', 'Safari a národní parky', 'Pláže a rekreace', 'Kulturní akce']
    },
    {
      title: 'Obchodní účely', 
      items: ['Obchodní jednání', 'Konference a semináře', 'Výstavy a veletrhy', 'Pracovní návštěvy']
    },
    {
      title: 'Další účely',
      items: ['Návštěva přátel/rodiny', 'Tranzit přes země', 'Zdravotní péče', 'Vzdělávací aktivity']
    }
  ]

  const faqs = [
    {
      question: 'Co je East Africa Tourist Visa (EATV)?',
      answer: 'EATV je společné turistické vízum pro tři východoafrické země - Keňu, Ugandu a Rwandu. Umožňuje cestování mezi těmito zeměmi po dobu až 90 dnů s jediným vízem.'
    },
    {
      question: 'Jak dlouho trvá vyřízení EATV?',
      answer: 'Standardní vyřízení trvá 7-14 pracovních dnů. Nabízíme také express servis (3-5 dnů) a urgentní vyřízení (24-48 hodin).'
    },
    {
      question: 'Do kterých zemí mohu s EATV cestovat?',
      answer: 'S EATV můžete cestovat do Keni, Ugandy a Rwandy. Vízum umožňuje více vstupů do těchto zemí během platnosti.'
    },
    {
      question: 'Jaká je platnost EATV?',
      answer: 'EATV má platnost 90 dnů od data vydání. Během této doby můžete v uvedených zemích pobývat celkem až 90 dnů.'
    },
    {
      question: 'Kde můžu podat žádost o EATV?',
      answer: 'Žádost můžete podat online prostřednictvím našich služeb nebo přímo na velvyslanectví kterékoli ze tří zemí.'
    },
    {
      question: 'Jaké jsou poplatky za EATV?',
      answer: 'Konzulární poplatek je 100 USD. Naše servisní poplatky začínají od 3,200 Kč za standardní vyřízení.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-green-100 text-green-700 px-4 py-2">
                    <Award className="w-4 h-4 mr-2" />
                    Oficiální partner
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
                    <Shield className="w-4 h-4 mr-2" />
                    98% úspěšnost
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  East Africa Tourist Visa (EATV)
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Jediné vízum pro cestování do <strong>tří zemí východní Afriky</strong> - Keni, Ugandy a Rwandy. 
                  Vyřídíme vám EATV rychle a spolehlivě.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
                    <div className="text-2xl font-bold text-green-600">3</div>
                    <div className="text-sm text-gray-600">země</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
                    <div className="text-2xl font-bold text-blue-600">90</div>
                    <div className="text-sm text-gray-600">dnů platnost</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
                    <div className="text-2xl font-bold text-purple-600">7-14</div>
                    <div className="text-sm text-gray-600">dnů vyřízení</div>
                  </div>
                </div>

                <div>
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                    onClick={() => window.location.href = '/application-form'}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Začít žádost o EATV
                  </Button>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1049500/pexels-photo-1049500.jpeg?auto=compress&cs=tinysrgb&h=600" 
                  alt="Východní Afrika - safari" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tři země, jedno vízum
            </h2>
            <p className="text-lg text-gray-600">
              EATV vám umožní navštívit tři úžasné východoafrické země s jediným vízem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {countries.map((country, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{country.flag}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{country.name}</h3>
                  <p className="text-gray-600">Hlavní město: {country.capital}</p>
                  <div className="mt-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <MapPin className="w-3 h-3 mr-1" />
                      Součást EATV
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platnosti a podmínky */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platnosti a podmínky
            </h2>
            <p className="text-lg text-gray-600">
              Vše co potřebujete vědět o EATV vizu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {validityInfo.map((info, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <info.icon className="w-12 h-12 text-green-600 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Použití */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pro jaké účely můžete EATV použít
            </h2>
            <p className="text-lg text-gray-600">
              EATV pokrývá širokou škálu cestovních účelů
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {usageInfo.map((usage, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Info className="w-5 h-5 text-green-600 mr-2" />
                    {usage.title}
                  </h3>
                  <ul className="space-y-2">
                    {usage.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-3xl mx-auto">
              <h4 className="text-lg font-semibold text-green-800 mb-2">
                Cena: 3,200 Kč za vyřízení
              </h4>
              <p className="text-green-700">
                Standardní vyřízení za 7-14 pracovních dnů + 100 USD konzulární poplatek
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Požadované dokumenty
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Často kladené otázky
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-green-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Začněte svou cestu do východní Afriky
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Vyřídíme vám EATV rychle, spolehlivě a za nejlepší cenu
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => window.location.href = '/application-form'}
            >
              <FileText className="w-5 h-5 mr-2" />
              Získat EATV vízum
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}