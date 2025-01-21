import { buttonVariants } from "@/components/ui/button";
import { SiteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

type ButtonGithubProps = {
  href?: string;
  className?: string;
};

export const ButtonGithub: React.FC<ButtonGithubProps> = async ({
  href,
  className,
}) => {
  return (
    <Link
      href={href ?? SiteConfig.links.github}
      target="_blank"
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        className,
      )}
    >
      <SiGithub size={20} className="text-primary" />
    </Link>
  );
};
