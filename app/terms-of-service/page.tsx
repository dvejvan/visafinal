import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Users, CreditCard, Shield, AlertTriangle, Scale } from 'lucide-react'

export default function TermsOfServicePage() {
  console.log('📜 Terms of Service page loaded')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Scale className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These terms govern your use of Visapo.com services. Please read them carefully before using our platform.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 30, 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                By accessing and using Visapo.com ("the Service"), you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-gray-600">
                These terms constitute a legally binding agreement between you and Visapo.com, a service operated from 
                5830 E 2nd St, Ste 7000 #23181, Casper, Wyoming 82609 US.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-green-600" />
                Service Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Visapo.com provides visa and travel authorization application assistance services, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Electronic Travel Authorization (ETA) applications</li>
                <li>Tourist and business visa applications</li>
                <li>Document review and application preparation</li>
                <li>Application status tracking and updates</li>
                <li>Customer support throughout the process</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> We are an independent service provider. We are not affiliated with any government agency, 
                  embassy, or consulate. Final approval decisions are made solely by the respective government authorities.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-orange-600" />
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate, complete, and truthful information</li>
                <li>Upload authentic and unaltered documents</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees and charges as agreed</li>
                <li>Respond promptly to requests for additional information</li>
                <li>Not use our services for fraudulent or illegal purposes</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized account access</li>
              </ul>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-purple-600" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Fees and Charges</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Service fees are clearly displayed before payment</li>
                  <li>Government fees are additional and paid directly to authorities</li>
                  <li>All fees are non-refundable once application processing begins</li>
                  <li>Prices may change with 30 days' notice</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment Processing</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Payments are processed securely using industry-standard encryption</li>
                  <li>We accept major credit cards and secure payment methods</li>
                  <li>Payment confirmation is required before application submission</li>
                  <li>Refunds, if applicable, will be processed within 10 business days</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Refund Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Refund Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">Eligible for Refund</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Technical errors preventing application submission</li>
                    <li>Service cancellation before processing begins</li>
                    <li>Duplicate payments due to system errors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">Not Eligible for Refund</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Application rejection by government authorities</li>
                    <li>Changes in personal travel plans</li>
                    <li>User-provided incorrect or incomplete information</li>
                    <li>Applications already submitted to authorities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers and Limitations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Disclaimers and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Service Limitations</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>We cannot guarantee visa or ETA approval</li>
                  <li>Processing times may vary due to government delays</li>
                  <li>We are not responsible for changes in government policies</li>
                  <li>Emergency or expedited processing cannot be guaranteed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Liability Limitations</h4>
                <p className="text-gray-600">
                  Our liability is limited to the amount you paid for our services. We are not liable for 
                  indirect, incidental, or consequential damages, including lost profits, travel expenses, 
                  or other costs resulting from visa denials or delays.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection, use, and protection of your personal 
                information is governed by our Privacy Policy, which is incorporated into these terms by reference.
              </p>
              <p className="text-gray-600">
                By using our services, you consent to the processing of your personal data as described 
                in our Privacy Policy and as required for visa application processing.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>Governing Law and Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                These Terms of Service are governed by the laws of Wyoming, United States, without regard to 
                conflict of law principles.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>First attempt resolution through our customer service</li>
                  <li>Mediation through a mutually agreed mediator</li>
                  <li>Binding arbitration in Wyoming if mediation fails</li>
                  <li>Small claims court for disputes under applicable limits</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service or our services:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@visapo.com</p>
                <p><strong>Phone:</strong> +420 234 567 890</p>
                <p><strong>Address:</strong> 5830 E 2nd St, Ste 7000 #23181, Casper, Wyoming 82609 US</p>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Updates:</strong> We reserve the right to modify these terms at any time. 
                  Material changes will be communicated via email or website notice at least 30 days in advance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}