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
  Compass
} from 'lucide-react'

interface VisaType {
  id: string
  category: 'tourist' | 'business' | 'medical' | 'conference' | 'student' | 'work'
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
    id: 'e-tourist',
    category: 'tourist',
    name: 'e-Tourist Visa',
    shortDescription: 'Elektronické turistické vízum pro návštěvu Indie',
    duration: '3-5 dnů',
    price: 'od 2,500 Kč',
    minPrice: 2500,
    icon: Heart,
    features: ['30/60 dnů pobyt', 'Dvojnásobný vstup', 'Online žádost'],
    purposes: ['Turistika', 'Rekreace', 'Návštěva přátel', 'Jóga kurzy'],
    processingTime: '3-5 dnů',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    popular: true
  },
  {
    id: 'e-business',
    category: 'business',
    name: 'e-Business Visa',
    shortDescription: 'Obchodní elektronické vízum',
    duration: '3-5 dnů',
    price: 'od 2,800 Kč',
    minPrice: 2800,
    icon: Briefcase,
    features: ['1 rok platnost', 'Vícenásobný vstup', 'Obchodní aktivity'],
    purposes: ['Obchodní jednání', 'Výstavy', 'Konference', 'Technické konzultace'],
    processingTime: '3-5 dnů',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    recommended: true
  },
  {
    id: 'e-medical',
    category: 'medical',
    name: 'e-Medical Visa',
    shortDescription: 'Lékařské vízum pro zdravotní péči',
    duration: '3-5 dnů',
    price: 'od 2,800 Kč',
    minPrice: 2800,
    icon: Heart,
    features: ['60 dnů pobyt', 'Trojnásobný vstup', 'Doprovod osoby'],
    purposes: ['Lékařské ošetření', 'Ayurveda', 'Jóga terapie', 'Wellness'],
    processingTime: '3-5 dnů',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'e-conference',
    category: 'conference',
    name: 'e-Conference Visa',
    shortDescription: 'Vízum pro konference a semináře',
    duration: '3-5 dnů',
    price: 'od 2,500 Kč',
    minPrice: 2500,
    icon: Users,
    features: ['30 dnů pobyt', 'Jednorázový vstup', 'Konference účast'],
    purposes: ['Mezinárodní konference', 'Semináře', 'Workshopy', 'Akademické akce'],
    processingTime: '3-5 dnů',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'student',
    category: 'student',
    name: 'Student Visa',
    shortDescription: 'Studentské vízum pro studium v Indii',
    duration: '15-30 dnů',
    price: 'od 8,500 Kč',
    minPrice: 8500,
    icon: GraduationCap,
    features: ['Doba studia', 'Pracovní povolení', 'Prodloužitelné'],
    purposes: ['Studium na univerzitě', 'Výzkum', 'Jazykové kurzy', 'Spirituální studium'],
    processingTime: '15-30 dnů',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 'employment',
    category: 'work',
    name: 'Employment Visa',
    shortDescription: 'Pracovní vízum pro zaměstnání v Indii',
    duration: '30-45 dnů',
    price: 'od 15,000 Kč',
    minPrice: 15000,
    icon: Building,
    features: ['1-5 let platnost', 'Vícenásobný vstup', 'Rodinní příslušníci'],
    purposes: ['IT specialista', 'Inženýr', 'Manager', 'Konzultant'],
    processingTime: '30-45 dnů',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
]

const categories = [
  { id: 'all', name: 'Všechny', icon: Globe },
  { id: 'tourist', name: 'Turistické', icon: Heart },
  { id: 'business', name: 'Obchodní', icon: Briefcase },
  { id: 'medical', name: 'Lékařské', icon: Calendar },
  { id: 'conference', name: 'Konference', icon: Users },
  { id: 'student', name: 'Studentské', icon: GraduationCap },
  { id: 'work', name: 'Pracovní', icon: Building }
]

export default function IndiaModernVisaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  console.log('🇮🇳 India Modern Visa Page rendered, category:', selectedCategory)

  const filteredVisas = visaTypes.filter(visa => {
    const matchesCategory = selectedCategory === 'all' || visa.category === selectedCategory
    const matchesSearch = visa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.purposes.some(purpose => purpose.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleApply = (visaId: string) => {
    console.log('🚀 Applying for India visa:', visaId)
    const visa = visaTypes.find(v => v.id === visaId)
    if (visa) {
      const params = new URLSearchParams({
        country: 'in',
        type: visa.category,
        visaType: visaId,
        plan: 'standard',
        price: visa.minPrice.toString()
      })
      window.location.href = `/application-form?${params.toString()}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/20 to-yellow-50/20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🇮🇳</span>
                  </div>
                  <Badge className="bg-orange-100 text-orange-700 px-3 py-1">
                    <Compass className="w-4 h-4 mr-1" />
                    Mystická destinace
                  </Badge>
                </div>
                
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Víza do Indie
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Od Tádž Mahalu po Himálaje. Rychlé elektronické víza pro všechny účely vaší cesty do mystické Indie.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-orange-600">3-5 dnů</div>
                    <div className="text-sm text-gray-600">e-Visa vyřízení</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-orange-600">97%</div>
                    <div className="text-sm text-gray-600">Úspěšnost</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-orange-600">6</div>
                    <div className="text-sm text-gray-600">Typů víz</div>
                  </div>
                </div>

                <div>
                  <Button 
                    size="lg" 
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                    onClick={() => setSelectedCategory('tourist')}
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
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=600&fit=crop&crop=center"
                alt="Indie"
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
              Jaké vízum do Indie potřebujete?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rychlé elektronické víza pro všechny účely - od turistiky po obchod
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
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700' 
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
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Nejoblíbenější
                    </Badge>
                  </div>
                )}
                
                {visa.recommended && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
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
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
                        : visa.recommended
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
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
              Proč si vybrat naše služby pro Indii?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">97% úspěšnost</h3>
              <p className="text-gray-600">Specialisté na indická e-Visa s dlouholetými zkušenostmi</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rychlé vyřízení</h3>
              <p className="text-gray-600">e-Visa během 3-5 dnů s možností urgentního zpracování</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lokální znalosti</h3>
              <p className="text-gray-600">Poradíme s cestovním plánem a místními zvyklostmi</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-orange-900 via-red-800 to-pink-900 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni objevit Indii?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Začněte svou duchovní a kulturní cestu ještě dnes. Rychlé e-Visa pro všechny účely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setSelectedCategory('tourist')}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Turistické e-Visa
              <Heart className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => setSelectedCategory('business')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Obchodní e-Visa
              <Briefcase className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-orange-200">
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
              <span>e-Visa specialisté</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}