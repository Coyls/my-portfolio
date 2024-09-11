import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiGmail } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const ButtonGmail: React.FC = () => {
  return (
    <Link
      href="mailto:loic.grecofr@gmail.com"
      target="_blank"
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
    >
      <SiGmail size={20} className="text-primary" />
    </Link>
  );
};
