import { ButtonAvailable } from "../socials/button-available";
import { LocaleSwitch } from "../utils/locale-switch";
import { Section } from "../utils/section";
import ThemeSwitch from "../utils/theme-switch";

export const Header: React.FC = async () => {
  return (
    <header className="top-0 py-4">
      <Section className="relative flex justify-between">
        {/* <Link href="/">
          <p className="text-center text-xl">🕯️</p>
        </Link> */}
        <ButtonAvailable />
        <div className="ml-auto flex flex-row gap-4 self-center">
          <ThemeSwitch />
          <LocaleSwitch />
        </div>
      </Section>
    </header>
  );
};
