export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-orange-100 border-t-orange-600 rounded-full animate-spin"></div>
      
    
      <p className="mt-4 text-gray-500 font-medium italic">
        Loading...
      </p>
    </div>
  );
}