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
  HelpCircle
} from 'lucide-react'

const ukData = {
  flag: '🇬🇧',
  name: 'Velká Británie',
  image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop&crop=center',
}

const etaData = {
  type: 'ETA',
  name: 'UK ETA',
  duration: '2-3 dny',
  price: 'od 1,200 Kč',
  description: 'Elektronická cestovní autorizace pro bezvízový vstup',
  validity: '2 roky',
  maxStay: '6 měsíců',
  entryType: 'Vícenásobný vstup',
  features: ['Bezvízový vstup', 'Digitální autorizace', 'Rychlé vyřízení'],
  requirements: [
    'Platný pas s platností min. 6 měsíců',
    'Email adresa',
    'Platební karta',
    'Fotografie (pouze pro některé národnosti)',
    'Plán cesty'
  ],
  processingTime: {
    standard: '2-3 pracovní dny',
    express: '24 hodin',
    urgent: '2-4 hodiny'
  },
  pricing: {
    standard: 1200,
    express: 1800,
    urgent: 2500
  },
  purposes: ['Turistika', 'Obchod', 'Návštěva rodiny', 'Krátké kurzy']
}

const visaData = {
  type: 'VISA',
  name: 'Standard Visitor Visa',
  duration: '5-10 dnů',
  price: 'od 3,200 Kč',
  description: 'Návštěvnické vízum pro delší pobyty a specifické účely',
  validity: '6 měsíců - 10 let',
  maxStay: '6 měsíců na návštěvu',
  entryType: 'Vícenásobný vstup',
  features: ['Delší pobyty', 'Více účelů', 'Flexibilita'],
  requirements: [
    'Platný pas',
    'Vyplněný online formulář',
    'Biometrické údaje',
    'Doklady o finančních prostředcích',
    'Potvrzení o ubytování a cestovním plánu'
  ],
  processingTime: {
    standard: '5-10 pracovních dnů',
    express: '3-5 pracovních dnů',
    urgent: '1-2 pracovní dny'
  },
  pricing: {
    standard: 3200,
    express: 4800,
    urgent: 6800
  },
  purposes: ['Dlouhodobější pobyty', 'Opakované návštěvy', 'Složitější případy', 'Akademické účely']
}

const faqs = [
  {
    question: 'Který dokument si mám vybrat - ETA nebo vízum?',
    answer: 'ETA je vhodná pro krátké pobyty do 6 měsíců pro turistiku či obchod. Standard Visitor Visa potřebujete pro specifické účely, delší nebo opakované pobyty, nebo pokud nesplňujete podmínky pro ETA.',
  },
  {
    question: 'Mohu s ETA pracovat ve Velké Británii?',
    answer: 'Ne, s ETA nemůžete pracovat. ETA je určena pouze pro turistiku, obchod, návštěvy rodiny a krátké kurzy. Pro práci potřebujete pracovní vízum.',
  },
  {
    question: 'Jak dlouho dopředu si mám dokument vyřídit?',
    answer: 'ETA doporučujeme vyřídit 1-2 týdny przed cestou, vízum alespoň 4-6 týdnů dopředu kvůli delší době zpracování.',
  },
  {
    question: 'Mohu změnit ETA na vízum nebo naopak?',
    answer: 'Ne, jedná se o samostatné dokumenty. Pokud potřebujete změnit typ povolení, musíte podat novou žádost.',
  },
]

const steps = {
  eta: [
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
  ],
  visa: [
    {
      number: 1,
      title: 'Vyplňte formulář',
      description: 'Detailní online formulář',
      icon: FileText,
    },
    {
      number: 2,
      title: 'Nahrajte dokumenty',
      description: 'Všechny požadované dokumenty',
      icon: Shield,
    },
    {
      number: 3,
      title: 'Biometrické údaje',
      description: 'Návštěva visa centra',
      icon: Users,
    },
    {
      number: 4,
      title: 'Získejte vízum',
      description: 'Vízum v pasu nebo elektronicky',
      icon: CheckCircle,
    },
  ]
}

