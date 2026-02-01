'use client'
export default function OurServices() {
    return (
        <div>
            <section className="py-10 bg-zinc-50 dark:bg-zinc-900 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-primary">
                        What We Offer
                    </h2>
                    <p className="text-muted max-w-xl mx-auto mb-12">
                        A complete ecosystem for construction workers, contractors,
                        and material suppliers.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Job matching for skilled labour",
                            "Verified contractors & workers",
                            "Location-based hiring",
                            "Construction material marketplace",
                            "Transparent communication",
                            "Secure & trusted ecosystem",
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="border rounded-xl p-6 text-left hover:shadow transition animate-fade"
                            >
                                <p className="font-medium">{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}