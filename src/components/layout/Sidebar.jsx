import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiCompass,
  FiTruck,
  FiHome as FiHotel,
  FiEdit,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiPlus,
} from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDashboard, MdOutlineShoppingCart } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { BsGraphUpArrow } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";


const menuItems = [
  { name: "Dashboard", icon: <MdOutlineDashboard />, path: "/dashboard" },
  { name: "products", icon: <CiBoxes />, path: "/products" },
  { name: "Orders", icon: <MdOutlineShoppingCart />, path: "/orders" },
  { name: "Customers", icon: <HiOutlineUsers />, path: "/customers" },
  { name: "Analytics", icon: <BsGraphUpArrow />, path: "/analytics" },
  { name: "Settings", icon: <CiSettings />, path: "/settings" },


  // {
  //   name: "Tour Packages",
  //   icon: <FiCompass />,
  //   children: [
  //     { name: "Tour Manager", path: "/dashboard/add-tour" },
  //     { name: "Tour Enquiry", path: "/dashboard/tour-enquriy" }, // keep same as route OR fix both
  //   ],
  // },




  //   {
  //   name: "Settings",
  //   icon: <FiCompass />,
  //   children: [
  //     { name: "General Settings", path: "/dashboard/settings" },
  //     { name: "Privacy Policy", path: "/dashboard/privacypolicy" },
  //     { name: "Payment Policy", path: "/dashboard/paymentpolicy" }, // keep same as route OR fix both
  //   ],
  // },
];







const lowerMenu = [
  { name: "Logout", icon: <FiLogOut />, path: "/login" },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <aside
      className={`
   bg-white sidebar-base fixed lg:fixed p-4
    ${isOpen ? "sidebar-open" : "sidebar-close"}
    ${isOpen ? "sidebar-lg-open" : "sidebar-lg-close"}
  `}
    >
      <button
        onClick={toggleSidebar}
        className="lg:hidden m-3 p-2 bg-black text-white rounded w-fit"
      >
        <IoMdClose />
      </button>
      {/* Header */}
      <div className="editorial-container">


        {/* Hide text when closed */}
        {isOpen && (
          <div class="mb-8 px-4">
            <h1 class="text-lg font-black tracking-tight text-slate-900 dark:text-white">AdminPanel</h1>
            <p class="text-xs text-on-primary-container font-medium">Ecommerce Management</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {

          // ✅ If item has children (Dropdown)
          if (item.children) {
            const isOpenDropdown = openDropdown === item.name;

            return (
              <div key={item.name}>

                {/* Parent */}
                <div
                  onClick={() =>
                    setOpenDropdown(isOpenDropdown ? null : item.name)
                  }
                  className={`nav-item cursor-pointer 
              ${isOpen ? "justify-between" : "justify-center"}
            `}
                >
                  <div className="flex items-center gap-2">
                    <span className="nav-icon icon-color">
                      {item.icon}
                    </span>

                    {isOpen && (
                      <span className="nav-text">{item.name}</span>
                    )}
                  </div>

                  {/* Arrow */}
                  {isOpen && (
                    <FiChevronDown
                      className={`transition-transform duration-300 ${isOpenDropdown ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </div>

                {/* Dropdown Items */}

                <div
                  className={`ml-10 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
                          ${isOpen && isOpenDropdown ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {item.children.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      onClick={() => {

                        if (window.innerWidth < 1024) toggleSidebar();
                      }}
                      className={({ isActive }) =>
                        `block text-sm px-2 py-2 rounded 
      ${isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"}`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
                {/* {isOpen && isOpenDropdown && (
                  <div className="ml-10 mt-1 space-y-1 transition-all duration-300">
                    {item.children.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        onClick={() => {
                          if (window.innerWidth < 1024) {
                            toggleSidebar();
                          }
                        }}
                        className={({ isActive }) =>
                          `block text-sm px-2 py-2 rounded 
                    ${isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"}`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )} */}
              </div>
            );
          }

          // ✅ Normal menu item
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => {
                setOpenDropdown(null); // ✅ CLOSE DROPDOWN

                if (window.innerWidth < 1024) {
                  toggleSidebar();
                }
              }}
              className={({ isActive }) =>
                `nav-item 
          ${isActive ? "nav-item-active bg-slate-100 shadow-none" : "nav-item-inactive"} 
          ${isOpen ? "justify-start" : "justify-center"}`
              }
            >
              <span className="nav-icon icon-color">
                {item.icon}
              </span>

              {isOpen && <span className="nav-text">{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>


      <div className="mt-auto p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
        <div className="flex items-center gap-3">
          <img alt="Administrator Profile" class="w-8 h-8 rounded-full bg-primary-fixed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsOp5Ytoj-e6fZDIB_JAPcvf8zVL98Z080oSWWkGbiyWMqCJFb0h7bxIJAHvRPL1SRBOmOy0_Ji6fCHwFB2MPWkgkzEX_WE3Fg8K6w6x9z4-9lygswcxbDAlrIzqcyGJ-wLKcZfnP553aaOSlOTnEXZ5GZWKX8e7oOtZHIOhsYemu1VwToDkE_IXdyJ7ci1waNVlSkkgNWXUUix9WM3yEteDMruOy_a-9-fQUgzECtYcV8CWqoJDuxk1Usi7aqmr1KWXNPOgTL_5R8"/>
            <div className="overflow-hidden">
              <p className="text-label-md font-label-md text-on-surface truncate">Admin User</p>
              <p className="text-xs text-on-surface-variant truncate">Store Manager</p>
            </div>
        </div>
      </div>

      {/* Button */}
      {/* <div className="pt-4">
        <button className="btn-primary flex items-center gap-2 justify-center">
          <span className="text-xl"><FiPlus /></span>

          {isOpen && "New Package"}
        </button>
      </div> */}

      {/* Lower Menu */}
      {/* {lowerMenu.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          onClick={() => {
            if (window.innerWidth < 1024) {
              toggleSidebar();
            }
          }}
          className={({ isActive }) =>
            `lower-nav-item ${isActive ? "lower-nav-active" : "lower-nav-inactive"
            }`
          }
        >
          <span>
            {item.icon}
          </span>

          {isOpen && <span className="text-sm">{item.name}</span>}
        </NavLink>
      ))} */}
    </aside>
  );
}