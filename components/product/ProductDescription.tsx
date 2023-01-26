export function ProductDescription() {
	return (
		<div className="shadow-sm">
			<header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300">
				<h2 className="text-sm font-semibold leading-relaxed text-heading pe-2 md:text-base lg:text-lg">
					Product Details
				</h2>
				<div className="flex-shrink-0 relative w-4 h-4 flex justify-center items-center">
					<div className="w-full h-0.5 bg-heading rounded-sm"></div>
					<div className="origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out scale-0"></div>
				</div>
			</header>
			<div>
				<div className="pb-6 md:pb-7 leading-7 text-sm text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non,
					voluptatibus enim animi excepturi impedit placeat assumenda velit,
					quidem, quis voluptate fugiat? Ab ratione quo natus vitae, ea sed in.
				</div>
			</div>
		</div>
	);
}
