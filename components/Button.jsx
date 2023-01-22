import Button from '../styles/Button.module.css';

const ButtonStyled = ({ children, type, onClick }) => (
	<button
		onClick={onClick}
		className={`${Button.itself} ${type === 'bg' ? Button.bg : noBg}`}
	>
		{children}
	</button>
);

export default ButtonStyled;
