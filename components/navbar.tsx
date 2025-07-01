'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/hooks/use-language-v2'
import { 
  Menu, 
  Phone, 
  Mail, 
  Globe, 
  ChevronDown,
  User
} from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDestinations, setShowDestinations] = useState(false)
  const { currentLanguage, currentCurrency, setLanguageCurrency, t, languageCurrencyOptions } = useLanguage()

  console.log('Navbar component rendered with language:', currentLanguage)

  const navigationItems = [
    { name: t('nav.how_it_works'), href: '/how-it-works' },
    { name: t('nav.about'), href: '/about' },
  ]

  const popularDestinations = [
    { name: t('countries.india.name'), href: '/visa/in', flag: '🇮🇳' },
    { name: t('countries.usa.name'), href: '/visa/us', flag: '🇺🇸' },
    { name: t('countries.australia.name'), href: '/visa/au', flag: '🇦🇺' },
    { name: t('countries.uk.name'), href: '/visa/gb', flag: '🇬🇧' },
  ]

  return (
    <>
      {/* Main Navigation */}
      <nav className="bg-white shadow-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-r from-visa-blue-600 to-visa-blue-800 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Visapo.com</h1>
                <p className="text-xs text-gray-600">Cestování bez hranic</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-visa-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              
              <div 
                className="relative"
                onMouseEnter={() => setShowDestinations(true)}
                onMouseLeave={() => setShowDestinations(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-visa-blue-600 font-medium transition-colors">
                  {t('nav.popular_destinations')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showDestinations && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                    {popularDestinations.map((dest) => (
                      <a
                        key={dest.name}
                        href={dest.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xl">{dest.flag}</span>
                        <span className="font-medium text-gray-900">{t('countries_grid.visa_to')} {dest.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Language & Currency Switcher & CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Combined Language & Currency Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-9 px-3">
                    <Globe className="w-4 h-4 mr-2" />
                    <span className="text-lg mr-1">
                      {languageCurrencyOptions.find(opt => opt.languageCode === currentLanguage)?.flag}
                    </span>
                    <span className="text-sm font-medium">
                      {languageCurrencyOptions.find(opt => opt.languageCode === currentLanguage)?.languageCode.toUpperCase()} ({currentCurrency})
                    </span>
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {languageCurrencyOptions.map((option) => (
                    <DropdownMenuItem
                      key={`${option.languageCode}-${option.currencyCode}`}
                      onClick={() => setLanguageCurrency(option.languageCode, option.currencyCode)}
                      className={`cursor-pointer ${
                        currentLanguage === option.languageCode && currentCurrency === option.currencyCode 
                          ? 'bg-visa-blue-50 text-visa-blue-700' : ''
                      }`}
                    >
                      <span className="font-medium">{option.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="visa-gradient hover:shadow-lg transition-all duration-200">
                    <User className="w-4 h-4 mr-2" />
                    {t('nav.account')}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="cursor-pointer">
                    <a href="/login" className="w-full">
                      {t('nav.login')}
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <a href="/register" className="w-full">
                      {t('nav.register')}
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="py-6 space-y-6">
                  {/* Mobile Logo */}
                  <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
                    <div className="w-8 h-8 bg-gradient-to-r from-visa-blue-600 to-visa-blue-800 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">Visapo.com</h2>
                      <p className="text-xs text-gray-600">Cestování bez hranic</p>
                    </div>
                  </a>

                  {/* Mobile Navigation */}
                  <div className="space-y-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-gray-700 hover:text-visa-blue-600 font-medium transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  {/* Popular Destinations */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">{t('nav.popular_destinations')}</h3>
                    <div className="space-y-2">
                      {popularDestinations.map((dest) => (
                        <a
                          key={dest.name}
                          href={dest.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-xl">{dest.flag}</span>
                          <span className="font-medium text-gray-900">{t('countries_grid.visa_to')} {dest.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Language & Currency Switcher */}
                  <div className="pt-4 border-t">
                    <h3 className="font-semibold text-gray-900 mb-3">Jazyk a měna / Language & Currency</h3>
                    <div className="space-y-2">
                      {languageCurrencyOptions.map((option) => (
                        <button
                          key={`${option.languageCode}-${option.currencyCode}`}
                          onClick={() => {
                            setLanguageCurrency(option.languageCode, option.currencyCode)
                            setIsOpen(false)
                          }}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                            currentLanguage === option.languageCode && currentCurrency === option.currencyCode
                              ? 'border-visa-blue-300 bg-visa-blue-50 text-visa-blue-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <span className="text-sm font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Account */}
                  <div className="pt-4 border-t">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {t('nav.account')}
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-visa-blue-300 hover:bg-visa-blue-50 transition-colors text-left"
                      >
                        <span className="font-medium text-gray-900">{t('nav.login')}</span>
                      </a>
                      <a
                        href="/register"
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg visa-gradient text-white hover:shadow-lg transition-all duration-200"
                      >
                        <span className="font-medium">{t('nav.register')}</span>
                      </a>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>+420 234 567 890</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>info@visapo.com</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}