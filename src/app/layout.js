import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import "./globals.css";



export const metadata = {
  title: "Hala Property",
  description: "The Future of Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
