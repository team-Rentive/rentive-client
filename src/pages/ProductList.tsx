import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { QueryKeys } from '../constants/queryKeys';
import { fetcher } from '../hook/queries/fetcher';
import { ProductCard } from '@/components/Product';

export type ProductPostType = {
	title: string;
	text: string;
	imageUrl: string;
	category: string;
	limitDate: number;
};
export type Product = ProductPostType & { id: number; favorite: number };

const ProductListWrapper = styled.ul`
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
	place-items: center;

	& li {
		list-style: none;
	}

	& img {
		margin: 0;
	}
`;

function ProductList() {
	const [searchParams] = useSearchParams();
	const page = Number(searchParams.get('page')) as number;

	if (!page) return null;

	const { data: productData } = useQuery<Product[]>(QueryKeys.PRODUCT, () =>
		fetcher({
			method: 'get',
			path: `http://localhost:5173/mockdata.json`,
		}),
	);

	return (
		<ProductListWrapper>
			{productData?.map(({ title, imageUrl, limitDate, id }) => (
				<ProductCard
					key={id}
					id={id}
					imageUrl={imageUrl}
					title={title}
					limitDate={limitDate}
				/>
			))}
		</ProductListWrapper>
	);
}

export default ProductList;
