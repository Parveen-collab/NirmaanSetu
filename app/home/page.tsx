//Home page
import CallToAction from "@/src/components/ui/CallToAction";
import Hero from "@/src/components/ui/Hero";
import OurServices from "./homeComponent/OurServices";
import HowItWorks from "./homeComponent/HowItWorks";
import TrustSection from "./homeComponent/TrustSection";

const Home = () => {

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Main Content */}
      <main className="bg-background text-foreground">
        {/* HERO SECTION */}
        <Hero/>

        {/* SERVICES OVERVIEW */}
        <OurServices/>

        {/* HOW IT WORKS */}
        <HowItWorks/>

        {/* TRUST SECTION */}
        <TrustSection/>

        {/* FINAL CTA */}
        <CallToAction/>
      </main>
    </div>
  )
}

export default Home
