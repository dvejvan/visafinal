import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  console.log('404 page rendered')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-visa-blue-50 via-white to-visa-blue-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            {/* 404 Illustration */}
            <div className="relative">
              <div className="text-8xl font-bold text-visa-blue-100 mb-2">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-12 h-12 text-visa-blue-400" />
              </div>
            </div>

            {/* Title and Description */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Stránka nenalezena
              </h1>
              <p className="text-gray-600">
                Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full visa-gradient hover:shadow-lg transition-all duration-200">
                  <Home className="w-4 h-4 mr-2" />
                  Zpět na hlavní stránku
                </Button>
              </Link>
              
              <Link href="javascript:history.back()">
                <Button variant="outline" className="w-full border-visa-blue-200 text-visa-blue-600 hover:bg-visa-blue-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zpět
                </Button>
              </Link>
            </div>

            {/* Additional Help */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">
                Možná vás zaujmou tyto odkazy:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/visa/us">
                  <Button variant="ghost" size="sm" className="text-xs">
                    🇺🇸 USA vízum
                  </Button>
                </Link>
                <Link href="/visa/schengen">
                  <Button variant="ghost" size="sm" className="text-xs">
                    🇪🇺 Schengen
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="ghost" size="sm" className="text-xs">
                    ❓ Jak to funguje
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}