# Book website

The website lives entirely in `docs/`. It uses plain HTML and CSS: no packages, build step, external fonts, or third-party tracking. The checklist app in `docs/workflow/` uses plain JavaScript.

## Preview

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory docs
```

Visit http://127.0.0.1:8000. Stop the server with Ctrl-C. You can also open `docs/index.html` directly in a browser.

## Everyday updates

- **Text, bio, social links:** edit `docs/index.html`. Each section has a descriptive ID (`inside`, `author`, `get-book`).
- **Purchase links:** search for `PURCHASE LINKS` in `docs/index.html`. Replace the “Purchase links coming soon” paragraph with actual retailer links. A commented example is provided. Update the wording to “Preorder” or “Buy” as appropriate.
- **Cover:** replace `docs/assets/book-cover.png`. If its dimensions change, update the image's width and height in the HTML to match. Update alt text and remove “Working cover” when final.
- **Cartoons:** `docs/assets/website-cartoon1.png` illustrates practical benefits; `docs/assets/website-cartoon2.png` sits beside the purchase section. Update matching alt text and dimensions when replacing either. Both are approved and archived in `website-cartoon1/` and `website-cartoon2/`. The superseded illustration is preserved in `website-cartoon1/previous-thank-you/`.
- **Colors and typography:** edit `docs/styles.css`; color variables are at the top. Fonts use system defaults.
- **Domain:** update `docs/CNAME`, canonical and Open Graph URLs in the HTML, `docs/robots.txt`, and `docs/sitemap.xml` together.

After editing, preview at wide and narrow widths and check the links. Commit and push the changes to the configured publishing branch when ready.

## One-time GitHub Pages setup

After these files are committed and pushed to `main`:

1. In `lakshmanok/unsloppable`, open **Settings → Pages**.
2. Select **Deploy from a branch**, branch **main**, folder **/docs**, and Save.
3. Set the custom domain to **unsloppable-book.com**. `docs/CNAME` already contains that domain.
4. At the DNS provider, point the apex domain to GitHub Pages. GitHub currently lists these four A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. If using `www`, add a CNAME from `www` to `lakshmanok.github.io`.
5. Enable **Enforce HTTPS** once GitHub has provisioned the certificate.

GitHub settings and DNS have not been changed as part of preparing the files. Only `docs/` is the publishing source; manuscript material and cartoon-generation notes outside it are not part of the site.

Official setup references (checked October 31, 2026):
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Content sources and pending details

The pitch and author bio were adapted from the supplied `Frontmatter.docx`; publisher production instructions were excluded. The working cover was supplied by the author. No release date, price, retailer availability, or endorsements are assumed. Twitter and LinkedIn URLs were supplied by the author.

The two current office cartoons were generated with the built-in image-generation tool using the unsloppable-cartoonist skill. Their prompts and visual reviews are in `website-cartoon-concepts/office-pair.md`. Approved originals, prompts, and reviews are in `website-cartoon1/` and `website-cartoon2/`. The superseded illustration is preserved in `website-cartoon1/previous-thank-you/`.

## Chapter 9 workflow app

The app is served at `/workflow/` alongside the book site. Source files are `docs/workflow/index.html`, `style.css`, `data.js`, and `app.js`; there is no build step. It starts with the six triage questions, offers low/medium/high scrutiny routes, and includes every chapter checklist, per-section reviews, notes, Markdown export, and the three sign-off statements. Progress is saved only in the current browser’s localStorage. New document clears the current record after confirmation.

Checklist content comes from the supplied Chapter 9 manuscript, with minor copyediting corrections. The logic test and section-retention check follow the surrounding explanatory prose. Chapter 3’s three passes are referenced, not invented. Quarterly maintenance is separately available. The supplied manuscript is not published.
