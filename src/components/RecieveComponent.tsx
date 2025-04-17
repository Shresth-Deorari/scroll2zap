import { useContext, useState } from "react";
import { WebLNContext } from "../context/WebLnProvider";
import { QRCodeSVG } from "qrcode.react";

const ReceivePayment = () => {
  const webln = useContext(WebLNContext);
  const [amount, setAmount] = useState<number>(0);
  const [invoice, setInvoice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
      <h3 className="mb-8 dark:text-emerald-500 text-emerald-900">
        💰 Receive Payment
      </h3>
      <div className="flex flex-col gap-3">
        <input
          type="number"
          placeholder="Amount (sats)"
          value={amount || ""}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="p-2 border rounded"
          required
        />
        <button
          type="button"
          onClick={handleGenerateInvoice}
          disabled={loading || !webln}
          className="p-2 bg-emerald-500 text-white rounded disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Generate Invoice"}
        </button>
        {invoice && (
          <div className="mt-4 text-center">
            <p className="break-all mb-2">{invoice}</p>
            <QRCodeSVG value={invoice} size={128} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ReceivePayment;
