import { WebLNProvider } from "./context/WebLNProvider";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import ScrollToZap from "./hooks/ScrollToZap";

function App() {
  return (
    <WebLNProvider>
      <ScrollToZap/>
      <AppLayout>
        <Home />
      </AppLayout>
    </WebLNProvider>
  );
}

export default App;
