import Layout from "./components/Layout";
import AccountSetting from "./pages/AccountSetting";
import Dashboard from "./pages/Dashboard";
import Downloads from "./pages/Downloads";
import Notifications from "./pages/NotificationSetting";
import Pricing from "./pages/Pricing";
import Subscription from "./pages/Subscription";
import { Route, Routes } from "react-router-dom";
import SubscriptionDetails from "./pages/SubscriptionDetails";
import PaymentHistory from "./pages/PaymentHistory";
import ManageTeam from "./pages/ManageTeam";
import Invoices from "./pages/Invoices";
import Tickets from "./pages/Tickets";
import './assets/styles.css';

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
        <Route path="payment" element={<PaymentHistory />} />
        <Route path="manage-team" element={<ManageTeam />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path='tickets' element={<Tickets/>}/>
      </Route>
    </Routes>
  );
}

export default App;
