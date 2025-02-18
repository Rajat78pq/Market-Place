import { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/homeLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ShopDashboard from "./layout/shopDashboard";
import ShopRoute from "./features/restrictedRoute/shopRoute";

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
const UserOrder = lazy(() => import("./pages/user/userOrder"));

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
    path: "/user/orders",
    element: (
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <UserOrder />
      </Suspense>
    ),
  },
  {
    path: "/shop",
    element: <ShopRoute />,
    children: [
      {
        path: "dashboard",
        element: (
          <ShopDashboard>
            <Suspense
              fallback={
                <span className="loading loading-ring loading-lg"></span>
              }
            >
              <ShopHomePage />
            </Suspense>
          </ShopDashboard>
        ),
      },
      {
        path: "products",
        element: (
          <ShopDashboard>
            <Suspense
              fallback={
                <span className="loading loading-ring loading-lg"></span>
              }
            >
              <ShopProduct />
            </Suspense>
          </ShopDashboard>
        ),
      },
      {
        path: "orders",
        element: (
          <ShopDashboard>
            <Suspense
              fallback={
                <span className="loading loading-ring loading-lg"></span>
              }
            >
              <ShopOrders />
            </Suspense>
          </ShopDashboard>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
