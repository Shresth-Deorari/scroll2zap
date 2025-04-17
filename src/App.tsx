import { WebLNProvider } from "./context/WebLnProvider";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <WebLNProvider>
      <AppLayout>
        <Home />
      </AppLayout>
    </WebLNProvider>
  );
}

export default App;
