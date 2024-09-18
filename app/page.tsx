import Hero from "@/components/hero";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="py-24 relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
        <Skills/>
      </div>
    </main>
  );
}
