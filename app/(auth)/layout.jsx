import { NavBar } from "@/components/NavBar";


export default function AuthLayout({ children }) {
  return (
    <div className="h-full w-full ">
      <NavBar/>
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}