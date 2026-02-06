'use client'
export default function () {
    return (
        <div>
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-primary">
                            Who We Are
                        </h2>
                        <p className="text-muted leading-7 mb-4">
                            The construction sector in India largely operates in an
                            unorganized manner. Workers struggle to find consistent jobs,
                            contractors struggle to find reliable labour, and material
                            suppliers lack digital visibility.
                        </p>
                        <p className="text-muted leading-7">
                            NirmaanSetu bridges these gaps by creating a single digital
                            ecosystem that enables hiring, job discovery, and material
                            sourcing — all in one place.
                        </p>
                    </div>

                    <div className="border rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">
                            What We Solve
                        </h3>
                        <ul className="space-y-3 text-muted">
                            <li>• Fragmented and unorganized labour hiring</li>
                            <li>• Lack of verified and trusted workforce</li>
                            <li>• Delays in hiring and project execution</li>
                            <li>• Limited digital reach for material suppliers</li>
                            <li>• Lack of transparency and accountability</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}