import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const ProductPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="mt-16 p-3 w-full overflow-x-hidden">
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

        {/* Products Management Section */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-4 text-center md:text-left">
            Products Management
          </h3>
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 border rounded w-full md:w-1/3"
            />
            <button
              className="mt-2 md:mt-0 p-2 bg-blue-500 text-white rounded"
              onClick={showModal}
            >
              Add New Product
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse border border-gray-200">
              <thead>
                <tr className="text-sm md:text-base bg-gray-100">
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Image
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Price
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Stock
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Product"
                      className="w-10 h-10"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Product 1
                  </td>
                  <td className="px-4 py-2 border border-gray-300">$50</td>
                  <td className="px-4 py-2 border border-gray-300">100</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button className="p-1 bg-green-500 text-white rounded">
                      Edit
                    </button>
                    <button className="ml-2 p-1 bg-red-500 text-white rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Product</h3>
            <form className="mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Stock</span>
                </label>
                <input
                  type="text"
                  placeholder="Stock"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                />
              </div>
            </form>
            <div className="modal-action">
              <button className="btn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleOk}>
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
