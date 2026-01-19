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

                    <Button>
                        Hire Workers
                    </Button>

                    <Button>
                        Sell Materials
                    </Button>
                </div>

            </section>
        </div>
    )
}