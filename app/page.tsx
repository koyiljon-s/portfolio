import Navbar from '@/components/Navbar';
import VantaBackground from '@/components/VantaBackground';
import HeroSection from '@/components/HeroSection';
import NoScrollProvider from '@/components/NoScrollProvider';

export default function Home() {
  return (
    <NoScrollProvider>
      <VantaBackground />
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </NoScrollProvider>
  );
}