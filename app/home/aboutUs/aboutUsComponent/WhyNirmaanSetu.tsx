'use client'
export default function WhyNirmaanSetu() {
    return (
        <div>
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                    Why NirmaanSetu?
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Verified workers and contractors",
                        "Location-based hiring & job discovery",
                        "Simple and accessible user experience",
                        "Reduced dependency on middlemen",
                        "Better wages and fair opportunities",
                        "Transparent communication & trust",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="border rounded-xl p-6 hover:shadow-md transition animate-fade"
                        >
                            <p className="font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}