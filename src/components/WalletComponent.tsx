import { useContext } from "react";
import { WebLNContext } from "../context/WebLnProvider";
import { Button } from "@getalby/bitcoin-connect-react";

const WalletConnection = () => {
  const webln = useContext(WebLNContext);

  if (!webln) {
    return <Button />;
  }

  return (
    <div className="p-4 rounded-lg bg-text-dark text-bg-dark dark:bg-text-light dark:text-bg-light shadow">
      <h3 className="text-xl mb-2">🔗 Wallet Connected</h3>
      <p>Alias: {webln?.alias ?? "Unknown"}</p>
      <p>PubKey: {webln?.pubkey ?? "Unknown"}</p>
    </div>
  );
};

export default WalletConnection;
