"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; 
import { toast } from "react-toastify"; // 

const AnimalDetails = () => {
  const { id } = useParams();
  const router = useRouter(); 
  
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBooked, setIsBooked] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    // 
    const loggedInUser = localStorage.getItem("currentUser");
    
    if (!loggedInUser) {
      toast.error("Please login to see details!");
      router.push("/login");
      return;
    }

    // 
    const parsedUser = JSON.parse(loggedInUser);
    setUser(parsedUser);

    //
    fetch("/data/animals.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setAnimal(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [id, router]); // 

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooked(true);
    e.target.reset();
    toast.success("Booking Request Sent!");
    setTimeout(() => setIsBooked(false), 5000);
  };

  // 
  if (loading)
    return <div className="text-center py-20 font-black text-2xl animate-bounce">Loading...</div>;

  // 
  if (!user) return null;

  if (!animal)
    return (
      <div className="text-center py-20 font-black text-2xl text-red-500">
        Animal Not Found!
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* TOP SECTION: IMAGE + DETAILS */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-[400px] object-cover"
              />
            </div>

            {/* DETAILS */}
            <div className="space-y-5">
              <h1 className="text-4xl font-black text-gray-900">{animal.name}</h1>
              <p className="text-2xl font-bold text-orange-600">৳ {animal.price}</p>

              <div className="flex flex-wrap gap-2">
                  <span className="badge bg-orange-600 text-white p-4 border-none">{animal.breed}</span>
                  <span className="badge badge-outline p-4">{animal.type}</span>
                  <span className="badge badge-outline p-4">{animal.category}</span>
              </div>

              <p className="text-gray-600 leading-relaxed">{animal.description}</p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <p className="text-xs text-gray-400">Weight</p>
                    <p className="font-bold">{animal.weight} KG</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <p className="text-xs text-gray-400">Age</p>
                    <p className="font-bold">{animal.age} Years</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-xl col-span-2">
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="font-bold">{animal.location}</p>
                  </div>
              </div>
            </div>
        </div>

        {/* BOTTOM SECTION: BOOKING FORM */}
        <div className="bg-white border-2 border-gray-50 shadow-2xl rounded-[40px] p-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-center italic">
              Book This <span className="text-orange-600">Animal</span>
            </h2>

            <form onSubmit={handleBooking} className="space-y-4">
              <input
                  type="text"
                  defaultValue={user?.name} // ইউজারের নাম অটোমেটিক বসে যাবে
                  placeholder="Full Name"
                  className="input w-full bg-gray-50 rounded-2xl border-none font-bold h-14 focus:ring-2 focus:ring-orange-600"
                  required
              />

              <input
                  type="email"
                  defaultValue={user?.email} // ইউজারের ইমেইল অটোমেটিক বসে যাবে
                  placeholder="Email Address"
                  className="input w-full bg-gray-50 rounded-2xl border-none font-bold h-14 focus:ring-2 focus:ring-orange-600"
                  required
              />

              <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input w-full bg-gray-50 rounded-2xl border-none font-bold h-14 focus:ring-2 focus:ring-orange-600"
                  required
              />

              <textarea
                  placeholder="Your Delivery Address"
                  className="textarea w-full bg-gray-50 rounded-2xl border-none font-bold min-h-[120px] pt-4 focus:ring-2 focus:ring-orange-600"
                  required
              ></textarea>

              <button
                  type="submit"
                  className="btn w-full bg-gray-900 text-white rounded-2xl h-14 font-black hover:bg-orange-600 border-none transition-all duration-300 shadow-lg"
              >
                  Confirm Booking Request
              </button>
            </form>

            {isBooked && (
              <div className="mt-6 text-center text-green-600 font-black animate-pulse">
                  ✅ Booking request submitted successfully!
              </div>
            )}
        </div>
    </div>
  );
};

export default AnimalDetails;