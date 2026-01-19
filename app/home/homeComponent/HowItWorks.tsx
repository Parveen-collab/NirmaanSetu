'use client'
export default function HowItWorks() {
    return (
        <div>
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                    How It Works
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {[
                        "Register with mobile number",
                        "Create your profile",
                        "Search or post work",
                        "Connect & start work",
                    ].map((step, i) => (
                        <div
                            key={i}
                            className="border rounded-xl p-6 hover:shadow-md transition animate-fade"
                        >
                            <div className="text-2xl font-bold text-primary mb-2">
                                {i + 1}
                            </div>
                            <p className="text-muted">{step}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}