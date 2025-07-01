'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
  Briefcase,
  GraduationCap,
  Building,
  Rocket,
  Heart,
  Search,
  Filter
} from 'lucide-react'

interface VisaType {
  id: string
  category: 'eta' | 'visitor' | 'business' | 'student' | 'work' | 'startup'
  name: string
  shortDescription: string
  duration: string
  price: string
  minPrice: number
  icon: React.ComponentType<any>
  features: string[]
  purposes: string[]
  processingTime: string
  color: string
  bgColor: string
  popular?: boolean
  recommended?: boolean
}

const visaTypes: VisaType[] = [
  {
    id: 'eta',
    category: 'eta',
    name: 'UK ETA',
    shortDescription: 'Elektronická cestovní autorizace pro krátké pobyty',
    duration: '2-3 dny',
    price: 'od 1,200 Kč',
    minPrice: 1200,
    icon: Zap,
    features: ['Bezvízový vstup', 'Digitální proces', 'Rychlé vyřízení'],
    purposes: ['Turistika', 'Obchod', 'Návštěva rodiny'],
    processingTime: '2-3 dny',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    popular: true
  },
  {
    id: 'visitor-standard',
    category: 'visitor',
    name: 'Standard Visitor Visa',
    shortDescription: 'Návštěvnické vízum pro turistiku a obchod',
    duration: '5-10 dnů',
    price: 'od 3,200 Kč',
    minPrice: 3200,
    icon: Heart,
    features: ['6 měsíců pobyt', 'Vícenásobný vstup', 'Turistika & obchod'],
    purposes: ['Turistika', 'Obchod', 'Návštěva přátel', 'Léčení'],
    processingTime: '5-10 dnů',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 'visitor-long',
    category: 'visitor',
    name: 'Long-term Visitor Visa',
    shortDescription: 'Dlouhodobé návštěvnické vízum',
    duration: '10-15 dnů',
    price: 'od 8,500 Kč',
    minPrice: 8500,
    icon: Calendar,
    features: ['2-10 let platnost', 'Opakované návštěvy', 'Flexibilita'],
    purposes: ['Časté obchodní cesty', 'Rodina v UK', 'Dlouhodobé projekty'],
    processingTime: '10-15 dnů',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'business',
    category: 'business',
    name: 'Business Visa',
    shortDescription: 'Obchodní vízum pro podnikatelské aktivity',
    duration: '7-14 dnů',
    price: 'od 4,800 Kč',
    minPrice: 4800,
    icon: Briefcase,
    features: ['Obchodní jednání', 'Konference', 'Investice'],
    purposes: ['Obchodní jednání', 'Konference', 'Školení', 'Investice'],
    processingTime: '7-14 dnů',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    recommended: true
  },
  {
    id: 'student',
    category: 'student',
    name: 'Student Visa',
    shortDescription: 'Studentské vízum pro studium ve Velké Británii',
    duration: '15-30 dnů',
    price: 'od 12,800 Kč',
    minPrice: 12800,
    icon: GraduationCap,
    features: ['Studium na univerzitě', 'Práce na částečný úvazek', 'Rodinní příslušníci'],
    purposes: ['Studium na univerzitě', 'Jazykové kurzy', 'Výzkum'],
    processingTime: '15-30 dnů',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'work',
    category: 'work',
    name: 'Work Visa',
    shortDescription: 'Pracovní vízum pro zaměstnání v UK',
    duration: '30-60 dnů',
    price: 'od 18,500 Kč',
    minPrice: 18500,
    icon: Building,
    features: ['Stálé zaměstnání', 'Kvalifikovaná práce', 'Rodinní příslušníci'],
    purposes: ['Skilled Worker', 'Health and Care Worker', 'Specialist profese'],
    processingTime: '30-60 dnů',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'startup',
    category: 'startup',
    name: 'Start-up & Innovator Visa',
    shortDescription: 'Vízum pro podnikatele a inovátory',
    duration: '60-90 dnů',
    price: 'od 35,000 Kč',
    minPrice: 35000,
    icon: Rocket,
    features: ['Založení firmy', 'Inovativní projekty', 'Dlouhodobý pobyt'],
    purposes: ['Start-up firmy', 'Inovativní podnikání', 'Investice'],
    processingTime: '60-90 dnů',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
]

const categories = [
  { id: 'all', name: 'Všechny', icon: Globe },
  { id: 'eta', name: 'ETA', icon: Zap },
  { id: 'visitor', name: 'Návštěvnické', icon: Heart },
  { id: 'business', name: 'Obchodní', icon: Briefcase },
  { id: 'student', name: 'Studentské', icon: GraduationCap },
  { id: 'work', name: 'Pracovní', icon: Building },
  { id: 'startup', name: 'Start-up', icon: Rocket }
]

export default function UkModernVisaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  console.log('🇬🇧 UK Modern Visa Page rendered, category:', selectedCategory)

  const filteredVisas = visaTypes.filter(visa => {
    const matchesCategory = selectedCategory === 'all' || visa.category === selectedCategory
    const matchesSearch = visa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.purposes.some(purpose => purpose.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleApply = (visaId: string) => {
    console.log('🚀 Applying for visa:', visaId)
    const visa = visaTypes.find(v => v.id === visaId)
    if (visa) {
      const params = new URLSearchParams({
        country: 'gb',
        type: visa.category,
        visaType: visaId,
        plan: 'standard',
        price: visa.minPrice.toString()
      })
      window.location.href = `/application-form?${params.toString()}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20">
      {/* Light Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop&crop=center"
            alt="Velká Británie"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">🇬🇧</span>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Oficiální vízové služby
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Víza do Velké Británie
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Oficiální proces pro víza do UK. Rychlé a bezpečné vyřízení všech typů víz s plnou podporou expertů.
            </p>

            {/* Professional Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur border border-blue-200 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">2-3 dny</div>
                <div className="text-sm text-gray-600">Nejrychlejší vyřízení ETA</div>
              </div>
              <div className="bg-white/80 backdrop-blur border border-blue-200 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Úspěšnost schválení</div>
              </div>
              <div className="bg-white/80 backdrop-blur border border-blue-200 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">7</div>
                <div className="text-sm text-gray-600">Dostupných typů víz</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jaké vízum potřebujete?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Najděte ideální typ víza podle účelu vaší cesty a požadavků
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Hledat podle typu nebo účelu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Visa Types Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredVisas.map((visa) => {
            const IconComponent = visa.icon
            return (
              <Card 
                key={visa.id} 
                className="group relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                {visa.popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Nejoblíbenější
                    </Badge>
                  </div>
                )}
                
                {visa.recommended && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Doporučujeme
                    </Badge>
                  </div>
                )}

                <div className={`h-2 ${visa.bgColor.replace('bg-', 'bg-gradient-to-r from-').replace('-50', '-400 to-').replace('50', '600')}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${visa.bgColor} mb-4`}>
                      <IconComponent className={`w-6 h-6 ${visa.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{visa.price}</div>
                      <div className="text-sm text-gray-500">{visa.processingTime}</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{visa.name}</CardTitle>
                  <p className="text-gray-600">{visa.shortDescription}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-gray-700">Klíčové výhody:</h4>
                    <ul className="space-y-1">
                      {visa.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`w-3 h-3 ${visa.color}`} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-gray-700">Vhodné pro:</h4>
                    <div className="flex flex-wrap gap-1">
                      {visa.purposes.slice(0, 2).map((purpose, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {purpose}
                        </Badge>
                      ))}
                      {visa.purposes.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{visa.purposes.length - 2} dalších
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleApply(visa.id)}
                    className={`w-full mt-4 group-hover:scale-105 transition-transform ${
                      visa.popular 
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                        : visa.recommended
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                        : ''
                    }`}
                  >
                    Začít žádost
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredVisas.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Nenašli jsme žádné výsledky
            </h3>
            <p className="text-gray-500">
              Zkuste změnit kategorii nebo vyhledávací dotaz
            </p>
          </div>
        )}

        {/* Why Choose Us */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proč si vybrat naše služby?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">98% úspěšnost</h3>
              <p className="text-gray-600">Vysoká míra schválení díky našim expertům a důkladné přípravě</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rychlé vyřízení</h3>
              <p className="text-gray-600">Nejrychlejší možné zpracování s express a urgentními možnostmi</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert podpora</h3>
              <p className="text-gray-600">Osobní konzultant pro každou žádost a 24/7 zákaznická podpora</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni začít?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Vyberte si vízum podle svých potřeb a začněte ještě dnes. Naši experti vám pomohou s celým procesem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '/eta/gb'}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg"
            >
              ETA Online (2-3 dny)
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => setSelectedCategory('business')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Obchodní víza
              <Briefcase className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Bezpečné platby</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Rychlé vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Garance kvality</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}