import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import { OrderList } from "./pages/OrderList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/order-list" element={<OrderList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
