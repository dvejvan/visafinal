'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Clock, 
  Shield, 
  CheckCircle, 
  Star, 
  FileText, 
  CreditCard,
  Plane,
  MapPin,
  Users,
  TrendingUp,
  ArrowRight,
  AlertCircle,
  Zap
} from 'lucide-react'

interface CountryData {
  code: string
  name: string
  flag: string
  duration: string
  price: string
  description: string
  features: string[]
  image: string
  requirements: string[]
  processingTime: {
    standard: string
    express: string
    urgent: string
  }
  pricing: {
    standard: number
    express: number
    urgent: number
  }
}

interface VisaCountryPageProps {
  country: CountryData
}

const faqs = [
  {
    question: 'Jak dlouho bude mé vízum platné?',
    answer: 'Platnost víza závisí na typu a zemi. Většina turistických víz má platnost 3-12 měsíců s možností pobytu 30-90 dnů.',
  },
  {
    question: 'Mohu žádat o vízum, pokud mám pas s platností kratší než 6 měsíců?',
    answer: 'Ne, většina zemí vyžaduje pas s platností minimálně 6 měsíců od data vstupu. Doporučujeme obnovit pas před žádostí o vízum.',
  },
  {
    question: 'Co se stane, pokud bude moje žádost zamítnuta?',
    answer: 'V případě zamítnutí vám vrátíme konzulární poplatky (ne servisní poplatky). Pomůžeme vám identifikovat důvody zamítnutí.',
  },
  {
    question: 'Mohu cestovat s dětmi na své vízum?',
    answer: 'Ne, každá osoba včetně dětí potřebuje vlastní vízum. Nabízíme rodinné balíčky se slevou.',
  },
]

const steps = [
  {
    number: 1,
    title: 'Vyplňte formulář',
    description: 'Online formulář vyplníte za 5 minut',
    icon: FileText,
  },
  {
    number: 2,
    title: 'Nahrajte dokumenty',
    description: 'Naskenujte potřebné dokumenty',
    icon: Shield,
  },
  {
    number: 3,
    title: 'Uhraďte poplatek',
    description: 'Bezpečná platba kartou',
    icon: CreditCard,
  },
  {
    number: 4,
    title: 'Získejte vízum',
    description: 'Vízum obdržíte na email',
    icon: CheckCircle,
  },
]

