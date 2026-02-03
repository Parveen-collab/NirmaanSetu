'use client'
export default function Header() {
    return (
        <div>
            <section className="min-h-[40vh] flex flex-col items-center justify-center text-center px-6 animate-fade">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Blogs & Articles
                </h1>
                <p className="text-lg text-muted max-w-2xl mb-8">
                    Insights, guides, and updates on construction labour, workforce
                    management, and industry trends.
                </p>
            </section>
        </div>
    )
}