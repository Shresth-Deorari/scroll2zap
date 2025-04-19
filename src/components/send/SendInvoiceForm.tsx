import { useState } from "react";
import SendPaymentExecutor from "./SendPaymentExecutor";
import { LightningAddress } from "@getalby/lightning-tools";
import bitcoin from "../../assets/bitcoin-logo.svg";
import { useWebLN } from "../../context/WebLNContext";

const SendInvoiceForm = () => {
  const {
    userLoading: loading,
    setUserLoading: setLoading,
    webln,
  } = useWebLN();
  const [amount, setAmount] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>("");
  const [invoice, setInvoice] = useState<string>("");

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
      <h3 className="mb-8 flex items-center gap-2">
        <img src={bitcoin} alt="Bitcoin Logo" className="w-6 h-6" />
        Send Payment
      </h3>
      <div className="flex flex-col gap-3 w-full">
        <input
          type="number"
          placeholder="Amount (sats)"
          value={amount || ""}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
        <input
          type="text"
          placeholder="Recipient LN Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={handleGenerateInvoice}
          disabled={loading}
          className="input_button"
        >
          {webln
            ? loading
              ? "Generating..."
              : "Generate Invoice"
            : "Generate Invoice"}
        </button>
        {invoice && <SendPaymentExecutor invoice={invoice} />}
      </div>
    </section>
  );
};

export default SendInvoiceForm;
