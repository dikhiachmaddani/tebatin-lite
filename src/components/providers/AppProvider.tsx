import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { queryClient } from "../../utils/react-query";
import { ErrorBoundary } from "../Error/ErrorBoundary";
import { Suspense } from "../Error/Suspense";

export function AppProviders(props: PropsWithChildren) {
	return (
		<ErrorBoundary>
			<Toaster />
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools position="right" />
				<Suspense>{props.children}</Suspense>
			</QueryClientProvider>
		</ErrorBoundary>
	);
}
