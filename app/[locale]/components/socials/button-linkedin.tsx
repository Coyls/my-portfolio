import { IconLinkedin } from "@/components/icons/icon-linkedin";
import { buttonVariants } from "@/components/ui/button";
import { SiteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const ButtonLinkedin: React.FC = async () => {
  return (
    <Link
      href={SiteConfig.links.linkedin}
      target="_blank"
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
    >
      <IconLinkedin size={SiteConfig.iconSize} className="text-primary" />
    </Link>
  );
};
