import { About } from "./components/sections/about";
import { Experiences } from "./components/sections/experiences";
import { Footer } from "./components/sections/footer";
import { Header } from "./components/sections/header";
import { Hero } from "./components/sections/hero";
import { Projects } from "./components/sections/projects";
import { Stack } from "./components/sections/stack";
import { Divider } from "./components/utils/divider";
import { Spacer } from "./components/utils/spacer";

export default async function Home() {
  return (
    <main>
      <Header />
      <Spacer size="lg" />
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
