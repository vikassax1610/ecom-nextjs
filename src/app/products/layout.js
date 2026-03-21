import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Products",
    template: "%s | Ecom Store",
  },
  description: "Browse our wide range of products...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-100 text-gray-900 antialiased">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
