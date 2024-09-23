import {
  About,
  Experiences,
  Footer,
  Header,
  Hero,
  Projects,
  Stack,
} from "./components/sections";
import { Divider, Spacer } from "./components/utils";

export default async function Home() {
  return (
    <main>
      <Header />
      <Spacer className="h-16 lg:h-32" />
      <Hero />
      <Spacer size="lg" />
      <About />
      <Spacer size="md" />
      <Projects />
      <Spacer size="md" />
      <Experiences />
      <Spacer size="md" />
      <Stack />
      <Spacer size="md" />
      <Divider />
      <Footer />
    </main>
  );
}
