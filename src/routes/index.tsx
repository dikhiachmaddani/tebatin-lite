import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PendingFallback } from "../components/Error/PendingFallback";
import AppRoutes from "./AppRoutes";

export function AppRoutesProvider() {
	const router = createBrowserRouter([
		{
			path: "*",
			hydrateFallbackElement: <PendingFallback />,
			element: <AppRoutes />,
		},
	]);
	return <RouterProvider router={router} />;
}
