import { IoLocationOutline } from "react-icons/io5";
import { GiWeight } from "react-icons/gi";
import Link from 'next/link';

const AnimalCard = ({ animal }) => {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-[32px] group overflow-hidden h-full">
      <figure className="px-4 pt-4 relative">
        <img
          src={animal.image}
          alt={animal.name}
          className="rounded-[24px] h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="badge badge-ghost bg-white/80 backdrop-blur-sm absolute top-8 left-8 border-none text-orange-600 font-black text-[10px] tracking-widest uppercase py-3 px-4">
          {animal.type}
        </div>
      </figure>

      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-black text-gray-900 tracking-tight">
          {animal.name}
        </h2>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-bold">
          <IoLocationOutline className="text-orange-500" /> {animal.location}
        </div>

        <div className="flex gap-3 my-4">
          <div className="badge badge-outline border-gray-100 py-4 px-4 rounded-xl flex gap-2">
            <GiWeight className="text-orange-600" />
            <span className="text-sm font-black text-gray-700">{animal.weight} KG</span>
          </div>
          <div className="badge badge-outline border-gray-100 py-4 px-4 rounded-xl flex gap-2">
            <span className="text-sm font-black text-gray-700">{animal.age} Yrs</span>
          </div>
        </div>

        <div className="card-actions items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span className="text-2xl font-black text-orange-600">
            ৳{animal.price.toLocaleString()}
          </span>
          
          
          <Link href={`/animals/${animal.id}`}>
            <button className="btn btn-ghost bg-gray-900 hover:bg-orange-600 text-white rounded-2xl px-6 font-black text-xs normal-case border-none">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;