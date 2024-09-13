import { ButtonAvailable } from "../socials/button-available";
import { LocaleSwitch } from "../utils/locale-switch";
import { Section } from "../utils/section";
import ThemeSwitch from "../utils/theme-switch";

export const Header: React.FC = async () => {
  return (
    <header className="top-0 py-4">
      <Section className="flex items-baseline justify-between">
        <ButtonAvailable />
        <div className="flex flex-row gap-4">
          <ThemeSwitch />
          <LocaleSwitch />
        </div>
      </Section>
    </header>
  );
};
