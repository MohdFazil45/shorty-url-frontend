import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-teal-500 font-bold text-7xl">Shorty URL</h1>
      <p className="text-gray-500 mt-4">Shortens your url with <span className="text-teal-500">Shorty URL</span> for free.</p>
      <div className="w-1/2 h-10 overflow-hidden bg-red-100 flex items-center justify-center mt-12 rounded-lg border-2 border-teal-500">
        <input className="w-[85%] bg-white focus:outline-none text-black p-2 placeholder:text-gray-600" type="text" placeholder="Paste your Url"/>
        <button className="w-[16%] h-full bg-teal-500 text-black text-shadow-lg text-lg font-medium cursor-pointer hover:bg-teal-800 hover:text-white transition duration-200">Paste Url</button>
      </div>
      <div>
        
      </div>
    </div>
  );
}
