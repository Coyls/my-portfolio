import { buttonVariants } from "@/components/ui/button";
import { SiteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { SiLinkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const ButtonLinkedin: React.FC = async () => {
  return (
    <Link
      href={SiteConfig.links.linkedin}
      target="_blank"
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
    >
      <SiLinkedin size={20} className="text-primary" />
    </Link>
  );
};
