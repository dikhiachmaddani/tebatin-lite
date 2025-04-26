/* eslint-disable @typescript-eslint/no-empty-object-type */
export type PendingFallbackProps = {};
/* eslint-enable @typescript-eslint/no-empty-object-type */
export function PendingFallback() {
	return (
		<div aria-label="Loading" className="w-full h-screen flex items-center justify-center text-xl">
			<p>Loading...</p>
		</div>
	);
}
