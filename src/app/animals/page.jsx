import Link from 'next/link';
import { IoChevronDownOutline } from "react-icons/io5";
import AnimalCard from '@/components/animals/AnimalCard';

async function getAllAnimals() {
  const res = await fetch('http://localhost:3000/data/animals.json', {
    next: { revalidate: 0 } 
  });
  if (!res.ok) return [];
  return res.json();
}

// searchParam ke props hisebe receive kora hocche, jate URL theke query params read kora jai
export default async function AllAnimalsPage({ searchParams }) {
  const allAnimals = await getAllAnimals();
  
  // searchParams theke sort order read kora hocche
  const params = await searchParams;
  const sortOrder = params?.sort || '';

  let selectedLabel = "Select Order";
  if (sortOrder === 'asc') selectedLabel = "Price: Low to High";
  if (sortOrder === 'desc') selectedLabel = "Price: High to Low";

  const sortedAnimals = [...allAnimals].sort((a, b) => {
    // price order onujayi animals ke sort kora hocche
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0;
  });

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter">
              All <span className="text-orange-600">Animals</span>
            </h1>
            <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-[10px]">
              Showing {sortedAnimals.length} Premium Results
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-black text-xs text-gray-400">Sort By:</span>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn bg-white border-gray-200 rounded-2xl font-black shadow-sm hover:bg-gray-100 min-w-[210px] flex justify-between items-center normal-case">
                {selectedLabel}
                <IoChevronDownOutline className="text-orange-600" size={18} />
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-2xl w-60 mt-2 border border-gray-50">
                <li>
                  <Link href="/animals?sort=asc" className={`font-bold p-4 ${sortOrder === 'asc' ? 'text-orange-600 bg-orange-50' : ''}`}>
                    Price: Low to High
                  </Link>
                </li>
                <li>
                  <Link href="/animals?sort=desc" className={`font-bold p-4 ${sortOrder === 'desc' ? 'text-orange-600 bg-orange-50' : ''}`}>
                    Price: High to Low
                  </Link>
                </li>
                <li>
                  <Link href="/animals" className={`font-bold p-4 ${!sortOrder ? 'text-orange-600 bg-orange-50' : ''}`}>
                    Default Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </section>
  );
}