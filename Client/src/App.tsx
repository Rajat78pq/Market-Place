import { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/homeLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ShopDashboard from "./layout/shopDashboard";

// const Home = lazy(() => import("./pages/home"));
const HeroPage = lazy(() => import("./pages/heroPage"));
const UserLogin = lazy(() => import("./pages/auth/userLogin"));
const UserRegister = lazy(() => import("./pages/auth/userRegister"));
const ShopDetailsForm = lazy(() => import("./pages/shop/shopDetailsForm"));
const ShopLocation = lazy(() => import("./pages/shop/shopLocation"));
const ShopHomePage = lazy(() => import("./pages/shop/dashboard/homePage"));
const UserProfile = lazy(() => import("./pages/user/userProfile"));
const ShopProduct = lazy(() => import("./pages/shop/dashboard/productPage"));
const ShopOrders = lazy(() => import("./pages/shop/dashboard/orderPage"));

const GoogleAuthLoginWrapper = () => {
  return (
    <GoogleOAuthProvider clientId="972260022709-c0bv8vvgcqfou1ossdn79rfl3lkmj2b0.apps.googleusercontent.com">
      <UserLogin></UserLogin>
    </GoogleOAuthProvider>
  );
};

const GoogleAuthRegisterWrapper = () => {
  return (
    <GoogleOAuthProvider clientId="972260022709-c0bv8vvgcqfou1ossdn79rfl3lkmj2b0.apps.googleusercontent.com">
      <UserRegister></UserRegister>
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
          <HeroPage />
          {/* <Home /> */}
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
        <GoogleAuthLoginWrapper />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <GoogleAuthRegisterWrapper />
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
  {
    path: "/shop/dashboard",
    element: (
      <ShopDashboard>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <ShopHomePage />
        </Suspense>
      </ShopDashboard>
    ),
  },
  {
    path: "/profile",
    element: (
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <UserProfile />
      </Suspense>
    ),
  },
  {
    path: "/shop/products",
    element: (
      <ShopDashboard>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <ShopProduct />
        </Suspense>
      </ShopDashboard>
    ),
  },
  {
    path: "/shop/orders",
    element: (
      <ShopDashboard>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <ShopOrders />
        </Suspense>
      </ShopDashboard>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
