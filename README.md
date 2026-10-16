# K&O Manufacturing / Pace Setter: concept website demo

A static concept site for K&O Mfg. Co., Inc. (Hull, Iowa). Elkridge Advisors uses it in the five-year business plan to show the owner and potential buyers what a modern, farmer-focused site could do for enquiries and sales.

**Local demo only.** It is not deployed, published or hosted anywhere. Open `index.html` in a browser. Every page carries the footer line "Concept demo prepared by Elkridge Advisors — not the live K&O website."

Built with plain HTML, CSS and vanilla JavaScript. It uses Google Fonts (Barlow and Barlow Condensed). It has no build step and no backend.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: hero, "find a model" cards, build teaser, why Pace Setter, harvest section, used/trade-in, find-us/pickup/dealer map area, financing call-out |
| `livestock-horse-trailers.html` | Livestock (steel and aluminum stock) and horse trailers, specs, options, galleries |
| `grain-wagons.html` | 400- and 450-bushel wagons, Grain Express specs, FAQ, owner comments, colors |
| `utility-flatbed.html` | Aluminum utility trailers, flatbeds, cargo and skid loader trailers |
| `gates-hardware.html` | HD / HEHD / HHHD cattle gates, hardware, horse stalls, feeders, corral panels |
| `used-trailers.html` | Used inventory grid (layout examples) and a trade-in request form |
| `about.html` | Heritage, the shop, people, milestones |
| `contact.html` | Request-a-quote form, call, visit/pickup, financing |
| `build.html` | "Build your Pace Setter" configurator |
| `assets/site.css`, `assets/site.js`, `assets/build.js` | Shared styles, behaviour, configurator |

## Features

- **Mobile-first layout.** It has a sticky header and a fixed bottom bar on phones (Call the shop / Get a quote / Build yours). The phone number is a tap-to-call link.
- **Build your trailer** (`build.html`). The buyer picks a type (livestock, horse, grain wagon, flatbed, utility, cargo/skid loader), then size, axles, floor and options. A live summary sits beside the choices. "Request a quote for this build" carries the build into the contact form. It shows no prices. Every choice comes from K&O's published product pages, and anything unpublished is a [bracketed] placeholder.
- **Quote request and trade-in forms.** They work in the browser only and **send nothing**. On submit they check the fields and show the entries back on screen with a "Demo: request not sent" notice. The forms include a financing-interest checkbox, a trade-in toggle, a timing question ("before harvest") and a preferred-contact choice.
- **Seasonal harvest banner.** From July to October it reads "Harvest is here" and links to grain wagons. In other months it says "Planning next harvest? Order in the off-season". A visitor can dismiss it for the browser session.
- **Used / trade-in section.** It has an inventory card layout and a trade-in request form.
- **Dealer / pickup map area.** A schematic map marks the factory pin and placeholder dealer pins, with a link to directions in Google Maps. No live map is embedded.
- **Financing call-out.** It appears on every product page and states no rates.
- **Photos.** They are linked directly from `http://www.komfgco.com/_wp_generated/...`; nothing is copied. If an image fails to load it becomes a grey placeholder labelled "Photo". Areas with no suitable photo, such as the heroes, gates and owner portraits, are placeholders labelled "PHOTO" that describe the shot needed.

## Where the content came from

**komfgco.com (current site; read over http on 2026-10-16):**
- The address (1425 Black Forest Rd., Hull, IA 51239), the phone number (712-439-2727) and the email (sales@komfgco.com)
- The Pace Setter brand story, the "built to your specifications" line, the "to-the-penny quote from a rough drawing" offer, and "Call for local dealers"
- Aluminum stock trailer standard features (6′6″ high, gates, vents, floors, escape door, SlamLatch, double deck)
- Steel stock trailer construction (2″×3″ floor angle, 1¼″ 14-gauge tubing, polyurethane) and the "five year limited warranty" statement
- "Why an Aluminum Pace Setter": the 2″×9″ frame extrusion, the .065 welded roof, Rumber floor, tongue and groove sides, and the rollover story
- Horse trailer range ("minis to drafts") and the horse trailer options list
- Flatbed specs: Standard / Triple Flip / Dual Flip, 16′–36′, 12″ channel neck, I-beam, ramps, paint
- Aluminum utility trailer specs: 6′4″ × 10′/12′ bed, 3,500 lb axle, fold-forward treadplate ramp, LED, floors
- Cargo and skid loader trailer copy
- The Grain Express FAQ: capacity, dimensions, empty weight, 10k/12k/16k axles, brakes, unload time, 25% moisture, seed-tender auger, spread axles, paint, colors, tongue weights, the implement-of-husbandry note and lead time
- The four Grain Express owner comments
- Box stall, horse feeder and corral panel details
- All product photos (45 images, linked)

