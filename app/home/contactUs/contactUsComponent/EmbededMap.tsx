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
                        src={`https://maps.google.com/maps?q=Hyderabad%20Telangana%20India&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    ></iframe>
                </div>
            </section>
        </div>
    )
}