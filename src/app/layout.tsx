import { Nunito, Quicksand } from "next/font/google";
import "@/styles/globals.css";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
export const metadata = {
  title: "zKDatabase Explorer",
  description: "Explorer for zkDatabase",
  // themeColor: "#25292F"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${nunito.variable} m-0 h-full w-full`}
      >
        <main className="min-h-screen bg-colors-background">
          <div className="flex min-h-screen justify-center self-stretch">
            <div className="flex items-center center-center mt-4 ml-4 mb-16">
              <NavBar />
              <div className="flex-auto min-w-[1104px] min-h-[765px] p-10 ">
                <div className="absolute flex justify-center items-center w-[1104px] h-[765px]">
                  <Image
                    className="absolute w-[544px] h-[593px]"
                    alt="Vector"
                    width={544}
                    height={593}
                    src="/assets/images/vector-1.svg"
                  />
                </div>
                <div className="z-10 mt-6">{children}</div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
