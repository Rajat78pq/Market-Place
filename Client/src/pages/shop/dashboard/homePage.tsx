const HomePage = () => {
  return (
    <>
      <div className="mt-16 p-3 w-full">
        {/* Shop Profile Section */}
        <div className="flex flex-col md:flex-row items-center mt-8 p-4 bg-white rounded-lg shadow-md w-full">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Shop"
              />
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h2 className="text-lg md:text-xl font-bold">Shop Name</h2>
            <p className="text-sm md:text-base">Owner: John Doe</p>
            <p className="text-sm md:text-base">Category: Electronics</p>
            <p className="text-sm md:text-base">Rating: 4.5</p>
          </div>
        </div>

        {/* Dashboard Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center w-full">
            <div className="p-2 bg-blue-500 rounded-full">
              <i className="fas fa-dollar-sign text-white"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-base md:text-lg font-bold">Total Sales</h3>
              <p className="text-sm md:text-base">$10,000</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center w-full">
            <div className="p-2 bg-yellow-500 rounded-full">
              <i className="fas fa-hourglass-half text-white"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-base md:text-lg font-bold">Pending Orders</h3>
              <p className="text-sm md:text-base">5</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center w-full">
            <div className="p-2 bg-green-500 rounded-full">
              <i className="fas fa-check text-white"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-base md:text-lg font-bold">
                Completed Orders
              </h3>
              <p className="text-sm md:text-base">20</p>
            </div>
          </div>
        </div>

        {/* Top Selling Products Section */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-4">Top Selling Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg flex items-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Product"
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-base font-bold">Product 1</h4>
                <p className="text-sm">100 sales</p>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg flex items-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Product"
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-base font-bold">Product 2</h4>
                <p className="text-sm">80 sales</p>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg flex items-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Product"
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-base font-bold">Product 3</h4>
                <p className="text-sm">60 sales</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Activity Section */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-4">Customer Activity</h3>
          <ul>
            <li className="border-b py-2 text-sm">
              John Doe placed an order - $120
            </li>
            <li className="border-b py-2 text-sm">
              Alice left a 5-star review
            </li>
            <li className="border-b py-2 text-sm">
              Bob signed up for an account
            </li>
          </ul>
        </div>

        {/* Recent Orders List */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-4 text-center md:text-left">
            Recent Orders
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse border border-gray-200">
              <thead>
                <tr className="text-sm md:text-base bg-gray-100">
                  <th className="px-4 py-2 border border-gray-300 text-left w-1/4">
                    Order ID
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left w-1/4">
                    Customer
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left w-1/4">
                    Status
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left w-1/4">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm md:text-base">
                  <td className="px-4 py-2 border border-gray-300">12345</td>
                  <td className="px-4 py-2 border border-gray-300">Alice</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs md:text-sm">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">$100</td>
                </tr>
                <tr className="text-sm md:text-base">
                  <td className="px-4 py-2 border border-gray-300">12346</td>
                  <td className="px-4 py-2 border border-gray-300">Bob</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs md:text-sm">
                      Completed
                    </span>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
