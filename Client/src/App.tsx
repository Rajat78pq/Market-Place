import { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const UserLogin = lazy(() => import("./pages/userLogin"));
const UserRegister = lazy(() => import("./pages/userRegister"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <Home />
      </Suspense>
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
