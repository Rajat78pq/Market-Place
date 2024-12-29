import { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/homeLayout";

const Home = lazy(() => import("./pages/home"));
const UserLogin = lazy(() => import("./pages/userLogin"));
const UserRegister = lazy(() => import("./pages/userRegister"));
const ShopDetailsForm = lazy(() => import("./pages/shopDetailsForm"));

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
        <UserLogin />
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
