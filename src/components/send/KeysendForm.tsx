import { useContext, useState } from "react";
import { WebLNContext } from "../../context/WebLNProvider";

const KeysendForm = () => {
  const webln = useContext(WebLNContext);
  const [pubkey, setPubkey] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleKeysend = async () => {
    if (!webln) {
      alert("Please connect your wallet first.");
      return;
    }
    if (!pubkey || amount <= 0) {
      setError("Please enter a valid pubkey and amount.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const result = await webln.keysend({
        destination: pubkey,
        amount,
      });
      console.log("Keysend Success:", result);
      alert("Keysend Payment Sent!");
    } catch (err) {
      console.error("Keysend Error:", err);
      setError("Keysend failed. Check the pubkey and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center w-full max-w-md my-10">
      <h3 className="mb-8 flex items-center gap-2">Keysend Payment</h3>
      <div className="flex flex-col gap-3 w-full">
        <input
          type="text"
          placeholder="Recipient Pubkey (e.g., 03abcd...)"
          value={pubkey}
          onChange={(e) => setPubkey(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (sats)"
          value={amount || ""}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          type="button"
          onClick={handleKeysend}
          disabled={loading || !pubkey || amount <= 0}
          className="input_button"
        >
          {loading ? "Sending..." : "Send Keysend"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default KeysendForm;
