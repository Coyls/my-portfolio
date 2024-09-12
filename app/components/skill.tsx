import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Skill: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "h-16 w-16",
        "rounded-md bg-primary/20 bg-clip-padding",
        "bg-opacity-20 backdrop-blur-3xl backdrop-filter",
        "border border-primary",
      )}
    >
      {children}
    </div>
  );
};
