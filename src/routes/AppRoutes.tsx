import { Route, Routes } from "react-router-dom";
import { lazyImport } from "../utils/lazy-import";

const { TaskManagementRoutes } = lazyImport(() => import("../features/(authenticated)/task-managment/routes"), "TaskManagementRoutes");
const { HomeRoutes } = lazyImport(() => import("../features/(unauthenticated)/home/routes"), "HomeRoutes");
const { AuthRoutes } = lazyImport(() => import("../features/(unauthenticated)/auth/routes"), "AuthRoutes");

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomeRoutes />} path="*" />
      <Route element={<AuthRoutes />} path="auth/*" />
      {/* <Route element={<PrivateRouteGuard />} errorElement={<ErrorElement />} path="app/*"> */}
      <Route path="apps/*">
        <Route element={<TaskManagementRoutes />} path="task-management/*" />
      </Route>
    </Routes>
  );
}
