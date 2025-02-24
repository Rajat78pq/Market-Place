import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IoIosPeople } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import shopDetails from "../../../assets/imgs/ shopdetails.png";
import { useNavigate } from "react-router-dom";
const ShopDetailsForm = () => {
  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [radius, setRadius] = useState(0);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handelSubmit = async () => {
    const token = localStorage.getItem("token");
    const result = await fetch("http://localhost:3000/api/shop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        ownerName,
        email,
        password,
        category,
        radius,
      }),
    });
    if (!result.ok) {
      const errorData = await result.json();
      throw new Error(errorData.message || "Registration failed");
    }
    const dataLog = await result.json();
    console.log(dataLog);
    return dataLog;
  };

  const shopMutation = useMutation({
    mutationFn: () => handelSubmit(),
    onSuccess: (dataLog) => {
      console.log("Registration successful");
      const currentCreatedShopId = dataLog.id;
      queryClient.setQueryData(["currentShop"], {
        shopId: currentCreatedShopId,
      });
      navigate("/shop/location");
    },
    onError: () => {
      console.log("Registration failed");
    },
  });

  return (
    <>
      <div className="hero bg-base-200 py-20 md:py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left block lg:hidden">
            <h1 className="text-5xl font-bold py-2">Shop Details!</h1>
            <p className="py-1">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="hidden lg:block p-4 h-full w-full">
            <div className="flex flex-col">
              <div className="text-lg font-bold px-2">
                Grow your Business Faster by Joining us
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 flex flex-wrap">
                  <div className="w-1/5">
                    <IoIosPeople size={40} className="text-primary" />
                  </div>
                  <div className="w-4/5">
                    <h3 className="font-bold">11 lakh+</h3>
                    <p className="text-sm">
                      Suppliers are selling commission-free
                    </p>
                  </div>
                </div>
                <div className="p-2 flex flex-wrap">
                  <div className="w-1/5">
                    <FaMapLocationDot size={30} className="text-primary" />
                  </div>
                  <div className="w-4/5">
                    <h3 className="font-bold">19000+</h3>
                    <p className="text-sm">Pincodes supported for delivery</p>
                  </div>
                </div>
                <div className="p-2 flex flex-wrap">
                  <div className="w-1/5">
                    <FaCrown size={35} className="text-primary" />
                  </div>
                  <div className="w-4/5">
                    <h3 className="font-bold">Crore of</h3>
                    <p className="text-sm">Customers buy across India</p>
                  </div>
                </div>
                <div className="p-2 flex flex-wrap">
                  <div className="w-1/5">
                    <MdCategory size={35} className="text-primary" />
                  </div>
                  <div className="w-4/5">
                    <h3 className="font-bold">700 +</h3>
                    <p className="text-sm">Categories to sell</p>
                  </div>
                </div>
              </div>
              <img src={shopDetails} alt="shopDetails" />
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Name</span>
                </label>
                <input
                  type="text"
                  placeholder="shop name"
                  className="input input-bordered"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Owner Name</span>
                </label>
                <input
                  type="text"
                  placeholder="owner name"
                  className="input input-bordered"
                  required
                  onChange={(e) => setOwnerName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="shop name"
                  className="input input-bordered"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="shop category"
                  className="input input-bordered"
                  required
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Delivery Radius</span>
                </label>
                <input
                  type="number"
                  placeholder="radius km."
                  className="input input-bordered"
                  required
                  onChange={(e) => setRadius(Number(e.target.value))}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    shopMutation.mutate();
                  }}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsForm;
