'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Calendar,
  FileText,
  CreditCard,
  MapPin,
  Sun,
  FileUser,
  Timer
} from 'lucide-react'

export default function SriLankaEtaLandingPage() {
  console.log('🇱🇰 Sri Lanka ETA Landing Page rendered')

  const handleApply = () => {
    console.log('🚀 Applying for Sri Lanka ETA')
    window.location.href = '/application-form'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-6xl">🇱🇰</span>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2">
                  <Sun className="w-4 h-4 mr-2" />
                  ETA Online
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Srí Lanka ETA
                <br />
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  jednoduše online
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Elektronická cestovní autorizace pro vstup na Srí Lanku. 
                Rychlé a spolehlivé vyřízení pro turistické i obchodní cesty.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleApply}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-8 py-4 text-lg"
                >
                  Začít žádost o ETA
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">1-3 dny</div>
                  <div className="text-sm text-gray-600">Vyřízení</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">99%</div>
                  <div className="text-sm text-gray-600">Úspěšnost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">30 dnů</div>
                  <div className="text-sm text-gray-600">Pobyt</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/32398180/pexels-photo-32398180.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&crop=center"
                alt="Srí Lanka - Úžasný letecký pohled na pobřeží"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Platnost */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platnost ETA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Informace o platnosti vaší elektronické cestovní autorizace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Doba platnosti</h3>
              <p className="text-gray-600">30 dnů od vydání</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dvojí vstup</h3>
              <p className="text-gray-600">Možnost dvou vstupů na území</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Délka pobytu</h3>
              <p className="text-gray-600">Až 30 dnů na jeden vstup</p>
            </Card>
          </div>
        </section>

        {/* Použití */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Použití ETA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pro které účely můžete Srí Lanka ETA využít
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sun className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Turistické cesty</h3>
                  <p className="text-gray-600">Dovolená, sightseeing, návštěva přátel a rodiny</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Obchodní účely</h3>
                  <p className="text-gray-600">Jednání, konference, krátké obchodní návštěvy</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Požadované dokumenty */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Požadované dokumenty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Co budete potřebovat pro úspěšné vyřízení ETA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileUser className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Platný pas</h3>
              <p className="text-gray-600 text-center">Minimálně 6 měsíců platný od data vstupu</p>
            </Card>

            <Card className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Platební karta</h3>
              <p className="text-gray-600 text-center">Pro uhrazení poplatku za vyřízení</p>
            </Card>

            <Card className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Fotografie pasu</h3>
              <p className="text-gray-600 text-center">Sken nebo kvalitní foto osobní stránky</p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-12 border border-orange-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Začněte svou cestu na Srí Lanku
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Vyřídíme vaši ETA rychle a spolehlivě. Více než 99% našich žádostí je úspěšně schváleno.
          </p>
          
          <Button 
            onClick={handleApply}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-12 py-4 text-lg"
          >
            Začít žádost o ETA
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-600" />
              <span>99% úspěšnost</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>Rychlé vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-600" />
              <span>Spolehlivá služba</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}