import { NavBar } from "@/components/NavBar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex self-stretch justify-center mt-8">
      <div className="flex flex-row justify-center center-center">
        <NavBar />
        <div
          className="p-6 bg-bottom bg-no-repeat w-[1280px] max-w-screen-xl"
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
