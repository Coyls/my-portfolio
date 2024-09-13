"use client";

import { Button } from "@/components/ui/button";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export const LocaleSwitch: React.FC = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div>
      <Button
        className="p-0"
        variant="link"
        onClick={() => changeLocale(locale === "en" ? "fr" : "en")}
      >
        {locale === "en" ? "Français" : "English"}
      </Button>
    </div>
  );
};
