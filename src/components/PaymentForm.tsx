import { useState } from "react";
import PaymentComponent from "./PaymentComponent";
import { LightningAddress } from "@getalby/lightning-tools";

const PaymentForm = () => {
  const [amount, setAmount] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>("");
  const [invoice, setInvoice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerateInvoice = async () => {
    if (!recipient || amount <= 0) {
      alert("Please enter a valid recipient Lightning address and amount.");
      return;
    }
    setLoading(true);
    try {
      const ln = new LightningAddress(recipient);
      await ln.fetch();
      const invoiceData = await ln.requestInvoice({ satoshi: amount });
      setInvoice(invoiceData.paymentRequest);
    } catch (error) {
      console.error("Error generating invoice:", error);
      alert("Failed to generate invoice. Please check the recipient address.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center w-full max-w-md my-10">
      <h3 className="mb-8 dark:text-emerald-500 text-emerald-900">
        💸 Send Payment
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
        <input
          type="text"
          placeholder="Recipient LN Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button
          type="button"
          onClick={handleGenerateInvoice}
          disabled={loading}
          className="p-2 bg-emerald-500 text-white rounded disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Generate Invoice"}
        </button>
        {invoice && <PaymentComponent invoice={invoice} />}
      </div>
    </section>
  );
};

export default PaymentForm;
