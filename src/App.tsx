import "./App.css";
import { Layout } from "./components/layout";
import { AccountSetting } from "./pages/AccountSetting";
import Dashboard from "./pages/dashboard/dashboard";
import Downloads from "./pages/downloads/downloads";
import Subscription from "./pages/Subscription";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="subscriptions" element={<Subscription />} />
        <Route path="account-setting" element={<AccountSetting />} />
      </Route>
    </Routes>
  );
}

export default App;
