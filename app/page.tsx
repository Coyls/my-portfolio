import { About } from "./components/about";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Spacer } from "./components/spacer";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacer size="md" />
      <Hero />
      <About />
    </main>
  );
}
