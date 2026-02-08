import { useState } from "react";
import { ethers } from "ethers";

export default function App() {
  const [ens, setEns] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [twitter, setTwitter] = useState("");
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Proper provider
  const provider = new ethers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/z9Gzeks4ZytXymGnqpWEY"
  );
  
  // ENS search
  async function searchENS() {
    if (!ens) return;
    setLoading(true);

    try {
      // 1️⃣ resolve address
      const addr = await provider.resolveName(ens);
      setAddress(addr || "Not found");

      // 2️⃣ get resolver
      const resolver = await provider.getResolver(ens);

      if (resolver) {
        // 3️⃣ fetch metadata
        const av = await resolver.getText("avatar").catch(() => null);
        const tw = await resolver.getText("com.twitter").catch(() => null);

        setAvatar(av || "");
        setTwitter(tw || "");
      } else {
        setAvatar("");
        setTwitter("");
      }
    } catch (err) {
      console.error(err);
      setAddress("Error");
      setAvatar("");
      setTwitter("");
    }

    setLoading(false);
  }

  // MetaMask connect
  async function connectWallet() {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    const browserProvider = new ethers.BrowserProvider(window.ethereum);
    const signer = await browserProvider.getSigner();
    const addr = await signer.getAddress();
    setWallet(addr);
  }

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>ENS Viewer</h1>

      {/* Wallet */}
      <button onClick={connectWallet}>
        {wallet ? wallet.slice(0, 6) + "..." : "Connect Wallet"}
      </button>

      <hr style={{ margin: "20px 0" }} />

      {/* ENS search */}
      <input
        placeholder="vitalik.eth"
        value={ens}
        onChange={(e) => setEns(e.target.value)}
      />

      <button onClick={searchENS} style={{ marginLeft: 10 }}>
        {loading ? "..." : "Search"}
      </button>

      {/* Results */}
      {address && (
        <div style={{ marginTop: 20 }}>
          <p><b>Address:</b> {address}</p>

          {avatar && (
            <p>
              <b>Avatar:</b><br />
              <img src={avatar} alt="avatar" width="80" />
            </p>
          )}

          {twitter && (
            <p>
              <b>Twitter:</b> {twitter}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
