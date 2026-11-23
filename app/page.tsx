import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Problem from "@/components/Problem";
import socialLinks from "@/components/social-links.json";

export default function HomePage() {
  return (
    <>
      <Header />
      <nav className="social-links" aria-label="Social media">
        {socialLinks.map(({ label, url }) => (
          <a key={label} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
        ))}
      </nav>
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Process />
        <CTAForm />
      </main>
      <footer className="site-footer">
        <a href="/" className="footer-brand">unity<span>.</span></a>
        <span>Clearer marketing starts with a conversation.</span>
      </footer>
    </>
  );
}
