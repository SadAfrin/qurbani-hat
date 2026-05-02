"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client"; 

const UpdateProfile = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch current session data from database
  const { data: session, isPending: authLoading } = authClient.useSession();

  useEffect(() => {
    if (!authLoading) {
      if (session?.user) {
        setName(session.user.name || "");
        setPhoto(session.user.image || ""); // BetterAuth uses 'image' field
      } else {
        router.push("/login");
      }
    }
  }, [session, authLoading, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // DATABASE UPDATE using BetterAuth
      const { data, error } = await authClient.updateUser({
        name: name,
        image: photo,
      });

      if (error) {
        throw new Error(error.message);
      }

      toast.success("Profile updated in database successfully!");
      router.push("/profile"); 
      
    } catch (error) {
      toast.error(error.message || "Update failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Prevent flash of empty form while session is loading
  if (authLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 flex items-center justify-center">
      <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 w-full max-w-lg border-2 border-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900">
            Update <span className="text-orange-600">Info</span>
          </h2>
          <p className="text-gray-500 font-medium mt-2">Refresh your profile details</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-400 ml-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input w-full bg-gray-50 rounded-2xl border-none font-bold h-14 focus:ring-2 focus:ring-orange-600 shadow-sm px-4"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-400 ml-2">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Paste image URL here"
              className="input w-full bg-gray-50 rounded-2xl border-none font-bold h-14 focus:ring-2 focus:ring-orange-600 shadow-sm px-4"
              required
            />
          </div>

          {/* Preview */}
          {photo && (
            <div className="flex justify-center py-2">
               <img src={photo} alt="Preview" className="w-20 h-20 rounded-full object-cover border-2 border-orange-500" />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`btn w-full bg-gray-900 text-white rounded-2xl h-14 font-black hover:bg-orange-600 border-none transition-all shadow-lg ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
          
          <button 
            type="button"
            onClick={() => router.back()}
            className="btn btn-ghost w-full text-gray-400 font-bold"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;