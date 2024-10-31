import { Link } from "react-router-dom";
import { FaShopify, FaSearch } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left Side - Logo */}
                    <div className="text-white text-lg font-semibold">
                        Market Place
                    </div>

                    {/* Right Side - Icons */}
                    <div className="flex space-x-4 text-white">
                        {/* Search Icon */}
                        <Link to="/" aria-label="Search" className="hover:text-gray-400">
                            <FaSearch color="white" size={24} />
                        </Link>

                        {/* Shopping Bag Icon */}
                        <button aria-label="Cart" className="hover:text-gray-400">
                            <FaShopify color="white" size={24} />
                        </button>

                        {/* Menu Icon */}
                        <button aria-label="Menu" className="hover:text-gray-400">
                            <IoMenu color="white" size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="p-6 bg-gray-100">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Opened Shop
                </h2>

                {/* Scrollable Container */}
                <div className="flex space-x-4 overflow-x-auto pb-4">

                    <div
                        className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white w-24 h-24 rounded-full shadow-lg shrink-0 transform hover:scale-105 transition-transform duration-200 ease-in-out"
                    >
                        <span>Shop</span>
                        <button className="mt-2 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow hover:bg-gray-200 transition-colors duration-200 ease-in-out">
                            Open
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar;