export interface LayoutProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  title: string;
}

export enum Theme {
  Light = "Light",
  Dark = "Dark",
}

export interface PaymentData {
  destination: string;
  amount: number;
}

export interface KeysendResult {
  preimage: string;
  paymentHash: string;
  success: boolean;
}

export interface WebLN {
  getInfo: () => Promise<{ node: { alias?: string; pubkey?: string } }>;
  makeInvoice: (options: {
    amount: number;
  }) => Promise<{ paymentRequest: string }>;
  sendPayment: (invoice: string) => Promise<any>;
  keysend: (options: {
    destination: string;
    amount: number;
  }) => Promise<KeysendResult>;
  getBalance?: () => Promise<{ balance: number }>;
  enable?: () => Promise<void>;
}

export interface PaymentComponentProps {
  invoice: string;
}

export interface PaymentResponse {
  preimage: string;
}
