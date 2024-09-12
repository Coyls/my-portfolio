import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconType } from "@icons-pack/react-simple-icons";
import Link from "next/link";

type ProjectProps = {
  name: string;
  description: string;
  technologies: IconType[];
  link: string;
  githubLink?: string;
  className?: string;
};

export const Project: React.FC<ProjectProps> = ({
  name,
  description,
  link,
  technologies,
  className,
}) => {
  return (
    <div className={cn("bg-primary/5 p-10 rounded-2xl", className)}>
      <div className="flex flex-col gap-4 justify-between h-full">
        <Link href={link} target="_blank">
          <Button variant="link" className="p-0">
            <h3 className="text-3xl font-caption leading-9">{name}</h3>
          </Button>
        </Link>
        <p className="text-justify text-base max-w-lg">{description}</p>
        <div className="flex flex-row gap-3">
          {technologies.map((Icon, index) => (
            <Icon key={`${name}-${index}-icon`} />
          ))}
        </div>
      </div>
    </div>
  );
};
