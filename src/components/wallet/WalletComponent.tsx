import { useState, useEffect } from "react";
import { Button } from "@getalby/bitcoin-connect-react";
import { useWebLN } from "../../context/WebLNContext";
import { webln as WebLN } from "@getalby/sdk";
import RefreshButton from "./RefreshButton";
import { IoCopyOutline } from "react-icons/io5";

const WalletConnector: React.FC = () => {
  const { webln, userLoading: globalLoading } = useWebLN();
  const [walletInfo, setWalletInfo] = useState<{
    alias?: string;
    pubkey?: string;
    balance?: number;
  }>({});
  const [localLoading, setLocalLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchWalletInfo = async () => {
    if (!webln) return;
    setLocalLoading(true);
    setError("");
    try {
      const info = await webln.getInfo();
      setWalletInfo((prev) => ({
        ...prev,
        alias: info.node?.alias || "Unknown",
        pubkey: info.node?.pubkey || "Unknown",
      }));

      if (webln.getBalance) {
        const balance = await webln.getBalance();
        setWalletInfo((prev) => ({
          ...prev,
          balance: balance.balance || 0,
        }));
      } else {
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
      setLocalLoading(false);
    }
  };

  useEffect(() => {
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

  const isLoading = globalLoading || localLoading;

  return (
    <div className="p-6 w-[680px] rounded-2xl shadow-lg bg-[var(--color-input-bg)] text-[var(--color-text)]">
      {isLoading && (
        <h3 className="text-lg text-center text-[var(--color-heading)]">
          Loading wallet info
        </h3>
      )}
      {error && <p className="text-lg text-center text-red-500">{error}</p>}

      {!isLoading && !error && (
        <>
          <div className="flex items-center justify-center mb-6 relative">
            <div className="absolute left-0 flex items-center gap-2">
              <span className="relative flex h-4 w-4">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full ${webln ? "bg-green-400" : "bg-red-400"}`}
                ></span>
              </span>
            </div>
            <h3 className="text-2xl font-semibold font-roboto text-[var(--color-heading)]">
              Wallet Connected
            </h3>
            <div className="absolute right-0 flex items-center justify-center">
              <RefreshButton onClick={fetchWalletInfo} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center border-b border-[rgba(255,255,255,0.1)] pb-2 relative">
              <span className="w-[150px] text-lg font-bold uppercase text-left text-[var(--color-subheading)]">
                Alias:
              </span>
              <div className="flex-1 text-center">
                <span className="text-lg font-semibold text-[var(--color-text)]">
                  {walletInfo.alias || (
                    <span className="italic text-gray-400">Not loaded</span>
                  )}
                </span>
              </div>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(walletInfo.alias || "")
                }
                className="absolute right-0 p-1 w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform"
                title="Copy Alias"
              >
                <IoCopyOutline />
              </button>
            </div>
            <div className="flex items-center border-b border-[rgba(255,255,255,0.1)] pb-2">
              <span className="w-[150px] text-lg font-bold uppercase text-left text-[var(--color-subheading)]">
                PubKey:
              </span>
              <div className="flex-1 text-center">
                <span className="text-lg font-semibold text-[var(--color-text)]">
                  {walletInfo.pubkey || (
                    <span className="italic text-gray-400">Not loaded</span>
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center border-b border-[rgba(255,255,255,0.1)] pb-2">
              <span className="w-[150px] text-lg font-bold uppercase text-left flex items-center gap-2 text-[var(--color-subheading)]">
                Balance:
              </span>
              <div className="flex-1 text-center">
                <span className="text-lg font-semibold text-[var(--color-text)]">
                  {walletInfo.balance !== undefined ? (
                    `${walletInfo.balance} sats`
                  ) : (
                    <span className="italic text-gray-400">Not loaded</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WalletConnector;
