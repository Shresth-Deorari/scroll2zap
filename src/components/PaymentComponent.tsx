import { PayButton } from "@getalby/bitcoin-connect-react";
import { useState } from "react";

function PaymentComponent() {
  const [invoice, setInvoice] = useState<string>("");

  const fetchInvoice = async () => {
    // Replace with your invoice-fetching logic (e.g., API call)
    const newInvoice = "lnbc..."; // Example invoice
    setInvoice(newInvoice);
  };

  const handlePaid = (response: { preimage: string }) => {
    console.log("Payment successful:", response.preimage);
    alert("Paid successfully!");
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <PayButton
        invoice={invoice}
        onClick={fetchInvoice} // Fetch invoice when clicked
        onPaid={handlePaid} // Handle successful payment
      />
    </div>
  );
}

export default PaymentComponent;
