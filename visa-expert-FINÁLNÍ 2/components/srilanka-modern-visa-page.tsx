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
  Leaf
} from 'lucide-react'

interface VisaType {
  id: string
  category: 'eta' | 'tourist' | 'business' | 'student' | 'work' | 'transit'
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
    name: 'ETA',
    shortDescription: 'Elektronická cestovní autorizace do Srí Lanky',
    duration: '24-48 hodin',
    price: 'od 1,500 Kč',
    minPrice: 1500,
    icon: Zap,
    features: ['30 dnů pobyt', 'Dvojnásobný vstup', 'Rychlé vyřízení'],
    purposes: ['Turistika', 'Obchod', 'Tranzit', 'Návštěva přátel'],
    processingTime: '24-48 hodin',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    popular: true
  },
  {
    id: 'tourist',
    category: 'tourist',
    name: 'Turistické vízum',
    shortDescription: 'Standardní turistické vízum pro delší pobyty',
    duration: '5-10 dnů',
    price: 'od 3,200 Kč',
    minPrice: 3200,
    icon: Heart,
    features: ['90 dnů pobyt', 'Vícenásobný vstup', 'Flexibilní účel'],
    purposes: ['Dlouhá turistika', 'Návštěva rodiny', 'Ayurveda', 'Spirituální cesty'],
    processingTime: '5-10 dnů',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    recommended: true
  },
  {
    id: 'business',
    category: 'business',
    name: 'Obchodní vízum',
    shortDescription: 'Vízum pro obchodní aktivity na Srí Lance',
    duration: '7-14 dnů',
    price: 'od 4,500 Kč',
    minPrice: 4500,
    icon: Briefcase,
    features: ['90 dnů pobyt', 'Vícenásobný vstup', 'Obchodní aktivity'],
    purposes: ['Obchodní jednání', 'Investice', 'Výstavy', 'Textilní průmysl'],
    processingTime: '7-14 dnů',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'student',
    category: 'student',
    name: 'Studentské vízum',
    shortDescription: 'Vízum pro studium na Srí Lance',
    duration: '15-30 dnů',
    price: 'od 6,500 Kč',
    minPrice: 6500,
    icon: GraduationCap,
    features: ['Doba studia', 'Akademické aktivity', 'Prodloužitelné'],
    purposes: ['Studium na univerzitě', 'Buddhistické studie', 'Jazykové kurzy'],
    processingTime: '15-30 dnů',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'work',
    category: 'work',
    name: 'Pracovní vízum',
    shortDescription: 'Vízum pro zaměstnání na Srí Lance',
    duration: '20-40 dnů',
    price: 'od 9,500 Kč',
    minPrice: 9500,
    icon: Building,
    features: ['1 rok platnost', 'Pracovní povolení', 'Rodinní příslušníci'],
    purposes: ['IT specialista', 'Turistický průmysl', 'Textil', 'Zemědělství'],
    processingTime: '20-40 dnů',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'transit',
    category: 'transit',
    name: 'Tranzitní vízum',
    shortDescription: 'Vízum pro průjezd přes Srí Lanku',
    duration: '24-72 hodin',
    price: 'od 1,200 Kč',
    minPrice: 1200,
    icon: Plane,
    features: ['48 hodin pobyt', 'Pouze tranzit', 'Rychlé vyřízení'],
    purposes: ['Tranzit letecky', 'Stopover', 'Přestup letů'],
    processingTime: '24-72 hodin',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
]

const categories = [
  { id: 'all', name: 'Všechny', icon: Globe },
  { id: 'eta', name: 'ETA', icon: Zap },
  { id: 'tourist', name: 'Turistické', icon: Heart },
  { id: 'business', name: 'Obchodní', icon: Briefcase },
  { id: 'student', name: 'Studentské', icon: GraduationCap },
  { id: 'work', name: 'Pracovní', icon: Building },
  { id: 'transit', name: 'Tranzitní', icon: Plane }
]

export default function SriLankaModernVisaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  console.log('🇱🇰 Sri Lanka Modern Visa Page rendered, category:', selectedCategory)

  const filteredVisas = visaTypes.filter(visa => {
    const matchesCategory = selectedCategory === 'all' || visa.category === selectedCategory
    const matchesSearch = visa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.purposes.some(purpose => purpose.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleApply = (visaId: string) => {
    console.log('🚀 Applying for Sri Lanka visa:', visaId)
    const visa = visaTypes.find(v => v.id === visaId)
    if (visa) {
      const params = new URLSearchParams({
        country: 'lk',
        type: visa.category,
        visaType: visaId,
        plan: 'standard',
        price: visa.minPrice.toString()
      })
      window.location.href = `/application-form?${params.toString()}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/20 to-blue-50/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-blue-800 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&h=600&fit=crop&crop=center"
            alt="Srí Lanka"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/80 via-blue-800/60 to-orange-700/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-7xl">🇱🇰</span>
              <Badge className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2">
                <Leaf className="w-4 h-4 mr-2" />
                Tear of India
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Objevte <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                Srí Lanku
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto">
              Od čajových plantáží po buddhistické chrámy. Rychlá ETA pro vstup do perle Indického oceánu.
            </p>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">24-48h</div>
                <div className="text-sm text-green-200">ETA vyřízení</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">97%</div>
                <div className="text-sm text-green-200">Úspěšnost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">6</div>
                <div className="text-sm text-green-200">Typů víz</div>
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
              Jaké vízum do Srí Lanky potřebujete?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Od rychlé ETA po dlouhodobé pobyty - objevte slzu Indie
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
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700' 
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
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Nejoblíbenější
                    </Badge>
                  </div>
                )}
                
                {visa.recommended && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg">
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
                        ? 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700'
                        : visa.recommended
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700'
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
              Proč si vybrat naše služby pro Srí Lanku?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">97% úspěšnost</h3>
              <p className="text-gray-600">Specialisté na srílanská ETA a klasická víza</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rychlé ETA</h3>
              <p className="text-gray-600">ETA během 24-48 hodin, další víza podle typu</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kulturní znalosti</h3>
              <p className="text-gray-600">Poradíme s ayurvédou a duchovními cestami</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-green-800 via-blue-800 to-orange-700 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni objevit Srí Lanku?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Začněte svou cestu do země čaje a buddhistických chrámů ještě dnes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '/eta/lk'}
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg"
            >
              ETA Online (1-3 dny)
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => setSelectedCategory('tourist')}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Turistické vízum
              <Heart className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Bezpečné platby</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24-48h vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Srí Lanka specialisté</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}