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
  Waves,
  Utensils
} from 'lucide-react'

interface VisaType {
  id: string
  category: 'keta' | 'tourist' | 'business' | 'student' | 'work' | 'family'
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
    id: 'keta',
    category: 'keta',
    name: 'K-ETA',
    shortDescription: 'Elektronická cestovní autorizace pro bezvízový vstup',
    duration: '1-3 dny',
    price: 'od 750 Kč',
    minPrice: 750,
    icon: Zap,
    features: ['90 dnů pobyt', 'Vícenásobný vstup', '2 roky platnost'],
    purposes: ['Turistika', 'Obchod', 'Návštěva přátel', 'Tranzit'],
    processingTime: '1-3 dny',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    popular: true
  },
  {
    id: 'tourist',
    category: 'tourist',
    name: 'Tourist Visa',
    shortDescription: 'Turistické vízum pro delší pobyty',
    duration: '5-10 dnů',
    price: 'od 3,200 Kč',
    minPrice: 3200,
    icon: Heart,
    features: ['90 dnů pobyt', 'Vícenásobný vstup', 'Flexibilní účel'],
    purposes: ['Dlouhá turistika', 'Návštěva rodiny', 'Kulturní zájezdy'],
    processingTime: '5-10 dnů',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    recommended: true
  },
  {
    id: 'business',
    category: 'business',
    name: 'Business Visa',
    shortDescription: 'Obchodní vízum pro podnikatelské aktivity',
    duration: '7-14 dnů',
    price: 'od 4,500 Kč',
    minPrice: 4500,
    icon: Briefcase,
    features: ['90 dnů pobyt', 'Obchodní aktivity', 'Konference'],
    purposes: ['Obchodní jednání', 'Konference', 'Výstavy', 'Školení'],
    processingTime: '7-14 dnů',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'student',
    category: 'student',
    name: 'Student Visa',
    shortDescription: 'Studentské vízum pro studium v Jižní Koreji',
    duration: '15-30 dnů',
    price: 'od 8,500 Kč',
    minPrice: 8500,
    icon: GraduationCap,
    features: ['Doba studia', 'Práce na částečný úvazek', 'Prodloužitelné'],
    purposes: ['Studium jazyka', 'Univerzita', 'Výzkum', 'Výměnný program'],
    processingTime: '15-30 dnů',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'work',
    category: 'work',
    name: 'Work Visa',
    shortDescription: 'Pracovní vízum pro zaměstnání v Jižní Koreji',
    duration: '20-45 dnů',
    price: 'od 12,000 Kč',
    minPrice: 12000,
    icon: Building,
    features: ['1-2 roky platnost', 'Kvalifikované profese', 'Rodinní příslušníci'],
    purposes: ['IT specialista', 'Učitel angličtiny', 'Inženýr', 'Výzkumník'],
    processingTime: '20-45 dnů',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'family',
    category: 'family',
    name: 'Family Visa',
    shortDescription: 'Rodinné vízum pro návštěvu příbuzných',
    duration: '10-20 dnů',
    price: 'od 5,500 Kč',
    minPrice: 5500,
    icon: Users,
    features: ['90 dnů pobyt', 'Rodinní příslušníci', 'Návštěvy'],
    purposes: ['Návštěva rodiny', 'Rodinné události', 'Péče o příbuzné'],
    processingTime: '10-20 dnů',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
]

const categories = [
  { id: 'all', name: 'Všechny', icon: Globe },
  { id: 'keta', name: 'K-ETA', icon: Zap },
  { id: 'tourist', name: 'Turistické', icon: Heart },
  { id: 'business', name: 'Obchodní', icon: Briefcase },
  { id: 'student', name: 'Studentské', icon: GraduationCap },
  { id: 'work', name: 'Pracovní', icon: Building },
  { id: 'family', name: 'Rodinné', icon: Users }
]

export default function SouthKoreaModernVisaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  console.log('🇰🇷 South Korea Modern Visa Page rendered, category:', selectedCategory)

  const filteredVisas = visaTypes.filter(visa => {
    const matchesCategory = selectedCategory === 'all' || visa.category === selectedCategory
    const matchesSearch = visa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.purposes.some(purpose => purpose.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleApply = (visaId: string) => {
    console.log('🚀 Applying for South Korea visa:', visaId)
    const visa = visaTypes.find(v => v.id === visaId)
    if (visa) {
      const params = new URLSearchParams({
        country: 'kr',
        type: visa.category,
        visaType: visaId,
        plan: 'standard',
        price: visa.minPrice.toString()
      })
      window.location.href = `/application-form?${params.toString()}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/20 to-blue-50/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-800 via-blue-900 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549063364-7d7e74a1d7b8?w=1200&h=600&fit=crop&crop=center"
            alt="Jižní Korea"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-800/80 via-blue-900/60 to-red-900/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-7xl">🇰🇷</span>
              <Badge className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-4 py-2">
                <Utensils className="w-4 h-4 mr-2" />
                K-Culture Hub
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Objevte <br />
              <span className="bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
                Jižní Koreu
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed max-w-3xl mx-auto">
              Od Soulu po Jeju Island. Rychlá K-ETA pro vstup do země K-pop a pokročilých technologií.
            </p>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1-3 dny</div>
                <div className="text-sm text-red-200">K-ETA vyřízení</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-sm text-red-200">Úspěšnost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-sm text-red-200">Typů víz</div>
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
              Jaké vízum do Jižní Koreje potřebujete?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Od rychlé K-ETA po studentská a pracovní víza - vstupte do země budoucnosti
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
                    ? 'bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700' 
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
                    <Badge className="bg-gradient-to-r from-red-500 to-blue-600 text-white shadow-lg">
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
                        ? 'bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700'
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
              Proč si vybrat naše služby pro Jižní Koreu?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">99% úspěšnost</h3>
              <p className="text-gray-600">Specialisté na korejská víza a K-ETA systém</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">K-Culture experti</h3>
              <p className="text-gray-600">Znalost korejské kultury a požadavků na víza</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rychlé vyřízení</h3>
              <p className="text-gray-600">K-ETA během 1-3 dnů, další víza podle typu</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-800 via-blue-900 to-red-900 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni na korejské dobrodružství?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Začněte svou cestu do země K-pop a pokročilých technologií ještě dnes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '/k-eta/kr'}
              className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg"
            >
              K-ETA Online (2-4 dny)
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => setSelectedCategory('student')}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Studentské vízum
              <GraduationCap className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-red-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Bezpečné platby</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>1-3 dny vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Korea specialisté</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}