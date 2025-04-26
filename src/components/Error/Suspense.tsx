import { PropsWithChildren, Suspense as ReactSuspense } from 'react';
import { PendingFallback, type PendingFallbackProps } from './PendingFallback';

export type SuspenseProps = PendingFallbackProps;

export function Suspense({ children, ...restProps }: PropsWithChildren<SuspenseProps>) {
	return <ReactSuspense fallback={<PendingFallback {...restProps} />}>{children}</ReactSuspense>;
}
