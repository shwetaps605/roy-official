import Blog from "@/components/Blog";
import { FeatureSection } from "@/components/FeatureSection";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
        <FeatureSection/>
        <Projects/>
        <Blog/>
        <WorkSection/>
        <Footer/>
      </div>
    </main>
  );
}
