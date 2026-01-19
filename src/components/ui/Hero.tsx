'use client'

export default function Hero() {
    return (
        <div>
            {/* ================= HERO ================= */}
            <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 animate-fade">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    India’s Construction Workforce Platform
                </h1>

                <p className="text-lg text-muted max-w-2xl mb-8">
                    NirmaanSetu connects skilled workers, contractors, and material suppliers
                    to build faster, smarter, and more transparently.
                </p>
            </section>
        </div>
    )
}