import { Faq } from "@/components/faq";
import { Featured } from "@/components/featured";
import { Features } from "@/components/features";
import { Feedback } from "@/components/feedback";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/hero/hero";
import { Pricing } from "@/components/pricing";
import { UseCases } from "@/components/use-cases";
import { Demo } from "@/features/demo";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-hero-background bg-cover flex justify-center">
        <Hero />
      </div>
      <Stats />
      <div className="flex justify-center">
        <Features />
      </div>

      <div className="flex justify-center bg-neutral-700">
        <Demo />
      </div>

      <div className="flex justify-center bg-neutral-700">
        <UseCases />
      </div>

      <div className="flex justify-center bg-neutral-700">
        <Pricing />
      </div>

      {/* <div className="flex justify-center bg-neutral-700 py-40">
        <Feedback />
      </div> */}

      <div className="flex justify-center">
        <Featured />
      </div>
      <div className="flex justify-center bg-neutral-700">
        <Faq />
      </div>
      <div className="flex justify-center bg-neutral-500">
        <Footer />
      </div>
    </main>
  );
}
