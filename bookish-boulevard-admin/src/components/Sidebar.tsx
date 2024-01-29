import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { MyContext } from "../App";
interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  clicked: React.MouseEventHandler<HTMLAnchorElement>;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children, icon, clicked }) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      color: isActive ? "#FFC42A" : "black",
      fontWeight: isActive ? "bold" : "normal",
    })}
    onClick={clicked}
  >
    <div className="hidden text-center md:flex md:pl-6 sm:hidden lg:text-[18px] md:text-[13px] font-medium">
      {children}
    </div>
    <div className="text-center md:hidden"> {icon}</div>

  </NavLink>
);

const Sidebar: React.FC = () => {
  const { setCurrentDirectory } = useContext(MyContext)!;
  return (
    <div className="w-[16%] border bg-[#EDEDED h-[100vh] flex flex-col justify-between">
      <h1>Logo</h1>

      <ul className="flex flex-col items-center justify-between h-[70%]">
        <li className="w-full">
          <CustomNavLink to="/" icon={<SpaceDashboardOutlinedIcon fontSize="large" />}
            clicked={() => setCurrentDirectory('DASHBOARD')}>DASHBOARD</CustomNavLink>
        </li>
        <li className="w-full">
          <CustomNavLink to="/product"
            icon={<InventoryOutlinedIcon fontSize="large" />}
            clicked={() => setCurrentDirectory('PRODUCT')}>PRODUCT
          </CustomNavLink>
        </li>
        <li className="w-full">
          <CustomNavLink
            to="/orders"
            icon={<ShoppingCartOutlinedIcon fontSize="large" />}
            clicked={() => setCurrentDirectory('ORDERS')}>ORDERS</CustomNavLink>
        </li>
        <li className="w-full">
          <CustomNavLink to="/shipment" icon={<LocalShippingOutlinedIcon fontSize="large" />}
            clicked={() => setCurrentDirectory('SHIPMENTS')}>SHIPMENTS</CustomNavLink>
        </li>
        <li className="w-full">
          <CustomNavLink to="/transactions" icon={<MultipleStopOutlinedIcon fontSize="large" />}
            clicked={() => setCurrentDirectory('TRANSACTIONS')}>TRANSACTIONS</CustomNavLink>
        </li>

        <li className="w-full">
          <CustomNavLink to="/settings" icon={<SettingsOutlinedIcon fontSize="large" />}
            clicked={() => setCurrentDirectory('SETTINGS')}>
            <button>SETTINGS</button>
          </CustomNavLink>
        </li>

        <li className="w-full">
          <button className="w-full">
            <div className="hidden text-center md:flex md:pl-6 sm:hidden">
              LOGOUT
            </div>
            <div className="text-center md:hidden">
              <ExitToAppOutlinedIcon fontSize="large" />
            </div>
          </button>
        </li>
      </ul>

      <div></div>
    </div>
  );
};

export default Sidebar;
