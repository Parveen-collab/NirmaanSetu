'use client'
import Link from "next/link";
import CallToAction from "./aboutUs/aboutUsComponent/CallToAction";
import Button from "@/src/components/ui/Button";

const Home = () => {

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Main Content */}
      <main className="bg-background text-foreground">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 animate-fade">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            India’s Construction Workforce Platform
          </h1>

          <p className="text-lg text-muted max-w-2xl mb-8">
            NirmaanSetu connects skilled workers, contractors, and material suppliers
            to build faster, smarter, and more transparently.
          </p>
        </section>

        {/* ================= QUICK ACTIONS ================= */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { title: "Find Jobs", desc: "Daily & contract work nearby", link: "/jobs" },
              { title: "Hire Workers", desc: "Verified skilled workforce", link: "/workforce" },
              { title: "Sell Materials", desc: "List products from your shop", link: "/sell-materials" },
              { title: "Buy Materials", desc: "Compare prices near you", link: "/buy-materials" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="border rounded-2xl p-6 hover:shadow-md transition cursor-pointer animate-fade"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= SERVICES OVERVIEW ================= */}
        <section className="py-20 bg-zinc-50 dark:bg-zinc-900 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              What We Offer
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-12">
              A complete ecosystem for construction workers, contractors,
              and material suppliers.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Job matching for skilled labour",
                "Verified contractors & workers",
                "Location-based hiring",
                "Construction material marketplace",
                "Transparent communication",
                "Secure & trusted ecosystem",
              ].map((service, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-6 text-left hover:shadow transition animate-fade"
                >
                  <p className="font-medium">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            How It Works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              "Register with mobile number",
              "Create your profile",
              "Search or post work",
              "Connect & start work",
            ].map((step, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 hover:shadow-md transition animate-fade"
              >
                <div className="text-2xl font-bold text-primary mb-2">
                  {i + 1}
                </div>
                <p className="text-muted">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TRUST SECTION ================= */}
        <section className="py-16 bg-primary text-white px-6">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              "Verified Workforce",
              "Nearby Hiring",
              "Fair Pricing",
              "Trusted Platform",
            ].map((item, i) => (
              <div key={i} className="animate-fade">
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Start Building with NirmaanSetu
          </h2>
          <p className="text-muted mb-6">
            Whether you’re a worker, contractor, or supplier — we’ve got you covered.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/home/login">
              Get Started
            </Button>
          </div>
          {/* <Link
            href="/jobs"
            className="px-10 py-4 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Get Started
          </Link> */}
        </section>

      </main>
    </div>
  )
}

export default Home
