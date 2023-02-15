import { QueryClient } from 'react-query';

export const getClient = (() => {
	let client: QueryClient | null = null;

	return () => {
		if (!client)
			client = new QueryClient({
				defaultOptions: {
					queries: {
						cacheTime: 1000 * 60 * 60 * 24, // query 인스턴스가 unmount된 후 캐시 데이터를 유지하는 시간
						staleTime: 1000, // 데이터가 mount된 후, stale 상태로 변경되기까지의 시간
						refetchOnMount: false, // 쿼리에 새 인스턴스가 마운트될 때
						refetchOnReconnect: false, // 네트워크가 끊어졌다 다시 연결될 때
						refetchOnWindowFocus: false, // Window에 다시 Focus 될 때
					},
				},
			});

		return client;
	};
})();
