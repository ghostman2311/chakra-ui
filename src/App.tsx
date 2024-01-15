import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import Downloads from "./pages/downloads/downloads";
import Subscription from "./pages/subscription";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="downloads" element={<Downloads />} />
      <Route path="subscription" element={<Subscription />} />
    </Routes>
  );
}

export default App;
