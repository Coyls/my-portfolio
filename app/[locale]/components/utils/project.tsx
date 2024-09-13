import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconType } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { ButtonGithub } from "../socials/button-github";

type ProjectProps = {
  name: string;
  description: string;
  technologies: IconType[];
  link: string;
  githubLink?: string;
  className?: string;
};

export const Project: React.FC<ProjectProps> = async ({
  name,
  description,
  link,
  technologies,
  className,
  githubLink,
}) => {
  return (
    <div className={cn("rounded-lg bg-primary/5 p-8", className)}>
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex w-full flex-row justify-between">
          <Link href={link} target="_blank">
            <Button variant="link" className="p-0">
              <h3>{name}</h3>
            </Button>
          </Link>

          {githubLink && (
            <ButtonGithub href={githubLink} className="float float-right" />
          )}
        </div>
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
