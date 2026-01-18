import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | NirmaanSetu",
  description:
    "Get in touch with NirmaanSetu support team for queries, assistance, or feedback.",
};

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 max-w-5xl mx-auto animate-fade">
      
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-primary mb-6">
        Contact Us
      </h1>

      {/* Contact Info */}
      <section className="grid sm:grid-cols-3 gap-6 mb-12">
        
        {/* Phone */}
        <div className="flex items-start gap-3 p-4 border rounded-2xl hover:shadow-md transition">
          <Phone className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Call Us</h3>
            <p className="text-muted">+91 91219 12165</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3 p-4 border rounded-2xl hover:shadow-md transition">
          <Mail className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-muted">support@nirmaansetu.in</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3 p-4 border rounded-2xl hover:shadow-md transition">
          <MapPin className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Office Address</h3>
            <p className="text-muted">
              NirmaanSetu Pvt. Ltd.<br />
              Sector Office Address, (City, State)
            </p>
          </div>
        </div>

      </section>

      {/* Get In Touch */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Get in Touch
        </h2>
        <p className="text-muted mb-4">
          Have questions or need assistance? Fill out the form below and our
          support team will reach out to you.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <input
            type="tel"
            placeholder="Your Phone Number"
            className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none w-full"
          />

          <select
            className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none w-full"
          >
            <option>I'm looking for a service</option>
            <option>I want to provide services</option>
            <option>I need support</option>
          </select>

          <textarea
            placeholder="Your Message"
            className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none w-full resize-none"
            rows={4}
          />

          <button
            type="submit"
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-95 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Embedded Map */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Find Us Here
        </h2>

        <div className="w-full aspect-video rounded-lg overflow-hidden border">
          <iframe
            className="w-full h-full"
            loading="lazy"
            src={`https://maps.google.com/maps?q=Hyderabad%20Telangana%20India&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </div>
      </section>

    </div>
  )
}

export default ContactUs