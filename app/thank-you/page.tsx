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
          <h1 id="thankyou-title">Thank you for visiting our site.</h1>
          <p className="thankyou-copy">
            This demo form doesn’t send or save your details. Message us on WhatsApp to discuss your free AI marketing consultation and next steps.
          </p>
          <a className="button button-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageIcon className="button-icon" /> Message Us on WhatsApp
          </a>
          <p className="thankyou-number">+977 9803269190</p>
        </section>
      </main>
    </>
  );
}
