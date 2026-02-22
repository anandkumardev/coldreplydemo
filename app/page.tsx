import Image from "next/image";
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import HowItWorksSection from "@/components/HowItWorks"
import Pricing from "@/components/Pricing"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <HowItWorksSection/>
      <Pricing/>
    </main>
  );
}
