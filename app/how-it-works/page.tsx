'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { FileText, Upload, CreditCard, Clock, CheckCircle, Plane, ArrowRight, Shield, Users, HeadphonesIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/use-language-v2'

console.log('⚙️ How it works page - rendering')

export default function HowItWorksPage() {
  const { t } = useLanguage()
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: t('how_it_works.step1_title'),
      description: t('how_it_works.step1_desc'),
      details: [
        'Personal data and travel document',
        'Purpose and length of stay',
        'Accommodation and itinerary',
        'Financial situation'
      ],
      duration: '5-10 minutes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      icon: Upload,
      title: t('how_it_works.step2_title'),
      description: t('how_it_works.step2_desc'),
      details: [
        'Passport scan',
        'Required photographs',
        'Accommodation confirmation',
        'Additional documents by destination'
      ],
      duration: '10-15 minutes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: 3,
      icon: CreditCard,
      title: t('how_it_works.step3_title'),
      description: t('how_it_works.step3_desc'),
      details: [
        'Consular fee',
        'Our service fees',
        'Secure payment methods',
        'Instant payment confirmation'
      ],
      duration: '2-3 minutes',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 4,
      icon: Users,
      title: t('how_it_works.step4_title'),
      description: t('how_it_works.step4_desc'),
      details: [
        'Document completeness check',
        'Requirements compliance verification',
        'Consultation with local experts',
        'Information supplementation if needed'
      ],
      duration: '24-48 hours',
      color: 'from-orange-500 to-red-500'
    },
    {
      step: 5,
      icon: Clock,
      title: t('how_it_works.step5_title'),
      description: t('how_it_works.step5_desc'),
      details: [
        'Submission through our partners',
        'Application status tracking',
        'Communication with consulate',
        'Regular client updates'
      ],
      duration: 'By destination',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      step: 6,
      icon: CheckCircle,
      title: t('how_it_works.step6_title'),
      description: t('how_it_works.step6_desc'),
      details: [
        'Approval notification',
        'Visa delivery by courier',
        'Data accuracy check',
        'Final travel instructions'
      ],
      duration: '1-2 days',
      color: 'from-green-500 to-teal-500'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: t('how_it_works.success_rate'),
      description: t('how_it_works.success_desc')
    },
    {
      icon: Clock,
      title: t('how_it_works.fast_processing'),
      description: t('how_it_works.fast_desc')
    },
    {
      icon: HeadphonesIcon,
      title: t('how_it_works.support_24_7'),
      description: t('how_it_works.support_desc')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
                {t('how_it_works.badge')}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('how_it_works.hero_title').split(' 6 ')[0]}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 6 {t('how_it_works.hero_title').split(' 6 ')[1]}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('how_it_works.hero_subtitle')}
              </p>
              <Button 
                size="lg" 
                className="visa-gradient hover:shadow-lg transition-all duration-200"
                onClick={() => window.location.href = '/application-form'}
              >
                {t('how_it_works.start_now')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-16">
                {steps.map((step, index) => (
                  <div key={step.step} className="relative">
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent hidden lg:block"></div>
                    )}
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="flex items-start gap-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <Badge variant="outline" className="text-xs font-medium">
                                Krok {step.step}
                              </Badge>
                              <Badge className="text-xs bg-gray-100 text-gray-700">
                                {step.duration}
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                            <ul className="space-y-2">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
                          <CardContent className="p-8">
                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                  <step.icon className="w-10 h-10 text-white" />
                                </div>
                                <div className="text-sm font-medium text-gray-600">
                                  Krok {step.step} - {step.duration}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('how_it_works.why_choose')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('how_it_works.why_subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('how_it_works.timeline_title')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('how_it_works.timeline_subtitle')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold">Start</span>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex-1">
                      <h4 className="font-semibold text-gray-900">{t('how_it_works.immediately')}</h4>
                      <p className="text-gray-600 text-sm">{t('how_it_works.form_upload')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold">24h</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 flex-1">
                      <h4 className="font-semibold text-gray-900">{t('how_it_works.within_24h')}</h4>
                      <p className="text-gray-600 text-sm">{t('how_it_works.expert_check')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold">2-5d</span>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 flex-1">
                      <h4 className="font-semibold text-gray-900">{t('how_it_works.processing_days')}</h4>
                      <p className="text-gray-600 text-sm">{t('how_it_works.consulate_processing')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 flex-1">
                      <h4 className="font-semibold text-gray-900">{t('how_it_works.done')}</h4>
                      <p className="text-gray-600 text-sm">{t('how_it_works.visa_ready')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{t('how_it_works.ready_start')}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('how_it_works.ready_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => window.location.href = '/application-form'}
              >
                {t('about.start_application')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors"
                onClick={() => window.location.href = '/about'}
              >
                {t('how_it_works.more_about')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}