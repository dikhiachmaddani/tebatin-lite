import { Route, Routes } from "react-router-dom";
import { lazyImport } from "../../../../utils/lazy-import";

const { AuthLayout } = lazyImport(() => import("../../../../components/AuthLayout/AuthLayout"), "AuthLayout");
const { Login } = lazyImport(() => import("./login"), "Login");
const { Register } = lazyImport(() => import("./register"), "Register");

export function AuthRoutes() {
	return (
		<Routes>
			<Route element={<AuthLayout />} path="/">
				<Route element={<Login />} path="/login" />
				<Route element={<Register />} path="/register" />
			</Route>
		</Routes>
	);
}
