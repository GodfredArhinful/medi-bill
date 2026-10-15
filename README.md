# MediBill

Upload a medical bill and MediBill uses Google Gemini to look for billing errors (duplicate charges, overcharges, unbundling), estimate how much you could get back, and draft an appeal letter and email for you.

## Features

- Email/password accounts (Firebase Authentication), with password reset
- Upload a bill as PDF, PNG or JPG
- AI analysis: total billed, potential savings, and the chance an appeal succeeds
- Savings chart comparing the bill to the potential savings
- Generated appeal letter you can copy, download as a PDF, or send from your email app

## Run it locally

You need **Node.js 20.9 or newer** and a **Gemini API key**, which you can get for free from [Google AI Studio](https://aistudio.google.com/apikey).

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a file named `.env.local` in the project root with your key:

   ```
   GVAPI=your-gemini-api-key
   ```

3. Start the app:

   ```bash
   npm run dev
   ```

4. Open http://localhost:3000, click **Create account**, then upload a bill.

Firebase is already configured in `src/lib/firebase.ts`, so there's nothing to set up for sign-in.

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Firebase Authentication, Google Gemini (`gemini-2.5-flash`), Recharts, jsPDF.

## Project structure

```
src/
├── app/
│   ├── page.tsx                 Upload page
│   ├── results/page.tsx         Analysis report
│   ├── api/upload/route.ts      Sends the bill to Gemini and validates the response
│   ├── login/, signup/, forgot-password/   Account pages
│   └── context/                 Auth and analysis state
├── components/                  KPI cards, chart, appeal letter, quick actions
└── lib/                         Firebase setup, currency and letter formatting
```

## CI

GitHub Actions runs lint, a TypeScript check and a production build on every pull request and on pushes to `master`.
