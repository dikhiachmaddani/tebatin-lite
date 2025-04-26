import { PropsWithChildren } from 'react';
import type { ErrorBoundaryProps as ReaectErrorBoundaryProps } from 'react-error-boundary';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from "./ErrorFallback";

export type ErrorBoundaryProps = Omit<ReaectErrorBoundaryProps, 'fallback' | 'FallbackComponent'>;

export function ErrorBoundary(props: PropsWithChildren<ErrorBoundaryProps>) {
	return <ReactErrorBoundary fallbackRender={ErrorFallback} {...props} />;
}
