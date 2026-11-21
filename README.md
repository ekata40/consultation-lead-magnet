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

The consultation form submits to the Flodesk form in `components/consultation-flodesk.json`. The Full Name field maps to Flodesk’s First Name field. The website or Facebook link and message are required by the supplied Flodesk form.

In Flodesk, assign the consultation form to your segment and publish the workflow with that segment as its trigger. The supplied embed has double opt-in disabled. Test with a fresh email address you control and check that it appears in the segment and enters the workflow. [Flodesk workflow setup](https://help.flodesk.com/en/articles/4405825)
