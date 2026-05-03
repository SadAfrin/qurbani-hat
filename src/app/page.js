import FeaturedAnimals from "@/components/animals/FeaturedAnimals";
import TopBreeds from "@/components/breeds/TopBreeds";
import Hero from "@/components/hero/Hero";
import QurbaniTips from "@/components/tips/QurbaniTips";
// import Image from "next/image";

export default function Home() {
  return (
    <main> 
        <Hero />
        <FeaturedAnimals />
        <TopBreeds />
        <QurbaniTips />
    </main>
  );
}
