import { useState } from "react";

const Home = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-10 gap-8 text-center font-sans">
      <section className="flex flex-col items-center">
        <h2 className="text-big-chungus mb-8 font-bold">
          Welcome to Scoll 2 Zap⚡
        </h2>
        <div className="max-w-2xl text-center text-xl font-semibold text-gray-500">
          This site lets you interact with your Lightning wallet directly.
          Scroll to pay send sats to friends, and explore WebLN features!
        </div>
      </section>

      <section className="flex items-center">
        {!isWalletConnected ? (
          <button
            onClick={() => {
              /* ToDo: connect wallet logic here */
            }}
            className="px-3 py-2  bg-bg-dark dark:bg-bg-light dark:text-text-light text-text-dark text-xl "
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

      <section className="flex flex-col items-center w-full max-w-md my-10 ">
        <h3 className="mb-8 dark:text-emerald-500 text-emerald-900">💸 Send Payment</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //Todo: payment logic here
          }}
          className="flex flex-col gap-3"
        >
          <input type="number" placeholder="Amount (sats)" required />
          <input type="text" placeholder="Recipient LN Address" required />
          <button
            type="submit"
            className="p-3 mt-2 bg-brand_yellow rounded-lg text-text-light"
          >
            Send Payment
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
