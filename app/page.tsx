import Navbar from '@/components/Navbar';
import VantaBackground from '@/components/VantaBackground';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <VantaBackground />
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}