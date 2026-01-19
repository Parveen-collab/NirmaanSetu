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
        </div>
    )
}