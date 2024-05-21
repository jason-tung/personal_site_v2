import { MyLinks } from "./my-links";
import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-row flex items-center justify-center gap-16 ">
      <div className="flex flex-col gap-5">
        <div className="h-64 w-64 relative">
          <Image
            fill={true}
            src="/skeleton.png"
            alt="picture of me"
            className="rounded-full object-cover"
          />
        </div>
        <MyLinks />
      </div>
      <div className="flex flex-col justify-center gap-10 m-w-[350px] pt-3">
        <h1 className="text-[64px] leading-[77px]">
          Hi, I'm <br />
          <span className="font-bold">Jason Tung</span>
        </h1>
        <h2 className="w-[25rem] text-xl">
          Just a silly boy who loves his girlfriend/bioline here even tho it
          won't be better!
        </h2>
      </div>
    </section>
  );
}
