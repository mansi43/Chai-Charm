import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";



export const metadata = {
  title: "Chai Charm - Fund your projects with Chai",
  description: "This website is crowdfunding plateform for creater.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-100 [background:radial-gradient(100%_100%_at_50%_10%,#fdf2f8_40%,#d8b4fe_100%)] ">
        <SessionWrapper>
          <Navbar />
          <div className="text-purple-950 min-h-[86.5vh] inset-0 -z-10 w-screen ">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
