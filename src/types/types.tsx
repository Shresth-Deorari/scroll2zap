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
