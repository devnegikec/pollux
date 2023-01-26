export function BreadCrumb() {
	return (
		<div className="flex items-center">
			<ol className="flex items-center w-full overflow-hidden">
				<li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
					<a href="/">Home</a>
				</li>
				<li className="text-base text-body mt-0.5">/</li>
				<li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
					<a className="capitalize" href="/products">
						products
					</a>
				</li>
				<li className="text-base text-body mt-0.5">/</li>
				<li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
					<a className="capitalize" href="/products/hermes-carlton-london">
						hermes carlton london
					</a>
				</li>
			</ol>
		</div>
	);
}
