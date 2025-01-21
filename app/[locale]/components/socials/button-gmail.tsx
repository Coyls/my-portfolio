import { buttonVariants } from "@/components/ui/button";
import { SiteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { SiGmail } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const ButtonMail: React.FC = async () => {
  return (
    <Link
      href={`mailto:${SiteConfig.contactEmail}`}
      target="_blank"
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
    >
      <SiGmail size={20} className="text-primary" />
    </Link>
  );
};
