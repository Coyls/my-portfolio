import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LocaleSwitch } from "../utils/locale-switch";
import { Section } from "../utils/section";
import ThemeSwitch from "../utils/theme-switch";

export const Footer: React.FC = async () => {
  return (
    <Section>
      <footer className="flex flex-col items-center justify-center py-4">
        <p className="text-center text-sm">
          <span>Made by </span>
          <Link href="https://github.com/Coyls" target="_blank">
            <Button variant="link" className="p-0 text-sm">
              Coyls
            </Button>
          </Link>
          <span>🕯️</span>
        </p>
        <div className="flex flex-row gap-4 self-center">
          <ThemeSwitch />
          <LocaleSwitch />
        </div>
      </footer>
    </Section>
  );
};
