import { Route, Routes } from "react-router-dom";
import { lazyImport } from "../../../../utils/lazy-import";

const { AdminLayout } = lazyImport(() => import("../../../../components/AdminLayout/AdminLayout"), "AdminLayout");
const { ListTaskManagment } = lazyImport(() => import("./list-task-management"), "ListTaskManagment");
const { CreateTaskManagment } = lazyImport(() => import("./create-task-management"), "CreateTaskManagment");

export function TaskManagementRoutes() {
	return (
		<Routes>
			<Route element={<AdminLayout />} path="/">
				<Route element={<ListTaskManagment />} path="/" />
				<Route element={<CreateTaskManagment />} path="/create" />
			</Route>
		</Routes>
	);
}
