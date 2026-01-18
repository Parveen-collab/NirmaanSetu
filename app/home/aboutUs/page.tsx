import React from 'react'

export const metadata = {
  title: "About Us | NirmaanSetu",
  description:
    "Learn about NirmaanSetu, our mission, vision, values, and how we are transforming India’s construction workforce ecosystem.",
};

const AboutUs = () => {
  return (
    <main className="bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center animate-fade">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          About NirmaanSetu
        </h1>
        <p className="text-lg text-muted max-w-3xl mx-auto">
          NirmaanSetu is a digital platform built to organize, empower, and
          connect India’s construction workforce with contractors, builders,
          and material suppliers — transparently and efficiently.
        </p>
      </section>

      {/* ================= WHO WE ARE ================= */}
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

      {/* ================= MISSION / VISION / VALUES ================= */}
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

      {/* ================= WHY NIRMAANSETU ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Why NirmaanSetu?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Verified workers and contractors",
            "Location-based hiring & job discovery",
            "Simple and accessible user experience",
            "Reduced dependency on middlemen",
            "Better wages and fair opportunities",
            "Transparent communication & trust",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-md transition animate-fade"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
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

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Join the NirmaanSetu Ecosystem
        </h2>
        <p className="text-muted mb-8">
          Whether you are a worker, contractor, or supplier — NirmaanSetu
          is built for you.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/jobs"
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Find Jobs
          </a>

          <a
            href="/workforce"
            className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition cursor-pointer"
          >
            Hire Workers
          </a>
        </div>
      </section>

    </main>
  )
}

export default AboutUs