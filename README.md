# Figma + Angular Lab

Welcome to your **Figma + Angular Design Lab**! This project is crafted specifically as a playground for UI/UX designers to experiment with **Figma Make**, design tokens, and Angular standalone components.

---

## 🎨 What's Inside

- **Angular (v22)**: Built using modern, lightweight standalone components (no complex legacy modules).
- **SCSS Design Tokens**: Pre-configured CSS variables and SCSS tokens for Figma brand colors, typography scales, spacing, and border radiuses located in `src/styles.scss`.
- **Pages & Routing**:
  - **Overview (`/`)**: Welcome hero and designer next-steps guide.
  - **Design System (`/design-system`)**: Interactive UI showcase displaying color swatches, button states (with reactive click counters), and typography specimens.
- **GitHub Ready**: The folder structure follows clean best practices with a `.gitignore` configured to keep your repository lean.

---

## 🚀 How to Preview the Application in Your Browser

Whenever you want to view and interact with your app:

1. Open your terminal in this folder.
2. Run:
   ```bash
   npm start
   ```
3. Open your browser to: **[http://localhost:4200](http://localhost:4200)**

---

## 📁 Project Structure (Designer Cheat Sheet)

```text
figma-angular-lab/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/               # Welcome page & workflow overview
│   │   │   └── design-system/      # Token swatches, buttons & typography preview
│   │   ├── app.ts                  # Main shell component
│   │   ├── app.html                # Navigation bar & layout template
│   │   ├── app.scss                # Navigation & header styles
│   │   └── app.routes.ts           # Page URL routes
│   ├── styles.scss                 # Global design tokens (colors, fonts, buttons, shadows)
│   └── index.html                  # HTML entry point
├── package.json                    # Project configuration & dependencies
└── angular.json                    # Angular CLI settings
```
