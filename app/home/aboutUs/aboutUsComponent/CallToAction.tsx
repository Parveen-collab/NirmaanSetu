'use client'

import Button from "@/src/components/ui/Button"

export default function CallToAction() {
    return (
        <div>
            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                    Join the NirmaanSetu Ecosystem
                </h2>
                <p className="text-muted mb-8">
                    Whether you are a worker, contractor, or supplier — NirmaanSetu
                    is built for you.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Button>
                        Find Works
                    </Button>
                    {/* <a
                        href="/jobs"
                        className="px-8 py-3 border border-primary bg-primary text-black rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                        Find Works
                    </a> */}

                    <Button>
                        Hire Workers
                    </Button>
                    {/* <a
                        href="/workforce"
                        className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary hover: transition cursor-pointer"
                    >
                        Hire Workers
                    </a> */}
                </div>
            </section>
        </div>
    )
}