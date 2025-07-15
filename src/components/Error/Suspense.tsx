import { PropsWithChildren, Suspense as ReactSuspense } from 'react';
import { PendingFallback } from './PendingFallback';

export function Suspense({ children }: PropsWithChildren) {
	return <ReactSuspense fallback={<PendingFallback />}>{children}</ReactSuspense>;
}
