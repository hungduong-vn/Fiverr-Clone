import { BrowserRouter } from "react-router-dom";
import { OpenVideoModalProvider } from "./contexts/Home/VideoModalContext";

import Router from "./routes/index.routes";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <OpenVideoModalProvider>
        <Router />
      </OpenVideoModalProvider>
    </BrowserRouter>
  );
}

export default App;
