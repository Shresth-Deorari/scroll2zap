import { PayButton } from "@getalby/bitcoin-connect-react";
import { PaymentComponentProps, PaymentResponse } from "../../types/types";

function SendPaymentExecutor({ invoice }: PaymentComponentProps) {
  const handlePaid = (response: PaymentResponse) => {
    console.log("Payment successful:", response.preimage);
    alert("Payment successful!");
  };

  return (
    <div className="mt-4">
      <PayButton invoice={invoice} onPaid={handlePaid} />
    </div>
  );
}

export default SendPaymentExecutor;
