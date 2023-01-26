import {useEffect, useState} from 'react';

import {BreadCrumb} from '../common';
import {ProductAddToCart} from './ProductAddToCart';
import {ProductDescription} from './ProductDescription';
import {ProductGeneralInfo} from './ProductGeneralInfo';
import {ProductImages} from './ProductImages';
import {ProductVariantComponent} from './ProductVariantComponent';

function deepEqual(x, y) {
	const ok = Object.keys,
		tx = typeof x,
		ty = typeof y;
	return x && y && tx === 'object' && tx === ty
		? ok(x).length === ok(y).length &&
				ok(x).every((key) => deepEqual(x[key], y[key]))
		: x === y;
}

function findVariant(variants, currentVaraint) {
	let result = null;

	variants.forEach((v) => {
		if (deepEqual(v.options, currentVaraint)) {
			result = v;
		}
	});
	return result;
}
export function ProductDetails({product}) {
	// console.log('product:-', product);
	let {name, details, price, variant, vendor, inventory, image, slug} = product;
	const [isProductHasVariant] = useState(variant.length > 0);
	const [selectedProductVariant, setSelectedProductVariant] = useState(null);
	const [productPrice, setProductPrice] = useState(price);
	const [productInventory, setProductInventory] = useState(inventory);
	const [productSku, setProductSku] = useState(slug);

	const [currentVaraint, setCurrnetVaraint] = useState({});

	useEffect(() => {
		if (Object.keys(currentVaraint).length > 0) {
			const selectedVariant = findVariant(product.variant, currentVaraint);
			if (selectedVariant) {
				setSelectedProductVariant(selectedVariant);
				setProductPrice(selectedVariant.price);
				setProductInventory(selectedVariant.quantity);
				setProductSku(selectedVariant.sku);
			}
		}
	}, [currentVaraint]);

	return (
		<div className="relative flex-grow">
			<div className="border-t border-gray-300 mb-0"></div>
			<div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
				<div className="pt-8">
					<BreadCrumb />
				</div>
				<div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
					<ProductImages images={image} name={name} />
					<div className="col-span-4 pt-8 lg:pt-0">
						<ProductGeneralInfo
							name={name}
							details={details}
							price={productPrice}
						/>
						<ProductVariantComponent
							variant={variant}
							setCurrnetVaraint={setCurrnetVaraint}
						/>
						<ProductAddToCart
							product={product}
							selectedProductVariant={selectedProductVariant}
							quantity={productInventory}
							isProductHasVariant={isProductHasVariant}
						/>
						<ProductDescription />
					</div>
				</div>
			</div>
		</div>
	);
}
