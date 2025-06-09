import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FaSync, FaBell, FaCog, FaChevronDown } from "react-icons/fa";

const drawerWidth = 240;

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 h-16">
        {/* Left */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faBlog} className="text-blue-600 text-2xl" />
          <button className="bg-blue-600 text-white font-medium px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
            + New
          </button>
        </div>

        {/* Center */}
        <input
          type="search"
          placeholder="Search group and join..."
          className="w-[756px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Right */}
        <div className="flex items-center gap-4 ">
          <button>
            <FaSync size={16} />
          </button>

          <div className="relative">
            <button className="hover:text-blue-800 transition">
              <FaBell size={16} />
            </button>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 rounded-full">
              9+
            </span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer transition">
            <FaCog size={18} />
            <FaChevronDown size={14} />
          </div>
        </div>
      </div>
    </header>
  );
}

const SidebarItems = [
  { text: "Profile", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M5.5 21a7 7 0 0113 0" /></svg> },
  { text: "Groups", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-3-3.87" /><path d="M9 7a4 4 0 010-8" /><path d="M7 7h10" /></svg> },
  { text: "Create Group", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg> },
];

function Sidebar() {
  return (
    <aside
      className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 bg-white border-r border-gray-200 shadow-sm overflow-auto"
      style={{ width: drawerWidth }}
    >
      <nav className="mt-4">
        <ul>
          {SidebarItems.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-blue-50 transition"
            >
              <div className="text-blue-600">{item.icon}</div>
              <span className="text-gray-700 font-medium">{item.text}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function Skeleton({ height }) {
  return (
    <div
      className="bg-gray-200 rounded mb-4"
      style={{ height: height || 100, width: "100%" }}
    />
  );
}

export default function CombinedDashboard() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main
        className="ml-60 pt-20 p-6 bg-gray-50 min-h-screen"
        style={{ marginLeft: drawerWidth }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton height={200} />
          <Skeleton height={200} />
          <Skeleton height={200} />
        </div>
      </main>
    </>
  );
}
