export function ProductGeneralInfo({name, details, price}) {
	return (
		<div className="pb-7 mb-7 border-b border-gray-300">
			<h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
				{name}
			</h2>
			<p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
				{details}
			</p>
			<div className="flex items-center mt-5">
				<div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
					₹{price}
				</div>
				<span className="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl ps-2">
					₹589
				</span>
			</div>
		</div>
	);
}
