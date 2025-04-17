import { PayButton } from "@getalby/bitcoin-connect-react";

function PaymentComponent({ invoice }: { invoice: string }) {
  const handlePaid = (response: { preimage: string }) => {
    console.log("Payment successful:", response.preimage);
    alert("Payment successful!");
  };

  return (
    <div className="mt-4">
      <PayButton invoice={invoice} onPaid={handlePaid} />
    </div>
  );
}

export default PaymentComponent;
