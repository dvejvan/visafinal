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
  Pyramid
} from 'lucide-react'

interface VisaType {
  id: string
  category: 'evisa' | 'tourist' | 'business' | 'student' | 'work' | 'transit'
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
    id: 'evisa-tourist',
    category: 'evisa',
    name: 'e-Visa Turistické',
    shortDescription: 'Elektronické turistické vízum do Egypta',
    duration: '3-5 dnů',
    price: 'od 2,200 Kč',
    minPrice: 2200,
    icon: Pyramid,
    features: ['30 dnů pobyt', 'Jednorázový vstup', 'Rychlé vyřízení'],
    purposes: ['Turistika', 'Návštěva pyramid', 'Rekreace', 'Poznávací zájezdy'],
    processingTime: '3-5 dnů',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    popular: true
  },
  {
    id: 'evisa-business',
    category: 'evisa',
    name: 'e-Visa Obchodní',
    shortDescription: 'Elektronické obchodní vízum do Egypta',
    duration: '3-5 dnů',
    price: 'od 2,500 Kč',
    minPrice: 2500,
    icon: Briefcase,
    features: ['30 dnů pobyt', 'Obchodní aktivity', 'Rychlé vyřízení'],
    purposes: ['Obchodní jednání', 'Konference', 'Výstavy', 'Investice'],
    processingTime: '3-5 dnů',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    recommended: true
  },
  {
    id: 'tourist',
    category: 'tourist',
    name: 'Turistické vízum',
    shortDescription: 'Standardní turistické vízum pro delší pobyty',
    duration: '7-14 dnů',
    price: 'od 3,800 Kč',
    minPrice: 3800,
    icon: Heart,
    features: ['90 dnů pobyt', 'Vícenásobný vstup', 'Flexibilní účel'],
    purposes: ['Dlouhá turistika', 'Výuka', 'Duchovní cesty', 'Archeologické zájezdy'],
    processingTime: '7-14 dnů',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'business',
    category: 'business',
    name: 'Obchodní vízum',
    shortDescription: 'Klasické obchodní vízum pro podnikání',
    duration: '10-15 dnů',
    price: 'od 4,800 Kč',
    minPrice: 4800,
    icon: Building,
    features: ['90 dnů pobyt', 'Vícenásobný vstup', 'Obchodní aktivity'],
    purposes: ['Dlouhodobé projekty', 'Textilní průmysl', 'Petrochemie', 'Zemědělství'],
    processingTime: '10-15 dnů',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'student',
    category: 'student',
    name: 'Studentské vízum',
    shortDescription: 'Vízum pro studium v Egyptě',
    duration: '15-30 dnů',
    price: 'od 6,500 Kč',
    minPrice: 6500,
    icon: GraduationCap,
    features: ['Doba studia', 'Akademické aktivity', 'Prodloužitelné'],
    purposes: ['Studium na univerzitě', 'Arabština', 'Egyptologie', 'Výměnný program'],
    processingTime: '15-30 dnů',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'transit',
    category: 'transit',
    name: 'Tranzitní vízum',
    shortDescription: 'Vízum pro průjezd přes Egypt',
    duration: '24-72 hodin',
    price: 'od 1,800 Kč',
    minPrice: 1800,
    icon: Plane,
    features: ['48 hodin pobyt', 'Pouze tranzit', 'Rychlé vyřízení'],
    purposes: ['Tranzit letecky', 'Stopover', 'Přestup letů'],
    processingTime: '24-72 hodin',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  }
]

const categories = [
  { id: 'all', name: 'Všechny', icon: Globe },
  { id: 'evisa', name: 'e-Visa', icon: Zap },
  { id: 'tourist', name: 'Turistické', icon: Heart },
  { id: 'business', name: 'Obchodní', icon: Briefcase },
  { id: 'student', name: 'Studentské', icon: GraduationCap },
  { id: 'work', name: 'Pracovní', icon: Building },
  { id: 'transit', name: 'Tranzitní', icon: Plane }
]

export default function EgyptModernVisaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  console.log('🇪🇬 Egypt Modern Visa Page rendered, category:', selectedCategory)

  const filteredVisas = visaTypes.filter(visa => {
    const matchesCategory = selectedCategory === 'all' || visa.category === selectedCategory
    const matchesSearch = visa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.purposes.some(purpose => purpose.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleApply = (visaId: string) => {
    console.log('🚀 Applying for Egypt visa:', visaId)
    const visa = visaTypes.find(v => v.id === visaId)
    if (visa) {
      const params = new URLSearchParams({
        country: 'eg',
        type: visa.category,
        visaType: visaId,
        plan: 'standard',
        price: visa.minPrice.toString()
      })
      window.location.href = `/application-form?${params.toString()}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/20 to-orange-50/20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🇪🇬</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1">
                    <Mountain className="w-4 h-4 mr-1" />
                    Země faraonů
                  </Badge>
                </div>
                
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Víza do Egypta
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Od pyramid v Gíze po Nil. Rychlé e-Visa pro vstup do kolébky civilizace a země faraonů.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-yellow-600">3-5 dnů</div>
                    <div className="text-sm text-gray-600">e-Visa vyřízení</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-yellow-600">96%</div>
                    <div className="text-sm text-gray-600">Úspěšnost</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-yellow-600">6</div>
                    <div className="text-sm text-gray-600">Typů víz</div>
                  </div>
                </div>

                <div>
                  <Button 
                    size="lg" 
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3"
                    onClick={() => setSelectedCategory('evisa')}
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
                src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=600&fit=crop&crop=center"
                alt="Egypt"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jaké vízum do Egypta potřebujete?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Od rychlé e-Visa po dlouhodobé pobyty - prozkoumejte kolébku civilizace
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
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700' 
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
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg">
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
                        ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700'
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
              Proč si vybrat naše služby pro Egypt?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">96% úspěšnost</h3>
              <p className="text-gray-600">Specialisté na egyptská e-Visa a klasická víza</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pyramid className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Historické znalosti</h3>
              <p className="text-gray-600">Poradíme s návštěvou pyramid a archeologických míst</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rychlé vyřízení</h3>
              <p className="text-gray-600">e-Visa během 3-5 dnů, další víza podle typu</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-yellow-800 via-orange-700 to-red-800 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni objevit Egypt?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Začněte svou cestu do země faraonů a pyramid ještě dnes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setSelectedCategory('evisa')}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Rychlá e-Visa
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => setSelectedCategory('tourist')}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Turistické vízum
              <Heart className="w-5 h-5 ml-2" />
            </Button>

            <Button 
              variant="outline"
              onClick={() => window.location.href = '/evisa'}
              className="border-2 border-white text-white hover:bg-white hover:text-yellow-900 font-semibold px-8 py-4 text-lg"
            >
              Více o e-Visa
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-yellow-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Bezpečné platby</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>3-5 dnů vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Egypt specialisté</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}