# Josh Founder Website

Static personal founder website for Josh Farrell / Josh In The City.

The site is built with plain HTML, CSS, and a tiny JavaScript terminal effect. It is designed to run directly on GitHub Pages with no build step.

## Files

- `index.html` - page content, metadata, sections, and placeholder links.
- `styles.css` - dark punk/cyberpunk visual system, layout, responsive styling.
- `script.js` - animated terminal intro.
- `assets/` - images, album art, old flyers, and other media.

## Deploy To GitHub Pages

1. Push these files to the repository's `main` branch.
2. In GitHub, open `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select branch `main` and folder `/root`.
6. Save. GitHub will publish the site after the Pages workflow finishes.

## Edit Content

Open `index.html` and search for `EDIT:` comments. Those mark the main areas to customize:

- Hero headline and intro
- Founder bio
- Music links and flyer/artwork placeholders
- Project cards
- Timeline entries
- Manifesto statements
- Social, media, and press links

## Add Links

Replace `href="#"` placeholders in `index.html` with real URLs for:

- Bigwig Wikipedia
- Bigwig Spotify
- Bigwig YouTube
- PotCoin Wikipedia, if available
- PotCoin official website
- Beatify official website
- YesKey Wallet
- Flowerscan
- GitHub repositories
- Press and media links
- X/Twitter, LinkedIn, Spotify, YouTube, Wikipedia, and email

## Change Colors And Fonts

Open `styles.css` and edit the variables at the top:

```css
:root {
  --bg: #070707;
  --ink: #f5f1e8;
  --hot: #ff3030;
  --acid: #c8ff2f;
  --cyan: #35f2ff;
}
```

The site uses system fonts for speed. To use a custom font, add a font import or local `@font-face` rule in `styles.css`, then update the `font-family` declarations.

## Change Images

Add images to `assets/`, then replace the flyer placeholders in the Music section of `index.html` with `img` tags.

Example:

```html
<img src="assets/bigwig-flyer.jpg" alt="Bigwig flyer from the 1990s">
```

## Notes

Keep images compressed for fast GitHub Pages loading. The current design intentionally avoids heavy frameworks, tracking scripts, or corporate startup polish.
