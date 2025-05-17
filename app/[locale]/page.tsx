import { SiteConfig } from "@/config/site.config";
import {
  About,
  Experiences,
  Footer,
  Formations,
  Header,
  Hero,
  Projects,
  Stack,
} from "./components/sections";
import { Divider, Spacer, SpacerArrow } from "./components/utils";

export default async function Home() {
  return (
    <main>
      <Header />
      <Spacer className="h-16 lg:h-32" />
      <Hero />
      <Spacer size="lg" className="hidden sm:flex" />
      <SpacerArrow size="xl" className="flex sm:hidden" />
      <About />
      <Spacer size="md" />
      <Projects />
      <Spacer size="md" />
      <Experiences />
      <Spacer size="md" />
      <Formations />
      <Spacer size="md" />
      {SiteConfig.stack && (
        <>
          <Stack />
          <Spacer size="md" />
        </>
      )}
      <Divider />
      <Footer />
    </main>
  );
}
