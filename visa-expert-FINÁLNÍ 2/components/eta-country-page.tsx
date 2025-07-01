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
  Zap,
  Globe,
  Calendar,
  CreditCard as IdCard
} from 'lucide-react'

interface EtaCountryData {
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
  validity: string
  stayDuration: string
  entryType: string
  purpose: string[]
}

interface EtaCountryPageProps {
  country: EtaCountryData
}

const faqs = [
  {
    question: 'Co je ETA (Electronic Travel Authorization)?',
    answer: 'ETA je elektronická cestovní autorizace, která umožňuje bezvízový vstup do země pro občany určitých zemí. Je spojena s vaším pasem a platí pro vícenásobné vstupy.',
  },
  {
    question: 'Jak dlouho je ETA platná?',
    answer: 'Platnost ETA se liší podle země. Obvykle je platná 1-2 roky nebo dokud nevyprší platnost pasu, podle toho, co nastane dříve.',
  },
  {
    question: 'Mohu prodloužit svou ETA?',
    answer: 'ETA nelze prodloužit. Po vypršení platnosti musíte požádat o novou ETA.',
  },
  {
    question: 'Potřebuji ETA i pro tranzit?',
    answer: 'Ano, ETA je potřebná i pro tranzit přes danou zemi, pokud opouštíte tranzitní zónu.',
  },
]

const steps = [
  {
    number: 1,
    title: 'Vyplňte formulář',
    description: 'Online formulář za 3 minuty',
    icon: FileText,
  },
  {
    number: 2,
    title: 'Uhraďte poplatek',
    description: 'Bezpečná platba kartou',
    icon: CreditCard,
  },
  {
    number: 3,
    title: 'Automatické zpracování',
    description: 'Systém automaticky zpracuje žádost',
    icon: Globe,
  },
  {
    number: 4,
    title: 'Získejte ETA',
    description: 'ETA obdržíte na email',
    icon: CheckCircle,
  },
]

