import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getClient } from '@/config/queryClient';
import { Home, ProductDetail, ProductList } from '@/pages';
import { Header } from '@/components/Header';

const queryClient = getClient();

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home/item-list" element={<ProductList />} />
					<Route path="/home/item-list/*" element={<ProductDetail />} />
				</Routes>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
