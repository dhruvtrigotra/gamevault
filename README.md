# GameVault

A complete, responsive fictional gaming marketplace built with React, Vite, Tailwind CSS and React Router.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

`npm test` checks catalog filtering, sorting and price calculations. `npm run build` creates the static site in `dist/`.

## Pages and features

- Home with featured spotlight, trending/new/bestseller tabs, offers, categories, recommendations and demo newsletter
- Searchable 24-game store with genre, platform, rating, release year and price filters; five sorting modes
- Individual game pages, concept-art gallery modal, requirements and sample reviews
- Categories, deals with persistent demo countdown, cart and wishlist
- Validated demo checkout (card, UPI, PayPal), order confirmation and local order history
- Demo login/register/profile, library and editable account settings
- Responsive mobile navigation, loading states, toasts, keyboard support and 404 page

## GitHub Pages

The repository includes a workflow that installs dependencies, runs tests, builds and deploys on each push to `main`. In Settings → Pages, choose GitHub Actions as the source. Hash routing keeps all pages and refreshes working on GitHub Pages, e.g. `/#/store` and `/#/game/1`.

## Demo boundaries

This is a frontend demo with fictional games, prices and reviews. No real game purchase, payment, download, account authentication or email delivery occurs. Billing addresses and passwords are never stored or transmitted. Cart, wishlist, order customer name/email and demo profile are device-local in localStorage; unremembered demo sessions use sessionStorage. They are not private across users of the same browser. A backend, genuine authentication, payment provider, game licensing and transactional email would be needed for a real shop.

Digital titles are one copy per order. Tax is explicitly zero in the demo. USD is used throughout. Generated concept artwork is shared across the fictional catalog; it is not actual gameplay footage.

## Structure

`src/components` reusable UI, `src/pages` route content, `src/context` shared shopping state, `src/hooks` persistence, `src/data` central catalog, `src/utils` calculations, `src/layouts` shared navigation/footer, and `src/routes` route definitions.

## Artwork

Three original artworks were generated using OpenAI’s built-in image-generation tool for this project: astronaut and violet ringed planet, ancient forest ruins and wanderer, and neon city racing car. See `ARTWORK.md` for prompts. Optimized assets are bundled locally in `public/art/`.
