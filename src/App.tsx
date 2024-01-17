import Layout from "./components/Layout";
import AccountSetting from "./pages/AccountSetting";
import Dashboard from "./pages/Dashboard";
import Downloads from "./pages/Downloads";
import Notifications from "./pages/NotificationSetting";
import Subscription from "./pages/Subscription";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="subscriptions" element={<Subscription />} />
        <Route path="settings" element={<AccountSetting />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
}

export default App;
