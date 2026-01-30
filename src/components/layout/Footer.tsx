'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import CopyrightFooter from './CopyrightFooter'

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
              {['I', 'f', 'L', 'X'].map((icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 rounded-full border border-zinc-400 flex items-center justify-center hover:bg-primary hover:border-primary transition cursor-pointer"
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
                { label: 'Home', href: '/home' },
                { label: 'Media & Coverages', href: '/home/media-coverage' },
                { label: 'Blogs', href: '/home/blogs' },
                { label: 'About Us', href: '/home/aboutUs' },
                { label: 'Contact Us', href: '/home/contactUs' },
                { label: 'FAQs', href: '/home/faq' },
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
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-zinc-300 mb-6">
              {[
                { label: 'Find Works', href: '/home/login' },
                { label: 'Hiring', href: '/home/login' },
                { label: 'Selling', href: '/home/login' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-primary transition">
                    » {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4">Address</h3>
            <div className="space-y-4 text-sm text-zinc-300">

              {/* Address → Google Maps */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nagar+Bihta+Laee+Bihta+Patna+Bihar+801112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-white transition"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span>
                  Nagar Bihta, Laee, Bihta <br />
                  Patna, Bihar, India-801112
                </span>
              </a>

              {/* Phone → Dialer */}
              <a
                href="tel:+917527975589"
                className="flex gap-3 hover:text-white transition"
              >
                <Phone className="w-5 h-5 text-primary" />
                +91 7527975589
              </a>

              {/* Email → Gmail / Mail App */}
              <a
                href="mailto:pk16061999@gmail.com"
                className="flex gap-3 hover:text-white transition"
              >
                <Mail className="w-5 h-5 text-primary" />
                pk16061999@gmail.com
              </a>

            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 text-xs text-zinc-400
                        flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            <Link href="/home/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            {' '} / {' '}
            <Link href="/home/term-condition" className="hover:text-primary">Terms & Conditions</Link>
            {' '} / {' '}
            <Link href="/home/refund-policy" className="hover:text-primary">
              Refund & Cancellation Policy
            </Link>
          </p>

          <CopyrightFooter />
          {/* <p>
            © {new Date().getFullYear()} NirmaanSetu. All Rights Reserved.
          </p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
