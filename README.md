# 🎨 Background Generator

A tiny web app to generate beautiful **CSS linear-gradients** and copy the code in one click.

* **Live Demo:** [https://ankitdhardwivedi.github.io/backgroundgenerator/](https://ankitdhardwivedi.github.io/backgroundgenerator/)
* **Repository:** [https://github.com/AnkitdharDwivedi/backgroundgenerator](https://github.com/AnkitdharDwivedi/backgroundgenerator)

---

## ✨ Features

* Generate random linear-gradient backgrounds.
* Pick/adjust colors (via color inputs) and instantly preview the result.
* **Copy CSS** button to grab the gradient code for your project.
* Minimal, responsive UI — works in any modern browser.

> Tip: Use the copied CSS on any element (e.g., `body`, cards, buttons) for quick theming.

---

## 🖼️ Preview

Add a screenshot or GIF here:

```
assets/preview.png
```

---

## 🧰 Tech Stack

* **HTML5** (structure)
* **CSS3** (layout, preview styling)
* **JavaScript (Vanilla)** (gradient generation, clipboard copy)

---

## 📦 Project Structure

```
backgroundgenerator/
├── index.html      # App markup
├── style.css       # Basic styles and preview box
├── script.js       # Gradient logic + copy-to-clipboard
└── README.md       # This file
```

---

## 🚀 Getting Started

### Option 1 — Open locally

1. Clone or download the repo.
2. Open `index.html` in your browser. That’s it.

### Option 2 — GitHub Pages

Already deployed at the link above. To redeploy from your fork:

1. Push your code to `main` (or `gh-pages`).
2. In **Repository → Settings → Pages**, set the source to the branch containing `index.html`.

---

## 🕹️ Usage

1. Choose two colors (or click **Generate Gradient** for a random palette).
2. The preview updates instantly.
3. Click **Copy the CSS gradient** to copy the code to your clipboard.
4. Paste into your stylesheet.

Example usage in CSS:

```css
body {
  /* Example output; yours will vary */
  background: linear-gradient(90deg, #ff7a18, #af002d 70%);
  min-height: 100vh;
}
```

---

## 🗺️ Roadmap / Ideas

* Angle slider (0–360°) and preset directions (to right, to bottom, etc.).
* More than two color stops (3–5 step gradients).
* **Randomize** button with nice color-harmony palettes.
* Export as an image (PNG) or CSS snippet with vendor prefixes.
* Dark mode UI.

---

## 🤝 Contributing

Pull requests are welcome! If you add a feature:

1. Fork the repo, create a feature branch.
2. Keep UI minimal and accessible.
3. Update this README and add a screenshot if the UI changes.

---

## 📄 License

MIT — feel free to use and modify.

---

## 🙌 Credits

Built by **Ankit Dhar Dwivedi**. Inspired by common CSS gradient tools and rebuilt in a clean, beginner‑friendly way.
