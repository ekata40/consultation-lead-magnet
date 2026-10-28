# Unity AI Marketing Consultation

A mobile-first Next.js App Router landing page for a free AI marketing consultation.

## Run locally

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open the local address shown in the terminal.
4. Set `NEXT_PUBLIC_SITE_URL` to your real public URL for canonical and social metadata.

## Deploy to Vercel

Import this project into Vercel and deploy with the default Next.js settings. Set `NEXT_PUBLIC_SITE_URL` to the production URL in project settings.

## Form behavior

The form checks required fields, email format, WhatsApp number, and an optional URL, then opens `/thank-you?demo=1`. It does not send or store submissions. Connect a backend or form service before collecting real leads.
