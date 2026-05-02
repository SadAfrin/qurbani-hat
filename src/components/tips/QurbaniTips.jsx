import { FaCheckCircle, FaHandHoldingHeart, FaKhanda, FaTrashAlt } from "react-icons/fa";

const QurbaniTips = () => {
  const steps = [
    {
      title: "Selection",
      desc: "Ensure the animal meets the age requirement (Cow: 2 years, Goat: 1 year) and is in perfect health.",
      icon: <FaCheckCircle className="text-orange-500" size={36} />,
    },
    {
      title: "Animal Care",
      desc: "Provide sufficient water and light food a night before. Keep the animal calm and comfortable.",
      icon: <FaHandHoldingHeart className="text-orange-500" size={36} />,
    },
    {
      title: "Preparation",
      desc: "Use sharp tools for a quick process and follow the proper ritual facing the Qibla.",
      icon: <FaKhanda className="text-orange-500" size={36} />,
    },
    {
      title: "Cleanliness",
      desc: "Dispose of waste in designated areas and clean the surroundings with bleaching powder.",
      icon: <FaTrashAlt className="text-orange-500" size={36} />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter mb-4 text-gray-900">
            Qurbani <span className="text-orange-600">Guide & Tips</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">
            Essential guidelines to ensure a proper and sacred Qurbani process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card bg-base-100 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[32px] p-8 text-center group">
              <div className="bg-orange-50 w-20 h-20 rounded-[24px] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-bold">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="alert bg-orange-50 border-orange-100 max-w-2xl rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-orange-600 shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-orange-800 font-bold text-sm">
              Note: For detailed religious rulings, please consult your local Imam.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;