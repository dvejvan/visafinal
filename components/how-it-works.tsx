'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Upload, CreditCard, CheckCircle, ArrowRight, Clock } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language-v2'

export default function HowItWorks() {
  const { t, currentLanguage } = useLanguage()
  console.log('HowItWorks component rendered')

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: t('how_it_works.step1_title'),
      description: t('how_it_works.step1_desc'),
      time: '5 minut',
      color: 'bg-visa-blue-100 text-visa-blue-600',
    },
    {
      number: 2,
      icon: Upload,
      title: t('how_it_works.step2_title'),
      description: t('how_it_works.step2_desc'),
      time: '10 minut',
      color: 'bg-visa-green-100 text-visa-green-600',
    },
    {
      number: 3,
      icon: CreditCard,
      title: t('how_it_works.step3_title'),
      description: t('how_it_works.step3_desc'),
      time: '2 minuty',
      color: 'bg-visa-gold-100 text-visa-gold-600',
    },
    {
      number: 4,
      icon: CheckCircle,
      title: t('how_it_works.step6_title'),
      description: t('how_it_works.step6_desc'),
      time: t('how_it_works.processing_days'),
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  const features = [
    t('how_it_works.fast_processing'),
    t('how_it_works.support_24_7'),
    t('how_it_works.success_rate'),
    t('trust.secure'),
    'Garance vrácení peněz',
    'Expresní vyřízení dostupné',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-visa-blue-100 text-visa-blue-700 mb-4">
            {t('how_it_works.badge')}
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('how_it_works.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('how_it_works.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-16">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-visa-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500 font-medium">
                        {step.time}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('how_it_works.why_choose')}
            </h3>
            <div className="grid gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-visa-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="visa-gradient hover:shadow-lg transition-all duration-200">
                {t('how_it_works.start_now')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <Card className="bg-gradient-to-br from-visa-blue-50 to-white border-visa-blue-200">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-visa-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900">
                    {currentLanguage === 'en' ? 'Satisfaction guarantee' : 'Garance spokojenosti'}
                  </h4>
                  
                  <p className="text-gray-600">
                    {currentLanguage === 'en' 
                      ? 'If you are not satisfied with our services, we will refund your money within 14 days.'
                      : 'Pokud nebudete spokojeni s našimi službami, vrátíme vám peníze do 14 dnů.'
                    }
                  </p>
                  
                  <div className="bg-white rounded-lg p-4 border border-visa-blue-200">
                    <div className="text-2xl font-bold text-visa-blue-600 mb-1">
                      98.4%
                    </div>
                    <div className="text-sm text-gray-600">
                      {t('trust.success_rate')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}