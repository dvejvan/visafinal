import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Cookie, Settings, BarChart3, Shield, Globe, Eye } from 'lucide-react'

export default function CookiesPolicyPage() {
  console.log('🍪 Cookies Policy page loaded')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Cookie className="w-12 h-12 text-orange-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cookies Policy
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how Visapo.com uses cookies and similar technologies to improve your experience and provide our services.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 30, 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* What Are Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-600" />
                What Are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our website. 
                They help us provide you with a better, faster, and safer experience.
              </p>
              <p className="text-gray-600">
                Similar technologies include web beacons, pixels, and local storage, which serve similar purposes to cookies 
                in terms of collecting information about your usage patterns.
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-green-600" />
                Types of Cookies We Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Essential</Badge>
                    <h4 className="font-semibold text-green-900">Strictly Necessary Cookies</h4>
                  </div>
                  <p className="text-sm text-green-700 mb-2">
                    These cookies are essential for the website to function properly. They cannot be disabled.
                  </p>
                  <ul className="text-sm text-green-600 list-disc list-inside space-y-1">
                    <li>Authentication and session management</li>
                    <li>Security features and CSRF protection</li>
                    <li>Shopping cart and application form data</li>
                    <li>Load balancing and website functionality</li>
                  </ul>
                </div>

                <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Analytics</Badge>
                    <h4 className="font-semibold text-blue-900">Performance & Analytics Cookies</h4>
                  </div>
                  <p className="text-sm text-blue-700 mb-2">
                    Help us understand how visitors interact with our website by collecting anonymous information.
                  </p>
                  <ul className="text-sm text-blue-600 list-disc list-inside space-y-1">
                    <li>Google Analytics (traffic analysis)</li>
                    <li>Page view statistics and user journeys</li>
                    <li>Website performance monitoring</li>
                    <li>Error tracking and debugging</li>
                  </ul>
                </div>

                <div className="border border-purple-200 bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">Functional</Badge>
                    <h4 className="font-semibold text-purple-900">Functionality Cookies</h4>
                  </div>
                  <p className="text-sm text-purple-700 mb-2">
                    Enable enhanced functionality and personalization features.
                  </p>
                  <ul className="text-sm text-purple-600 list-disc list-inside space-y-1">
                    <li>Language preferences</li>
                    <li>User interface customizations</li>
                    <li>Form auto-fill information</li>
                    <li>Chat widget functionality</li>
                  </ul>
                </div>

                <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">Marketing</Badge>
                    <h4 className="font-semibold text-orange-900">Marketing & Advertising Cookies</h4>
                  </div>
                  <p className="text-sm text-orange-700 mb-2">
                    Used to track visitors across websites for marketing purposes.
                  </p>
                  <ul className="text-sm text-orange-600 list-disc list-inside space-y-1">
                    <li>Conversion tracking (Google Ads, Facebook)</li>
                    <li>Retargeting and remarketing</li>
                    <li>Social media integration</li>
                    <li>Affiliate program tracking</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-indigo-600" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We use several third-party services that may set their own cookies:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Google Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Google Analytics (website analytics)</li>
                    <li>• Google Ads (advertising)</li>
                    <li>• reCAPTCHA (security)</li>
                  </ul>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Payment Processors</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Stripe (payment processing)</li>
                    <li>• PayPal (payment processing)</li>
                  </ul>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Social Media</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Facebook Pixel (marketing)</li>
                    <li>• LinkedIn Insights (B2B marketing)</li>
                  </ul>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Customer Support</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Intercom (live chat)</li>
                    <li>• Zendesk (help desk)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Duration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-red-600" />
                Cookie Duration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Session Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Temporary cookies that are deleted when you close your browser. Used for essential functions 
                    like maintaining your login session and shopping cart contents.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Persistent Cookies</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Remain on your device for a specified period or until manually deleted:
                  </p>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    <li><strong>Functional cookies:</strong> Up to 1 year</li>
                    <li><strong>Analytics cookies:</strong> Up to 26 months</li>
                    <li><strong>Marketing cookies:</strong> Up to 90 days</li>
                    <li><strong>Security cookies:</strong> Up to 6 months</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-purple-600" />
                Managing Your Cookie Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Cookie Consent</h4>
                <p className="text-gray-600 mb-4">
                  When you first visit our website, you'll see a cookie banner allowing you to accept or customize your preferences. 
                  You can change these settings at any time.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Settings className="w-4 h-4 mr-2" />
                  Manage Cookie Preferences
                </Button>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Browser Settings</h4>
                <p className="text-gray-600 mb-3">
                  You can also control cookies through your browser settings:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Chrome:</strong> Settings {'->'} Privacy and security {'->'} Cookies
                  </div>
                  <div>
                    <strong>Firefox:</strong> Options {'->'} Privacy & Security {'->'} Cookies
                  </div>
                  <div>
                    <strong>Safari:</strong> Preferences {'->'} Privacy {'->'} Cookies
                  </div>
                  <div>
                    <strong>Edge:</strong> Settings {'->'} Privacy {'->'} Cookies
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience. 
                  Essential cookies cannot be disabled as they are necessary for the website to function.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Questions About Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or this policy:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@visapo.com</p>
                <p><strong>Phone:</strong> +420 234 567 890</p>
                <p><strong>Address:</strong> 5830 E 2nd St, Ste 7000 #23181, Casper, Wyoming 82609 US</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}