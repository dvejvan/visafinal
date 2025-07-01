'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Clock, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Star,
  Calendar,
  CreditCard,
  Globe,
  Plane,
  MapPin,
  Users,
  Camera,
  ArrowRight,
  Building2
} from 'lucide-react'

console.log('🇪🇺 Schengen Modern Visa Page component loaded')

export default function SchengenModernVisaPage() {
  const [activeTab, setActiveTab] = useState('tourist')

  const schengenCountries = [
    'Německo', 'Francie', 'Itálie', 'Španělsko', 'Nizozemsko', 'Belgie', 'Rakousko', 'Švýcarsko',
    'Portugalsko', 'Řecko', 'Švédsko', 'Dánsko', 'Norsko', 'Finsko', 'Polsko', 'Česká republika',
    'Slovensko', 'Maďarsko', 'Slovinsko', 'Estonsko', 'Lotyšsko', 'Litva', 'Malta', 'Lucembursko',
    'Island', 'Lichtenštejnsko'
  ]

  const visaTypes = [
    {
      id: 'tourist',
      name: 'Turistické vízum',
      duration: '90 dnů',
      validity: '6 měsíců',
      price: 'od 2,200 Kč',
      description: 'Pro turistické návštěvy, navštěvování přátel a rodiny',
      features: ['Pobyt do 90 dnů', 'Turistické aktivity', 'Navštěvování přátel', 'Kulturní akce']
    },
    {
      id: 'business',
      name: 'Obchodní vízum',
      duration: '90 dnů',
      validity: '1-5 let',
      price: 'od 2,200 Kč',
      description: 'Pro obchodní schůzky, konference a jednání',
      features: ['Obchodní schůzky', 'Konference', 'Veletrhy', 'Školení']
    },
    {
      id: 'transit',
      name: 'Tranzitní vízum',
      duration: '5 dnů',
      validity: '6 měsíců',
      price: 'od 1,500 Kč',
      description: 'Pro průjezd schengenským územím',
      features: ['Průjezd letištěm', 'Přestup', 'Krátký pobyt']
    }
  ]

  const requirements = [
    {
      title: 'Cestovní dokument',
      items: ['Platný pas (min. 3 měsíce po návratu)', 'Kopie všech stránek pasu', 'Pas musí mít alespoň 2 volné strany']
    },
    {
      title: 'Fotografie',
      items: ['2x biometrické fotografie 35x45mm', 'Světlé pozadí', 'Aktuální (max. 6 měsíců staré)']
    },
    {
      title: 'Pojištění',
      items: ['Cestovní pojištění min. 30,000 EUR', 'Platné pro celé Schengenské území', 'Krytí zdravotních výdajů a repatriace']
    },
    {
      title: 'Finanční zajištění',
      items: ['Výpis z bankovního účtu (3 měsíce)', 'Potvrzení o příjmech', 'Min. 50 EUR na den pobytu']
    },
    {
      title: 'Ubytování',
      items: ['Rezervace hotelu nebo potvrzení o ubytování', 'Pozvání od hostitelské osoby', 'Detailní itinerář cesty']
    }
  ]

  const processingTimes = [
    { service: 'Standardní', time: '10-15 dnů', price: 'od 2,200 Kč', popular: false },
    { service: 'Zrychlené', time: '5-7 dnů', price: 'od 3,500 Kč', popular: true },
    { service: 'Expresní', time: '24-48 hodin', price: 'od 5,500 Kč', popular: false }
  ]

  const faqs = [
    {
      question: 'Jak dlouho platí schengenské vízum?',
      answer: 'Schengenské vízum obvykle platí 6 měsíců od data vydání, během kterých můžete pobývat v Schengenském prostoru maximálně 90 dní.'
    },
    {
      question: 'Můžu cestovat do všech schengenských zemí s jedním vízem?',
      answer: 'Ano, s jedním schengenským vízem můžete cestovat do všech 26 zemí Schengenského prostoru bez dalších kontrol na hranicích.'
    },
    {
      question: 'Kde mám podat žádost o schengenské vízum?',
      answer: 'Žádost podáváte na konzulátu země, kterou navštívíte jako první, nebo ve které strávíte nejdelší dobu. Pokud je doba stejná, žádost podáváte v zemi první návštěvy.'
    },
    {
      question: 'Mohu prodloužit schengenské vízum?',
      answer: 'Krátkodobá schengenská víza lze prodloužit pouze ve výjimečných případech z důvodů vyšší moci, humanitárních důvodů nebo závažných osobních důvodů.'
    },
    {
      question: 'Potřebuji vízum, pokud mám český pas?',
      answer: 'Ne, občané České republiky nepotřebují vízum pro cestování v rámci Schengenského prostoru, protože ČR je členskou zemí.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🇪🇺</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                    <Shield className="w-4 h-4 mr-1" />
                    Oficiální řízení
                  </Badge>
                </div>
                
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Schengenské vízum
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Jedna žádost, 26 evropských zemí. Získejte svobodu pohybu po celé Evropě s naším rychlým a spolehlivým vyřízením schengenského víza.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-blue-600">26</div>
                    <div className="text-sm text-gray-600">zemí Evropy</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-blue-600">90</div>
                    <div className="text-sm text-gray-600">dnů pobyt</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-blue-600">5-15</div>
                    <div className="text-sm text-gray-600">dnů vyřízení</div>
                  </div>
                </div>

                <div>
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                    onClick={() => window.location.href = '/application-form'}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Začít žádost o vízum
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&h=600" 
                alt="Evropa - Schengen" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Schengen Countries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Země Schengenského prostoru
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              S jedním schengenským vízem můžete cestovat do všech těchto zemí bez dalších kontrol na hranicích
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
            {schengenCountries.map((country, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-gray-700">{country}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Svoboda pohybu</h3>
              <p className="text-gray-600">
                Jakmile vstoupíte do jakékoli schengenské země, můžete se volně pohybovat 
                mezi všemi členskými zeměmi bez dalších hraničních kontrol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typy schengenských víz</h2>
            <p className="text-xl text-gray-600">Vyberte si typ víza podle účelu vaší cesty</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visaTypes.map((visa) => (
              <Card key={visa.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{visa.name}</h3>
                    <p className="text-gray-600 text-sm">{visa.description}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Délka pobytu:</span>
                      <span className="font-semibold">{visa.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platnost:</span>
                      <span className="font-semibold">{visa.validity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cena:</span>
                      <span className="font-semibold text-blue-600">{visa.price}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {visa.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full visa-gradient hover:shadow-lg transition-all duration-200">
                    Vybrat tento typ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Požadované dokumenty</h2>
            <p className="text-xl text-gray-600">Připravte si tyto dokumenty pro úspěšnou žádost</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{req.title}</h3>
                  <ul className="space-y-2">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-2xl mx-auto">
              <AlertCircle className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Důležité upozornění</h3>
              <p className="text-amber-700 text-sm">
                Všechny dokumenty musí být v angličtině nebo v jazyce země, kde podáváte žádost. 
                Některé dokumenty mohou vyžadovat úřední překlad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Cena a doba vyřízení
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-2xl mx-auto">
              <h4 className="text-2xl font-semibold text-blue-800 mb-4">
                Standardní vyřízení
              </h4>
              <div className="text-4xl font-bold text-blue-600 mb-2">2,200 Kč</div>
              <div className="text-lg text-blue-700 mb-4">
                Doba vyřízení: 5-15 pracovních dnů
              </div>
              <p className="text-blue-700">
                Cena zahrnuje všechny poplatky a kompletní vyřízení + 80 EUR konzulární poplatek
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Často kladené otázky</h2>
            <p className="text-xl text-gray-600">Odpovědi na nejčastější dotazy ke schengenským vízům</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Začněte svou cestu do Evropy
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Vyřídíme vám schengenské vízum rychle, spolehlivě a za nejlepší cenu
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => window.location.href = '/application-form'}
            >
              <FileText className="w-5 h-5 mr-2" />
              Získat schengenské vízum
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}