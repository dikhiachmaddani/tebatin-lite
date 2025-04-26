import { QueryClient } from "@tanstack/react-query";

const MAX_RETRY = 3;

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: (failureCount) => failureCount <= MAX_RETRY,
		},
	},
});
