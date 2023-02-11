import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/common';
import { SearchInput } from '@/components/Header/SearchInput';

interface LinkProp {
	label: string;
	href: string;
}

const links: LinkProp[] = [
	{ label: '인기 상품', href: '/popular' },
	{ label: '내 근처', href: '/near' },
];

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 80px;
	padding: 0 2rem;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	&.nav-right {
		gap: 1rem;
		width: auto;
		display: auto;
		align-items: center;
	}

	& .nav-ul {
		list-style: none;
		display: flex;
	}
`;

const NavList = styled(Link)`
	margin: 0 1rem;
`;

function Header() {
	const [searchText, setSearchText] = useState('');

	return (
		<StyledHeader>
			<Logo value="header" />
			<Navigation>
				<ul className="nav-ul">
					{links.map((link: LinkProp) => (
						<li key={link.label}>
							<NavList to={link.href}>{link.label}</NavList>
						</li>
					))}
				</ul>
			</Navigation>
			<Navigation className="nav-right">
				<SearchInput searchText={searchText} setSearchText={setSearchText} />
				<Button buttonType="primary">Sign In</Button>
			</Navigation>
		</StyledHeader>
	);
}

export default Header;
