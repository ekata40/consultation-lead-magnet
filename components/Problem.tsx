import { SparkleIcon } from "./Icons";

export default function Problem() {
  return (
    <section className="problem-section section-wrap" aria-labelledby="problem-title">
      <div className="problem-card">
        <div className="problem-mark"><SparkleIcon className="problem-icon" /></div>
        <div>
          <p className="section-kicker">A little clarity goes a long way</p>
          <h2 id="problem-title">Marketing can feel hard when the next step isn’t clear.</h2>
          <p className="problem-copy">
            If selling your products or services has been a challenge, let’s talk through your current marketing and what you could do next.
          </p>
        </div>
        <a className="text-link" href="#booking">Let’s make a plan <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
