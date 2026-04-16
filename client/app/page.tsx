import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import MarketTrendsSection from '@/components/home/MarketTrendsSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MarketTrendsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
