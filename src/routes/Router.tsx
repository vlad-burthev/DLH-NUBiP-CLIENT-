import { lazy, type FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../utils/hooks/hooks";
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const RegPage = lazy(() => import("../pages/Reg/RegPage"));
const AdminPage = lazy(() => import("../pages/Admin/AdminPage"));
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFoundPage"));

const Router: FC = () => {
  const { isAdmin, isLogin } = useAppSelector((state) => state.user);

  return (
    <Suspense fallback={false}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegPage />} />
        {isAdmin && <Route path="/admin" element={<AdminPage />} />}
        {isLogin ? (
          <Route path="*" element={<NotFoundPage />} />
        ) : (
          <Route path="*" element={<Navigate to={"/login"} />} />
        )}
      </Routes>
    </Suspense>
  );
};

export default Router;
