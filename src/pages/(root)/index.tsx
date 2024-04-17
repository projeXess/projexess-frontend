import Faq from "@/components/landing/Faq";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import OurTeam from "@/components/landing/OurTeam";
import Product from "@/components/landing/Product";
import Testimonials from "@/components/landing/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <OurTeam />
      <Product />
      <Testimonials />
      <Faq />
    </>
  )
}
