import { Github, Linkedin, ScrollText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const MyLinks = () => {
  return (
    <div className="flex flex-row flex-wrap place-content-center justify-evenly">
      {[
        [<Github />, "Github", "https://github.com/jason-tung"],
        [<Linkedin />, "Linkedin", "https://www.linkedin.com/in/jason-tung/"],
        [<ScrollText />, "Resume", "/resume"],
      ].map(([icon, text, link]) => (
        <Link href={link as string} target="_blank" key={text as string}>
          {" "}
          {/* <Badge> {icon} </Badge> */}
          {icon}
        </Link>
      ))}
    </div>
  );
};

export { MyLinks };
