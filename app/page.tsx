import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import HowItWorksSection from "@/components/HowItWorks"
import UseCases from "@/components/UseCases"
import WhyNotChatgpt from "@/components/WhyNotChatgpt"
import Pricing from "@/components/Pricing"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <HowItWorksSection/>
      <UseCases/>
      <WhyNotChatgpt/>
      <Pricing/>
      {/* <Banner/> */}
      <Footer/>
    </main>
  );
}
