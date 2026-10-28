const steps = [
  {
    number: "01",
    title: "Share a few details",
    description: "Tell us about your business and marketing challenge.",
  },
  {
    number: "02",
    title: "Talk it through",
    description: "Discuss your current marketing in a one-to-one consultation.",
  },
  {
    number: "03",
    title: "Get your plan",
    description: "Receive a customized AI marketing plan with practical next steps.",
  },
];

export default function Process() {
  return (
    <section className="process-section section-wrap" aria-labelledby="process-title">
      <div className="section-heading process-heading">
        <p className="section-kicker">The consultation process</p>
        <h2 id="process-title">Three steps to a clearer plan.</h2>
      </div>
      <div className="process-grid">
        {steps.map((step, index) => (
          <article className="process-step" key={step.number}>
            <div className="step-top"><span className="step-number">{step.number}</span>{index < steps.length - 1 && <span className="step-connector" />}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
