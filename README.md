<div align="center">
  <h1>🪙 CryptoNow</h1>
  <p>A modern web application for tracking cryptocurrency market data in real time.</p>

  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
</div>

---

## 📖 About

**CryptoNow** is a web application that lets users search for and monitor cryptocurrency market data, including real-time prices, 24h highs/lows, trading volume, market cap, and price variation — all formatted in Brazilian Real (BRL).

---

## ✨ Features

- 🔍 **Search** for any cryptocurrency by symbol
- 📈 **Real-time price data** including 24h high, 24h low, and delta
- 💰 **Market cap and volume** displayed in BRL
- 📄 **Detail page** for each coin with full market information
- 🔁 **Auto-redirect** to home if an invalid coin is searched
- 📱 **Responsive layout** for mobile and desktop

---

## 🖥️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| React Router DOM v6 | Client-side routing |
| CSS Modules | Scoped component styling |

---

## 📁 Project Structure

```
CryptoNow/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and icons
│   ├── components/
│   │   ├── header/       # Header with logo
│   │   └── layout/       # Shared layout wrapper
│   ├── pages/
│   │   ├── home/         # Coin listing & search
│   │   ├── detail/       # Coin detail view
│   │   └── notfound/     # 404 page
│   ├── routes.tsx        # App routing config
│   └── main.tsx          # Entry point
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/TallesDiniz/CryptoNow.git

# 2. Navigate into the project
cd CryptoNow

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

---

## 📡 API

This project consumes a cryptocurrency data API to fetch coin information. The following data is displayed per coin:

| Field | Description |
|---|---|
| `name` | Full coin name |
| `symbol` | Ticker symbol (e.g. BTC) |
| `price` | Current price in BRL |
| `market_cap` | Total market capitalization |
| `high_24h` | Highest price in the last 24h |
| `low_24h` | Lowest price in the last 24h |
| `delta_24h` | Percentage change in the last 24h |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/TallesDiniz">TallesDiniz</a>
</div>
