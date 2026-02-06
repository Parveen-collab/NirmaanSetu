'use client'
import { Phone, Mail, MapPin } from "lucide-react";
export default function ContactInfo() {
    return (
        <div>
            <section className="grid sm:grid-cols-3 gap-6 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-3 p-4 border rounded-2xl hover:shadow-md transition">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <a
                            href="tel:+917527975589"
                            className="flex gap-3 hover:text-red transition"
                        >
                            <p className="text-muted">+91 7527975589</p>
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-4 border rounded-2xl hover:shadow-md transition">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <a
                            href="mailto:pk16061999@gmail.com"
                            className="flex gap-3 hover:text-red transition"
                        >
                            <p className="text-muted">support@nirmaansetu.in</p>
                        </a>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-4 border rounded-2xl hover:shadow-md transition">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg">Office Address</h3>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Nagar+Bihta+Laee+Bihta+Patna+Bihar+801112"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-3 hover:text-red transition"
                        >
                            <p className="text-muted">
                                NirmaanSetu Pvt. Ltd.<br />
                                Nagar Bihta, (Patna, Bihar-801112)
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}