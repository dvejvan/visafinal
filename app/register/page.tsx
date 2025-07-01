'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Eye, EyeOff, Globe, ArrowRight, Shield, CheckCircle, Clock, Star } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    agreeMarketing: false
  })

  console.log('📝 Register page rendered')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('✅ Registration attempt:', { 
      firstName: formData.firstName, 
      lastName: formData.lastName, 
      email: formData.email 
    })
    // Handle registration logic here
  }

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
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
              Začněte svou cestu
            </h1>
            <p className="text-gray-600">
              Vytvořte si účet a získejte přístup k rychlému vyřizování víz
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                <Star className="w-3 h-3 mr-1" />
                Zdarma
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                <Clock className="w-3 h-3 mr-1" />
                2 minuty
              </Badge>
            </div>
          </div>

          <Card className="shadow-lg border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Registrace</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Jméno</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Jan"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Příjmení</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Novák"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mailová adresa</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vas@email.com"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
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
                      placeholder="Minimálně 8 znaků"
                      value={formData.password}
                      onChange={(e) => updateFormData('password', e.target.value)}
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Potvrdit heslo</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Znovu zadejte heslo"
                      value={formData.confirmPassword}
                      onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                      required
                      className="h-11 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => updateFormData('agreeTerms', !!checked)}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                      Souhlasím s{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        obchodními podmínkami
                      </a>{' '}
                      a{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        zásadami ochrany osobních údajů
                      </a>
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={formData.agreeMarketing}
                      onCheckedChange={(checked) => updateFormData('agreeMarketing', !!checked)}
                    />
                    <Label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed">
                      Chci dostávat novinky a speciální nabídky e-mailem
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 h-12"
                >
                  Vytvořit účet
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
                  Již máte účet?{' '}
                  <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                    Přihlaste se
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-white rounded-lg shadow-sm border">
              <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
              <h3 className="font-semibold text-gray-900 text-xs mb-1">Bezpečné</h3>
              <p className="text-xs text-gray-600">SSL šifrování</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm border">
              <CheckCircle className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <h3 className="font-semibold text-gray-900 text-xs mb-1">Rychlé</h3>
              <p className="text-xs text-gray-600">1-3 dny</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm border">
              <Star className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
              <h3 className="font-semibold text-gray-900 text-xs mb-1">Spolehlivé</h3>
              <p className="text-xs text-gray-600">99% úspěšnost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}