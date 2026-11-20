# KidzPlay — Kids Educational Games

A bilingual English/Bahasa Malaysia educational arcade starter built with React + TypeScript + Vite + Tailwind CSS v4 and `vite-plugin-pwa`.

## Quick start
1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.
4. For a production build, run `npm run build`, then `npm run preview`.

## Features in this source
- 50 catalog entries grouped across seven learning worlds, with bilingual titles/questions and individual emoji artwork identifiers.
- Hash navigation for home, game routes, puzzles and stickers; browser Back/Forward.
- Local progress/star persistence; quiz flow, bonus stars, streaks, puzzle unlock list and sticker milestones.
- Responsive arcade cards, search and learning-world filters.
- PWA manifest, service-worker generation and Workbox precaching through Vite PWA plugin.
- Install prompt support and iOS Add-to-Home-Screen guide; offline banner.
- Web Audio synthesized feedback and speech-synthesis clue reading.
- Lightweight coloring-studio scene selector and color palette.

## Notes before public launch
This project is an MVP source scaffold, not yet a fully validated commercial/production release. Some of the 50 entries currently use a shared quiz interaction, the coloring studio is a simplified paint-color scene (not the requested canvas/region-fill editor), and the tile puzzle is a prototype rather than six original illustrated tile images. You should review answer-key accuracy, accessibility, child-privacy wording, and device testing. Dependency installation/build could not be validated in the generation environment because the package install timed out.

## Storefront / selling page

Open `/#/sales` to view the bilingual KidzPlay product landing page. It includes the product pitch, learning-world overview, benefits, proposed RM29.90 launch price, FAQ, and a purchase CTA.

### Connect real payments before selling

The purchase button reads `VITE_CHECKOUT_URL`. Copy `.env.example` to `.env` and paste a hosted checkout URL from your chosen provider (for example Stripe Payment Links, ToyyibPay, or Billplz):

```env
VITE_CHECKOUT_URL=https://your-provider.example/your-checkout
```

Then rebuild and redeploy. Do not put private API keys in `VITE_` variables. This client-side project does not yet verify payments, issue unique licences, or automatically deliver protected downloads. For a real paid product, configure the payment provider's success redirect/webhook and a secure delivery or access-control service. Until that is connected, the purchase button intentionally reports that checkout is not configured.

### Deploy

```bash
npm install
npm run build
npm run preview
```

Deploy the generated `dist/` folder to an HTTPS static host such as Netlify, Vercel, or Cloudflare Pages. HTTPS is required for reliable PWA installation and service-worker caching.
