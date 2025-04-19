import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import bitcoin from "../../assets/bitcoin-logo.svg";
import { useWebLN } from "../../context/WebLNProvider";

const ReceiveInvoiceGenerator = () => {
  const { webln, userLoading: loading, setUserLoading: setLoading } = useWebLN();
  const [amount, setAmount] = useState<number>(0);
  const [invoice, setInvoice] = useState<string>("");

  const handleGenerateInvoice = async () => {
    if (!webln) {
      alert("Please connect your wallet first.");
      return;
    }
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    setLoading(true);
    try {
      const invoiceData = await webln.makeInvoice({ amount });
      setInvoice(invoiceData.paymentRequest);
    } catch (error) {
      console.error("Error generating invoice:", error);
      alert("Failed to generate invoice.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center w-full max-w-md my-10">
      <h3 className="mb-8 flex items-center gap-2">
        <img src={bitcoin} alt="Bitcoin Logo" className="w-6 h-6" />
        Receive Payment
      </h3>
      <div className="flex flex-col gap-3 w-full">
        <input
          type="number"
          placeholder="Amount (sats)"
          value={amount || ""}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
        <button
          type="button"
          onClick={handleGenerateInvoice}
          disabled={loading || !webln}
          className="input_button"
        >
          {loading ? "Generating..." : "Generate Invoice"}
        </button>
        {invoice && (
          <div className="mt-4 text-center">
            <p className="break-all mb-2 text-[var(--color-subheading)]">
              {invoice}
            </p>
            <QRCodeSVG value={invoice} size={128} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ReceiveInvoiceGenerator;
