# Nicholas Randazzo website

This is a complete static website. No old admin portal, database, or build step is required.

## Preview on your Mac

If the extracted folder is on your Desktop and is named `Nicholas-Randazzo-Site-Redesign`, use this single Terminal command:

```bash
python3 -m http.server 8000 --directory "/Users/nickrandazzo/Desktop/Nicholas-Randazzo-Site-Redesign"
```

Leave Terminal open, then visit:

```text
http://localhost:8000/index.html
```

Use Control+C in Terminal when you want to stop the server.

## What this version changes

- Leads with the forward-looking identity “aspiring cardiac surgeon and bioethicist.”
- Describes the Bruner Lab as a former affiliation ending in May 2026.
- Withholds the title, venue, and identifying details of the bioethics manuscript during peer review.
- Uses an editorial, serif-led visual system inspired by scholarly institutions and literary reviews.
- Keeps the verified ORCID and PhilPeople profiles connected through `sameAs` structured data.

## Before publishing

The files assume the canonical domain `https://nicholasrandazzo.com`. If you use another domain, replace that address in the HTML, `robots.txt`, `sitemap.xml`, and `CNAME`.

The public site intentionally omits the home address and telephone number contained in the source CV. It uses the institutional email `Nicholas.randazzo@einsteinmed.edu`.

After deployment, submit `sitemap.xml` in Google Search Console and validate the homepage with Google’s Rich Results Test.
