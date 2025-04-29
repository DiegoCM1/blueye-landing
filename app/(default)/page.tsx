export const metadata = {
  title: "BluEye",
  description: "BluEye is your personalized hurricane prevention system. Get real-time alerts, tailored safety advice, and early warnings powered by AI. Protect yourself, your family, and your community with BluEyes.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import WaitlistForm from "@/components/waitlistForm";


export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <WaitlistForm />
      <Cta />
    </>
  );
}
