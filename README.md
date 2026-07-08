# RFC — Healthy Food • Healthy Life

A premium, single-page restaurant ordering website built with plain HTML, CSS and JavaScript (no frameworks, no build step).

## Folder structure

```
RFC/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   │   ├── rfc-logo.jpg
│   │   ├── hero-poster.jpg              (first frame of hero video, shown while it loads)
│   │   ├── rfc-menu-poster-reference.png (your uploaded menu photo, kept for reference only — not used on the site)
│   │   ├── restaurant/
│   │   │   ├── exterior-storefront.jpg
│   │   │   ├── dine-in-entrance.jpg
│   │   │   └── dine-in-interior.jpg
│   │   ├── gallery/
│   │   │   └── burger-sauce-closeup.jpg
│   │   ├── burgers/   (empty — see "To do" below)
│   │   ├── pizzas/     (empty — see "To do" below)
│   │   └── deals/     (empty — see "To do" below)
│   ├── videos/
│   │   └── hero.mp4   (built from your two uploaded clips, compressed for web)
│   └── icons/
├── pages/
└── README.md
```

## What changed in this pass

1. **Assets folder rebuilt** — logo, restaurant photos, and hero video now live in the real folder structure and every broken image path is fixed.
2. **Hero video** — combined your storefront clip and burger sauce-pour clip into one 3.4s muted loop, compressed to ~387KB, with a poster frame shown instantly while it loads.
3. **Gallery** — now shows your real storefront, dine-in entrance, dine-in interior, and food close-up photos first, backed by a few curated stock shots to fill it out.
4. **Menu data rewritten from your two menu photos** (burger/fries/deals menu + pizza/crust menu). All ~70 items, prices, and categories now match what's printed on your menus.
5. **Fixed the dead `#deals` link** — it now jumps to the menu and pre-selects the Combo Deals category instead of doing nothing.

## Needs your confirmation

- **"Buddy" (350ml drink) price conflict**: Rs.90 on the burger/deals menu vs Rs.60 on the pizza menu. Currently set to 90 — flagged with a "Confirm Price" badge in the Add-Ons category.
- **"Pasta" price wasn't legible** on your new menu photo (only "Mexican Pro — 650" had a clear number). Kept the old value (750) as a placeholder — also flagged with a badge.
- **Pizza sizing**: each flavour has Small/Regular/Large pricing, but the site's current card format only shows one price per item. Each pizza card currently shows its Regular price with the other two sizes noted in the description. A proper size-picker (radio buttons that update the price live) is a solid next upgrade if you want it.

## Still to do

1. **Individual food photos** — most menu items still use curated stock photography by category (only one item — Spicy Zinger — uses your real photo). Add real shots to `assets/images/burgers/`, `assets/images/pizzas/`, `assets/images/deals/` and swap the matching `img` field in `script.js`'s `MENU` array whenever you have them.
2. **Map** — the contact section still embeds a generic Google Maps search for "Gulgasht Colony, Multan." Your pizza menu lists the exact address (Jalal Masjid Chowk, Gardazi Market, Gulgasht, Multan) — I can wire up the precise pin next pass.
3. **Backend** — cart/checkout/reservation are still simulated (no real backend yet); Supabase integration is a separate phase.

## Notes

- Cart and favourites persist in the browser via `localStorage`, so a visitor's order survives a page refresh.
- Fonts (Bebas Neue + Inter) load from Google Fonts; icons are drawn from the base font set so nothing external is required beyond that.
