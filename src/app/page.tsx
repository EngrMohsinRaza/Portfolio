import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Contact } from "@/components/sections/Contact";

/**
 * Home page — a one-page portfolio assembled from independent section
 * components. To reorder or remove a section, edit the JSX below
 * (each section lives in src/components/sections/).
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Resume />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
