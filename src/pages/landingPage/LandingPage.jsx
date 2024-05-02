import HeroSection from "@/components/heroSection/HeroSection";
import React from "react";
import GridServicesSection from "@/components/gridServicesSection/GridServicesSection";
import PouquoiNousSection from "@/components/pourquoiNousSection/PouquoiNousSection";
import TestimonialsSection from "@/components/testimonialsSection/TestimonialsSection";
import MeetOurTeam from "@/components/meetOurTeam/MeetOurTeam";
import ContactSection from "@/components/contactSection/ContactSection";

function LandingPage() {
  return (
    <>
      <HeroSection>
        <GridServicesSection />
        <PouquoiNousSection />
        <TestimonialsSection>
          <MeetOurTeam />
        </TestimonialsSection>
        <ContactSection />
      </HeroSection>
    </>
  );
}

export default LandingPage;
