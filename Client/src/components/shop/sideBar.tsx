const SideBar = () => {
  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-base-300 shadow">
      <ul className="menu bg-base-200 text-base-content min-h-full p-4">
        <li>
          <a href="/shop/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/shop/products">Products</a>
        </li>
        <li>
          <a href="/shop/orders">Orders</a>
        </li>
        <li>
          <a href="#">Customers</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Coupons & Discounts</a>
        </li>
        <li>
          <a href="#">Review and Rating</a>
        </li>
        <li>
          <a href="#">Inventory Management</a>
        </li>
        <li>
          <a href="#">Payment & Transactions</a>
        </li>
        <li>
          <a href="#">Analytics & Reports</a>
        </li>
        <li>
          <a href="#">Shipping & Delivery</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">User Management</a>
        </li>
        <li>
          <a href="#">Support & Help</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
