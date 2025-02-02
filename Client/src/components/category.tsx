const Category = () => {
  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-base-300 shadow">
      <ul className="menu bg-base-200 text-base-content min-h-full p-4">
        <li>
          <a href="#">Cloths</a>
        </li>
        <li>
          <a href="#">Electronics</a>
        </li>
        <li>
          <a href="#">Home Appliance</a>
        </li>
        <li>
          <a href="#">Packaging Products</a>
        </li>
        <li>
          <a href="#">Lauxary Items</a>
        </li>
      </ul>
    </div>
  );
};

export default Category;
