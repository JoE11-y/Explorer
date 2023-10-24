import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex self-stretch justify-center mt-8">
      <div className="flex flex-row justify-center center-center">
        <NavBar />
        <div
          className="p-6 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/images/vector-1.svg')`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
