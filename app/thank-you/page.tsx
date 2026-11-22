import type { Metadata } from "next";
import { MessageIcon } from "@/components/Icons";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Thank You | Unity",
  description: "Thanks for visiting Unity. Message us on WhatsApp to discuss your free marketing consultation.",
  openGraph: {
    title: "Thank You | Unity",
    description: "Thanks for visiting Unity. Message us on WhatsApp to discuss your free marketing consultation.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

const whatsappNumber = "9779803269190";
const whatsappMessage = "Hi, I just submitted the form for the Free Digital Marketing Consultation. I'd like to know the next steps.";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="thankyou-page">
        <section className="thankyou-card" aria-labelledby="thankyou-title">
          <p className="section-kicker">Your next step</p>
          <h1 id="thankyou-title">Thanks for your consultation request.</h1>
          <p className="thankyou-copy">
            Check your inbox for an email from us. If you receive a confirmation link, click it to confirm your email address. You can also reach us on WhatsApp.
          </p>
          <video
            className="thankyou-video"
            aria-label="What happens after you request a consultation"
            src="/consultation-demo.mp4"
            poster="/consultation-demo-poster.jpg"
            autoPlay
            muted
            playsInline
            controls
          />
          <a className="button button-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageIcon className="button-icon" /> Message Us on WhatsApp
          </a>
          <p className="thankyou-number">
            <a className="thankyou-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">+977 9803269190</a>
          </p>
        </section>
      </main>
    </>
  );
}
