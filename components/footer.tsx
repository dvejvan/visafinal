'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  CreditCard,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle
} from 'lucide-react'
import { useLanguage } from '@/hooks/use-language-v2'





const certifications = [
  { name: 'SSL 256-bit', icon: Shield },
  { name: 'PCI DSS', icon: CreditCard },
  { name: 'GDPR', icon: Shield },
  { name: 'IATA Partner', icon: Shield },
]

export default function Footer() {
  const { t, currentLanguage } = useLanguage()
  console.log('Footer component rendered with language:', currentLanguage)
  console.log('Testing footer translation:', t('footer.secure'))
  console.log('Testing non-footer translation:', t('nav.about'))
  
  const quickLinks = [
    { name: t('nav.how_it_works'), href: '/how-it-works' },
    { name: t('nav.contact'), href: '/kontakt' },
  ]

  const popularCountries = [
    { name: t('visa.india'), href: '/visa/in' },
    { name: t('visa.usa'), href: '/visa/us' },
    { name: t('visa.australia'), href: '/visa/au' },
    { name: t('visa.uk'), href: '/visa/gb' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Visapo.com</h3>
              <p className="text-gray-400">
                {t('footer.company_description')}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-400">{t('footer.certified')}</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300">
                    <cert.icon className="w-3 h-3 mr-1" />
                    {cert.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>


          </div>

          {/* Popular Countries */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.popular_destinations')}</h4>
            <ul className="space-y-2">
              {popularCountries.map((country, index) => (
                <li key={index}>
                  <a 
                    href={country.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {country.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-visa-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">+420 234 567 890</p>
                  <p className="text-xs text-gray-400">{t('footer.phone_hours')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-visa-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">info@visapo.com</p>
                  <p className="text-xs text-gray-400">{t('footer.email_response')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-visa-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">5830 E 2nd St, Ste 7000 #23181</p>
                  <p className="text-sm font-medium">Casper, Wyoming 82609 US</p>
                  <p className="text-xs text-gray-400">{t('footer.visit_by_appointment')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-visa-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer.support_24_7')}</p>
                  <p className="text-xs text-gray-400">{t('footer.chat_email')}</p>
                </div>
              </div>
            </div>

            <Button className="w-full mt-6 bg-visa-blue-600 hover:bg-visa-blue-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('footer.start_chat')}
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Shield className="w-6 h-6 text-visa-green-400" />
              <div>
                <p className="text-sm font-medium">{t('footer.secure')}</p>
                <p className="text-xs text-gray-400">{t('footer.ssl_encryption')}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <CreditCard className="w-6 h-6 text-visa-blue-400" />
              <div>
                <p className="text-sm font-medium">{t('footer.protected_payments')}</p>
                <p className="text-xs text-gray-400">{t('footer.pci_certification')}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="w-6 h-6 text-visa-gold-400" />
              <div>
                <p className="text-sm font-medium">{t('footer.fast_processing')}</p>
                <p className="text-xs text-gray-400">{t('footer.average_days')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {t('footer.copyright')}
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies-policy" className="text-gray-400 hover:text-white transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}