'use client'

import Button from "@/src/components/features/Button"

export default function GetInTouch() {
    return (
        <div>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                    Get in Touch
                </h2>
                <p className="text-muted mb-4">
                    Have questions or need assistance? Fill out the form below and our
                    support team will reach out to you.
                </p>

                {/* Form */}
                <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    <input
                        type="tel"
                        placeholder="Your Phone Number"
                        className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none w-full"
                    />

                    <select
                        className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none w-full"
                    >
                        <option>I'm looking for a service</option>
                        <option>I want to provide services</option>
                        <option>I need support</option>
                    </select>

                    <textarea
                        placeholder="Your Message"
                        className="border rounded-lg p-3 bg-background focus:ring-2 focus:ring-primary outline-none w-full resize-none"
                        rows={4}
                    />

                    <Button>
                        Submit
                    </Button>
                    {/* <button
                        type="submit"
                        className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-95 transition cursor-pointer"
                    >
                        Submit
                    </button> */}
                </form>
            </section>
        </div>
    )
}