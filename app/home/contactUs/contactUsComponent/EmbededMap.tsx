'use client'
export default function EmbededMap() {
    return (
        <div>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                    Find Us Here
                </h2>

                <div className="w-full aspect-video rounded-lg overflow-hidden border">
                    <iframe
                        className="w-full h-full"
                        loading="lazy"
                        src={`https://www.google.com/maps?q=Lai+Bihta+Patna+Bihar&z=17&output=embed`}
                    ></iframe>
                </div>
            </section>
        </div>
    )
}