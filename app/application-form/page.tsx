'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useLanguage } from '@/hooks/use-language-v2'
import { 
  FileText, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  CreditCard,
  Shield,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  AlertCircle,
  Camera,
  Upload,
  X,
  Image as ImageIcon,
  Banknote
} from 'lucide-react'

interface ApplicationFormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  nationality: string
  countryOfResidence: string
  passportNumber: string
  passportExpiry: string
  
  // Trip Information
  travelPurpose: string
  departureDate: string
  returnDate: string
  previousUKVisits: string
  
  // Additional Information
  notes: string
}

interface UploadedFile {
  file: File
  preview: string
  type: 'passport' | 'photo'
}

interface PaymentFormData {
  cardNumber: string
  expiryDate: string
  cvv: string
  cardholderName: string
  billingAddress: string
  city: string
  postalCode: string
}

function ApplicationFormContent() {
  const searchParams = useSearchParams()
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    countryOfResidence: '',
    passportNumber: '',
    passportExpiry: '',
    travelPurpose: '',
    departureDate: '',
    returnDate: '',
    previousUKVisits: '',
    notes: ''
  })

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [paymentData, setPaymentData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    city: '',
    postalCode: ''
  })

  // Get parameters from URL
  const country = searchParams.get('country') || 'gb'
  const type = searchParams.get('type') || 'eta'
  const plan = searchParams.get('plan') || 'standard'
  const price = searchParams.get('price') || '1200'

  console.log('🎯 Application form loaded:', { country, type, plan, price, currentStep })

  const totalSteps = 3
  const progressPercentage = (currentStep / totalSteps) * 100

  const handleInputChange = (field: keyof ApplicationFormData, value: string) => {
    console.log('📝 Form input changed:', field, value)
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handlePaymentChange = (field: keyof PaymentFormData, value: string) => {
    console.log('💳 Payment input changed:', field, value)
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'passport' | 'photo') => {
    const file = event.target.files?.[0]
    if (file) {
      console.log('📁 File uploaded:', file.name, 'Type:', type)
      
      // Kontrola velikosti souboru (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('Soubor je příliš velký. Maximální velikost je 10MB.')
        return
      }
      
      // Kontrola typu souboru
      if (!file.type.startsWith('image/')) {
        alert('Prosím nahrajte pouze obrázky (JPG, PNG, etc.)')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const newFile: UploadedFile = {
          file,
          preview: e.target?.result as string,
          type
        }
        
        // Odstraň starý soubor stejného typu
        setUploadedFiles(prev => [
          ...prev.filter(f => f.type !== type),
          newFile
        ])
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = async (type: 'passport' | 'photo') => {
    console.log('📷 Camera capture requested for:', type)
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: type === 'photo' ? 'user' : 'environment' } 
      })
      
      // Zde by byla implementace kamery - pro demo použijeme input
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/*'
      input.capture = 'camera'
      input.onchange = (e) => handleFileUpload(e as any, type)
      input.click()
      
      stream.getTracks().forEach(track => track.stop())
    } catch (error) {
      console.error('Camera access denied:', error)
      // Fallback na file input
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/*'
      input.onchange = (e) => handleFileUpload(e as any, type)
      input.click()
    }
  }

  const removeFile = (type: 'passport' | 'photo') => {
    console.log('🗑️ Removing file:', type)
    setUploadedFiles(prev => prev.filter(f => f.type !== type))
  }

  const validateStep = (step: number): boolean => {
    console.log('✅ Validating step:', step)
    
    switch (step) {
      case 1:
        // Osobní údaje
        const requiredPersonalFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'nationality', 'countryOfResidence']
        const missingPersonalFields = requiredPersonalFields.filter(field => !formData[field as keyof ApplicationFormData])
        
        if (missingPersonalFields.length > 0) {
          alert(`Prosím vyplňte všechna povinná pole: ${missingPersonalFields.join(', ')}`)
          return false
        }
        return true
        
      case 2:
        // Dokumenty a cesta
        const requiredDocFields = ['passportNumber', 'passportExpiry', 'travelPurpose']
        const missingDocFields = requiredDocFields.filter(field => !formData[field as keyof ApplicationFormData])
        
        if (missingDocFields.length > 0) {
          alert(`Prosím vyplňte všechna povinná pole: ${missingDocFields.join(', ')}`)
          return false
        }
        
        const passportFile = uploadedFiles.find(f => f.type === 'passport')
        if (!passportFile) {
          alert('Prosím nahrajte fotografii pasu - je povinná pro všechny typy žádostí.')
          return false
        }
        
        if (type === 'visa') {
          const photoFile = uploadedFiles.find(f => f.type === 'photo')
          if (!photoFile) {
            alert('Prosím nahrajte vaši fotografii - je povinná pro víza.')
            return false
          }
        }
        return true
        
      case 3:
        // Platba
        const requiredPaymentFields = ['cardNumber', 'expiryDate', 'cvv', 'cardholderName']
        const missingPaymentFields = requiredPaymentFields.filter(field => !paymentData[field as keyof PaymentFormData])
        
        if (missingPaymentFields.length > 0) {
          alert(`Prosím vyplňte všechna platební údaje: ${missingPaymentFields.join(', ')}`)
          return false
        }
        return true
        
      default:
        return true
    }
  }

  const nextStep = () => {
    console.log('⏭️ Next step requested from:', currentStep)
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    console.log('⏮️ Previous step requested from:', currentStep)
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🎯 Final form submission')
    console.log('📝 Form data:', formData)
    console.log('📁 Uploaded files:', uploadedFiles.map(f => ({ name: f.file.name, type: f.type, size: f.file.size })))
    console.log('💳 Payment data:', paymentData)
    
    if (!validateStep(3)) return
    
    // Simulace platby
    setTimeout(() => {
      alert(`✅ Platba úspěšná!\n\nŽádost o ${type.toUpperCase()} byla odeslána.\nCena: ${parseInt(price).toLocaleString()} Kč\n\nObdržíte potvrzovací email a budete kontaktováni do 24 hodin.`)
      
      // Redirect na thank you page nebo reset formuláře
      setCurrentStep(1)
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '',
        nationality: '', countryOfResidence: '', passportNumber: '', passportExpiry: '',
        travelPurpose: '', departureDate: '', returnDate: '', previousUKVisits: '', notes: ''
      })
      setUploadedFiles([])
      setPaymentData({
        cardNumber: '', expiryDate: '', cvv: '', cardholderName: '',
        billingAddress: '', city: '', postalCode: ''
      })
    }, 2000)
  }

  const documentTypeName = type === 'eta' ? 'ETA' : 'Standard Visitor Visa'
  const countryName = country === 'gb' ? 'Velká Británie' : 'Neznámá země'

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('form.title')} {documentTypeName}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {countryName} • {plan} {t('form.processing')} • {parseInt(price).toLocaleString()} Kč
          </p>
          
          {/* Progress Indicator */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{t('form.step')} {currentStep} {t('form.of')} {totalSteps}</span>
              <span className="text-sm text-gray-500">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            
            <div className="flex justify-between mt-4 text-sm">
              <div className={`text-center ${currentStep >= 1 ? 'text-visa-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-visa-blue-600' : 'bg-gray-200'} flex items-center justify-center mx-auto mb-1`}>
                  {currentStep > 1 ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <span className={`text-xs font-bold ${currentStep >= 1 ? 'text-white' : 'text-gray-500'}`}>1</span>
                  )}
                </div>
                <span>{t('form.personal_data').split(' ')[0]}</span>
              </div>
              <div className={`text-center ${currentStep >= 2 ? 'text-visa-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-visa-blue-600' : 'bg-gray-200'} flex items-center justify-center mx-auto mb-1`}>
                  {currentStep > 2 ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <span className={`text-xs font-bold ${currentStep >= 2 ? 'text-white' : 'text-gray-500'}`}>2</span>
                  )}
                </div>
                <span>{t('form.documents_travel').split(' ')[0]}</span>
              </div>
              <div className={`text-center ${currentStep >= 3 ? 'text-visa-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-visa-blue-600' : 'bg-gray-200'} flex items-center justify-center mx-auto mb-1`}>
                  <span className={`text-xs font-bold ${currentStep >= 3 ? 'text-white' : 'text-gray-500'}`}>3</span>
                </div>
                <span>{t('form.payment_completion').split(' ')[0]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {currentStep === 1 && (
                    <>
                      <User className="w-5 h-5 text-visa-blue-600" />
                      {t('form.personal_data')}
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      <FileText className="w-5 h-5 text-visa-blue-600" />
                      {t('form.documents_travel')}
                    </>
                  )}
                  {currentStep === 3 && (
                    <>
                      <CreditCard className="w-5 h-5 text-visa-blue-600" />
                      {t('form.payment_completion')}
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* STEP 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">{t('form.first_name')} *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder={t('form.first_name')}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">{t('form.last_name')} *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder={t('form.last_name')}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">{t('form.email')} *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder={t('form.email')}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">{t('form.phone')} *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+420 123 456 789"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="dateOfBirth">{t('form.date_of_birth')} *</Label>
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="nationality">{t('form.nationality')} *</Label>
                          <Select onValueChange={(value) => handleInputChange('nationality', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder={t('form.nationality')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cz">Česká republika</SelectItem>
                              <SelectItem value="sk">Slovensko</SelectItem>
                              <SelectItem value="pl">Polsko</SelectItem>
                              <SelectItem value="other">Jiná</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="countryOfResidence">{t('form.country_of_residence')} *</Label>
                        <Select onValueChange={(value) => handleInputChange('countryOfResidence', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('form.country_of_residence')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cz">🇨🇿 Česká republika</SelectItem>
                            <SelectItem value="sk">🇸🇰 Slovensko</SelectItem>
                            <SelectItem value="pl">🇵🇱 Polsko</SelectItem>
                            <SelectItem value="de">🇩🇪 Německo</SelectItem>
                            <SelectItem value="at">🇦🇹 Rakousko</SelectItem>
                            <SelectItem value="fr">🇫🇷 Francie</SelectItem>
                            <SelectItem value="it">🇮🇹 Itálie</SelectItem>
                            <SelectItem value="es">🇪🇸 Španělsko</SelectItem>
                            <SelectItem value="nl">🇳🇱 Nizozemsko</SelectItem>
                            <SelectItem value="be">🇧🇪 Belgie</SelectItem>
                            <SelectItem value="other">🌍 Jiná země</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-gray-600 mt-1">
                          Země vašeho současného pobytu nebo ze které budete cestovat
                        </p>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Documents and Travel */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      {/* Passport Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-visa-blue-600" />
                          Údaje o pasu
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="passportNumber">{t('form.passport_number')} *</Label>
                            <Input
                              id="passportNumber"
                              value={formData.passportNumber}
                              onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                              placeholder="12345678"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="passportExpiry">{t('form.passport_expiry')} *</Label>
                            <Input
                              id="passportExpiry"
                              type="date"
                              value={formData.passportExpiry}
                              onChange={(e) => handleInputChange('passportExpiry', e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Document Upload */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Camera className="w-5 h-5 text-visa-blue-600" />
                          Nahrání dokumentů
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Passport Upload */}
                          <div className="space-y-3">
                            <Label>{t('form.passport_photo')} *</Label>
                            <p className="text-sm text-gray-600 mb-3">
                              Nahrajte čitelnou fotografii hlavní stránky vašeho pasu
                            </p>
                            
                            {uploadedFiles.find(f => f.type === 'passport') ? (
                              <div className="relative">
                                <img 
                                  src={uploadedFiles.find(f => f.type === 'passport')?.preview}
                                  alt="Náhled pasu"
                                  className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="sm"
                                  className="absolute top-2 right-2"
                                  onClick={() => removeFile('passport')}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex gap-2">
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="flex-1"
                                  onClick={() => document.getElementById('passportUpload')?.click()}
                                >
                                  <Upload className="w-4 h-4 mr-2" />
                                  Nahrát soubor
                                </Button>
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => handleCameraCapture('passport')}
                                >
                                  <Camera className="w-4 h-4 mr-2" />
                                  Vyfotit
                                </Button>
                              </div>
                            )}
                            
                            <input
                              id="passportUpload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleFileUpload(e, 'passport')}
                            />
                          </div>

                          {/* Photo Upload */}
                          <div className="space-y-3">
                            <Label>{t('form.personal_photo')} {type === 'visa' ? '*' : ''}</Label>
                            <p className="text-sm text-gray-600 mb-3">
                              {type === 'eta' 
                                ? 'Pouze pro některé národnosti (volitelné)'
                                : 'Aktuální fotografie ve formátu pas (povinné pro víza)'
                              }
                            </p>
                            
                            {uploadedFiles.find(f => f.type === 'photo') ? (
                              <div className="relative">
                                <img 
                                  src={uploadedFiles.find(f => f.type === 'photo')?.preview}
                                  alt="Náhled fotografie"
                                  className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="sm"
                                  className="absolute top-2 right-2"
                                  onClick={() => removeFile('photo')}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex gap-2">
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="flex-1"
                                  onClick={() => document.getElementById('photoUpload')?.click()}
                                >
                                  <Upload className="w-4 h-4 mr-2" />
                                  Nahrát soubor
                                </Button>
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => handleCameraCapture('photo')}
                                >
                                  <Camera className="w-4 h-4 mr-2" />
                                  Vyfotit
                                </Button>
                              </div>
                            )}
                            
                            <input
                              id="photoUpload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleFileUpload(e, 'photo')}
                            />
                          </div>
                        </div>

                        {/* Upload Guidelines */}
                        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-yellow-900 mb-1">Požadavky na fotografie</h4>
                              <ul className="text-sm text-yellow-800 space-y-1">
                                <li>• Formát: JPG, PNG (max. 10MB)</li>
                                <li>• Pas: Čitelné všechny údaje, bez odlesků</li>
                                <li>• Fotografie: Čelní pohled, neutrální výraz, světlé pozadí</li>
                                <li>• Kvalita: Ostré, dobře osvětlené snímky</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Travel Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-visa-blue-600" />
                          Informace o cestě
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="travelPurpose">{t('form.travel_purpose')} *</Label>
                            <Select onValueChange={(value) => handleInputChange('travelPurpose', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder={t('form.travel_purpose')} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="tourism">Turistika</SelectItem>
                                <SelectItem value="business">Obchod</SelectItem>
                                <SelectItem value="family">Návštěva rodiny</SelectItem>
                                <SelectItem value="study">Studium</SelectItem>
                                <SelectItem value="other">Jiný</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="previousUKVisits">Předchozí návštěvy UK</Label>
                            <Select onValueChange={(value) => handleInputChange('previousUKVisits', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Byli jste již v UK?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="no">Ne, první návštěva</SelectItem>
                                <SelectItem value="yes">Ano, byl(a) jsem v UK</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="departureDate">Plánovaný odjezd</Label>
                            <Input
                              id="departureDate"  
                              type="date"
                              value={formData.departureDate}
                              onChange={(e) => handleInputChange('departureDate', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="returnDate">Plánovaný návrat</Label>
                            <Input
                              id="returnDate"
                              type="date"
                              value={formData.returnDate}
                              onChange={(e) => handleInputChange('returnDate', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Additional Notes */}
                      <div>
                        <Label htmlFor="notes">Dodatečné informace</Label>
                        <Textarea
                          id="notes"
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          placeholder="Jakékoli další informace, které považujete za důležité..."
                          rows={4}
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Payment */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      {/* Order Summary */}
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-visa-green-600" />
                          Souhrn objednávky
                        </h3>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>Typ dokumentu:</span>
                            <Badge>{documentTypeName}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Destinace:</span>
                            <span>🇬🇧 {countryName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Rychlost vyřízení:</span>
                            <Badge variant="outline">{plan}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Žadatel:</span>
                            <span>{formData.firstName} {formData.lastName}</span>
                          </div>
                          {uploadedFiles.length > 0 && (
                            <div className="flex justify-between">
                              <span>Dokumenty:</span>
                              <div className="text-right">
                                {uploadedFiles.map((file, index) => (
                                  <div key={index} className="text-sm text-gray-600">
                                    {file.type === 'passport' ? '✓ Pas' : '✓ Fotografie'}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          <Separator />
                          <div className="flex justify-between items-center text-lg font-bold">
                            <span>Celková cena:</span>
                            <span className="text-visa-blue-600">{parseInt(price).toLocaleString()} Kč</span>
                          </div>
                        </div>
                      </div>

                      {/* Payment Form */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Banknote className="w-5 h-5 text-visa-blue-600" />
                          Platební údaje
                        </h3>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Číslo karty *</Label>
                            <Input
                              id="cardNumber"
                              value={paymentData.cardNumber}
                              onChange={(e) => handlePaymentChange('cardNumber', e.target.value)}
                              placeholder="1234 5678 9012 3456"
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiryDate">Platnost *</Label>
                              <Input
                                id="expiryDate"
                                value={paymentData.expiryDate}
                                onChange={(e) => handlePaymentChange('expiryDate', e.target.value)}
                                placeholder="MM/RR"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input
                                id="cvv"
                                value={paymentData.cvv}
                                onChange={(e) => handlePaymentChange('cvv', e.target.value)}
                                placeholder="123"
                                maxLength={3}
                                required
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="cardholderName">Jméno držitele karty *</Label>
                            <Input
                              id="cardholderName"
                              value={paymentData.cardholderName}
                              onChange={(e) => handlePaymentChange('cardholderName', e.target.value)}
                              placeholder="Jméno Příjmení"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Security Notice */}
                      <div className="bg-visa-green-50 border border-visa-green-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-visa-green-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-visa-green-900 mb-1">
                              Zabezpečená platba
                            </h4>
                            <p className="text-sm text-visa-green-800">
                              Vaše platební údaje jsou šifrovány SSL certifikátem. Nepřetržitě monitorujeme bezpečnost.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    <Button 
                      type="button"
                      variant="outline" 
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className={currentStep === 1 ? 'invisible' : ''}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      {t('form.back')}
                    </Button>
                    
                    {currentStep < totalSteps ? (
                      <Button 
                        type="button"
                        onClick={nextStep}
                        className="visa-gradient"
                      >
                        {t('form.continue')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button 
                        type="submit"
                        className="visa-gradient"
                      >
                        {t('form.complete_payment')}
                        <CreditCard className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Step Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-visa-blue-600" />
                  {t('form.current_step')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentStep === 1 && (
                    <div>
                      <h4 className="font-semibold mb-2">Osobní údaje</h4>
                      <p className="text-sm text-gray-600">
                        Vyplňte vaše základní informace a údaje o cestě.
                      </p>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div>
                      <h4 className="font-semibold mb-2">Dokumenty a cesta</h4>
                      <p className="text-sm text-gray-600">
                        Nahrajte potřebné dokumenty a vyplňte informace o cestě.
                      </p>
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div>
                      <h4 className="font-semibold mb-2">Platba</h4>
                      <p className="text-sm text-gray-600">
                        Zkontrolujte objednávku a dokončete platbu.
                      </p>
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500">
                    Odhadovaná doba vyplnění: {currentStep === 1 ? '2 minuty' : currentStep === 2 ? '3 minuty' : '1 minuta'}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-visa-gold-600" />
                  {t('form.quick_overview')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Typ:</span>
                  <Badge variant="outline">{documentTypeName}</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Zpracování:</span>
                  <span className="font-medium">
                    {plan === 'urgent' ? '2-4 hodiny' : 
                     plan === 'express' ? '24 hodin' : 
                     '2-3 dny'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cena:</span>
                  <span className="font-bold text-visa-blue-600">
                    {parseInt(price).toLocaleString()} Kč
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Security Badge */}
            <Card className="bg-visa-green-50 border-visa-green-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-visa-green-600" />
                  <div>
                    <h4 className="font-semibold text-visa-green-900 text-sm">
                      {t('form.ssl_encryption')}
                    </h4>
                    <p className="text-xs text-visa-green-800">
                      {t('form.data_safe')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default function ApplicationFormPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-visa-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Načítání formuláře...</p>
        </div>
      </div>
    }>
      <ApplicationFormContent />
    </Suspense>
  )
}