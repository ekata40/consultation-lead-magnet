import { ArrowDownIcon, SparkleIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-content">
        <div className="eyebrow"><SparkleIcon className="eyebrow-icon" /> A clearer way to grow</div>
        <h1 id="hero-title">Get a Clear Marketing Plan to Help Bring</h1>
        <p className="hero-highlight">More Inquiries to Your Business</p>
        <p className="hero-subheadline">
          Book a free AI marketing consultation and get practical next steps tailored to your business.
        </p>
        <p className="hero-description">
          For small and medium business owners who are struggling to sell their products or services.
          Discuss your marketing and leave with a customized plan for what to do next.
        </p>
        <a href="#booking" className="button button-primary hero-cta">
          Book Free Consultation <ArrowDownIcon className="button-icon" />
        </a>
        <div className="hero-note"><span className="note-dot" /> Free one-to-one consultation</div>
      </div>
      <div className="hero-bottom" aria-hidden="true"><span /> A plan built around your business <span /></div>
    </section>
  );
}
