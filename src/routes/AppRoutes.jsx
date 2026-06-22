import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/ecommerce-pages/dashboard/Dashboard";
import Products from "../pages/ecommerce-pages/products/Products";

import Orders from "../pages/ecommerce-pages/Orders/Orders";

import Marketing from "../pages/ecommerce-pages/marketing/Marketing";
import Customers from "../pages/ecommerce-pages/customers/Customers";
import Inventory from "../pages/ecommerce-pages/inventory/Inventory";
import Login from "../pages/ecommerce-pages/authentication/Login";
import ForgetPassword from "../pages/ecommerce-pages/authentication/ForgetPassword";
import Analytics from "../pages/ecommerce-pages/analytics/Analytics";
import Settings from "../pages/ecommerce-pages/settings/Settings";
import AddProduct from "../pages/ecommerce-pages/products/AddProduct";
import OrderDetails from "../pages/ecommerce-pages/Orders/OrderDetails";





export default function AppRoutes() {
  return (
    <Routes>

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />

      {/* Default */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Layout Wrapper */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />

        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/view-order" element={<OrderDetails/>} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        

      </Route>

    </Routes>
  );
}