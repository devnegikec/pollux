export function ProductVariantColor({data, setCurrnetVaraint}) {
	const colorSelector = (value) => {
		const selectdOption = {color: value};
		// dispatch(selectVariant(selectdOption));
		setCurrnetVaraint((prev) => {
			return {...prev, ...selectdOption};
		});
	};
	return (
		<div className="mb-4">
			<ul className="colors flex flex-wrap -me-3">
				{data.map((value) => {
					return (
						<li
							onClick={() => colorSelector(value)}
							className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black"
						>
							<span
								className="h-full w-full rounded block"
								style={{'background-color': 'rgb(232, 108, 37)'}}
							></span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
