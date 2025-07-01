'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Clock, 
  Shield, 
  CheckCircle, 
  Star, 
  FileText, 
  CreditCard,
  Plane,
  Users,
  TrendingUp,
  ArrowRight,
  Zap,
  Globe,
  Calendar,
  Briefcase,
  GraduationCap,
  Building,
  Heart,
  Search,
  Camera,
  Mountain,
  Compass,
  Snowflake,
  TreePine
} from 'lucide-react'

interface VisaType {
  id: string
  category: 'eta' | 'visitor' | 'business' | 'student' | 'work' | 'immigration'
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
    name: 'eTA (Electronic Travel Authorization)',
    shortDescription: 'Elektronická cestovní autorizace pro bezvízový vstup',
    duration: '72 hodin',
    price: 'od 890 Kč',
    minPrice: 890,
    icon: Zap,
    features: ['6 měsíců pobyt', 'Vícenásobný vstup', '5 let platnost'],
    purposes: ['Turistika', 'Obchod', 'Návštěva rodiny'],
    processingTime: '72 hodin',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    popular: true
  },
  {
    id: 'visitor',
    category: 'visitor',
    name: 'Visitor Visa',
    shortDescription: 'Návštěvnické vízum pro delší pobyty',
    duration: '10-15 dnů',
    price: 'od 4,800 Kč',
    minPrice: 4800,
    icon: Heart,
    features: ['6 měsíců pobyt', 'Vícenásobný vstup', 'Flexibilní účel'],
    purposes: ['Dlouhá turistika', 'Návštěva rodiny', 'Léčení'],
    processingTime: '10-15 dnů',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    recommended: true
  },
  {
    id: 'business',
    category: 'business',
    name: 'Business Visitor',
    shortDescription: 'Obchodní návštěvnické vízum',
    duration: '7-14 dnů',
    price: 'od 5,500 Kč',
    minPrice: 5500,
    icon: Briefcase,
    features: ['6 měsíců pobyt', 'Obchodní aktivity', 'Konference'],
    purposes: ['Obchodní jednání', 'Konference', 'Školení', 'Výstavy'],
    processingTime: '7-14 dnů',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'student',
    category: 'student',
    name: 'Study Permit',
    shortDescription: 'Studentské povolení pro studium v Kanadě',
    duration: '30-60 dnů',
    price: 'od 15,000 Kč',
    minPrice: 15000,
    icon: GraduationCap,
    features: ['Doba studia', 'Práce na kampusu', 'Post-graduation work'],
    purposes: ['Studium na univerzitě', 'Výzkum', 'Jazykové kurzy', 'College'],
    processingTime: '30-60 dnů',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'work',
    category: 'work',
    name: 'Work Permit',
    shortDescription: 'Pracovní povolení pro zaměstnání v Kanadě',
    duration: '60-120 dnů',
    price: 'od 25,000 Kč',
    minPrice: 25000,
    icon: Building,
    features: ['1-2 roky platnost', 'Kvalifikované profese', 'Rodinní příslušníci'],
    purposes: ['IT specialista', 'Inženýr', 'Zdravotnictví', 'Skilled worker'],
    processingTime: '60-120 dnů',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'express-entry',
    category: 'immigration',
    name: 'Express Entry (PR)',
    shortDescription: 'Systém pro získání trvalého pobytu',
    duration: '6-12 měsíců',
    price: 'od 85,000 Kč',
    minPrice: 85000,
    icon: TreePine,
    features: ['Trvalý pobyt', 'Bodový systém', 'Rychlá cesta'],
    purposes: ['Skilled Worker', 'Canadian Experience', 'Provincial Nominee'],
    processingTime: '6-12 měsíců',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }
]

const categories = [
  { id: 'all', name: 'Všechny', icon: Globe },
  { id: 'eta', name: 'eTA', icon: Zap },
  { id: 'visitor', name: 'Návštěvnické', icon: Heart },
  { id: 'business', name: 'Obchodní', icon: Briefcase },
  { id: 'student', name: 'Studentské', icon: GraduationCap },
  { id: 'work', name: 'Pracovní', icon: Building },
  { id: 'immigration', name: 'Imigrace', icon: TreePine }
]

export default function CanadaModernVisaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  console.log('🇨🇦 Canada Modern Visa Page rendered, category:', selectedCategory)

  const filteredVisas = visaTypes.filter(visa => {
    const matchesCategory = selectedCategory === 'all' || visa.category === selectedCategory
    const matchesSearch = visa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.purposes.some(purpose => purpose.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleApply = (visaId: string) => {
    console.log('🚀 Applying for Canada visa:', visaId)
    const visa = visaTypes.find(v => v.id === visaId)
    if (visa) {
      const params = new URLSearchParams({
        country: 'ca',
        type: visa.category,
        visaType: visaId,
        plan: 'standard',
        price: visa.minPrice.toString()
      })
      window.location.href = `/application-form?${params.toString()}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/20 to-white">
      {/* Light Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop&crop=center"
            alt="Kanada"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">🇨🇦</span>
              <Badge className="bg-red-600 hover:bg-red-700 text-white px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Oficiální kanadské vízy
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Víza do Kanady
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Rychlé eTA i dlouhodobé víza. Profesionální služby pro vstup do Kanady včetně imigračního poradenství.
            </p>

            {/* Professional Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur border border-red-200 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-red-600">72 hodin</div>
                <div className="text-sm text-gray-600">eTA schválení</div>
              </div>
              <div className="bg-white/80 backdrop-blur border border-red-200 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-red-600">96%</div>
                <div className="text-sm text-gray-600">Úspěšnost schválení</div>
              </div>
              <div className="bg-white/80 backdrop-blur border border-red-200 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-red-600">6</div>
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
              Jaké vízum do Kanady potřebujete?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Od rychlé eTA po trvalý pobyt - najděte správnou cestu do Kanady
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
                    ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800' 
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
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Nejoblíbenější
                    </Badge>
                  </div>
                )}
                
                {visa.recommended && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg">
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
                        ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                        : visa.recommended
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700'
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
              Proč si vybrat naše služby pro Kanadu?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">96% úspěšnost</h3>
              <p className="text-gray-600">Specialisté na kanadská víza a imigrační procesy</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Imigrační experti</h3>
              <p className="text-gray-600">Pomoc s Express Entry a cestou k trvalému pobytu</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lokální znalosti</h3>
              <p className="text-gray-600">Poradíme s životem a prací v Kanadě</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni na kanadský sen?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Začněte svou cestu do země javorového listu ještě dnes. Od krátkých návštěv po trvalý pobyt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '/eta/ca'}
              className="bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white font-semibold px-8 py-4 text-lg border border-white/20"
            >
              eTA Online (2-5 dnů)
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => setSelectedCategory('immigration')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 text-lg"
            >
              Express Entry PR
              <TreePine className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-red-200">
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
              <span>Imigrační experti</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}