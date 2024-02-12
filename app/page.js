import PopularBikes from "@/components/Popular/PopularBikes";
import HeroSection from "@/components/heroSection/HeroSection";
import NavigationBar from "@/components/navigationBar/NavigationBar";

export default function Home() {
  return (
    <main className="main-wrapper">
      <NavigationBar />
      <HeroSection />
      <PopularBikes />
    </main>
  );
}
