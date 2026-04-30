const TopBreeds = () => {
  const breeds = [
    { 
      name: "Sahiwal", 
      origin: "Pakistan/India", 
      trait: "High Growth", 
      image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53",
      color: "bg-orange-100"
    },
    { 
      name: "Brahman", 
      origin: "USA", 
      trait: "Heat Tolerant", 
      image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9",
      color: "bg-blue-100"
    },
    { 
      name: "Black Bengal", 
      origin: "Bangladesh", 
      trait: "Premium Meat", 
      image: "https://images.unsplash.com/photo-1524024973431-2ad916746881",
      color: "bg-emerald-100"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-l-8 border-orange-600 pl-6">
          <div>
            <h2 className="text-5xl font-black text-gray-900 tracking-tighter">
              Top <span className="text-orange-600">Breeds</span> to Watch
            </h2>
            <p className="text-gray-500 font-bold mt-2 uppercase tracking-widest text-xs">Explore the most premium livestock breeds</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {breeds.map((breed, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[40px] bg-white p-4 transition-all duration-500 hover:shadow-2xl border border-gray-100">
              <div className={`relative h-64 w-full overflow-hidden rounded-[32px] ${breed.color}`}>
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 right-4">
                   <div className="badge bg-white/90 backdrop-blur-md border-none text-gray-900 font-black p-4 rounded-xl shadow-sm text-[10px]">
                     Origin: {breed.origin}
                   </div>
                </div>
              </div>

              <div className="mt-6 px-4 pb-4">
                <div className="flex items-center justify-between mb-3">
                   <h3 className="text-3xl font-black text-gray-900 tracking-tight">{breed.name}</h3>
                   <span className="text-[10px] font-black bg-orange-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">
                     {breed.trait}
                   </span>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed">
                  Excellent choice for Qurbani with superior health and meat quality.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBreeds;