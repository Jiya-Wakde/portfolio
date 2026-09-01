# JIYA — ENGINEER IN PROGRESS

> **A highly creative, experimental, 100% static personal portfolio for Jiya.**

---

## ⚡ Identity & Concept

The central tagline of this portfolio is **ENGINEER IN PROGRESS**. Rather than presenting Jiya as a finished engineer, this site acts as an evolving digital engineering notebook documenting projects, experiments, software, hardware, and ongoing learning.

---

## 🛠️ Tech Stack & Requirements

This portfolio is **100% static**. It requires **zero backend**, database, API routes, or server-side runtime.

* **Frontend Framework**: React 18 + TypeScript + Vite
* **Styling**: Tailwind CSS + Custom CSS Design System
* **Motion & Animations**: Framer Motion
* **Icons**: Lucide React
* **Deployment Target**: GitHub Pages

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:5173`.

---

## 📦 Production Build & GitHub Pages Deployment

### 1. Build Static Output

Run the TypeScript build command:

```bash
npm run build
```

This compiles all React components, CSS, and datasets into the static `dist/` directory with relative asset URLs (`base: './'`).

### 2. Deploying to GitHub Pages

#### Option A: Manual `gh-pages` deployment
1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run deploy:
   ```bash
   npm run deploy
   ```

#### Option B: GitHub Actions (Recommended)
Add a `.github/workflows/deploy.yml` file to build and deploy the `dist/` directory automatically on every push to `main`.

---

## 📂 Updating Projects & Content

All content is structured cleanly in static TypeScript data files:

* **Projects Data**: Edit `src/data/projects.ts` to add or update projects. Toggle `featured: true` to feature top projects in the hero showcase.
* **Skills Data**: Edit `src/data/skills.ts` to update categorized technical skills and link them to project IDs.
* **Timeline & Progress**: Edit `src/data/journey.ts` for engineering milestones and active "CURRENTLY IN PROGRESS" experiments.
* **About & Socials**: Edit `src/data/about.ts` for bio text, location, email, and social links.