export default function VisaCountryPage({ country }: VisaCountryPageProps) {
  const [selectedPlan, setSelectedPlan] = useState('standard')

  console.log('VisaCountryPage rendered for:', country.name)

  const handleApplyVisa = (plan: string) => {
    console.log('Applying for visa with plan:', plan)
    // Here would be the actual application logic
    alert(`Přesměrování na formulář pro ${plan} vyřízení víza do ${country.name}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-visa-blue-600 to-visa-blue-800 text-white">
        <div className="absolute inset-0">
          <img 
            src={country.image} 
            alt={country.name}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-5xl">{country.flag}</span>
                <Badge className="bg-visa-green-600 hover:bg-visa-green-700">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Oblíbená destinace
                </Badge>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight">
                Vízum do <br />
                <span className="text-visa-gold-300">{country.name}</span>
              </h1>
              
              <p className="text-xl text-visa-blue-100 leading-relaxed">
                {country.description}. Rychlé vyřízení s 98% úspěšností schválení.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-visa-gold-300" />
                  <div className="font-semibold">{country.duration}</div>
                  <div className="text-sm text-visa-blue-100">Doba vyřízení</div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-visa-green-300" />
                  <div className="font-semibold">98%</div>
                  <div className="text-sm text-visa-blue-100">Úspěšnost</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-visa-gold-300" />
                  <div className="font-semibold">2,400+</div>
                  <div className="text-sm text-visa-blue-100">Spokojených klientů</div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-semibold">Začněte hned</h3>
                  <p className="text-visa-blue-100">
                    Vízum získáte za {country.duration}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-visa-gold-300">
                      {country.price}
                    </div>
                    
                    <Button 
                      onClick={() => handleApplyVisa('standard')}
                      className="w-full bg-visa-gold-600 hover:bg-visa-gold-700 text-white font-semibold py-3"
                    >
                      Žádat o vízum
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <div className="text-sm text-visa-blue-100">
                      ✅ Garance vrácení peněz • 🔒 Bezpečné platby
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vyberte rychlost vyřízení
            </h2>
            <p className="text-xl text-gray-600">
              Nabízíme různé možnosti podle vašich potřeb
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Standard */}
            <Card className={`relative ${selectedPlan === 'standard' ? 'ring-2 ring-visa-blue-600' : ''}`}>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">Standardní</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  {country.pricing.standard.toLocaleString()} Kč
                </div>
                <p className="text-gray-600">{country.processingTime.standard}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">Standardní zpracování</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">Email podpora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">SMS notifikace</span>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApplyVisa('standard')}
                  variant={selectedPlan === 'standard' ? 'default' : 'outline'}
                  className="w-full"
                >
                  Vybrat plán
                </Button>
              </CardContent>
            </Card>

            {/* Express */}
            <Card className={`relative ${selectedPlan === 'express' ? 'ring-2 ring-visa-blue-600' : ''}`}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-visa-gold-600 hover:bg-visa-gold-700">
                  Nejoblíbenější
                </Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">Express</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  {country.pricing.express.toLocaleString()} Kč
                </div>
                <p className="text-gray-600">{country.processingTime.express}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">Rychlé zpracování</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">Prioritní podpora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">SMS + email notifikace</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">Telefonní podpora</span>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApplyVisa('express')}
                  className="w-full visa-gradient"
                >
                  Vybrat plán
                </Button>
              </CardContent>
            </Card>

            {/* Urgent */}
            <Card className={`relative ${selectedPlan === 'urgent' ? 'ring-2 ring-visa-blue-600' : ''}`}>
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-visa-gold-600" />
                  <CardTitle className="text-lg">Urgentní</CardTitle>
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {country.pricing.urgent.toLocaleString()} Kč
                </div>
                <p className="text-gray-600">{country.processingTime.urgent}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">Nejrychlejší zpracování</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">24/7 podpora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">Všechny notifikace</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-visa-green-600" />
                    <span className="text-sm">Osobní konzultant</span>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApplyVisa('urgent')}
                  variant={selectedPlan === 'urgent' ? 'default' : 'outline'}
                  className="w-full"
                >
                  Vybrat plán
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tabs Section */}
        <Tabs defaultValue="requirements" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requirements">Požadavky</TabsTrigger>
            <TabsTrigger value="process">Proces</TabsTrigger>
            <TabsTrigger value="features">Výhody</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="requirements" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-visa-blue-600" />
                  Požadavky pro vízum do {country.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Potřebné dokumenty:</h4>
                    <ul className="space-y-2">
                      {country.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-visa-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-visa-blue-50 rounded-lg p-4">
                    <div className="flex items-start gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-visa-blue-600 mt-0.5" />
                      <h4 className="font-semibold text-visa-blue-900">Důležité upozornění</h4>
                    </div>
                    <p className="text-sm text-visa-blue-800">
                      Všechny dokumenty musí být v angličtině nebo přeloženy úředním překladatelem. 
                      Fotografie musí splňovat biometrické požadavky.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Jak probíhá vyřízení víza</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {steps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-visa-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-visa-blue-600" />
                      </div>
                      <div className="font-semibold mb-2">{step.title}</div>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Proč si vybrat nás pro vízum do {country.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-visa-green-600" />
                      <div>
                        <div className="font-semibold">98% úspěšnost</div>
                        <div className="text-sm text-gray-600">Nejvyšší úspěšnost na trhu</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-visa-blue-600" />
                      <div>
                        <div className="font-semibold">Rychlé vyřízení</div>
                        <div className="text-sm text-gray-600">O 40% rychlejší než konkurence</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-visa-gold-600" />
                      <div>
                        <div className="font-semibold">Zkušený tým</div>
                        <div className="text-sm text-gray-600">15+ let zkušeností</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Zahrnuté služby:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-visa-green-600" />
                        Kontrola dokumentů
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-visa-green-600" />
                        Vyplnění formulářů
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-visa-green-600" />
                        Sledování stavu žádosti
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-visa-green-600" />
                        Zákaznická podpora
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Často kladené otázky</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-visa-blue-600 to-visa-blue-800 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Připraveni získat vízum do {country.name}?
          </h2>
          <p className="text-xl text-visa-blue-100 mb-8 max-w-2xl mx-auto">
            Začněte hned a získejte své vízum rychle a spolehlivě s 98% úspěšností schválení.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleApplyVisa('standard')}
              className="bg-visa-gold-600 hover:bg-visa-gold-700 text-white font-semibold px-8 py-3"
            >
              Žádat o vízum
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-visa-blue-600"
            >
              Kontaktovat nás
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-visa-gold-300 text-visa-gold-300" />
              <span>4.9/5 hodnocení</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-visa-green-300" />
              <span>100% bezpečné</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-visa-blue-300" />
              <span>Rychlé vyřízení</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}