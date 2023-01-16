import {ProductItem} from './ProductItem';

import type {ProductContainerPropsType} from '../../interfaces';

export function ProductContainer({products}: ProductContainerPropsType) {
	return (
		<>
			<div className="product-main-container">
				<div className="product-list-container">
					{products.map((product) => (
						<ProductItem product={product} key={product.slug} />
					))}
				</div>
			</div>
		</>
	);
}
