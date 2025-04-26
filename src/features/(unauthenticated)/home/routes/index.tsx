import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../../../../components/HomeLayout/HomeLayout";
import { lazyImport } from "../../../../utils/lazy-import";

const { Home } = lazyImport(() => import("./home"), "Home");
const { Cart } = lazyImport(() => import("./cart"), "Cart");
const { DetailHome } = lazyImport(() => import("./detail-home"), "DetailHome");
const { NotFound } = lazyImport(() => import("../../../../features/not-found"), "NotFound");

export function HomeRoutes() {
	return (
		<Routes>
			<Route element={<HomeLayout />} path="/">
				<Route element={<Home />} path="/" />
				<Route element={<DetailHome />} path="detail/:id" />
				<Route element={<Cart />} path="/cart" />
			</Route>

			<Route element={<NotFound />} path="*" />
		</Routes>
	);
}
