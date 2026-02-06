//Home page
import CallToAction from "@/src/components/ui/CallToAction";
import Hero from "@/src/components/ui/Hero";
import OurServices from "../../src/components/ui/homeComponent/OurServices";
import HowItWorks from "../../src/components/ui/homeComponent/HowItWorks";
import TrustSection from "../../src/components/ui/homeComponent/TrustSection";

const Home = () => {

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-7xl px-4">
        <Hero />
        <OurServices />
        <HowItWorks />
        <TrustSection />
        <CallToAction />
      </div>
    </main>
  )
}

export default Home
