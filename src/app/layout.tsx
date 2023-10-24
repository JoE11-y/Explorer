import { Nunito, Quicksand } from "next/font/google";
import "@/styles/globals.css";

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
        className={`bg-colors-background ${quicksand.variable} ${nunito.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
