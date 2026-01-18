'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-900" />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-primary">
              NirmaanSetu
            </h2>
            <p className="text-sm text-zinc-300 leading-6 mb-6">
              A digital platform connecting construction workers, contractors,
              and material suppliers across India.
            </p>

            {/* Social Icons (placeholders) */}
            <div className="flex gap-4">
              {['W', 'F', 'I', 'X'].map((icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 rounded-full border border-zinc-400 flex items-center justify-center
                             hover:bg-primary hover:border-primary transition cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Services', href: '/services' },
                { label: 'Blog', href: '/blogs' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-primary transition">
                    » {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Construction Services</h3>
            <ul className="space-y-2 text-sm text-zinc-300 mb-6">
              <li>» Daily Labour</li>
              <li>» Masons</li>
              <li>» Loading & Unloading</li>
              <li>» Digging</li>
            </ul>

            <h3 className="font-semibold mb-4">Home Services</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>» Plumbers</li>
              <li>» Carpenters</li>
              <li>» House Keeping</li>
              <li>» Electrician</li>
              <li>» Painting</li>
              <li>» Pest Control</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4">Address</h3>
            <div className="space-y-4 text-sm text-zinc-300">
              <p className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                NirmaanSetu Private Limited <br />
                City, State, India
              </p>

              <p className="flex gap-3">
                <Phone className="w-5 h-5 text-primary" />
                +91 91219 12165
              </p>

              <p className="flex gap-3">
                <Mail className="w-5 h-5 text-primary" />
                support@nirmaansetu.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 text-xs text-zinc-400
                        flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            {' '} / {' '}
            <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
            {' '} / {' '}
            <Link href="/refund-policy" className="hover:text-primary">
              Refund & Cancellation Policy
            </Link>
          </p>

          <p>
            © {new Date().getFullYear()} NirmaanSetu. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
