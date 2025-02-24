import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  email: string;
  role: string;
  userId: string;
  shopId: string;
}

const ShopRoute = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  const user: JWTPayload = jwtDecode(token);
  console.log(user);
  return user.role === "seller" ? <Outlet /> : <Navigate to="/shop/create" />;
};

export default ShopRoute;
