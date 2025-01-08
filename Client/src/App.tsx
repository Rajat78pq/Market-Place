import { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/homeLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Home = lazy(() => import("./pages/home"));
const UserLogin = lazy(() => import("./pages/auth/userLogin"));
const UserRegister = lazy(() => import("./pages/auth/userRegister"));
const ShopDetailsForm = lazy(() => import("./pages/shop/shopDetailsForm"));
const ShopLocation = lazy(() => import("./pages/shop/shopLocation"));

const GoogleAuthWrapper = () => {
  return (
    <GoogleOAuthProvider clientId="972260022709-c0bv8vvgcqfou1ossdn79rfl3lkmj2b0.apps.googleusercontent.com">
      <UserLogin></UserLogin>
    </GoogleOAuthProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <Home />
        </Suspense>
      </HomeLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <GoogleAuthWrapper />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <UserRegister />
      </Suspense>
    ),
  },
  {
    path: "/shop/create",
    element: (
      <HomeLayout>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <ShopDetailsForm />
        </Suspense>
      </HomeLayout>
    ),
  },
  {
    path: "/shop/location",
    element: (
      <HomeLayout>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <ShopLocation />
        </Suspense>
      </HomeLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