**CIM (CP Business Sales, draft, September 2026) and the deal records:**
- The product family list, including the 400- and 450-bushel grain wagons, Grain Express, cattle and hog gates, and hinges and hardware
- The plant (about 25,000 sq ft on Black Forest Road) and the equipment named on the About page: CNC plasma tables, the 12 ft shear, the 200-ton and 300-ton press brakes, steel and aluminum welding, and two paint rooms
- The latest plant addition (2011)

**Seller sales reports (as briefed):**
- The gate grades HD / HEHD / HHHD, the 450-bushel wagon (SGW12) as the largest item, and used trailers taken in trade

No sales volumes, financials, prices, sale process or broker details appear on the site.

## Placeholders still to fill (shown in [brackets] or as PHOTO blocks)

Contact and location
- [shop hours] (footer on every page, the map legend and the contact page)
- [fax number]
- [dealer names and towns]: three [dealer] pins on the home-page map
- [K&O to confirm whether it delivers, and how far]

Products
- Livestock and horse trailers: [K&O to list standard lengths and axle ratings], plus the configurator's standard lengths, horse counts and axle ratings
- Steel trailer warranty: [five-year limited warranty is stated on the current site; K&O to confirm current terms before publishing]
- Grain wagons: model names for the 400 and 450 bu wagons, [model name, e.g. SGW] and [model name, e.g. SGW12]; [current build time] (the old site says 4–6 weeks); [confirm current colors]; roll tarp [confirm availability]
- Gates: [lengths] and [spec] for HD, HEHD and HHHD; [HHHD grade name]; [K&O to list hardware items]; [panel sizes] for corral panels
- Flatbed axle ratings

Used / trade-in
- Six inventory cards: [year] [make & model] [length] [hitch] [condition] [price or "call"]
- [K&O to supply current used inventory, photos and asking prices]
- [how K&O values trade-ins and how fast it calls back]; [which trailers K&O accepts]

Financing
- [K&O to confirm financing partner and programme] (the site states no rates)

About
- [founding year], the owner story, owner and family introductions, and four milestone [year]s
- Photo placeholders: owner portraits [name, role], the shop crew, a historic shop photo

Photography (new shoots needed)
- Hero images for the home, gates, about, contact and build pages; HD, HEHD and HHHD gates; gate hardware; a 450-bushel wagon at harvest. The current site's photos are small (mostly under 500 px wide) and many are a decade or more old.

## Open questions for K&O

1. **Years in business and founding year.** The current site says "over 40 years" (stale copy); the broker summary says about 60 years.
2. **Grain wagon line.** Is the Grain Express the same product as the 400- and 450-bushel wagons in the sales reports (item codes SGW / SGW12)? What should customers call each model?
3. **Gate grades.** What do HD, HEHD and HHHD stand for, and what lengths, tubing and finish does each grade have? What hardware is sold?
4. **Warranty.** Does the five-year limited warranty on steel trailers (stated on the current site) still apply, and what are its terms? Is the same warranty offered on aluminum trailers, wagons and gates?
5. **Dealers.** Which dealers carry Pace Setter today, and where are they? Does K&O deliver?
6. **Financing.** Does K&O work with a lender or financing programme it would be comfortable promoting?
7. **Current product line.** Are cargo trailers, skid loader trailers, horse stalls, feeders and corral panels still built? Are double decks and living-quarters-ready horse trailers still offered?
8. **Standard sizes.** What are the standard lengths and axle ratings for stock, horse, cargo and flatbed trailers?
9. **Lead times and colors.** What are the current lead times by season, and the current color list?
10. **Republishing content.** May the Grain Express owner comments and the rollover story be republished? May the existing product photos be reused, and are higher-resolution originals available?
11. **Used inventory.** Who keeps the used inventory list, and how often would it be updated?
12. **Website domain.** `https://www.komfgco.com` currently redirects to an unrelated site (mypremieronline.com). Only `http://` serves the K&O site. Who controls the domain and hosting?
13. **Owner story.** Who should be named and pictured on the About page (the officers in the records are Henry Kats, Tim Kats and Elaine Boer), and with whose permission?
