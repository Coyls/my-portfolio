import { buttonVariants } from "@/components/ui/button";
import { SiteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const ButtonX: React.FC = async () => {
  return (
    <Link
      href={SiteConfig.links.x}
      target="_blank"
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
    >
      <SiX size={20} className="text-primary" />
    </Link>
  );
};
