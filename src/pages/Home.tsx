import WalletConnection from "../components/wallet/WalletComponent";
import PaymentForm from "../components/send/PaymentForm";
import ReceivePayment from "../components/recieve/RecieveComponent";

const Home = () => (
  <div className="flex flex-col items-center justify-center py-10 gap-8 text-center font-sans text-[var(--color-text)]">
    <section className="flex flex-col items-center">
      <div className="text-big-chungus mb-8 font-bold text-[var(--color-heading)]">
        Welcome to Scroll 2 Zap⚡
      </div>
      <div className="max-w-2xl text-center text-xl font-semibold text-[var(--color-subheading)]">
        This site lets you interact with your Lightning wallet directly. Scroll
        to pay, send sats to friends, and explore WebLN features!
      </div>
    </section>

    <section className="flex items-center">
      <WalletConnection />
    </section>

    <PaymentForm />
    <ReceivePayment />
  </div>
);

export default Home;
