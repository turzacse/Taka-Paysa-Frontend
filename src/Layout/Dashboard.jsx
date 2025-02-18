import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdAddAPhoto, MdDashboard, MdOutlinePayment } from "react-icons/md";
import { FaBaby, FaBlog, FaCartArrowDown, FaHome } from "react-icons/fa";
import { GiHamburgerMenu, GiMedicines } from "react-icons/gi";
import { IoIosAlbums, IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import { FaSackDollar } from "react-icons/fa6";
import Dashboard from "../Page/Dashboard/Dashboard";

const Admin = () => {
    const [role, setRole] = useState("admin");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) =>
        path === location.pathname
            ? "bg-gray-400 text-black"
            : "hover:bg-gray-400 hover:text-black";

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="w-screen">
            <div className="relative min-h-screen flex bg-[#fff]">
                {/* Sidebar */}
                <div
                    className={`drawer-side lg:static fixed inset-0 bg-[#00796B] text-white z-50 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                        } w-64 lg:w-auto min-h-screen`}
                >
                    {/* Close Icon for Small Devices */}
                    <button
                        className="absolute overflow-y-auto top-4 right-4 text-white text-2xl lg:hidden"
                        onClick={() => setIsSidebarOpen(false)} // Close sidebar
                    >
                        ✕
                    </button>

                    <ul className="menu w-64 h-full uppercase">
                        <div className="px-4 py-6 text-center">
                            <img
                                className="w-20 h-20 rounded-sm mb-2"
                                src="/tp2.PNG"
                                alt="Profile"
                            />

                        </div>


                        {role === "admin" && (
                            <>
                                <Link
                                    to="/dashboard"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                        "/dashboard"
                                    )}`}
                                >
                                    <MdDashboard className="text-xl" />
                                    <span className="font-semibold">Dashboard</span>
                                </Link>
                                <Link
                                    to="/dashboard/category"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                        "/dashboard/category"
                                    )}`}
                                >
                                    <FaBaby className="text-xl" />
                                    <span className="font-semibold">EXPANCE CATEGORY</span>
                                </Link>
                                <Link
                                    to="/dashboard/transaction"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                        "/dashboard/transaction"
                                    )}`}
                                >
                                    <IoIosAlbums className="text-xl" />
                                    <span className="font-semibold">TRANSACTION</span>
                                </Link>
                                <Link
                                    to="/dashboard/report"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                        "/dashboard/report"
                                    )}`}
                                >
                                    <IoIosAlbums className="text-xl" />
                                    <span className="font-semibold">REPORT</span>
                                </Link>
                                {/* <Link
                                    to="/admin/blog"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`py-2 pl-4 flex gap-2 items-center ${isActive(
                                        "/admin/blog"
                                    )}`}
                                >
                                    <FaBlog className="text-xl" />
                                    <span className="font-semibold">Blog</span>
                                </Link> */}

                            </>
                        )}
                    </ul>

                    {/* Footer Links */}
                    <div className="absolute bottom-5 w-full px-4">
                        <ul>
                            <Link
                                to="/"
                                className={`py-2 pl-4 flex gap-2 items-center ${isActive("/")}`}
                            >
                                <FaHome className="text-xl" />
                                <span className="font-semibold">Home</span>
                            </Link>
                            <Link
                                to="#"
                                onClick={() => {
                                    // Logout functionality here
                                    navigate("/");
                                }}
                                className="py-2 pl-4 flex gap-2 items-center hover:bg-red-600 hover:text-white"
                            >
                                <IoMdLogOut className="text-xl" />
                                <span className="font-semibold">LogOut</span>
                            </Link>
                        </ul>
                    </div>
                </div>


                {/* Main Content */}
                <div className="flex-grow h-screen flex flex-col">
                    {/* Top Bar */}
                    <div className="bg-[#00796B] text-white py-3 px-4 flex justify-between items-center lg:hidden">
                        <button
                            onClick={toggleSidebar}
                            className="text-2xl focus:outline-none"
                        >
                            <GiHamburgerMenu />
                        </button>

                        <NavLink to="/" className=" font-bold">
                            TAKA<span className="text-yellow-300">PAYSA</span>
                        </NavLink>
                        <img src="/eduTechLogo.jpg" className="w-[40px] h-[40px]" alt="" />
                    </div>
                    <div className="flex-grow overflow-auto overflow-x-auto p-4">
                        {
                            location.pathname === '/dashboard' && <Dashboard />
                        }

                        <Outlet />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Admin;