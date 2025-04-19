import { createContext, useState, useEffect } from "react";
import { init, onConnected } from "@getalby/bitcoin-connect";

export const WebLNContext = createContext<any>(null);

export const WebLNProvider = ({ children }: { children: React.ReactNode }) => {
  const [webln, setWebln] = useState<any>(null);

  useEffect(() => {
    init({ appName: "Scroll 2 Zap" });
    onConnected((provider) => {
      window.webln = provider;
      setWebln(provider);
    });
  }, []);

  return (
    <WebLNContext.Provider value={webln}>{children}</WebLNContext.Provider>
  );
};
