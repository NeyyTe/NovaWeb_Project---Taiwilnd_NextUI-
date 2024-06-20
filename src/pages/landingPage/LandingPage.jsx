import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";
import GridServicesSection from "@/components/gridServicesSection/GridServicesSection";
import HeroSection from "@/components/heroSection/HeroSection";
import MeetOurTeam from "@/components/meetOurTeam/MeetOurTeam";
import PouquoiNousSection from "@/components/pourquoiNousSection/PouquoiNousSection";
import TestimonialsSection from "@/components/testimonialsSection/TestimonialsSection";

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
        <Footer />
      </HeroSection>
    </>
  );
}

export default LandingPage;
