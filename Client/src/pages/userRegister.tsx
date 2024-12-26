import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (email: string, password: string) => {
    const result = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!result.ok) {
      // Throw an error if the response status is not in the 200-299 range
      const errorData = await result.json();
      throw new Error(errorData.message || "Registration failed");
    } else {
      const data = await result.json();
      return data;
    }
  };

  const registerMutation = useMutation({
    mutationFn: () => register(email, password),
    onSuccess: (data) => {
      console.log(data);
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
            <h1 className="text-5xl font-bold">Register now!</h1>
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    registerMutation.mutate();
                  }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
