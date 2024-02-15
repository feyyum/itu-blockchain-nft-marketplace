import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
