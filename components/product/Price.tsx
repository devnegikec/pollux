export function Price({regular, special}) {
	return (
		<h4 className="">
			{special.value === regular.value && (
				<div>
					<span className="">{regular.text}</span>
				</div>
			)}
			{special.value < regular.value && (
				<div>
					<span className="">{special.text}</span>{' '}
					<span className="">{regular.text}</span>
				</div>
			)}
		</h4>
	);
}
