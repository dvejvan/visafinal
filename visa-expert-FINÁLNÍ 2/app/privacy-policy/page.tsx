import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Lock, Users, FileText, Globe } from 'lucide-react'

export default function PrivacyPolicyPage() {
  console.log('🔒 Privacy Policy page loaded')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how Visapo.com collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 30, 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Full name and contact details (email, phone, address)</li>
                  <li>Passport information and travel documents</li>
                  <li>Nationality and country of residence</li>
                  <li>Payment information (processed securely through encrypted channels)</li>
                  <li>Travel dates and destination information</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Device information and operating system</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-green-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process your visa and travel authorization applications</li>
                <li>Communicate with you about your application status</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Comply with legal requirements and government regulations</li>
                <li>Improve our services and website functionality</li>
                <li>Send important updates about your applications</li>
                <li>Prevent fraud and ensure platform security</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-orange-600" />
                Information Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Government Authorities:</strong> Required for visa processing and legal compliance</li>
                <li><strong>Service Providers:</strong> Trusted partners who assist in application processing</li>
                <li><strong>Payment Processors:</strong> Secure payment processing companies</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> We never sell your personal information to third parties for marketing purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-red-600" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>PCI DSS compliance for payment processing</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Restricted access to personal information on a need-to-know basis</li>
                <li>Secure data centers with physical and digital protection</li>
                <li>Regular staff training on data protection practices</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-purple-600" />
                Your Rights (GDPR & CCPA)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Restriction:</strong> Limit how we process your information</li>
                <li><strong>Objection:</strong> Object to certain types of data processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for specific processing activities</li>
              </ul>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  To exercise these rights, contact us at: <strong>privacy@visapo.com</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We retain your personal information for different periods depending on the purpose:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Application Data:</strong> 7 years (as required by immigration authorities)</li>
                <li><strong>Payment Information:</strong> 3 years (for accounting and fraud prevention)</li>
                <li><strong>Website Analytics:</strong> 26 months</li>
                <li><strong>Marketing Communications:</strong> Until you unsubscribe</li>
                <li><strong>Customer Support:</strong> 3 years after last contact</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or our data practices:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@visapo.com</p>
                <p><strong>Phone:</strong> +420 234 567 890</p>
                <p><strong>Address:</strong> 5830 E 2nd St, Ste 7000 #23181, Casper, Wyoming 82609 US</p>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Updates:</strong> We may update this Privacy Policy periodically. 
                  We will notify you of significant changes via email or website notice.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}