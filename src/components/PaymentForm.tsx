import PaymentComponent from "./PaymentComponent";
import { useState } from "react";

const PaymentForm = () => {
  const [amount, setAmount] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Ready to pay ${amount} sats to ${recipient}`);
    //Todo: Call your backend or generate invoice here
  };

  return (
    <section className="flex flex-col items-center w-full max-w-md my-10">
      <h3 className="mb-8 dark:text-emerald-500 text-emerald-900">
        💸 Send Payment
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="number"
          placeholder="Amount (sats)"
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
        <PaymentComponent recipient={recipient} amount={amount} />
      </form>
    </section>
  );
};

export default PaymentForm;
