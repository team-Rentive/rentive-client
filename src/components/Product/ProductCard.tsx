import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Product } from '@/pages/ProductList';

const StyledList = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;

	& a:visited,
	a {
		color: #000;
	}

	& .product-list__image-bg {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #eaeaea;
		border-radius: 5px;
		margin: 1rem 0 0.3rem 0;
	}

	& .product-list__image {
	}

	& .product-list__title {
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
`;

function ProductCard({
	id,
	title,
	imageUrl,
	limitDate,
}: Omit<Product, 'category' | 'text' | 'favorite'>) {
	return (
		<StyledList>
			<Link to={`./item-${id}`}>
				<div className="product-list__image-bg">
					<img className="product-list__image" src={imageUrl} alt={title} />
				</div>
				<p className="product-list__title">{title}</p>
				<p>{limitDate}일 후 대여 가능</p>
			</Link>
		</StyledList>
	);
}

export default ProductCard;
