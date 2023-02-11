interface LogoProp {
	value: 'header' | 'page';
}

const logoVariants = {
	header: {
		width: '48px',
		height: '48px',
		backgroundColor: '#dd9876',
		src: 'https://toppng.com/uploads/preview/free-fire-png-logo-115690680921wyscrhw1c.png',
	},
	page: {
		width: '100%',
		height: '3rem',
		src: '',
	},
};

function Logo({ value }: LogoProp) {
	return <img src={logoVariants[value].src} css={logoVariants[value]} alt="logo" />;
}

export default Logo;
