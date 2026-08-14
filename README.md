# Cotewell line marking tape & floor marking mock-up

Static category and product-page mock-ups for the 13 line marking tape, 5S shape and safety floor sign products at cotewell.com.au.

Built on the same layout, palette and component system as the [projector mock-up](https://github.com/Lilmonstersam/cotewell-line-marking-projectors).

- **Repository:** `https://github.com/Lilmonstersam/cotewell-line-marking-tapes.git`
- **Live URL once deployed:** `https://lilmonstersam.github.io/cotewell-line-marking-tapes/`

## Local preview

Open `index.html` directly in a modern browser. No build step or package installation is required.

Fonts are loaded from `assets/fonts/` and browsers block `woff2` over `file://` for CORS reasons, so type falls back to system fonts on a direct file open. To preview with the real typefaces, serve the folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Routes

`index.html` opens on the category view. Every product card, comparison-table row and related-product tile opens a full product-page mock-up in the same file.

| Route | Product |
| --- | --- |
| `#mightyline-tape` | MightyLine Marking Tape |
| `#freezer-tape` | MightyLine X-Treme Freezer Tape |
| `#lean-line-960` | Lean Line 960 Floor Marking Tape |
| `#lean-line-570` | Lean Line 570 Floor Marking Tape |
| `#external-tape` | Cotewell External Line Marking Tape |
| `#angle-shape` | MightyLine 5S Angle Shape |
| `#t-shape` | MightyLine 5S T Shape |
| `#arrow` | MightyLine 5S Arrow |
| `#footprints` | Mighty Line Small Footprints (Pair) |
| `#freezer-footprints` | X-Treme Freezer Small Footprints (Pair) |
| `#stop-sign` | Stop Sign Floor Sticker |
| `#forklift-sign` | Warning Forklift Traffic Floor Sticker |
| `#keep-clear` | Keep Clear Do Not Block Floor Sticker |

Deep links to a section within a product also work, for example `#mightyline-tape-features` or `#lean-line-960-specs`.

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | Category view and the shared product-page template |
| `app.js` | Product data for all 13 products, hash routing, variant selection, JSON-LD |
| `styles.css` | Full stylesheet, shared design system with the projector mock-up |
| `404.html` | Pages 404 with links back into every product route |
| `robots.txt` | Blocks indexing of the mock-up |
| `.nojekyll` | Stops GitHub Pages running the files through Jekyll |
| `assets/fonts/` | Archivo, Red Hat Display, IBM Plex Mono subsets |
| `assets/img/` | Logo, favicon, project stills |
| `SEO-CRO-NOTES.md` | Keyword mapping, recommended metadata, CRO rationale, production checklist |

## Product imagery

Product photography is referenced from the live cotewell.com.au media library so the mock-up always shows the current image for the selected colour. Every product also has a CSS-drawn fallback that tints to the selected colour, so the page still reads correctly if the media library is unreachable or an image is missing.

Shared assets (fonts, logo, favicon, project stills) are committed to this repository.

## GitHub Pages deployment

`.github/workflows/deploy-pages.yml` deploys the repository root to GitHub Pages on every push to `main`, and can also be run manually from the Actions tab. Before uploading, the workflow checks every required file is present and that `app.js` parses.

Before the first deployment:

1. Open the repository's **Settings**.
2. Select **Pages** under **Code and automation**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`.

First push from this folder:

```bash
git push -u origin main
```

## Status

Review mock-up, not production code. `index.html` carries `noindex, nofollow` and the cart is simulated in the browser. See the production checklist at the end of `SEO-CRO-NOTES.md` before any of this is ported into WordPress.
