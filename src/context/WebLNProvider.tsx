import React, { createContext, useState, useEffect, ReactNode } from "react";
import { init, onConnected } from "@getalby/bitcoin-connect";
import { WebLN } from "../types/types"; // Adjust path to your types file

interface WebLNContextType {
  webln: WebLN | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const WebLNContext = createContext<WebLNContextType | undefined>(undefined);

export const WebLNProvider = ({ children }: { children: ReactNode }) => {
  const [webln, setWebln] = useState<WebLN | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Start as loading until connected

  useEffect(() => {
    setLoading(true); // Start loading when initializing
    init({ appName: "Scroll 2 Zap" }); // Replace with your app name
    const handleConnected = (provider: WebLN) => {
      window.webln = provider;
      setWebln(provider);
      setLoading(false); // Stop loading once connected
    };

    onConnected(handleConnected);

    // Cleanup or fallback if connection fails
    return () => {
      // Optional: Remove event listener if supported (check @getalby/bitcoin-connect docs)
    };
  }, []);

  // Fallback if connection never happens
  useEffect(() => {
    if (!webln && !loading) {
      console.warn("WebLN connection failed or not available.");
      setLoading(false); // Ensure loading stops if no connection
    }
  }, [webln, loading]);

  const value = { webln, loading, setLoading };

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
