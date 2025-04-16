import { PayButton } from "@getalby/bitcoin-connect-react";
import { useEffect, useState } from "react";

function PaymentComponent({
  recipient,
  amount,
}: {
  recipient: string;
  amount: number;
}) {
  const [invoice, setInvoice] = useState<string>("");

  useEffect(() => {
    if (recipient && amount > 0) {
      const generatedInvoice = `lnbc${amount}1p....`; // Todo: Replace with real invoice generation
      setInvoice(generatedInvoice);
    }
  }, [recipient, amount]);

  const handlePaid = (response: { preimage: string }) => {
    console.log("Payment successful:", response.preimage);
    alert("Paid successfully!");
  };

  return (
    <div>
      <PayButton invoice={invoice} onPaid={handlePaid} />
    </div>
  );
}

export default PaymentComponent;
