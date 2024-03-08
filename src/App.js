import { BrowserRouter, Routes, Route } from "react-router-dom";

// Utils
import { Web3Provider } from "./utils/Web3Provider";

// Pages
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Mint from "./pages/Mint";

function App() {
  return (
    <Web3Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="mint" element={<Mint />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Web3Provider>
  );
}

export default App;
