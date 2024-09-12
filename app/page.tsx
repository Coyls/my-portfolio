import { About } from "./components/about";
import { Divider } from "./components/divider";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Spacer } from "./components/spacer";
import { Stack } from "./components/stack";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacer size="lg" />
      <Hero />
      <Spacer size="lg" />
      <About />
      <Spacer size="md" />
      <Experiences />
      <Spacer size="md" />
      <Projects />
      <Spacer size="md" />
      <Stack />
      <Spacer size="md" />
      <Divider />
      <Footer />
    </main>
  );
}
