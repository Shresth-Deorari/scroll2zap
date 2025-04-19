import { WebLNProvider } from "./context/WebLNContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <WebLNProvider>
      <ThemeProvider>
        <AppLayout>
          <Home />
        </AppLayout>
      </ThemeProvider>
    </WebLNProvider>
  );
}

export default App;
