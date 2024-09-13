import { cn } from "@/lib/utils";

export const Spacer: React.FC<{ size?: "sm" | "md" | "lg" }> = async ({
  size = "md",
}) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-12": size === "sm",
        "h-16 lg:h-24": size === "md",
        "h-24 lg:h-32": size === "lg",
      })}
    />
  );
};
