import { ProjectType } from "./projects";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image from "next/image";

const ProjectCard = ({ title, desc, image, tags }: ProjectType) => (
  <Card className="flex-auto w-[600px]">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardHeader>
    <CardContent className="relative h-96 m-8">
      <Image
        src={image}
        fill={true}
        alt={`picture of ${title}`}
        className="rounded-sm object-cover"
      />
    </CardContent>
    <CardFooter>
      {tags.map((tag: string) => (
        <span key={tag}>{tag}</span>
      ))}
    </CardFooter>
  </Card>
);

export { ProjectCard };
