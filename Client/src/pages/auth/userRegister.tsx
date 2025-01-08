import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [resMessage, setResMessage] = useState("");

  const register = async (email: string, password: string) => {
    const result = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!result.ok) {
      const errorData = await result.json();
      throw new Error(errorData.message || "Registration failed");
    }

    const data = await result.json();
    setResMessage(data.message);
    return data;
  };

  const registerMutation = useMutation({
    mutationFn: () => register(email, password),
    onSuccess: () => {
      setSuccess(true); // Mark as success
      setTimeout(() => {
        setSuccess(false); // Reset success flag after 2 seconds
      }, 2000);
    },
    onError: () => {
      setSuccess(false); // Reset success flag if an error occurs
      console.log("Registration failed");
    },
  });

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            className="card-body"
            onSubmit={(e) => {
              e.preventDefault();
              registerMutation.mutate();
            }}
          >
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
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      {success && (
        <div role="alert" className="alert alert-success mt-6 z-10 fixed top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{resMessage}</span>
        </div>
      )}
    </div>
  );
};

export default UserRegister;
