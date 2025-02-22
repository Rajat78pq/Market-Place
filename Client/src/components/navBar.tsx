import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./category";
import { ImSearch } from "react-icons/im";
import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  email: string;
  role: string;
  userId: string;
  shopId: string;
}

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [seller, setSeller] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found in localStorage");
      return;
    }
    try {
      const user: JWTPayload = jwtDecode(token);
      if (user.role === "seller") {
        setSeller(true);
      }
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 fixed z-20">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <Category />
          </div>
        </div>
        <Link to="/" className="absolute left-[4rem]">
          Home
        </Link>
        <div className="flex-none">
          <div className="md:block hidden">
            <input
              type="text"
              placeholder="Search for Products..."
              className="border-gray-300 rounded-md px-4 py-2 lg:w-96 "
            />
          </div>
          {/* search  */}
          <button
            className="btn btn-ghost btn-circle block md:hidden"
            onClick={() => setShowSearch(!showSearch)}
          >
            <div className="indicator">
              <ImSearch size={20} />
            </div>
          </button>
          {/* cart */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* notification */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          {/* profile */}

          <div className="flex-none dropdown dropdown-end">
            <button className="btn btn-square btn-ghost" tabIndex={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {seller ? (
                  <Link to="/shop/login">
                    <a className="justify-between">
                      Go to shop
                      <span className="badge">New</span>
                    </a>
                  </Link>
                ) : (
                  <Link to="/shop/create">
                    <a className="justify-between">
                      Create shop
                      <span className="badge">New</span>
                    </a>
                  </Link>
                )}
                {/* <Link to="/shop/create">
                  <a className="justify-between">
                    Create shop
                    <span className="badge">New</span>
                  </a>
                </Link> */}
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Coming Soon</a>
              </li>
              <li>
                <a>Coming Soon</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>
                  <Link to="/register">Register</Link>
                </a>
              </li>
              <li>
                <Link to="/login">
                  <a className="text-red-600">Logout</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`w-full p-2 bg-based fixed top-16 z-10 shadow-md md:hidden ${
          showSearch ? "block" : "hidden"
        }`}
      >
        <input
          type="text"
          placeholder="Search for Products..."
          className="input input-bordered w-full"
        />
      </div>
    </>
  );
};

export default NavBar;
