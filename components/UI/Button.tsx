interface Props {
	title: string;
	color: string;
	height?: string;
	hoverColor?: string;
	onClick?: () => void;
	width?: string;
	loading?: string;
	padding?: string;
	noIcon?: boolean;
}

export function Button({
	title,
	color,
	height,
	hoverColor,
	onClick,
	width,
	loading,
	padding,
	noIcon,
}: Props) {
	return (
		<button
			className={`${height} outline-none mr-1 border border-solid border-black px-8 bg-transparent text-base font-bold text-black uppercase focus:outline-none active:bg-black hover:text-white ${color} hover:${hoverColor} ${
				width ? width : 'w-auto'
			} ${
				padding ? padding : ''
			} transition-all duration-300 focus:outline-none`}
			onClick={onClick}
		>
			<span className="">{loading ? 'Loading...' : title}</span>
		</button>
	);
}
