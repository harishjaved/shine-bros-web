import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProcessTimeline from "@/components/ProcessTimeline";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import ContactFAQ from "@/components/ContactFAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyChooseUs />
      <BeforeAfterSlider />
      <ProcessTimeline />
      <Packages />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <ContactFAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
