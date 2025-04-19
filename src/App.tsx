import { WebLNProvider } from "./context/WebLNContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import ScrollToZap from "./hooks/ScrollToZap";

function App() {
  return (
    <WebLNProvider>
      <ThemeProvider>
        <ScrollToZap />
        <AppLayout>
          <Home />
        </AppLayout>
      </ThemeProvider>
    </WebLNProvider>
  );
}

export default App;
