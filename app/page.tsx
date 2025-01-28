import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";
import { WhyFeenax } from "@/components/WhyFeenax";
import { Blockchain } from "@/components/Blockchain";
import { Staking } from "@/components/Staking";
import { Tokenomics } from "@/components/Tokenomics";
import { ReferAndEarn } from "@/components/ReferAndEarn";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FeenaxProjects } from "@/components/FeenaxProject";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
      <Navbar />
      {/* <Features /> */}
      <Hero />
      <WhyFeenax />
      <Blockchain />
      <Staking />
      <Tokenomics />
      <Roadmap />
      <FeenaxProjects />
      <ReferAndEarn />
      <FAQ />
      <Footer />
    </main>
  );
}