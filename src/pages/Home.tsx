import { useState } from "react";

const Home = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-8 text-center">
      <section className="flex flex-col items-center">
        <h2 className="text-big-chungus font-serif mb-8 font-bold">
          Welcome to Scoll 2 Zap⚡
        </h2>
        <div className="max-w-2xl text-center">
          This site lets you interact with your Lightning wallet directly.
          Scroll to pay, send sats to friends, and explore WebLN features!
        </div>
      </section>

      <section>
        {!isWalletConnected ? (
          <button
            onClick={() => {
              /* ToDo: connect wallet logic here */
            }}
            className="p-3 rounded-lg bg-blue text-bg-dark font-semibold shadow hover:opacity-90"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="p-4 rounded-lg bg-text-dark text-bg-dark dark:bg-text-light dark:text-bg-light shadow">
            <h3 className="text-xl mb-2">🔗 Wallet Info</h3>
            <p>Alias: ...</p>
            <p>PubKey: ...</p>
          </div>
        )}
      </section>

      <section className="w-full max-w-md">
        <h3 className="text-xl font-sans mb-3">💸 Send Payment</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //Todo: payment logic here
          }}
          className="flex flex-col gap-3"
        >
          <input
            type="number"
            placeholder="Amount (sats)"
            className="p-2 rounded border bg-bg-light dark:bg-bg-dark"
            required
          />
          <input
            type="text"
            placeholder="Recipient LN Address"
            className="p-2 rounded border bg-bg-light dark:bg-bg-dark"
            required
          />
          <button
            type="submit"
            className="p-3 bg-brand_yellow rounded-lg text-text-light dark:text-text-dark font-semibold shadow hover:opacity-90"
          >
            Send Payment
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
