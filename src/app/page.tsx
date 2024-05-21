import { Intro } from "@/components/intro";
import { MyLinks } from "@/components/my-links";
import { Projects } from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex gap-8 min-h-[calc(100vh-40px)] justify-center ">
        <Intro />
      </div>
      <div>
        <Projects />
      </div>
    </main>
  );
}
