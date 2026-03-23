import Navbar from '@/components/Navbar';
import VantaBackground from '@/components/VantaBackground';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import NoScrollProvider from '@/components/NoScrollProvider';

export default function Home() {
  return (
    <NoScrollProvider>
      <VantaBackground />
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </NoScrollProvider>
  );
}