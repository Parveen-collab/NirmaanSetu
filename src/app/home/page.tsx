//Home page
import CallToAction from "@/src/components/features/CallToAction";
import Hero from "@/src/components/features/Hero";
import OurServices from "@/src/components/features/home/OurServices";
import HowItWorks from "@/src/components/features/home/HowItWorks";
import TrustSection from "@/src/components/features/home/TrustSection";

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
