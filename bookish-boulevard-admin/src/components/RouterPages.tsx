import { Route, Routes } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Product from "./product/Product"
import Orders from "./orders/Orders"
import Shipment from "./shipment/Shipment"
import Transactions from "./transactions/Transactions"
import Settings from "./settings/Settings"
export default function RouterPages() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="orders" element={<Orders />} />
            <Route path="shipment" element={<Shipment />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="settings" element={<Settings />} />
        </Routes>
    )
}
