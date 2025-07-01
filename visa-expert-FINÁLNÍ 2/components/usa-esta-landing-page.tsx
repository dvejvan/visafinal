'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/hooks/use-language-v2'
import { 
  Clock, 
  Shield, 
  CheckCircle, 
  Star, 
  Plane,
  Users,
  ArrowRight,
  Zap,
  Globe,
  Calendar,
  FileText,
  CreditCard,
  AlertTriangle,
  MapPin
} from 'lucide-react'

export default function UsaEstaLandingPage() {
  console.log('🇺🇸 USA ESTA Landing Page rendered')
  const { t } = useLanguage()

  const handleApply = (plan: string) => {
    console.log('🚀 Applying for USA ESTA plan:', plan)
    const params = new URLSearchParams({
      country: 'us',
      type: 'esta',
      visaType: 'esta',
      plan: plan,
      price: plan === 'standard' ? '890' : plan === 'express' ? '1290' : '1790'
    })
    window.location.href = `/application-form?${params.toString()}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/20 to-blue-50/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 via-blue-900 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop&crop=center"
            alt="USA"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-blue-900/60 to-red-800/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-7xl">🇺🇸</span>
              <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                ESTA Online
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              {t('landing.usa_esta.title')} <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                {t('landing.usa_esta.subtitle')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed max-w-3xl mx-auto">
              {t('landing.usa_esta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={() => handleApply('standard')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg"
              >
                {t('landing.usa_esta.start_application')} ({t('landing.usa_esta.standard_price')})
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                onClick={() => handleApply('express')}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg"
              >
                {t('landing.usa_esta.express')} ({t('landing.usa_esta.express_price')})
                <Zap className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{t('landing.usa_esta.stats_days')}</div>
                <div className="text-sm text-red-200">{t('landing.usa_esta.stats_standard')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{t('landing.usa_esta.stats_express')}</div>
                <div className="text-sm text-red-200">{t('landing.usa_esta.stats_express_label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{t('landing.usa_esta.stats_success')}</div>
                <div className="text-sm text-red-200">{t('landing.usa_esta.stats_success_label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{t('landing.usa_esta.stats_duration')}</div>
                <div className="text-sm text-red-200">{t('landing.usa_esta.stats_duration_label')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Key Information */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('landing.usa_esta.what_is_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('landing.usa_esta.what_is_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">{t('landing.usa_esta.fast_processing')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('landing.usa_esta.fast_processing_desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{t('landing.usa_esta.long_validity')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('landing.usa_esta.long_validity_desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">{t('landing.usa_esta.visa_free')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('landing.usa_esta.visa_free_desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{t('landing.usa_esta.online_100')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('landing.usa_esta.online_100_desc')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('landing.usa_esta.pricing_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('landing.usa_esta.pricing_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{t('landing.usa_esta.plan_standard')}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">{t('landing.usa_esta.standard_price')}</div>
                <p className="text-gray-600">{t('landing.usa_esta.plan_standard_time')}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_processing')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_check')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_email')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_sms')}</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleApply('standard')}
                  className="w-full mt-6"
                >
                  {t('landing.usa_esta.select_standard')}
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-emerald-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  {t('landing.usa_esta.plan_popular')}
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{t('landing.usa_esta.plan_express')}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">{t('landing.usa_esta.express_price')}</div>
                <p className="text-gray-600">{t('landing.usa_esta.plan_express_time')}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_priority')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_check')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_phone')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_sms_email')}</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleApply('express')}
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700"
                >
                  {t('landing.usa_esta.select_express')}
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{t('landing.usa_esta.plan_vip')}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">{t('landing.usa_esta.vip_price')}</div>
                <p className="text-gray-600">{t('landing.usa_esta.plan_vip_time')}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_fastest')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_consultant')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_24_7')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.feature_all_notifications')}</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleApply('vip')}
                  className="w-full mt-6 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                >
                  {t('landing.usa_esta.select_vip')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('landing.usa_esta.requirements_title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  {t('landing.usa_esta.required_documents')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.valid_passport')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.email_address')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.usa_address')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.payment_card')}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  {t('landing.usa_esta.who_can_apply')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.vwp_citizens')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.czech_vwp')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.usa_esta.max_90_days')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span>{t('landing.usa_esta.no_criminal')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('landing.usa_esta.faq_title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('landing.usa_esta.faq_validity_q')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('landing.usa_esta.faq_validity_a')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('landing.usa_esta.faq_work_q')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('landing.usa_esta.faq_work_a')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('landing.usa_esta.faq_entries_q')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('landing.usa_esta.faq_entries_a')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('landing.usa_esta.faq_denied_q')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('landing.usa_esta.faq_denied_a')}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-900 via-blue-900 to-red-800 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            {t('landing.usa_esta.cta_title')}
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            {t('landing.usa_esta.cta_subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleApply('standard')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg"
            >
              {t('landing.usa_esta.plan_standard')} ({t('landing.usa_esta.standard_price')})
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => handleApply('express')}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg"
            >
              {t('landing.usa_esta.plan_express')} ({t('landing.usa_esta.express_price')})
              <Zap className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-red-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>{t('landing.usa_esta.success_rate')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{t('landing.usa_esta.fast_processing')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span>{t('landing.usa_esta.secure_payments')}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}