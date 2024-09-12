import { cn } from "@/lib/utils";
import { Section } from "./section";

type DividerProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export const Divider: React.FC<DividerProps> = ({
  className,
  orientation = "horizontal",
}) => {
  return (
    <Section>
      <hr
        className={cn(
          "border-accent",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className,
        )}
      />
    </Section>
  );
};
