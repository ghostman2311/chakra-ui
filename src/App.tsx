import Layout from "./components/Layout";
import AccountSetting from "./pages/AccountSetting";
import Dashboard from "./pages/Dashboard";
import Downloads from "./pages/Downloads";
import Notifications from "./pages/NotificationSetting";
import Pricing from "./pages/Pricing";
import Subscription from "./pages/Subscription";
import { Route, Routes } from "react-router-dom";
import SubscriptionDetails from "./pages/SubscriptionDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="subscriptions" element={<Subscription />} />
        <Route path="settings" element={<AccountSetting />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="subscriptions-detail" element={<SubscriptionDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
