'use client'
export default function MissioVissionValues() {
    return (
        <div>
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 text-center">

                        <div className="border rounded-2xl p-6 hover:shadow-md transition animate-fade">
                            <h3 className="text-xl font-semibold mb-3 text-primary">
                                Our Mission
                            </h3>
                            <p className="text-muted leading-6">
                                To empower construction workers with consistent opportunities
                                and help contractors hire faster through a transparent digital
                                platform.
                            </p>
                        </div>

                        <div className="border rounded-2xl p-6 hover:shadow-md transition animate-fade">
                            <h3 className="text-xl font-semibold mb-3 text-primary">
                                Our Vision
                            </h3>
                            <p className="text-muted leading-6">
                                To become India’s most trusted ecosystem for construction
                                workforce management and material sourcing.
                            </p>
                        </div>

                        <div className="border rounded-2xl p-6 hover:shadow-md transition animate-fade">
                            <h3 className="text-xl font-semibold mb-3 text-primary">
                                Our Values
                            </h3>
                            <p className="text-muted leading-6">
                                Trust, transparency, fairness, dignity of labour, and
                                technology-driven inclusion.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}