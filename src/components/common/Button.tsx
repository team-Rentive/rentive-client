import styled from '@emotion/styled';

type ButtonType = 'primary' | 'secondary' | undefined;

interface ButtonProps {
	buttonType?: ButtonType;
	disabled?: boolean;
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface StyledButtonProps {
	buttonType: ButtonType;
}

const getColors = {
	primary: {
		backgroundColor: '#bb2974',
		color: '#fff',
	},
	secondary: {
		backgroundColor: '#f1b8d5',
		color: '#000',
	},
};

const StyledButton = styled.button<StyledButtonProps>`
	border: 0;
	border-radius: 5px;
	white-space: nowrap;
	padding: 0.5rem 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	${(props) =>
		(props.buttonType && getColors[props.buttonType]) || {
			backgroundColor: '#000',
			color: '#fff',
		}};
`;

function Button({ buttonType = 'primary', disabled = false, children, onClick }: ButtonProps) {
	return (
		<StyledButton disabled={disabled} onClick={onClick} buttonType={buttonType}>
			{children}
		</StyledButton>
	);
}

export default Button;
