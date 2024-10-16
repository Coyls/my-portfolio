import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "lucide-react";

export const SpacerArrow: React.FC<{
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}> = async ({ size = "md", className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2",
        {
          "py-4 lg:py-6": size === "sm",
          "py-8 lg:py-12": size === "md",
          "py-12 lg:py-16": size === "lg",
          "py-16 lg:py-20": size === "xl",
        },
        className,
      )}
    >
      <a href="#about">
        <ArrowDownIcon className="text-primary" />
      </a>
    </div>
  );
};
