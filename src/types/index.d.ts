export {};

import { WebLN } from "./types/types";

declare global {
  interface Window {
    webln: WebLN;
  }
}
