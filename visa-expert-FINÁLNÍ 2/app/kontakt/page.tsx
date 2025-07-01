'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Shield,
  CreditCard,
  Users,
  Globe
} from 'lucide-react'
import { useLanguage } from '@/hooks/use-language-v2'

export default function ContactPage() {
  const { t } = useLanguage()
  
  console.log('Contact page rendered')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted')
    // Zde by byla logika pro odeslání formuláře
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-visa-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-visa-blue-100 text-visa-blue-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('contact.badge')}
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('contact.hero_title')}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('contact.hero_subtitle')}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-0 bg-visa-blue-50">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-visa-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{t('contact.phone_support')}</h3>
                  <p className="text-sm text-gray-600">{t('contact.phone_hours')}</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-visa-green-50">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-visa-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{t('contact.email_support')}</h3>
                  <p className="text-sm text-gray-600">{t('contact.email_response')}</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-visa-gold-50">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-visa-gold-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{t('contact.online_chat')}</h3>
                  <p className="text-sm text-gray-600">{t('contact.chat_available')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('contact.contact_info')}
              </h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-visa-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-visa-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{t('contact.phone_number')}</h3>
                        <p className="text-lg font-medium text-gray-900">+420 234 567 890</p>
                        <p className="text-sm text-gray-600">{t('contact.phone_weekdays')}</p>
                        <p className="text-sm text-gray-600">{t('contact.phone_weekend')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-visa-green-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-visa-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{t('contact.email')}</h3>
                        <p className="text-lg font-medium text-gray-900">info@visapo.com</p>
                        <p className="text-sm text-gray-600">{t('contact.email_response')}</p>
                        <p className="text-sm text-gray-600">{t('contact.email_24_7')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-visa-gold-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-visa-gold-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{t('contact.address')}</h3>
                        <p className="text-gray-900">5830 E 2nd St, Ste 7000 #23181</p>
                        <p className="text-gray-900">Casper, Wyoming 82609 US</p>
                        <p className="text-sm text-gray-600 mt-1">{t('contact.visit_appointment')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{t('contact.business_hours')}</h3>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">{t('contact.monday_friday')}</span></p>
                          <p><span className="font-medium">{t('contact.saturday')}</span></p>
                          <p><span className="font-medium">{t('contact.sunday')}</span></p>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{t('contact.chat_24_7')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-visa-blue-600" />
                    <span className="text-2xl font-bold text-visa-blue-600">50,000+</span>
                  </div>
                  <p className="text-sm text-gray-600">{t('trust.clients_satisfied')}</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-visa-green-600" />
                    <span className="text-2xl font-bold text-visa-green-600">150+</span>
                  </div>
                  <p className="text-sm text-gray-600">Zemí světa</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    {t('contact.write_us')}
                  </CardTitle>
                  <p className="text-gray-600">
                    {t('contact.form_subtitle')}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.first_name')} *
                        </label>
                        <Input 
                          placeholder={t('contact.first_name')} 
                          required 
                          className="border-gray-300 focus:border-visa-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.last_name')} *
                        </label>
                        <Input 
                          placeholder={t('contact.last_name')} 
                          required 
                          className="border-gray-300 focus:border-visa-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="vas@email.com" 
                        required 
                        className="border-gray-300 focus:border-visa-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.phone')}
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+420 123 456 789" 
                        className="border-gray-300 focus:border-visa-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.subject')} *
                      </label>
                      <Input 
                        placeholder={t('contact.subject_placeholder')} 
                        required 
                        className="border-gray-300 focus:border-visa-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.message')} *
                      </label>
                      <Textarea 
                        placeholder={t('contact.message_placeholder')}
                        rows={5}
                        required 
                        className="border-gray-300 focus:border-visa-blue-500"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-visa-blue-600 hover:bg-visa-blue-700 text-white py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.send_message')}
                    </Button>
                  </form>

                  <div className="pt-6 border-t">
                    <div className="flex items-center gap-4">
                      <Shield className="w-6 h-6 text-visa-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{t('contact.data_secure')}</p>
                        <p className="text-xs text-gray-600">{t('contact.ssl_gdpr')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('contact.quick_actions')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Button 
                variant="outline" 
                className="h-auto p-6 flex-col space-y-2 border-visa-blue-200 hover:bg-visa-blue-50"
              >
                <MessageCircle className="w-8 h-8 text-visa-blue-600" />
                <span className="font-medium">{t('contact.start_chat')}</span>
                <span className="text-xs text-gray-600">{t('contact.instant_help')}</span>
              </Button>

              <Button 
                variant="outline" 
                className="h-auto p-6 flex-col space-y-2 border-visa-green-200 hover:bg-visa-green-50"
                onClick={() => window.location.href = '/application-form'}
              >
                <Send className="w-8 h-8 text-visa-green-600" />
                <span className="font-medium">{t('contact.start_application')}</span>
                <span className="text-xs text-gray-600">{t('contact.online_form')}</span>
              </Button>

              <Button 
                variant="outline" 
                className="h-auto p-6 flex-col space-y-2 border-visa-gold-200 hover:bg-visa-gold-50"
                onClick={() => window.location.href = '/how-it-works'}
              >
                <Globe className="w-8 h-8 text-visa-gold-600" />
                <span className="font-medium">{t('contact.how_works')}</span>
                <span className="text-xs text-gray-600">{t('contact.detailed_guide')}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}