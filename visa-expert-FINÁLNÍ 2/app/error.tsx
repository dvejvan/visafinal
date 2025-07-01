'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            {/* Error Icon */}
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>

            {/* Title and Description */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Něco se pokazilo
              </h1>
              <p className="text-gray-600">
                Omlouváme se, ale došlo k neočekávané chybě. Zkuste to prosím znovu.
              </p>
            </div>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <div className="text-xs font-mono text-red-600 break-all">
                  {error.message}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                onClick={reset}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Zkusit znovu
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-red-200 text-red-600 hover:bg-red-50"
                onClick={() => window.location.href = '/'}
              >
                <Home className="w-4 h-4 mr-2" />
                Zpět na hlavní stránku
              </Button>
            </div>

            {/* Support Info */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Pokud problém přetrvává, kontaktujte nás na{' '}
                <a href="mailto:support@visa-expert.cz" className="text-red-600 hover:underline">
                  support@visa-expert.cz
                </a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}