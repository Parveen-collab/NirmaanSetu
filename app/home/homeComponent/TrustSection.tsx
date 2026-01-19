'use client'
export default function TrustSection() {
    return (
        <div>
            <section className="py-16 bg-primary text-white px-6">
                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {[
                        "Verified Workforce",
                        "Nearby Hiring",
                        "Fair Pricing",
                        "Trusted Platform",
                    ].map((item, i) => (
                        <div key={i} className="animate-fade">
                            <h3 className="text-xl font-semibold">{item}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}