export default function UkVisaPage() {
  const [selectedDocumentType, setSelectedDocumentType] = useState<'eta' | 'visa'>('eta')
  const [selectedPlan, setSelectedPlan] = useState('standard')

  console.log('UkVisaPage rendered, selectedType:', selectedDocumentType)

  const currentData = selectedDocumentType === 'eta' ? etaData : visaData

  const handleApply = (plan: string) => {
    console.log('🚀 Applying for', selectedDocumentType, 'with plan:', plan)
    // Přesměrování na formulář s parametry
    const params = new URLSearchParams({
      country: 'gb',
      type: selectedDocumentType,
      plan: plan,
      price: currentData.pricing[plan as keyof typeof currentData.pricing].toString()
    })
    window.location.href = `/application-form?${params.toString()}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-visa-blue-600 to-visa-blue-800 text-white">
        <div className="absolute inset-0">
          <img 
            src={ukData.image} 
            alt={ukData.name}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-6 mb-12">
            <div className="flex items-center justify-center gap-3">
              <span className="text-6xl">{ukData.flag}</span>
              <Badge className="bg-visa-green-600 hover:bg-visa-green-700">
                <TrendingUp className="w-4 h-4 mr-1" />
                Nejoblíbenější destinace
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight">
              Vstup do <br />
              <span className="text-visa-gold-300">{ukData.name}</span>
            </h1>
            
            <p className="text-xl text-visa-blue-100 leading-relaxed max-w-3xl mx-auto">
              Vyberte si typ dokumentu podle délky a účelu vašeho pobytu. 
              Nabízíme jak rychlou ETA pro krátké pobyty, tak standardní víza pro specifické účely.
            </p>
          </div>

          {/* Document Type Selection */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ETA Option */}
            <Card 
              className={`cursor-pointer transition-all duration-200 ${
                selectedDocumentType === 'eta' 
                  ? 'ring-2 ring-visa-gold-400 bg-white/95 scale-105' 
                  : 'bg-white/80 hover:bg-white/90'
              }`}
              onClick={() => setSelectedDocumentType('eta')}
            >
              <CardContent className="p-8 text-center text-gray-900">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-8 h-8 text-visa-green-600" />
                    <h3 className="text-2xl font-bold">UK ETA</h3>
                  </div>
                  
                  <p className="text-gray-600">
                    Elektronická cestovní autorizace pro bezvízový vstup
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <Clock className="w-4 h-4 text-visa-green-600 mx-auto mb-1" />
                      <div className="font-semibold">2-3 dny</div>
                      <div className="text-gray-500">Vyřízení</div>
                    </div>
                    <div>
                      <Calendar className="w-4 h-4 text-visa-green-600 mx-auto mb-1" />
                      <div className="font-semibold">6 měsíců</div>
                      <div className="text-gray-500">Max. pobyt</div>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-visa-green-600">
                    od 1,200 Kč
                  </div>
                  
                  <Badge className="bg-visa-green-100 text-visa-green-700">
                    Rychlé & Jednoduché
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Visa Option */}
            <Card 
              className={`cursor-pointer transition-all duration-200 ${
                selectedDocumentType === 'visa' 
                  ? 'ring-2 ring-visa-gold-400 bg-white/95 scale-105' 
                  : 'bg-white/80 hover:bg-white/90'
              }`}
              onClick={() => setSelectedDocumentType('visa')}
            >
              <CardContent className="p-8 text-center text-gray-900">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-8 h-8 text-visa-blue-600" />
                    <h3 className="text-2xl font-bold">Standard Visitor Visa</h3>
                  </div>
                  
                  <p className="text-gray-600">
                    Návštěvnické vízum pro delší pobyty a specifické účely
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <Clock className="w-4 h-4 text-visa-blue-600 mx-auto mb-1" />
                      <div className="font-semibold">5-10 dnů</div>
                      <div className="text-gray-500">Vyřízení</div>
                    </div>
                    <div>
                      <Calendar className="w-4 h-4 text-visa-blue-600 mx-auto mb-1" />
                      <div className="font-semibold">6 měsíců - 10 let</div>
                      <div className="text-gray-500">Platnost</div>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-visa-blue-600">
                    od 3,200 Kč
                  </div>
                  
                  <Badge className="bg-visa-blue-100 text-visa-blue-700">
                    Flexibilní & Dlouhodobé
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Comparison Table */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Porovnání možností
            </h2>
            <p className="text-xl text-gray-600">
              Jaký dokument je pro vás nejlepší?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Kritérium</th>
                  <th className="px-6 py-4 text-center font-semibold text-visa-green-700">UK ETA</th>
                  <th className="px-6 py-4 text-center font-semibold text-visa-blue-700">Standard Visitor Visa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Doba vyřízení</td>
                  <td className="px-6 py-4 text-center text-visa-green-600 font-semibold">2-3 dny</td>
                  <td className="px-6 py-4 text-center text-visa-blue-600 font-semibold">5-10 dnů</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Cena</td>
                  <td className="px-6 py-4 text-center text-visa-green-600 font-semibold">od 1,200 Kč</td>
                  <td className="px-6 py-4 text-center text-visa-blue-600 font-semibold">od 3,200 Kč</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Maximální pobyt</td>
                  <td className="px-6 py-4 text-center">6 měsíců</td>
                  <td className="px-6 py-4 text-center">6 měsíců na návštěvu</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Platnost</td>
                  <td className="px-6 py-4 text-center">2 roky</td>
                  <td className="px-6 py-4 text-center">6 měsíců - 10 let</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Vhodné pro</td>
                  <td className="px-6 py-4 text-center text-sm">Turistika, obchod, návštěvy</td>
                  <td className="px-6 py-4 text-center text-sm">Složitější případy, opakované návštěvy</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Biometrické údaje</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-red-500 mx-auto" />
                    <span className="text-xs text-gray-500">Ne</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-visa-green-500 mx-auto" />
                    <span className="text-xs text-gray-500">Ano</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rychlost vyřízení - {currentData.name}
            </h2>
            <p className="text-xl text-gray-600">
              Vyberte rychlost podle vašich potřeb
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Standard */}
            <Card className={`relative ${selectedPlan === 'standard' ? 'ring-2 ring-visa-blue-600' : ''}`}>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">Standardní</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  {currentData.pricing.standard.toLocaleString()} Kč
                </div>
                <p className="text-gray-600">{currentData.processingTime.standard}</p>
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
                  onClick={() => handleApply('standard')}
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
                  {currentData.pricing.express.toLocaleString()} Kč
                </div>
                <p className="text-gray-600">{currentData.processingTime.express}</p>
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
                  onClick={() => handleApply('express')}
                  className={`w-full ${selectedDocumentType === 'eta' ? 'bg-visa-green-600 hover:bg-visa-green-700' : 'visa-gradient'}`}
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
                  {currentData.pricing.urgent.toLocaleString()} Kč
                </div>
                <p className="text-gray-600">{currentData.processingTime.urgent}</p>
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
                  onClick={() => handleApply('urgent')}
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
            <TabsTrigger value="purposes">Účel cesty</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="requirements" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className={`w-5 h-5 ${selectedDocumentType === 'eta' ? 'text-visa-green-600' : 'text-visa-blue-600'}`} />
                  Požadavky pro {currentData.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Potřebné dokumenty/informace:</h4>
                    <ul className="space-y-2">
                      {currentData.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${selectedDocumentType === 'eta' ? 'text-visa-green-600' : 'text-visa-blue-600'}`} />
                          <span className="text-sm text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`rounded-lg p-4 ${selectedDocumentType === 'eta' ? 'bg-visa-green-50' : 'bg-visa-blue-50'}`}>
                    <div className="flex items-start gap-2 mb-3">
                      <AlertCircle className={`w-5 h-5 mt-0.5 ${selectedDocumentType === 'eta' ? 'text-visa-green-600' : 'text-visa-blue-600'}`} />
                      <h4 className={`font-semibold ${selectedDocumentType === 'eta' ? 'text-visa-green-900' : 'text-visa-blue-900'}`}>
                        Důležité informace
                      </h4>
                    </div>
                    <p className={`text-sm ${selectedDocumentType === 'eta' ? 'text-visa-green-800' : 'text-visa-blue-800'}`}>
                      {selectedDocumentType === 'eta' 
                        ? 'ETA je elektronicky spojena s vaším pasem. Cestovat musíte s tím samým pasem, se kterým jste žádali o ETA.'
                        : 'Všechny dokumenty musí být v angličtině nebo přeloženy úředním překladatelem. Nutná je návštěva visa centra pro biometrické údaje.'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Jak probíhá vyřízení {currentData.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {steps[selectedDocumentType].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        selectedDocumentType === 'eta' ? 'bg-visa-green-100' : 'bg-visa-blue-100'
                      }`}>
                        <step.icon className={`w-8 h-8 ${selectedDocumentType === 'eta' ? 'text-visa-green-600' : 'text-visa-blue-600'}`} />
                      </div>
                      <div className="font-semibold mb-2">{step.title}</div>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="purposes" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Účely cesty s {currentData.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Vhodné pro:</h4>
                    <ul className="space-y-2">
                      {currentData.purposes.map((purpose, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 ${selectedDocumentType === 'eta' ? 'text-visa-green-600' : 'text-visa-blue-600'}`} />
                          <span className="text-sm text-gray-700">{purpose}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Klíčové vlastnosti:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Platnost: {currentData.validity}</li>
                      <li>• Maximální pobyt: {currentData.maxStay}</li>
                      <li>• Typ vstupu: {currentData.entryType}</li>
                      <li>• Doba vyřízení: {currentData.duration}</li>
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
        <section className={`text-center rounded-2xl p-12 text-white ${
          selectedDocumentType === 'eta' 
            ? 'bg-gradient-to-r from-visa-green-600 to-visa-green-800' 
            : 'bg-gradient-to-r from-visa-blue-600 to-visa-blue-800'
        }`}>
          <h2 className="text-3xl font-bold mb-4">
            Připraveni získat {currentData.name}?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            selectedDocumentType === 'eta' ? 'text-visa-green-100' : 'text-visa-blue-100'
          }`}>
            Začněte hned a získejte svůj dokument rychle a spolehlivě s vysokou úspěšností schválení.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleApply('standard')}
              className="bg-visa-gold-600 hover:bg-visa-gold-700 text-white font-semibold px-8 py-3"
            >
              Žádat o {selectedDocumentType === 'eta' ? 'ETA' : 'vízum'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900"
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
              <Shield className={`w-4 h-4 ${selectedDocumentType === 'eta' ? 'text-visa-green-300' : 'text-visa-blue-300'}`} />
              <span>Vysoká úspěšnost</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className={`w-4 h-4 ${selectedDocumentType === 'eta' ? 'text-visa-green-300' : 'text-visa-blue-300'}`} />
              <span>Rychlé vyřízení</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}