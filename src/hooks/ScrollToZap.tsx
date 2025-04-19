import { useEffect, useRef } from "react";
import { useWebLN } from "../context/WebLNContext";
import { LightningAddress } from "@getalby/lightning-tools";

const ScrollToPay = () => {
  const { webln } = useWebLN();
  const lastPaidRef = useRef(0);
  const zapCountRef = useRef(0);

  useEffect(() => {
    if (!webln) return;

    const handleScroll = async () => {
      const now = Date.now();
      if (now - lastPaidRef.current < 5000) return;
      if (zapCountRef.current >= 10) return;

      lastPaidRef.current = now;
      zapCountRef.current++;

      try {
        const recipient = new LightningAddress("caringwhirl386939@getalby.com");
        await recipient.fetch();
        const invoiceData = await recipient.requestInvoice({ satoshi: 1 });
        await webln.sendPayment(invoiceData.paymentRequest);

        console.log(`1 sat paid via scroll! (${zapCountRef.current}/10)`);
      } catch (error) {
        console.error("Scroll-based payment failed:", error);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [webln]);

  return null;
};

export default ScrollToPay;
