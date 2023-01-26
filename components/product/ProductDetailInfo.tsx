import {Price} from './Price';
export function ProductDetailInfo() {
	const regular = {
		text: 99,
	};
	const special = {
		text: 78,
	};
	return (
		<div>
			<div className="capitalize">Product Name</div>
			<Price regular={regular} special={special} />
		</div>
	);
}
