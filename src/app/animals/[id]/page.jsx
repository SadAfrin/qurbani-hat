"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; 
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { IoLocationOutline, IoCalendarOutline, IoScaleOutline, IoInformationCircleOutline } from "react-icons/io5";

const AnimalDetails = () => {
  const { id } = useParams();
  const router = useRouter(); 
  
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBooked, setIsBooked] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const { data: session, isPending: authLoading } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    setHasMounted(true);

    const fetchAnimalData = async () => {
      try {
        const res = await fetch("/api/animals");
        const data = await res.json();
        const found = data.find((item) => item.id.toString() === id);
        setAnimal(found);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchAnimalData();
  }, [id]);

  useEffect(() => {
    if (hasMounted && !authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, hasMounted, router]);

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooked(true);
    toast.success("Booking Request Sent Successfully!");
    e.target.reset();
    setTimeout(() => setIsBooked(false), 5000);
  };

  if (!hasMounted || authLoading || loading) {
    return <div className="text-center py-20 font-black text-2xl animate-bounce text-orange-600">Loading...</div>;
  }

  if (!user || !animal) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Professional Image Gallery Style */}
        <div className="lg:col-span-7">
          <div className="sticky top-28">
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  {animal.category}
                </span>
                <span className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  {animal.type}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Enhanced Content Layout */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
              <IoInformationCircleOutline size={20} />
              <span className="uppercase tracking-[0.2em] text-xs">Premium Listing</span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 leading-tight tracking-tighter">
              {animal.name}
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-4xl font-black text-orange-600">৳ {animal.price.toLocaleString()}</span>
              <span className="text-gray-400 font-bold line-through text-lg">৳ {(animal.price + 5000).toLocaleString()}</span>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
            <p className="text-gray-600 leading-relaxed font-medium italic">
              "{animal.description}"
            </p>
          </div>

          {/* Icon-based Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-2xl">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                <IoScaleOutline size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Weight</p>
                <p className="text-lg font-black text-gray-800">{animal.weight} KG</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-2xl">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <IoCalendarOutline size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Age</p>
                <p className="text-lg font-black text-gray-800">{animal.age} Years</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-2xl col-span-2">
              <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                <IoLocationOutline size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Origin / Location</p>
                <p className="text-lg font-black text-gray-800">{animal.location}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-2 bg-orange-50 border border-orange-100 rounded-2xl">
            <div className="w-full text-center py-3">
              <p className="text-xs font-black text-orange-600 uppercase">Breed</p>
              <p className="font-bold text-gray-800">{animal.breed}</p>
            </div>
            <div className="w-[1px] bg-orange-200"></div>
            <div className="w-full text-center py-3">
              <p className="text-xs font-black text-orange-600 uppercase">Status</p>
              <p className="font-bold text-gray-800">Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="mt-24">
        <div className="bg-white border-2 border-gray-50 shadow-2xl rounded-[3rem] p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
            
            <h2 className="text-4xl font-black mb-10 text-center tracking-tighter">
              Reserve Your <span className="text-orange-600">Choice</span>
            </h2>

            <form onSubmit={handleBooking} className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase text-gray-400 ml-2">Full Name</label>
                  <input
                      type="text"
                      defaultValue={user?.name}
                      placeholder="Enter Name"
                      className="input w-full bg-gray-50 rounded-2xl border-2 border-transparent font-bold h-14 focus:border-orange-600 focus:bg-white transition-all outline-none"
                      required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase text-gray-400 ml-2">Email Address</label>
                  <input
                      type="email"
                      defaultValue={user?.email}
                      placeholder="Enter Email"
                      className="input w-full bg-gray-50 rounded-2xl border-2 border-transparent font-bold h-14 focus:border-orange-600 focus:bg-white transition-all outline-none"
                      required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase text-gray-400 ml-2">Phone</label>
                  <input
                      type="tel"
                      placeholder="017XXXXXXXX"
                      className="input w-full bg-gray-50 rounded-2xl border-2 border-transparent font-bold h-14 focus:border-orange-600 focus:bg-white transition-all outline-none"
                      required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-gray-400 ml-2">Delivery Address</label>
                <textarea
                    placeholder="Provide detailed address..."
                    className="textarea w-full bg-gray-50 rounded-2xl border-2 border-transparent font-bold h-[224px] pt-4 focus:border-orange-600 focus:bg-white transition-all outline-none"
                    required
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                    type="submit"
                    className="btn w-full bg-gray-900 text-white rounded-2xl h-16 font-black hover:bg-orange-600 border-none transition-all duration-300 shadow-xl text-lg uppercase tracking-wider"
                >
                    Confirm Booking Request
                </button>
              </div>
            </form>

            {isBooked && (
              <div className="mt-8 p-4 bg-green-50 border border-green-100 rounded-2xl text-center text-green-700 font-black animate-bounce">
                  ✅ Your booking request for {animal.name} has been sent!
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;