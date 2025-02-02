const SideBar = () => {
  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-base-300 shadow">
      <ul className="menu bg-base-200 text-base-content min-h-full p-4">
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Orders</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Customers</a>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
