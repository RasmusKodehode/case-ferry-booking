The task: create a booking system for a ferry journey:
Du skal bygge en enkel webapplikasjon der en bruker kan søke etter og velge en ferjeavgang.
    Funksjonelle krav
        Søk etter avganger — brukeren velger avreisested, destinasjon og dato
        Resultatliste — viser tilgjengelige avganger med tidspunkt, varighet og pris
        Velg avgang — brukeren kan velge én avgang og gå videre
        Oppsummering — en enkel kvitteringsside med valgt reise og totalpris
        Backend — leverer mock-avganger som JSON; minst to ruter (f.eks. Bergen–Stavanger og Bergen–Hirtshals)
    Tekniske krav
        Frontend: React med Next.js (App Router eller Pages Router — valgfritt)
        Backend: valgfritt — enten:
        Next.js API Routes / Server Actions (SSR, alt i ett prosjekt), eller
        Separat REST-API i C#, Go eller Python
        Ingen database nødvendig — mock-data i kode eller JSON-fil er helt greit
        Koden skal ligge i et offentlig GitHub-repo med en kort README

Backend: Brukt NextJS Server Actions. Ruter mellom Bergen, Stavanger og Hirtshals, Datoer 01-03.07.26.
Frontend: Starter på landingsside. Navigerer til side for bestilling, velg startlokasjon og destinasjon, velg dato. En liste med tilgjengelige avganger kommer opp, du kan velge din avgang. Deretter blir du tatt videre til side for bekreftelse, og får en oppsummering av den valgte reisen. Der kan du bekrefte bestillingen, og du vil bli tatt videre til en siste side som bekrefter bestillingen. Der kan du velge å gå tilbake til hjemmesiden. Alle sidene har fått en enkel styling med en mobilversjon og en desktop versjon.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
