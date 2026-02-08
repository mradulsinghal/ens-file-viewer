# ENS File Viewer

A modern **Web3 ENS explorer** that allows users to:

* View ENS profile data from Ethereum mainnet
* Resolve wallet addresses and ownership
* Read social/text records linked to ENS
* Visualize ENS relationships using an interactive social graph

Built using **React, Ethers.js, and Alchemy RPC** with an AI-assisted development workflow.

---

## 🚀 Live Features

### 1. ENS Profile Viewer

* Resolve any `.eth` name
* Fetch:

  * Owner address
  * Resolved wallet
  * Resolver contract
  * Social links (Twitter, GitHub, email, etc.)
  * Expiry date

All data is pulled **directly from Ethereum mainnet**.

---

### 2. ENS Social Graph

* Visualize relationships between ENS names
* Interactive node graph using **force-directed layout**
* Add/remove custom connections
* Local persistence with browser storage

---

## 🧱 Tech Stack

* **Frontend:** React + Vite
* **Blockchain:** Ethereum Mainnet
* **Web3 Library:** Ethers.js
* **RPC Provider:** Alchemy
* **Visualization:** react-force-graph
* **Database (optional):** Supabase

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/mradulsinghal/ens-file-viewer.git
cd ens-file-viewer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file:

```
VITE_ALCHEMY_RPC_URL=your_alchemy_mainnet_rpc
VITE_SUPABASE_URL=optional
VITE_SUPABASE_ANON_KEY=optional
```

### 4. Run the app

```bash
npm run dev
```

---

## 📚 Learning Goals

This project was built to:

* Understand **real on-chain ENS data fetching**
* Practice **full-stack Web3 architecture**
* Learn **AI-assisted rapid prototyping**
* Ship a **production-style GitHub project**

---

## 🔮 Future Improvements

* ENS name registration flow
* Smart contract integration for custom ENS-like system
* Wallet connect + transaction support
* Mainnet deployment dashboard

---

## 👨‍💻 Author

**Mradul Singhal**
Aspiring **Web3 / AI Builder** focused on shipping real products using AI-accelerated development.

---

## 📜 License

MIT License
