interface ButtonProps {
	children: React.ReactNode;
	variant?: "outline" | "solid" | "ghost";
	onClick?: () => void;
	className?: string;
}

const Button = ({
	children,
	variant = "outline",
	onClick,
	className,
}: ButtonProps) => {
	const base =
		"flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg cursor-pointer transition-colors";

	const variants = {
		outline:
			"border border-border text-text-secondary hover:bg-surface-subtle",
		solid: "bg-button-primary text-button-primary-foreground hover:opacity-90",
		ghost: "bg-surface-subtle text-text-secondary hover:bg-border",
	};

	return (
		<button
			onClick={onClick}
			className={`${base} ${variants[variant]} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
