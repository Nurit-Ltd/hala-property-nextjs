import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import NavSmall from "@/components/shared/Navbar/NavSmall";
import NavBottom from "@/components/shared/NavBottom/NavBottom";
import { AiProvider } from "@/contexts/AiContext";
import "./globals.css";

export const metadata = {
  title: "Hala Property",
  description: "The Future of Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen  ">
        <AiProvider>
          <div className="sticky top-0 left-0  w-full z-50  ">
            <Navbar />
          </div>
          <div>
            <NavSmall />
          </div>
          <main className="relative  ">{children}</main>

          <Footer />
          <NavBottom />
        </AiProvider>
      </body>
    </html>
  );
}
