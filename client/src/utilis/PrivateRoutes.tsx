import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _] = useCookies(["access_token"]);
  return cookies.access_token ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;
