import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    news: [
      { name: 'Latest', href: '#' },
      { name: 'Team News', href: '#' },
      { name: 'Club News', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Newsletter', href: '#' },
    ],
    teams: [
      { name: 'Senior Team', href: '#' },
      { name: 'Reserve Team', href: '#' },
      { name: 'Youth Development', href: '#' },
      { name: 'Academy', href: '#' },
    ],
    supporters: [
      { name: 'Family Zone', href: '#' },
      { name: "We're Rich Boyz", href: '#' },
      { name: 'Membership', href: '#' },
      { name: 'Family Rules', href: '#' },
      { name: 'RB Mobile', href: '#' },
      { name: 'Retail', href: '#' },
      { name: 'Win Here', href: '#' },
    ],
    club: [
      { name: 'Chairman', href: '#' },
      { name: 'History', href: '#' },
      { name: 'Corporate', href: '#' },
      { name: 'RB Village', href: '#' },
      { name: 'RB Gym', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    kctv: [
      { name: 'Latest Videos', href: '#' },
      { name: 'On Camera', href: '#' },
      { name: 'Next Show', href: '#' },
      { name: 'Highlights', href: '#' },
    ],
    media: [
      { name: 'Gallery', href: '#' },
      { name: 'Match Centre', href: '#' },
      { name: 'Team News', href: '#' },
      { name: 'Press Releases', href: '#' },
      { name: 'Videos', href: '#' },
      { name: 'Photography', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ]

  return (
    <footer className="bg-white text-gray-600">
      {/* Main Footer Navigation */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            
            {/* NEWS Column */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-rbfc-dark uppercase tracking-wide">NEWS</h3>
              <ul className="space-y-2">
                {footerLinks.news.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-rbfc-blue transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* TEAMS Column */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-rbfc-dark uppercase tracking-wide">TEAMS</h3>
              <ul className="space-y-2">
                {footerLinks.teams.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-rbfc-blue transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORTERS Column */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-rbfc-dark uppercase tracking-wide">SUPPORTERS</h3>
              <ul className="space-y-2">
                {footerLinks.supporters.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-rbfc-blue transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CLUB Column */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-rbfc-dark uppercase tracking-wide">CLUB</h3>
              <ul className="space-y-2">
                {footerLinks.club.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-rbfc-blue transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* KCTV Column */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-rbfc-dark uppercase tracking-wide">RBFC TV</h3>
              <ul className="space-y-2">
                {footerLinks.kctv.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-rbfc-blue transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* MEDIA Column */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-rbfc-dark uppercase tracking-wide">MEDIA</h3>
              <ul className="space-y-2">
                {footerLinks.media.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-rbfc-blue transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-rbfc-light">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-gray-600 text-center md:text-left">
              <p className="mb-2">Richards Bay FC Head Office: uMhlathuze Sports Complex, Via-Verbana Street, Veld-en-Vlei, Richards Bay, 3900</p>
              <p className="mb-2">E-mail: <a href="mailto:info@richardsbayfc.co.za" className="text-rbfc-blue hover:underline">info@richardsbayfc.co.za</a></p>
              <p>Tel: +27 31 072 0271 / Fax: +27 86 458 8879</p>
            </div>
          </div>
          <div className="text-center text-xs sm:text-sm text-gray-500 mt-4">
            <p>All material © Richards Bay FC {currentYear}.</p>
            <p className="mt-1">For Development enquiries <a href="mailto:development@richardsbayfc.co.za" className="text-rbfc-blue hover:underline">development@richardsbayfc.co.za</a>.</p>
            <p className="mt-3 text-gray-400">Website developed by <span className="font-bold text-rbfc-blue">LumiWare</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
