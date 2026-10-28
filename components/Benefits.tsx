import { CheckIcon } from "./Icons";

const benefits = [
  "Identify what may be getting in the way of more inquiries.",
  "Get marketing ideas tailored to your business.",
  "Clarify what to prioritize next.",
  "Understand what to track as you put your plan into action.",
];

export default function Benefits() {
  return (
    <section className="benefits-section section-wrap" aria-labelledby="benefits-title">
      <div className="section-heading">
        <p className="section-kicker">How you benefit</p>
        <h2 id="benefits-title">Leave with a clearer next step.</h2>
        <p>Focused ideas for your business, so you know what to work on next.</p>
      </div>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <article className="benefit-card" key={benefit}>
            <div className="benefit-number">0{index + 1}</div>
            <div className="benefit-check"><CheckIcon className="check-icon" /></div>
            <h3>{benefit}</h3>
          </article>
        ))}
      </div>
      <div className="benefits-bottom"><span>Tailored to you</span><span className="benefits-line" /><span>Practical next steps</span></div>
    </section>
  );
}
