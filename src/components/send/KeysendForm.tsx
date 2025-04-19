import { useState } from "react";
import { useWebLN } from "../../context/WebLNProvider";

const KeysendForm = () => {
  const { webln, loading, setLoading } = useWebLN();
  const [pubkey, setPubkey] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const handleKeysend = async () => {
    if (!webln) {
      setError("Please connect your wallet first.");
      return;
    }
    if (!pubkey.match(/^0[2-3][0-9a-fA-F]{64,66}$/)) {
      setError(
        "Invalid pubkey format. Use a 33-byte hex string starting with 02 or 03.",
      );
      return;
    }
    if (amount <= 0 || amount > 1000000) {
      setError("Amount must be between 1 and 1,000,000 sats.");
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
          disabled={loading}
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
