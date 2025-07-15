# 🔗 React URL Shortener Web App

This is a client-side URL shortener built with **React** and **Material UI**, developed as part of a campus hiring evaluation. It allows users to generate short links, track click analytics, and manage URL expiration — all without a backend server.

---

## 🚀 Features

* 🔗 Shorten up to 5 URLs at once
* 🧪 Client-side input validation (URL, shortcode, and validity)
* ⏰ Custom or default (30 min) expiration times
* ✍️ Optional custom shortcodes (alphanumeric, validated)
* 📊 Statistics page showing:

  * Total clicks per short link
  * Timestamp, referrer, and (mocked) geo data of each click
* 🔄 In-app redirection with automatic expiry check
* 📦 Session persistence using `localStorage`
* 🧾 Custom logging middleware (no `console.log` used)

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── UrlForm.js          // Input form per URL
│   ├── UrlStats.js         // Per-link analytics display
│   └── Redirector.js       // Route-based redirect logic
├── pages/
│   ├── ShortenerPage.js    // Main URL shortener UI
│   └── StatsPage.js        // URL stats dashboard
├── utils/
│   ├── validator.js        // Input validation logic
│   ├── shortener.js        // Core logic: shorten, store, validate
│   └── loggerMiddleware.js // Custom event logger
├── App.js
└── index.js
```

---

## 🧪 Validation Rules

| Field            | Rule                                       |
| ---------------- | ------------------------------------------ |
| Long URL         | Must be a valid URL (`https://...`)        |
| Validity (min)   | Integer value, defaults to 30 if omitted   |
| Custom Shortcode | Optional, alphanumeric, 3–20 chars, unique |

---

## 🖥️ Run Locally

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Start the development server

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ✏️ Usage Instructions

* Navigate to the homepage to shorten URLs
* Click on generated short URLs to test redirection
* Visit `/stats` to view link analytics
* All data is stored in the browser (`localStorage`)

---

## 📓 Tech Stack

* **React**
* **Material UI**
* **React Router**
* **JavaScript (ES6)**
* `localStorage` for persistence
* No external backend (fully client-side)

---

## 📄 License

This project is licensed for educational and evaluation purposes.

---

## 🙋‍♀️ Author

**Abhishek Kamboj**
Btech Student, Graphic Era University
GitHub: [@Abhishek130900](https://github.com/Abhishek130900)
