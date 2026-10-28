import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Problem from "@/components/Problem";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Process />
        <CTAForm />
      </main>
      <footer className="site-footer"><a href="/" className="footer-brand">unity<span>.</span></a><span>Clearer marketing starts with a conversation.</span></footer>
    </>
  );
}
