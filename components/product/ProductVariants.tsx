import {useState} from 'react';

export function ProductVariants({variant}) {
	console.log('currentVaraint:-', variant[0]);
	const [currentVaraint, setCurrnetVaraint] = useState(variant[0] || {});
	select;
	return (
		<div className="pb-3 border-b border-gray-300">
			<div className="mb-4">
				<div className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
					size
				</div>
				<ul className="colors flex flex-wrap -me-3">
					<li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
						S
					</li>
					<li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
						M
					</li>
					<li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
						L
					</li>
					<li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
						XL
					</li>
				</ul>
			</div>
			<div className="mb-4">
				<h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
					color
				</h3>
				<ul className="colors flex flex-wrap -me-3">
					<li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
						<span
							className="h-full w-full rounded block"
							style={{'background-color': 'rgb(232, 108, 37)'}}
						></span>
					</li>
					<li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
						<span
							className="h-full w-full rounded block"
							style={{'background-color': 'rgb(255, 165, 180)'}}
						></span>
					</li>
					<li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
						<span
							className="h-full w-full rounded block"
							style={{'background-color': 'rgb(130, 36, 227)'}}
						></span>
					</li>
					<li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
						<span
							className="h-full w-full rounded block"
							style={{'background-color': 'rgb(221, 51, 51)'}}
						></span>
					</li>
				</ul>
			</div>
		</div>
	);
}
