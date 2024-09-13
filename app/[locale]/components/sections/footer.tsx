import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "../utils/section";

export const Footer: React.FC = async () => {
  return (
    <Section>
      <footer className="flex flex-col items-center justify-center py-8">
        <p className="text-center text-sm">
          Made with ❤️ by{" "}
          <Link href="https://github.com/Coyls" target="_blank">
            <Button variant="link" className="p-0 text-sm">
              Coyls
            </Button>
          </Link>
        </p>
      </footer>
    </Section>
  );
};
