import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./contexts/Home/LoadingContext";
import { OpenVideoModalProvider } from "./contexts/Home/VideoModalContext";

import Router from "./routes/index.routes";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <OpenVideoModalProvider>
          <Router />
        </OpenVideoModalProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
