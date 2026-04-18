import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/verdiq/Navbar";
import { Footer } from "@/components/verdiq/Footer";
import { GradientBlobs } from "@/components/verdiq/GradientBlobs";
import { Hero } from "@/components/verdiq/Hero";
import { ProblemSolution } from "@/components/verdiq/ProblemSolution";
import { Product } from "@/components/verdiq/Product";
import { Team } from "@/components/verdiq/Team";
import { Stack } from "@/components/verdiq/Stack";
import { Roadmap } from "@/components/verdiq/Roadmap";
import { Plan } from "@/components/verdiq/Plan";
import { Value } from "@/components/verdiq/Value";
import { Contact } from "@/components/verdiq/Contact";
import { FinalCTA } from "@/components/verdiq/FinalCTA";
import { Showcase } from "@/components/verdiq/Showcase";
import { SectionDivider } from "@/components/verdiq/Section";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Verdiq — AI-Powered ESG Intelligence Platform" },
      {
        name: "description",
        content:
          "Verdiq is the AI-native ESG platform helping startups and investors measure ESG readiness, detect risks, and generate actionable sustainability insights.",
      },
      { property: "og:title", content: "Verdiq — AI-Powered ESG Intelligence Platform" },
      {
        property: "og:description",
        content:
          "Measure ESG readiness, detect risks, and generate actionable sustainability insights with AI.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBlobs />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <ProblemSolution />
        <SectionDivider />
        <Product />
        <SectionDivider />
        <Team />
        <SectionDivider />
        <Stack />
        <SectionDivider />
        <Roadmap />
        <SectionDivider />
        <Plan />
        <SectionDivider />
        <Value />
        <SectionDivider />
        <Contact />
        <FinalCTA />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
