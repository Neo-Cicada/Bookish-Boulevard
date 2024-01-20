import React from "react";
import { NavLink } from "react-router-dom";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children, icon }) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      color: isActive ? "#FFC42A" : "black",
      fontWeight: isActive ? "bold" : "normal",
    })}
  >
    {icon}
    {children}
  </NavLink>
);

const Sidebar: React.FC = () => {
  return (
    <div className="w-[15%] border bg-[#EDEDED] border-red-500 h-[100vh] flex flex-col justify-between">
      <h1>Logo</h1>

      <ul className="flex flex-col items-center justify-between h-[70%] border border-red-500">
        <CustomNavLink to="/" icon={<SpaceDashboardOutlinedIcon />}>Dashboard</CustomNavLink>
        <CustomNavLink to="/product">Product</CustomNavLink>
        <CustomNavLink to="/customer">Customer</CustomNavLink>
        <CustomNavLink to="/orders">Orders</CustomNavLink>
        <CustomNavLink to="/shipment">Shipments</CustomNavLink>
        <CustomNavLink to="/transactions">Transactions</CustomNavLink>
        <CustomNavLink to="/settings">
          <button>Settings</button>
        </CustomNavLink>
        <li>
          <button>Logout</button>
        </li>
      </ul>

      <div></div>
    </div>
  );
};

export default Sidebar;
