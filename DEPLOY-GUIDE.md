# 🚀 Publish Your Website to GitHub — Beginner's Guide (No Coding Needed)

Follow this guide in order. You only need to type **8 short commands** (or copy-paste them).

---

## What is this step for?

- **Git** = a tool on your computer that packages your website files into versions.
- **GitHub** = a free website that stores those files online.
- **Vercel** (the next step) reads the files from GitHub and puts your website live on the internet.

So the flow is: **Your computer → GitHub → Vercel → live website** 🌍

---

## PART 1 — Get the website files onto your computer

1. In the workspace where this project lives, find the **`portfolio`** folder in the file list.
2. Look for a **download button/icon** next to the folder name and click it.
   (It will download as a ZIP file.)
3. Find the downloaded ZIP (usually in your **Downloads** folder).
4. **Right-click the ZIP → "Extract All…" → Extract** (put it on your Desktop).
5. Open the extracted folder and check you can see these files inside:
   - `package.json`  ✔️
   - `README.md`  ✔️
   - `src` (folder)  ✔️
   - `public` (folder)  ✔️

   ⚠️ If you see *another folder called `portfolio` inside*, move its contents up one level —
   the `package.json` file must be in the folder you are about to publish.

---

## PART 2 — Install Git (one time only)

1. Go to **https://git-scm.com/downloads** and download Git for your computer (Windows/Mac).
2. Run the installer and click **Next → Next → … → Install** (accept all default options).
3. To check it worked:
   - **Windows:** press `Win` key, type `cmd`, press Enter, then type:
     ```
     git --version
     ```
   - **Mac:** open Spotlight (⌘ + Space), type `Terminal`, press Enter, then type the same.
   - If you see something like `git version 2.45.0`, you're good. ✅

---

## PART 3 — Create a GitHub account (one time only)

1. Go to **https://github.com** → **Sign up** (free plan is fine).
2. Confirm your email address when GitHub emails you.
3. Sign in.

---

## PART 4 — Create an empty repository (a "folder" on GitHub)

1. On GitHub, click the **➕ (plus) button** in the top-right → **"New repository"**.
2. Fill in:
   - **Repository name:** `portfolio`
   - **Description (optional):** `My personal portfolio website`
   - **Public or Private:** choose **Public** (required for free Vercel hosting)
   - ⚠️ **DO NOT** tick "Add a README file" — leave the boxes unticked!
3. Click **Create repository**.
4. A page appears with setup instructions. **Copy the long URL** at the top
   that looks like this (it will have YOUR username):
   ```
   https://github.com/YourUsername/portfolio.git
   ```
   Keep this page open — you'll need the URL in a moment.

---

## PART 5 — Push your website to GitHub (the 8 commands)

### 5.1 Open a terminal *inside your website folder*

**Windows (easiest way):**
1. Open your `portfolio` folder in File Explorer.
2. Click once on the **address bar** at the top (where the path is shown).
3. Type `cmd` and press **Enter**.
   → A black window opens, already pointing at your folder. ✅

**Mac:** open System Settings → Keyboard → Shortcuts → Services → tick
"New Terminal at Folder". Then right-click the `portfolio` folder → **Services →
New Terminal at Folder**.

### 5.2 Type (or copy-paste) these commands ONE AT A TIME, pressing Enter after each

> 💡 In the black window, paste = right-click. Type your details into the
> first two commands (replace the example text).

**Command 1 — tell Git who you are** (only needed once ever):
```
git config --global user.name "Muhammad Mohsin Raza"
```

**Command 2:**
```
git config --global user.email "rmohsin16@gmail.com"
```

**Command 3 — turn this folder into a versioned project:**
```
git init
```
*(You should see: "Initialized empty Git repository…")*

**Command 4 — select all website files:**
```
git add .
```

**Command 5 — package them as "version 1":**
```
git commit -m "Initial commit"
```
*(You should see a long list of file names — that's good!)*

**Command 6 — make sure the main line is called "main":**
```
git branch -M main
```

**Command 7 — connect your folder to the GitHub page from PART 4:**
*(replace YourUsername with your real GitHub username — use the URL you copied)*
```
git remote add origin https://github.com/YourUsername/portfolio.git
```

**Command 8 — upload everything:**
```
git push -u origin main
```

### 5.3 Sign in when asked

- A **browser window will pop up** asking you to sign in to GitHub.
- Click **"Sign in with your browser"** → **Authorize git-ecosystem** (or similar).
- If no window appears and it asks for a *username/password*:
  - Username = your GitHub username
  - Password = your **Personal Access Token** — see the Troubleshooting section at the end.

### 5.4 Check it worked

- The black window ends with something like: `Branch 'main' set up to track…`
- Go back to your browser → your GitHub repository page → **refresh**.
- You should see all your files there (package.json, src, public, README…). 🎉

---

## PART 6 — Next step: put the website LIVE with Vercel

1. Go to **https://vercel.com** → **Sign up with GitHub**.
2. Click **Add New → Project** → find **`portfolio`** → **Import**.
3. Vercel auto-detects everything → click **Deploy**.
4. In ~1–2 minutes you get a live link like `https://portfolio-xxxx.vercel.app` ✅

---

## 🔁 Updating the website later (after you change anything)

Whenever you edit a file (e.g. update `src/data/site.ts`), repeat only these three:

```
git add .
git commit -m "Update site details"
git push
```

Vercel will re-publish the site automatically within a minute.

---

## 🆘 Troubleshooting

| Problem | Fix |
|---|---|
| `'git' is not recognized…` | Git isn't installed (PART 2), or you need to close and reopen the black window. |
| `fatal: not a git repository` | The black window isn't inside the `portfolio` folder — redo step 5.1. |
| `fatal: remote origin already exists` | Skip command 7 and just run `git push -u origin main`. |
| It asks for username & password in the black window (no browser popup) | Go to GitHub → **Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token** → tick `repo` → copy the token → paste it as the password when asked. (Username = your GitHub username.) |
| `error: failed to push some refs` | Your GitHub repo already has files (maybe you ticked "Add a README"). Easiest fix: delete the repository on GitHub and create it again empty (PART 4), then repeat commands 7–8. |
| Push worked but Vercel shows an error | Post the error text to the AI assistant in the workspace and it will fix it for you. |

---

## 🧑‍💻 Don't want to type commands at all?

Use the free **GitHub Desktop** app instead:
1. Install from **https://desktop.github.com** and sign in with GitHub.
2. **File → Add local repository…** → choose your `portfolio` folder.
3. It says "No repository found" → click **"create a repository"** → **Create repository**.
4. Click **Publish repository** (keep it Public).
5. Done — same result as the command-line steps, all via buttons.
