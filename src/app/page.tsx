import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Work from "./components/Work";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="snap-root">
        <Hero />
        <Tools />
        <Work />
        <Blogs />
        <Contact />
      </main>
    </>
  );
}
