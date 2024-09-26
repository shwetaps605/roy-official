import Blog from "@/components/Blog";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { FeaturesSectionDemo } from "@/components/ui/feature-section";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="py-24 relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
        <FeaturesSectionDemo/>
        <Blog/>
        <Projects/>
        <WorkSection/>
        <Footer/>
      </div>
    </main>
  );
}
