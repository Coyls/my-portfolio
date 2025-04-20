import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{ className?: string }>;

export const Section: React.FC<SectionProps> = async ({
  children,
  className,
}) => {
  return (
    <section className={cn("mx-auto max-w-4xl px-4", className)}>
      {children}
    </section>
  );
};
