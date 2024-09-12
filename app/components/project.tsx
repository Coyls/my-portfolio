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
    <div className={cn("rounded-lg bg-primary/5 p-8", className)}>
      <div className="flex h-full flex-col justify-between gap-4">
        <Link href={link} target="_blank">
          <Button variant="link" className="p-0">
            <h3>{name}</h3>
          </Button>
        </Link>
        <p className="max-w-lg text-justify text-sm">{description}</p>
        <div className="flex flex-row gap-4">
          {technologies.map((Icon, index) => (
            <Icon key={`${name}-${index}-icon`} />
          ))}
        </div>
      </div>
    </div>
  );
};
