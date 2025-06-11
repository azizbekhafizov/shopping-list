import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FaSync, FaBell, FaCog, FaChevronDown, FaCopy, FaTrash } from "react-icons/fa";

const drawerWidth = 240;

function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="flex justify-between items-center px-6 h-16">
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faBlog} className="text-blue-600 text-2xl" />
                    <button className="bg-blue-600 text-white font-medium px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
                        + New
                    </button>
                </div>

                <input
                    type="search"
                    placeholder="Search group and join..."
                    className="w-[756px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <div className="flex items-center gap-5 ">
                    <button>
                        <FaSync size={16} />
                    </button>

                    <div className="relative">
                        <button className="hover:text-blue-800 transition">
                            <FaBell size={16} />
                        </button>
                        <span className="absolute -top-1 right-[-20px] bg-red-600 text-white text-xs px-1.5 rounded-full">
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

            <div className=" h-[268px] w-[1250px] ml-[250px] mt-28 p-6 bg-white rounded-2xl shadow flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="w-36 h-36 bg-red-600 text-white flex items-center justify-center rounded-full text-6xl font-medium border-4 border-white shadow-md">
                        A
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl font-semibold text-gray-900">Azizbek</h2>
                            <span className="bg-green-700 text-white text-sm font-bold px-3 py-1 rounded">
                                Active
                            </span>
                        </div>
                        <p className="text-gray-500 mt-1">azizbek_hafizov_</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md">
                        <FaCopy />
                        Copy Username
                    </button>
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md">
                        <FaTrash />
                        Delete Account
                    </button>
                </div>
            </div>
        </>
    );
}
