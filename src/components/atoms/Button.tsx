type ButtonProps = {
	type: 'button' | 'submit' | 'reset';
	className?: string;
	children?: React.ReactNode;
	onClick?: () => void;
};

const Button = ({ type, className, children, ...props }: ButtonProps) => {
	return (
		<button type={type} className={className} {...props}>
			{children}
		</button>
	);
};

export default Button;
