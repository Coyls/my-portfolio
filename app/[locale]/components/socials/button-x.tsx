import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/site-config";
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
