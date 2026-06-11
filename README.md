# AWT Website

Next.js website for Advanced Water Technology based on the PDF source documents in `docs/`.

## Run locally

```bash
npm install
npm run dev
```

## GitHub Pages

This project is configured for GitHub Pages with the custom domain:

```text
https://adwatertech.com/
```

The static export is generated at the domain root without a `/awt` base path so CSS, JavaScript, image, and navigation paths resolve from `https://adwatertech.com/`.

The contact form uses a static-site compatible external form endpoint. The legacy API route is kept only for server-capable deployments.

## Contact form

Copy `.env.example` to `.env.local` and configure the public Formspree endpoint before testing contact form delivery.

The deployed GitHub Pages site posts contact form submissions to `NEXT_PUBLIC_FORMSPREE_ENDPOINT`. Recipient emails should be managed in the form service dashboard or mail forwarding settings, not in public site code.

Required local setup:

```bash
cp .env.example .env.local
```

Then add real values for:

```text
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

If `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is missing, the form does not send a network request and shows a generic failure message.

For GitHub Pages deployment, add the same value as a GitHub Actions secret:

```text
Name: NEXT_PUBLIC_FORMSPREE_ENDPOINT
Value: https://formspree.io/f/your-form-id
```

The deploy workflow passes this secret into `npm run build`, so the static export can submit to Formspree in production. The recipient emails are not displayed on the website and should be managed in Formspree or mail forwarding rules.

Because GitHub Pages serves this site as static files, the Next.js API route and Nodemailer do not run on the deployed Pages site. The `app/api/contact/route.ts` file is retained only for future server-capable hosting.

Do not commit `.env.local` to GitHub. The file is intentionally ignored by `.gitignore`.
