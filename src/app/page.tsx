import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Process } from "@/components/Process";
import { Target } from "@/components/Target";
import { CTA } from "@/components/CTA";
import { Story } from "@/components/Story";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Process />
        <Target />
        <CTA />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
