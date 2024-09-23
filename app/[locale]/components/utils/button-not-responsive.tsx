"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/locales/client";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { toast } from "sonner";

export const ButtonNotResponsive: React.FC<
  PropsWithChildren<{ href: string }>
> = ({ href, children }) => {
  const t = useI18n();

  return (
    <>
      <Link className="hidden md:block" href={href} target="_blank">
        <Button variant="link" className="p-0">
          {children}
        </Button>
      </Link>
      <Button
        variant="link"
        className="block p-0 md:hidden"
        onClick={() => toast.message(t("not-responsive"))}
      >
        {children}
      </Button>
    </>
  );
};
