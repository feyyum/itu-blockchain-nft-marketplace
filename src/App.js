import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Mint from "./pages/Mint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="mint" element={<Mint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
