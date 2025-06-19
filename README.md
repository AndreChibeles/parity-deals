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

## Libraries Used

- ShadCN
- Clerk

## Clerk:

- Setup an account in clerk
- Create an application using email, google and github
- Put the environment variables in the .env file
  The environment variables to be included in the .env file are:
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY
  These variables are obtained in the clerk website after starting a project

## Neon

Use the db in neon and import the link into .env and .ent.example files
The ORM is drizzle

##Drizzle
npm run db:generate
npm run db:migrate
npm run studio
npm run db:updateCountryGroups

##ngrock
Deploy ng rock and start the command like
ngrok http --url=lizard-dear-sculpin.ngrok-free.app 3000
Configure ngrock according to the link: https://dashboard.ngrok.com/get-started/setup/linux
Go to Webhooks -> Endpoints -> Add Endpoint -> Endpoint URL put https://lizard-dear-sculpin.ngrok-free.app/api/webhooks/clerk

Sync Clerk data to your app with webhooks: https://clerk.com/docs/webhooks/sync-data
Select User.created and user.deleted

## Stripe
