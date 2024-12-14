import Blog from "@/components/Blog";
import { FeatureSection } from "@/components/FeatureSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <Header/>
      <div className="max-w-7xl w-full">
        <Hero/>
        <WorkSection/>
        <FeatureSection/>
        <Projects/>
        <Blog/>
      </div>
      <Footer/>
    </main>
  );
}
