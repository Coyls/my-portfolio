import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiLinkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const ButtonLinkedin: React.FC = async () => {
  return (
    <Link
      href="https://www.linkedin.com/in/loïc-greco"
      target="_blank"
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
    >
      <SiLinkedin size={20} className="text-primary" />
    </Link>
  );
};
