import React from "react";
import "daisyui";
import "tailwindcss/tailwind.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const orders = [
  {
    id: 1,
    name: "Girls Dress",
    image:
      "https://media.istockphoto.com/id/1440977634/photo/vertical-shot-of-the-beautiful-pink-dress-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=3lSPxjs-xh7PGeW2eGnPlawyw9gcJPlnc1QWnwnkNyI=",
    status: "Shipped",
    price: "$25.00",
  },
  {
    id: 2,
    name: "Product 2",
    image:
      "https://media.istockphoto.com/id/934408078/photo/navy-blue-retro-dress-with-short-sleeves-isolated-on-white.jpg?s=612x612&w=0&k=20&c=dswfh1z5uFQzaOmt1PMoYWDXA_gHVO366UJ7K-HRyh8=",
    status: "Delivered",
    price: "$15.00",
  },
  // ...more orders
];

const UserOrder = () => {
  return (
    <div className="container mx-auto p-2 md:p-4">
      <div className="flex items-center mb-4">
        <Link to={"/profile"}>
          <FaArrowLeft className="text-xl mr-4 cursor-pointer" />
        </Link>
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>
      <div className="grid grid-cols-1 gap-2 md:gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="card bg-base-100 shadow-md md:shadow-xl flex flex-row items-center p-2 md:p-4 cursor-pointer h-28 md:h-24"
          >
            <figure className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
              <img
                src={order.image}
                alt={order.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="ml-4 flex-1">
              <h2 className="card-title text-sm md:text-lg">{order.name}</h2>
              <p className="text-sm md:text-lg text-gray-500">{order.price}</p>
            </div>
            <div className="text-sm md:text-lg text-gray-500">
              {order.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrder;
