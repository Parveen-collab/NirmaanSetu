'use client'

import React from 'react'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const SocialMedia = () => {
  const socials = [
    {
      icon: FaInstagram,
      label: 'Instagram',
      link: 'https://www.instagram.com/',
      hover: 'hover:bg-[#E4405F] hover:border-[#E4405F]',
    },
    {
      icon: FaFacebookF,
      label: 'Facebook',
      link: 'https://www.facebook.com/',
      hover: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
    },
    {
      icon: FaXTwitter,
      label: 'X (Twitter)',
      link: 'https://x.com/',
      hover: 'hover:bg-black hover:border-black',
    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com',
      hover: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
    }
  ]

  return (
    <div className="flex gap-4">
      {socials.map(({ icon: Icon, label, link, hover }) => (
        <a
          key={label}
          href={link}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-full border border-zinc-400
            flex items-center justify-center
            text-zinc-600 dark:text-zinc-300
            hover:text-white transition
            ${hover}`}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
