# Deosil Rede Draygo — Setup & Deployment Guide

## What You Have

| File / Folder | Purpose |
|---|---|
| `index.html` | Main gallery page — shows all episodes |
| `episode.html` | Episode player page — plays one animation |
| `css/style.css` | All styling (colors, layout, fonts) |
| `js/episodes.js` | **Your episode list — edit this to add episodes** |
| `js/gallery.js` | Powers the gallery grid, search, and filter |
| `js/player.js` | Powers the episode player and share buttons |
| `animations/` | Put your HTML5 animation `.html` files here |
| `images/` | Put thumbnail images here (16:9 ratio, e.g. 1280×720 px) |

---

## Step 1 — Create a GitHub Account (if you don't have one)

1. Go to [https://github.com](https://github.com) and sign up (free).

---

## Step 2 — Create a New Repository

1. Click the **+** button (top right) → **New repository**.
2. Name it exactly: `deosil-animations` *(or any name you like)*.
3. Set it to **Public**.
4. Click **Create repository**.

---

## Step 3 — Upload Your Files

### Option A — Drag & Drop (easiest, no coding needed)

1. Open your new repository on GitHub.
2. Click **Add file → Upload files**.
3. Drag the entire `deosil-animations` folder contents into the upload box.
4. Click **Commit changes**.

### Option B — GitHub Desktop App

1. Download [GitHub Desktop](https://desktop.github.com/).
2. Clone your repository to your computer.
3. Copy all files into the cloned folder.
4. Click **Commit to main** → **Push origin**.

---

## Step 4 — Enable GitHub Pages

1. In your repository, click **Settings** (top menu).
2. Scroll down to **Pages** (left sidebar).
3. Under **Source**, select **Deploy from a branch**.
4. Choose branch: **main**, folder: **/ (root)**.
5. Click **Save**.

Within 1–2 minutes your site will be live at:

```
https://YOUR-GITHUB-USERNAME.github.io/deosil-animations/
```

---

## Step 5 — Add a New Episode

1. Open `js/episodes.js` in any text editor (Notepad works fine).
2. Scroll to the bottom of the `EPISODES` array.
3. Copy this block and paste it before the last `]`:

```js
{
  id: 7,                              // next number in sequence
  series: "Addiction Series",         // series name
  episode: 4,                         // episode number in that series
  title: "Internet Addiction",        // episode title
  description: "Short description here.",
  file: "animations/ep07-internet.html",   // your animation file
  thumbnail: "images/thumb-ep07.jpg",      // your thumbnail image
  date: "2024-05-01"                  // publish date YYYY-MM-DD
},
```

4. Place your animation HTML file in the `animations/` folder.
5. Place your thumbnail image in the `images/` folder.
6. Upload the updated files to GitHub (same as Step 3).

The new episode will appear on the site automatically.

---

## Step 6 — Share an Episode on Facebook

1. Open your site and click any episode.
2. On the episode player page, find the **Share on Facebook** bar.
3. Click **Copy Link** — the episode URL is now in your clipboard.
4. Open your **Deosil Rede Draygo** Facebook page.
5. Start a new post, paste the link, and Facebook will automatically
   pull in the episode title, description, and thumbnail as a preview.
6. Add your own caption and post!

> **Tip:** There is also a **Share on Facebook** button that opens Facebook's
> share dialog directly with the episode pre-loaded.

---

## Optional — Add Your Logo

Replace `images/logo.png` with your own logo image (square, at least 96×96 px).
It will appear in the site header automatically.

---

## Optional — Change the Facebook Page URL

Open `index.html` and `episode.html` and find this line:

```html
<a href="https://www.facebook.com/DesoilRedeDraygo" ...>Facebook Page</a>
```

Replace `DesoilRedeDraygo` with your exact Facebook page username.

---

## File Naming Tips

- Use lowercase letters and hyphens only: `ep07-internet-addiction.html`
- No spaces in filenames — spaces cause broken links.
- Thumbnails: JPG or PNG, 1280×720 px recommended.

---

*Built for Deosil Rede Draygo · GitHub Pages · No server required*
