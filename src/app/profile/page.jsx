"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UserProfile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const loggedInUser = localStorage.getItem("currentUser");

    if (!loggedInUser) {
      toast.warn("Please login to access your profile.");
      router.push("/login");
      return;
    }

    setUser(JSON.parse(loggedInUser));
  }, [router]);

  if (!hasMounted || !user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-gray-900">
            My <span className="text-orange-600">Profile</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border-2 border-white animate__animated animate__backInUp">
          {/* Cover/Background Accent */}
          <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-600 w-full"></div>

          <div className="px-8 pb-12">
            <div className="relative flex justify-center -mt-16 mb-6">
              {/* Profile Image */}
              <div className="p-1.5 bg-white rounded-full shadow-lg">
                <img
                  src={user.photo || "https://i.ibb.co/mR79Y6B/user-placeholder.png"}
                  alt={user.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-orange-50"
                />
              </div>
            </div>

            <div className="text-center space-y-6">
              {/* User Info */}
              <div>
                <h2 className="text-3xl font-black text-gray-800 lowercase">{user.name}</h2>
                <p className="text-orange-600 font-bold tracking-widest text-xs uppercase mt-1">
                  Verified User
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto">
                <div className="bg-gray-50 p-6 rounded-3xl text-left border border-gray-100">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Full Name</p>
                  <p className="text-gray-800 font-bold">{user.name}</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-3xl text-left border border-gray-100">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Email Address</p>
                  <p className="text-gray-800 font-bold truncate">{user.email}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <button 
                className="btn bg-gray-900 text-white rounded-2xl px-8 h-14 font-black hover:bg-orange-600 border-none transition-all shadow-lg"
                onClick={() => router.push("/profile/update")} 
                >
                  Edit Profile
                </button>
                <button 
                  onClick={() => {
                    localStorage.removeItem("currentUser");
                    router.push("/login");
                    toast.success("Logged out successfully");
                  }}
                  className="btn bg-red-50 text-red-600 rounded-2xl px-8 h-14 font-black hover:bg-red-600 hover:text-white border-none transition-all"
                >
                  Logout Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;