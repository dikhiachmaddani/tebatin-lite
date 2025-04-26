import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary, type ErrorBoundaryProps } from "./ErrorBoundary";
import { PendingFallback, type PendingFallbackProps } from "./PendingFallback";

export type SuspenseWithErrorBoundaryProps = ErrorBoundaryProps & {
	pendingProps?: PendingFallbackProps;
};

export function SuspenseWithErrorBoundary(props: PropsWithChildren<SuspenseWithErrorBoundaryProps>) {
	const { pendingProps, ...errorBoundaryProps } = props;

	return (
		<ErrorBoundary {...errorBoundaryProps}>
			<Suspense fallback={<PendingFallback {...pendingProps} />}>{props.children}</Suspense>
		</ErrorBoundary>
	);
}
