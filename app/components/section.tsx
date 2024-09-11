import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{ className?: string }>;

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={cn("max-w-4xl mx-auto px-4", className)}>
      {children}
    </section>
  );
};
