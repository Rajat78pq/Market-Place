import ShopNavBar from "../components/shop/navBar";
import SideBar from "../components/shop/sideBar";

const ShopDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar + Navbar container */}
      <div className="flex flex-col md:flex-row w-full md:w-auto">
        <ShopNavBar />

        {/* Sidebar (only visible on large screens) */}
        <div className="hidden md:block w-64">
          <SideBar />
        </div>
      </div>

      {/* Main content area (takes up remaining space) */}
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
};

export default ShopDashboard;
