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
  Info
} from 'lucide-react'

export default function UkEtaLandingPage() {
  console.log('🇬🇧 UK ETA Landing Page rendered')
  const { t } = useLanguage()

  const handleApply = (plan: string) => {
    console.log('🚀 Applying for UK ETA plan:', plan)
    const params = new URLSearchParams({
      country: 'gb',
      type: 'eta',
      visaType: 'eta',
      plan: plan,
      price: plan === 'standard' ? '1200' : plan === 'express' ? '1800' : '2500'
    })
    window.location.href = `/application-form?${params.toString()}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop&crop=center"
            alt="Velká Británie"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-indigo-900/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-7xl">🇬🇧</span>
              <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                ETA Online
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              {t('landing.uk_eta.uk_eta_title')} <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                {t('landing.uk_eta.uk_eta_subtitle')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              {t('landing.uk_eta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={() => handleApply('standard')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg"
              >
{t('landing.uk_eta.start_application_uk')} ({t('landing.uk_eta.plan_standard_price_uk')})
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                onClick={() => handleApply('express')}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg"
              >
{t('landing.uk_eta.plan_express_uk')} ({t('landing.uk_eta.plan_express_price_uk')})
                <Zap className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{t('landing.uk_eta.stats_days')}</div>
                <div className="text-sm text-slate-300">{t('landing.uk_eta.stats_standard')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{t('landing.uk_eta.stats_express')}</div>
                <div className="text-sm text-slate-300">{t('landing.uk_eta.stats_express_label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{t('landing.uk_eta.stats_success')}</div>
                <div className="text-sm text-slate-300">{t('landing.uk_eta.stats_success_label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{t('landing.uk_eta.stats_online')}</div>
                <div className="text-sm text-slate-300">{t('landing.uk_eta.stats_online_label')}</div>
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
              {t('landing.uk_eta.what_is_uk_eta')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('landing.uk_eta.what_is_uk_eta_desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">{t('landing.uk_eta.fast_processing_uk')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('landing.uk_eta.fast_processing_uk_desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{t('landing.uk_eta.long_validity_uk')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('landing.uk_eta.long_validity_uk_desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">{t('landing.uk_eta.visa_free_uk')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('landing.uk_eta.visa_free_uk_desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{t('landing.uk_eta.online_100_uk')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('landing.uk_eta.online_100_uk_desc')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('landing.uk_eta.pricing_title_uk')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('landing.uk_eta.pricing_subtitle_uk')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{t('landing.uk_eta.plan_standard_uk')}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">{t('landing.uk_eta.plan_standard_price_uk')}</div>
                <p className="text-gray-600">{t('landing.uk_eta.plan_standard_time_uk')}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_processing_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_documents_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_email_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_sms_uk')}</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleApply('standard')}
                  className="w-full mt-6"
                >
{t('landing.uk_eta.select_standard_uk')}
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-emerald-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white">
                  <Star className="w-3 h-3 mr-1" />
{t('landing.uk_eta.plan_popular_uk')}
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{t('landing.uk_eta.plan_express_uk')}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">{t('landing.uk_eta.plan_express_price_uk')}</div>
                <p className="text-gray-600">{t('landing.uk_eta.plan_express_time_uk')}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_priority_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_documents_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_phone_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_sms_email_uk')}</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleApply('express')}
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700"
                >
{t('landing.uk_eta.select_express_uk')}
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{t('landing.uk_eta.plan_vip_uk')}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">{t('landing.uk_eta.plan_vip_price_uk')}</div>
                <p className="text-gray-600">{t('landing.uk_eta.plan_vip_time_uk')}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_fastest_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_consultant_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_24_7_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.feature_all_notifications_uk')}</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleApply('vip')}
                  className="w-full mt-6 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                >
{t('landing.uk_eta.select_vip_uk')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('landing.uk_eta.requirements_title_uk')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
{t('landing.uk_eta.required_documents_uk')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.valid_passport_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.digital_photo_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.email_address_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.payment_card_uk')}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
{t('landing.uk_eta.who_can_apply_uk')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.eu_citizens_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.selected_countries_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{t('landing.uk_eta.age_18_uk')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span>{t('landing.uk_eta.no_criminal_uk')}</span>
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
              {t('landing.uk_eta.faq_title_uk')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('landing.uk_eta.faq_validity_q_uk')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('landing.uk_eta.faq_validity_a_uk')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('landing.uk_eta.faq_work_q_uk')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('landing.uk_eta.faq_work_a_uk')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('landing.uk_eta.faq_entries_q_uk')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('landing.uk_eta.faq_entries_a_uk')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('landing.uk_eta.faq_denied_q_uk')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('landing.uk_eta.faq_denied_a_uk')}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            {t('landing.uk_eta.cta_title_uk')}
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            {t('landing.uk_eta.cta_subtitle_uk')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleApply('standard')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg"
            >
{t('landing.uk_eta.plan_standard_uk')} ({t('landing.uk_eta.plan_standard_price_uk')})
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => handleApply('express')}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg"
            >
{t('landing.uk_eta.plan_express_uk')} ({t('landing.uk_eta.plan_express_price_uk')})
              <Zap className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>{t('landing.uk_eta.success_rate_uk')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{t('landing.uk_eta.fast_processing_cta_uk')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span>{t('landing.uk_eta.secure_payments_uk')}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}