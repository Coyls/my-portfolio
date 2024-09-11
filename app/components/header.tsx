import { Section } from "./section";
import ButtonAvailable from "./socials/button-available";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <ButtonAvailable />
      </Section>
    </header>
  );
};
