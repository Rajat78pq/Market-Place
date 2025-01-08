import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const login = async (email: string, password: string) => {
    const result = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!result.ok) {
      // Throw an error if the response status is not in the 200-299 range
      const errorData = await result.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await result.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;
  };
  const loginMutation = useMutation({
    mutationFn: () => login(email, password),
    onSuccess: () => {
      setError(false);
      navigate("/");
    },
    onError: () => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    },
  });

  const googleLogin = useGoogleLogin({
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
    flow: "auth-code",
  });

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident capitate voluptatem et in. Quadrat fugit ut assumed
              except exercitation quasi. In delegati ease aut repudiate et a id
              nisi.
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
                    loginMutation.mutate();
                  }}
                >
                  Login
                </button>
              </div>
              <button onClick={googleLogin} className="btn">
                Login with Google
              </button>
            </form>
          </div>
        </div>
        {error && (
          <div role="alert" className="alert alert-error mt-6 z-10 fixed top-0">
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
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Login Failed, Something went wrong</span>
          </div>
        )}
      </div>
    </>
  );
};

export default UserLogin;
