// src/components/animals/FeaturedAnimals.jsx
import AnimalCard from './AnimalCard'; 

// async function getFeaturedAnimals() {
//   const res = await fetch(
//     `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'}/api/animals`, 
//     { cache: 'no-store' }
//   );
//   if (!res.ok) return [];
//   const data = await res.json();
//   return data.filter(a => a.type === "Cow" || a.type === "Goat" || a.type === "Sheep" || a.type === "Camel").slice(0, 4);
// }

async function getFeaturedAnimals() {
  const host = 'https://qurbani-hat-e7bp.vercel.app';

  try {
    const res = await fetch(`${host}/api/animals`, {
      cache: 'no-store',
    });

    if (!res.ok) return [];

    const data = await res.json();

    // Cow, Goat, Sheep, বা Camel ফিল্টার করে প্রথম ৪টি ডাটা নেওয়া হচ্ছে
    return data
      .filter(a => ["Cow", "Goat", "Sheep", "Camel"].includes(a.type))
      .slice(0, 4);
      
  } catch (error) {
    console.error("Error fetching featured animals:", error);
    return [];
  }
}

const FeaturedAnimals = async () => {
  const animals = await getFeaturedAnimals();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-4">
            Featured <span className="text-orange-600">Animals</span>
          </h2>
          <p className="text-gray-500 font-medium">Handpicked healthy livestock for your needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;