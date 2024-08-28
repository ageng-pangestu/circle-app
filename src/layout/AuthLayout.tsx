import { Navigate, Outlet } from "react-router-dom";
import useStore from "../stores/hooks";

const AuthLayout = () => {
  const { isLogin } = useStore();

  //kondisi jika sudah login, pindah ke home
  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
