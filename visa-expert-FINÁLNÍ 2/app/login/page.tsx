'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff, Globe, ArrowRight, Shield, CheckCircle } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  console.log('🔐 Login page rendered')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🔑 Login attempt:', { email, rememberMe })
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Visapo.com</h1>
              <p className="text-xs text-gray-600">Cestování bez hranic</p>
            </div>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Vítejte zpět
            </h1>
            <p className="text-gray-600">
              Přihlaste se do svého účtu
            </p>
          </div>

          <Card className="shadow-lg border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Přihlášení</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mailová adresa</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vas@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Heslo</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Vaše heslo"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-11 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(!!checked)}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Zapamatovat si mě
                    </Label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Zapomenuté heslo?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 h-12"
                >
                  Přihlásit se
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Nebo</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Nemáte účet?{' '}
                  <a href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                    Zaregistrujte se
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Bezpečné</h3>
              <p className="text-xs text-gray-600">SSL šifrování</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Ověřené</h3>
              <p className="text-xs text-gray-600">99% úspěšnost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}