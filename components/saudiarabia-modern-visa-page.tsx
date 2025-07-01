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
  Building2
} from 'lucide-react'

interface VisaType {
  id: string
  category: 'evisa' | 'tourist' | 'business' | 'hajj' | 'work' | 'transit'
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
    shortDescription: 'Elektronické turistické vízum do Saudské Arábie',
    duration: '3-7 dnů',
    price: 'od 3,500 Kč',
    minPrice: 3500,
    icon: Heart,
    features: ['90 dnů pobyt', 'Vícenásobný vstup', '1 rok platnost'],
    purposes: ['Turistika', 'Návštěva historických míst', 'Rekreace', 'AlUla'],
    processingTime: '3-7 dnů',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    popular: true
  },
  {
    id: 'evisa-business',
    category: 'evisa',
    name: 'e-Visa Obchodní',
    shortDescription: 'Elektronické obchodní vízum do Saudské Arábie',
    duration: '3-7 dnů',
    price: 'od 4,200 Kč',
    minPrice: 4200,
    icon: Briefcase,
    features: ['90 dnů pobyt', 'Obchodní aktivity', 'Vícenásobný vstup'],
    purposes: ['Obchodní jednání', 'Konference', 'NEOM projekt', 'Investice'],
    processingTime: '3-7 dnů',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    recommended: true
  },
  {
    id: 'hajj',
    category: 'hajj',
    name: 'Hajj/Umrah vízum',
    shortDescription: 'Náboženské vízum pro pouť do Mekky',
    duration: '10-20 dnů',
    price: 'od 6,500 Kč',
    minPrice: 6500,
    icon: Building2,
    features: ['Speciální vízum', 'Náboženské účely', 'Asistence'],
    purposes: ['Hajj', 'Umrah', 'Náboženská pouť', 'Mekka a Medina'],
    processingTime: '10-20 dnů',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    recommended: true
  },
  {
    id: 'business',
    category: 'business',
    name: 'Obchodní vízum',
    shortDescription: 'Klasické obchodní vízum pro podnikání',
    duration: '7-15 dnů',
    price: 'od 5,800 Kč',
    minPrice: 5800,
    icon: Building,
    features: ['180 dnů pobyt', 'Vícenásobný vstup', 'Obchodní aktivity'],
    purposes: ['Dlouhodobé projekty', 'Ropa a plyn', 'Vision 2030', 'Infrastruktura'],
    processingTime: '7-15 dnů',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'work',
    category: 'work',
    name: 'Pracovní vízum',
    shortDescription: 'Vízum pro zaměstnání v Saudské Arábii',
    duration: '15-30 dnů',
    price: 'od 12,000 Kč',
    minPrice: 12000,
    icon: Mountain,
    features: ['1-2 roky platnost', 'Pracovní povolení', 'Vysoké platy'],
    purposes: ['IT specialista', 'Inženýr', 'Zdravotnictví', 'Petrochemie'],
    processingTime: '15-30 dnů',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'transit',
    category: 'transit',
    name: 'Tranzitní vízum',
    shortDescription: 'Vízum pro průjezd přes Saudskou Arábii',
    duration: '24-72 hodin',
    price: 'od 2,500 Kč',
    minPrice: 2500,
    icon: Plane,
    features: ['96 hodin pobyt', 'Stopover program', 'Saudia Airlines'],
    purposes: ['Tranzit letecky', 'Stopover Riyadh', 'Přestup letů'],
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
  { id: 'hajj', name: 'Hajj/Umrah', icon: Building2 },
  { id: 'work', name: 'Pracovní', icon: Building },
  { id: 'transit', name: 'Tranzitní', icon: Plane }
]

export default function SaudiArabiaModernVisaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  console.log('🇸🇦 Saudi Arabia Modern Visa Page rendered, category:', selectedCategory)

  const filteredVisas = visaTypes.filter(visa => {
    const matchesCategory = selectedCategory === 'all' || visa.category === selectedCategory
    const matchesSearch = visa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.purposes.some(purpose => purpose.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleApply = (visaId: string) => {
    console.log('🚀 Applying for Saudi Arabia visa:', visaId)
    const visa = visaTypes.find(v => v.id === visaId)
    if (visa) {
      const params = new URLSearchParams({
        country: 'sa',
        type: visa.category,
        visaType: visaId,
        plan: 'standard',
        price: visa.minPrice.toString()
      })
      window.location.href = `/application-form?${params.toString()}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/20 to-purple-50/20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🇸🇦</span>
                  </div>
                  <Badge className="bg-green-100 text-green-700 px-3 py-1">
                    <Building2 className="w-4 h-4 mr-1" />
                    Vision 2030
                  </Badge>
                </div>
                
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Víza do Saudské Arábie
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Od Rijádu po AlUlu. Rychlé e-Visa pro vstup do země budoucnosti a tradice s Vision 2030.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-green-600">3-7 dnů</div>
                    <div className="text-sm text-gray-600">e-Visa vyřízení</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-600">Úspěšnost</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-green-600">6</div>
                    <div className="text-sm text-gray-600">Typů víz</div>
                  </div>
                </div>

                <div>
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
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
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop&crop=center"
                alt="Saudská Arábie"
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
              Jaké vízum do Saudské Arábie potřebujete?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Od rychlé e-Visa po náboženská víza - vstupte do srdce Arabského poloostrova
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
                    ? 'bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700' 
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
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Nejoblíbenější
                    </Badge>
                  </div>
                )}
                
                {visa.recommended && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg">
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
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                        : visa.recommended
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
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
              Proč si vybrat naše služby pro Saudskou Arábii?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">95% úspěšnost</h3>
              <p className="text-gray-600">Specialisté na saudská e-Visa a náboženská víza</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Náboženské víza</h3>
              <p className="text-gray-600">Specialisté na Hajj a Umrah víza s plnou asistencí</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vision 2030</h3>
              <p className="text-gray-600">Znalost nových projektů a obchodních příležitostí</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-green-800 via-purple-800 to-green-900 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni objevit Saudskou Arábii?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Začněte svou cestu do země budoucnosti a tradic ještě dnes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setSelectedCategory('evisa')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Rychlá e-Visa
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => setSelectedCategory('hajj')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Hajj/Umrah vízum
              <Building2 className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Bezpečné platby</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>3-7 dnů vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Saudská Arábie specialisté</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}