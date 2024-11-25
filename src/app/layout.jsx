import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import NavSmall from "@/components/shared/Navbar/NavSmall";
import { AiProvider } from "@/contexts/AiContext";
import "./globals.css";

export const metadata = {
  title: "Hala Property",
  description: "The Future of Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <AiProvider>
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div>
            <NavSmall />
          </div>
          <main>{children}</main>

          <Footer />
        </AiProvider>
      </body>
    </html>
  );
}
