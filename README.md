# BIMS — BIRD Information Management System

A browser-based management system for training programmes conducted at the
**Bankers Institute of Rural Development (BIRD), Mangaluru**.

## Features

| Module | What it does |
|---|---|
| Dashboard | Financial-year KPIs, delivery mode, programme type, gender, organisation type, state, PD/Co-PD and overall-impression charts (double-click to drill down) |
| Programmes | Create / edit / archive programmes, cascading Type → Department → Programme Name, target groups, QR codes |
| Registration | Form builder, QR, fill/preview, responses, Excel/CSV import (Replace or Add, duplicate-safe) |
| Entry / Exit Tests | Question bank, auto-scoring, score editing (single & bulk), gain ratio (weighted-average method), submission status |
| Feedback | Standard BIRD questionnaire, summary with every comment listed, filler responses (Nil/NA/No) filtered, submission status |
| Participant Database | Master participant record, blacklisting with reasons, nomination checking |
| Claims Data | Proposed vs actual programmes, approved vs utilised budget, Programme Evaluation Reports (editable, Word download) |
| Data Export | CSV exports by financial year and by programme |
| User Management | Users and roles, faculty members, target-group master |

Roles: **Admin**, **PD / Co-PD**, **General** (view only).

## Project structure

```
bims/
├── index.html          # Page markup (login screen + app shell)
├── css/
│   └── styles.css      # All styling, including dark & high-contrast themes
├── js/
│   ├── app.js          # Application logic
│   └── logo-data.js    # Logo as a data URI (used only inside the Word report)
├── assets/
│   └── bird-logo.png   # BIRD logo
├── .gitignore
├── .nojekyll           # Lets GitHub Pages serve the files as-is
└── README.md
```

## Running locally

No build step or server is required.

1. Download or clone the repository.
2. Open `index.html` in Chrome, Edge or Firefox.
3. Sign in with a demo login (any password): `admin`, `pd` or `user`.

An internet connection is needed for two CDN libraries:
- [qrcodejs](https://github.com/davidshimjs/qrcodejs) — QR code generation
- [SheetJS (xlsx)](https://sheetjs.com/) — Excel import/export

The app falls back to CSV and plain links if these cannot load.

## Data storage

All data is stored in the browser's **localStorage** (key `birdm_v22`).
- Data stays on the machine/browser where it was entered; it is not shared between users.
- Clearing browser data erases it — use **Data Export** regularly.
- To reload the sample data, run `resetDemo()` in the browser console.

## Uploading to GitHub

**Using the website**
1. Create a new repository on GitHub (choose **Private** — see note below).
2. Click **Add file → Upload files**.
3. Drag in the *contents* of this folder (`index.html`, `css`, `js`, `assets`, `README.md`, `.gitignore`, `.nojekyll`), keeping the folder structure.
4. Click **Commit changes**.

**Using Git**
```bash
cd bims
git init
git add .
git commit -m "Initial commit: BIMS"
git branch -M main
git remote add origin https://github.com/<your-account>/bims.git
git push -u origin main
```

## Hosting with GitHub Pages (optional)

Settings → Pages → *Deploy from a branch* → `main` / `(root)` → Save.
The app will be available at `https://<your-account>.github.io/bims/`.

## ⚠️ Important

- This is a **front-end prototype**. Login is for demonstration only (any password is accepted) and there is no server-side security.
- **Do not upload real participant data** (names, mobile numbers, e-mail IDs) to a public repository or public GitHub Pages site. Keep the repository private and use the sample data only.
- Moving to production would need a backend, proper authentication and a database.

## Version

BIMS 47
