# LinkedIn Following Tab Switcher

**Don't let LinkedIn dictate what you see — take control of your feed.**

This Chrome extension automatically switches your LinkedIn Home page to the **"Following"** tab, so you only see updates from people and pages you chose to follow — not algorithmically suggested content.

---

## 🚀 Benefits
- See posts only from people **you actually follow**
- Avoid "viral" content, ads, and engagement bait

---

## 📥 Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/bibryam/linkedin-following-tab-switcher.git
```

### 2️⃣ Load the Extension in Chrome
1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (top right toggle)
3. Click **"Load unpacked"**
4. Select the folder you just cloned (`linkedin-following-tab-switcher`)
5. Visit [https://www.linkedin.com/feed/](https://www.linkedin.com/feed/) — it will switch to the **"Following"** tab automatically

---

## 🛠 How It Works
- The extension runs only on `https://www.linkedin.com/feed/`
- It detects the **"Following"** tab and clicks it if it’s not already active
- It watches for internal LinkedIn navigation and re-applies the switch if needed (SPA-compatible)

---

## 🔐 Why It’s Safe
- No data is collected, stored, or sent anywhere
- No external libraries or tracking
- All logic runs locally in your browser
- You can inspect the full source code in `content.js`

---
## ✅ Uninstalling
- Go to `chrome://extensions/`
- Find **LinkedIn Following Tab Switcher**
- Click **Remove**

---
## 👤 Author
**Bilgin Ibryam**  
[@bibryam on X](https://x.com/bibryam)

---
