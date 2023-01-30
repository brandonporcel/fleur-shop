import Button from '../styles/Button.module.css';

const ButtonStyled = ({ children, type, onClick, disabled }) => (
	<button
		onClick={onClick}
		disabled={disabled}
		className={`${Button.itself} ${
			type === 'bg'
				? Button.bg
				: type === 'noBg'
				? Button.noBg
				: Button.bgReverse
		}`}
	>
		{children}
	</button>
);

export default ButtonStyled;