export default function EtaCountryPage({ country }: EtaCountryPageProps) {
  const [selectedPlan, setSelectedPlan] = useState('standard')

  console.log('EtaCountryPage rendered for:', country.name)

  const handleApplyEta = (plan: string) => {
    console.log('Applying for ETA with plan:', plan)
    // Here would be the actual application logic
    alert(`Přesměrování na formulář pro ${plan} vyřízení ETA do ${country.name}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-visa-green-600 to-visa-green-800 text-white">
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
                <Badge className="bg-visa-gold-600 hover:bg-visa-gold-700">
                  <Zap className="w-4 h-4 mr-1" />
                  Rychlé vyřízení
                </Badge>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight">
                {country.code} ETA <br />
                <span className="text-visa-gold-300">{country.name}</span>
              </h1>
              
              <p className="text-xl text-visa-green-100 leading-relaxed">
                {country.description}. Bezvízový vstup s 99% úspěšností schválení.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-visa-gold-300" />
                  <div className="font-semibold">{country.duration}</div>
                  <div className="text-sm text-visa-green-100">Doba vyřízení</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-visa-gold-300" />
                  <div className="font-semibold">{country.validity}</div>
                  <div className="text-sm text-visa-green-100">Platnost</div>
                </div>
                <div className="text-center">
                  <Plane className="w-8 h-8 mx-auto mb-2 text-visa-gold-300" />
                  <div className="font-semibold">{country.entryType}</div>
                  <div className="text-sm text-visa-green-100">Typ vstupu</div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-semibold">Získejte ETA rychle</h3>
                  <p className="text-visa-green-100">
                    Elektronická autorizace za {country.duration}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-visa-gold-300">
                      {country.price}
                    </div>
                    
                    <Button 
                      onClick={() => handleApplyEta('standard')}
                      className="w-full bg-visa-gold-600 hover:bg-visa-gold-700 text-white font-semibold py-3"
                    >
                      Žádat o ETA
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <div className="text-sm text-visa-green-100">
                      ✅ Bezvízový vstup • 🔒 Bezpečné platby • ⚡ Rychlé vyřízení
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Key Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Výhody ETA pro {country.name}
            </h2>
            <p className="text-xl text-gray-600">
              Rychlá a jednoduchá cesta k bezvízovému vstupu
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <IdCard className="w-12 h-12 text-visa-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Platnost {country.validity}</h3>
                <p className="text-sm text-gray-600">Dlouhodobé řešení pro cestování</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-visa-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{country.entryType}</h3>
                <p className="text-sm text-gray-600">Můžete vstoupit vícekrát</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-visa-gold-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Pobyt {country.stayDuration}</h3>
                <p className="text-sm text-gray-600">Maximální doba pobytu</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-visa-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Rychlé vyřízení</h3>
                <p className="text-sm text-gray-600">Už za {country.duration}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vyberte rychlost vyřízení ETA
            </h2>
            <p className="text-xl text-gray-600">
              Nabízíme různé možnosti podle vašich potřeb
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Standard */}
            <Card className={`relative ${selectedPlan === 'standard' ? 'ring-2 ring-visa-green-600' : ''}`}>
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
                  onClick={() => handleApplyEta('standard')}
                  variant={selectedPlan === 'standard' ? 'default' : 'outline'}
                  className="w-full"
                >
                  Vybrat plán
                </Button>
              </CardContent>
            </Card>

            {/* Express */}
            <Card className={`relative ${selectedPlan === 'express' ? 'ring-2 ring-visa-green-600' : ''}`}>
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
                  onClick={() => handleApplyEta('express')}
                  className="w-full bg-visa-green-600 hover:bg-visa-green-700"
                >
                  Vybrat plán
                </Button>
              </CardContent>
            </Card>

            {/* Urgent */}
            <Card className={`relative ${selectedPlan === 'urgent' ? 'ring-2 ring-visa-green-600' : ''}`}>
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
                  onClick={() => handleApplyEta('urgent')}
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
            <TabsTrigger value="purpose">Účel cesty</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="requirements" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-visa-green-600" />
                  Požadavky pro ETA do {country.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Potřebné informace:</h4>
                    <ul className="space-y-2">
                      {country.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-visa-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-visa-green-50 rounded-lg p-4">
                    <div className="flex items-start gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-visa-green-600 mt-0.5" />
                      <h4 className="font-semibold text-visa-green-900">Důležité informace</h4>
                    </div>
                    <p className="text-sm text-visa-green-800">
                      ETA je elektronicky spojena s vaším pasem. Cestovat musíte s tím samým pasem, 
                      se kterým jste žádali o ETA. Informace musí být přesné a odpovídat údajům v pasu.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Jak probíhá vyřízení ETA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {steps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-visa-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-visa-green-600" />
                      </div>
                      <div className="font-semibold mb-2">{step.title}</div>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="purpose" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Účely cesty s ETA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Povolené aktivity:</h4>
                    <ul className="space-y-2">
                      {country.purpose.map((purpose, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-visa-green-600" />
                          <span className="text-sm text-gray-700">{purpose}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Omezení:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Nelze pracovat (kromě specifických výjimek)</li>
                      <li>• Nelze studovat dlouhodobě</li>
                      <li>• Maximální pobyt {country.stayDuration}</li>
                      <li>• Musíte mít dostatek finančních prostředků</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Často kladené otázky o ETA</CardTitle>
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
        <section className="text-center bg-gradient-to-r from-visa-green-600 to-visa-green-800 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Připraveni získat ETA do {country.name}?
          </h2>
          <p className="text-xl text-visa-green-100 mb-8 max-w-2xl mx-auto">
            Získejte elektronickou cestovní autorizaci rychle a jednoduše s 99% úspěšností.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleApplyEta('standard')}
              className="bg-visa-gold-600 hover:bg-visa-gold-700 text-white font-semibold px-8 py-3"
            >
              Žádat o ETA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-visa-green-600"
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
              <span>99% úspěšnost</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-visa-green-300" />
              <span>Rychlé vyřízení</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}