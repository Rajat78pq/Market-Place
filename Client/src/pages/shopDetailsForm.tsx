import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
const ShopDetailsForm = () => {
  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [radius, setRadius] = useState(0);

  const handelSubmit = async () => {
    try {
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
      const data = await result.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const shopMutation = useMutation({
    mutationFn: () => handelSubmit(),
    onSuccess: () => {
      console.log("Registration successful");
    },
    onError: () => {
      console.log("Registration failed");
    },
  });

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Shop Details!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
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
                  Submit
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
