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

export interface PaymentComponentProps {
  invoice: string;
}

export interface PaymentResponse {
  preimage: string;
}
