import { useContext, useState, useEffect } from "react";
import { WebLNContext } from "../../context/WebLNProvider";
import { Button } from "@getalby/bitcoin-connect-react";
import { webln as WebLN } from "@getalby/sdk";

const WalletConnection = () => {
  const webln = useContext(WebLNContext);
  const [walletInfo, setWalletInfo] = useState<{
    alias?: string;
    pubkey?: string;
    balance?: number;
  }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchWalletInfo = async () => {
      if (!webln) return;
      setLoading(true);
      try {
        // Try WebLN getInfo
        const info = await webln.getInfo();
        setWalletInfo((prev) => ({
          ...prev,
          alias: info.node?.alias || "Unknown",
          pubkey: info.node?.pubkey || "Unknown",
        }));

        // Try WebLN getBalance
        if (webln.getBalance) {
          const balance = await webln.getBalance();
          setWalletInfo((prev) => ({
            ...prev,
            balance: balance.balance || 0,
          }));
        } else {
          // Fallback to Alby JS SDK
          const nwc = new WebLN.NostrWebLNProvider({
            // Todo: Use NWC URL or defaults
          });
          await nwc.enable();
          const balance = await nwc.getBalance();
          setWalletInfo((prev) => ({
            ...prev,
            balance: balance.balance || 0,
          }));
          nwc.close();
        }
      } catch (err) {
        console.error("Error fetching wallet info:", err);
        setError("Failed to fetch wallet info. Please try reconnecting.");
      } finally {
        setLoading(false);
      }
    };

    fetchWalletInfo();
  }, [webln]);

  if (!webln) {
    return (
      <div
        className="p-4"
        style={
          {
            "--bc-color-brand": "#ee8e18",
            "--bc-color-brand-button-text": "#1A202C",
            "--bc-color-brand-hover": "#f0a242",
          } as React.CSSProperties
        }
      >
        <Button />
      </div>
    );
  }

  return (
    <div className="p-4 w-[680px] rounded-lg text-bg-dark dark:bg-text-light dark:text-bg-light shadow">
      <h3 className="text-xl font-semibold mb-2 "> Wallet Connected</h3>
      {loading && <p>Loading wallet info...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          <p>Alias: {walletInfo.alias || "Unknown"}</p>
          <p>PubKey: {walletInfo.pubkey || "Unknown"}</p>
          <p>
            Balance:{" "}
            {walletInfo.balance !== undefined
              ? `${walletInfo.balance} sats`
              : "Unknown"}
          </p>
        </>
      )}
    </div>
  );
};

export default WalletConnection;
