import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const ButtonGithub: React.FC = () => {
  return (
    <Link
      href="https://github.com/Coyls"
      target="_blank"
      className={cn(buttonVariants({ variant: "outline" }), "p-0 size-9")}
    >
      <SiGithub size={20} className="text-foreground" />
    </Link>
  );
};
