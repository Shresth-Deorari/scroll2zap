import WalletConnection from "../components/WalletComponent";
import PaymentForm from "../components/PaymentForm";

const Home = () => (
  <div className="flex flex-col items-center justify-center py-10 gap-8 text-center font-sans">
    <section className="flex flex-col items-center">
      <h2 className="text-big-chungus mb-8 font-bold">
        Welcome to Scroll 2 Zap⚡
      </h2>
      <div className="max-w-2xl text-center text-xl font-semibold text-gray-500">
        This site lets you interact with your Lightning wallet directly. Scroll
        to pay, send sats to friends, and explore WebLN features!
      </div>
    </section>

    <section className="flex items-center">
      <WalletConnection />
    </section>

    <PaymentForm />
  </div>
);

export default Home;
