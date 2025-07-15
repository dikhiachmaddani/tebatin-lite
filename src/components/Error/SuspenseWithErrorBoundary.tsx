import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary, type ErrorBoundaryProps } from "./ErrorBoundary";
import { PendingFallback } from "./PendingFallback";

export type SuspenseWithErrorBoundaryProps = ErrorBoundaryProps;

export function SuspenseWithErrorBoundary(props: PropsWithChildren<SuspenseWithErrorBoundaryProps>) {
	return (
		<ErrorBoundary {...props}>
			<Suspense fallback={<PendingFallback />}>{props.children}</Suspense>
		</ErrorBoundary>
	);
}
