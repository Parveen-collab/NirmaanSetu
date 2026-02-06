'use client'
export default function OurTeam() {
    return (
        <div>
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-primary">
                        Our Team
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto mb-12">
                        NirmaanSetu is built by a team passionate about technology,
                        employment, and social impact in the construction ecosystem.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Founder & Product Lead",
                            "Technology & Engineering",
                            "Operations & Workforce",
                        ].map((role, i) => (
                            <div
                                key={i}
                                className="border rounded-xl p-6 hover:shadow-md transition animate-fade"
                            >
                                <h3 className="font-semibold mb-2">{role}</h3>
                                <p className="text-muted text-sm">
                                    Building scalable, reliable, and inclusive solutions.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}