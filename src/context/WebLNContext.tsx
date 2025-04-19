import React, { createContext, useState, useEffect, ReactNode } from "react";
import { init, onConnected } from "@getalby/bitcoin-connect";
import { WebLN } from "../types/types";

interface WebLNContextType {
  webln: WebLN | null;
  userLoading: boolean;
  setUserLoading: (userLoading: boolean) => void;
}

const WebLNContext = createContext<WebLNContextType | undefined>(undefined);

export const WebLNProvider = ({ children }: { children: ReactNode }) => {
  const [webln, setWebln] = useState<WebLN | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);

  useEffect(() => {
    setUserLoading(true);
    init({ appName: "Scroll 2 Zap" });
    const handleConnected = (provider: WebLN) => {
      window.webln = provider;
      setWebln(provider);
      setUserLoading(false);
    };

    onConnected(handleConnected);

    return () => {
      // Optional: Remove event listener if supported (check @getalby/bitcoin-connect docs)
    };
  }, []);

  useEffect(() => {
    if (!webln && !userLoading) {
      console.warn("WebLN connection failed or not available.");
      setUserLoading(false);
    }
  }, [webln, userLoading]);

  const value = { webln, userLoading, setUserLoading };

  return (
    <WebLNContext.Provider value={value}>{children}</WebLNContext.Provider>
  );
};

export const useWebLN = (): WebLNContextType => {
  const context = React.useContext(WebLNContext);
  if (context === undefined) {
    throw new Error("useWebLN must be used within a WebLNProvider");
  }
  return context;
};

export default WebLNProvider;
