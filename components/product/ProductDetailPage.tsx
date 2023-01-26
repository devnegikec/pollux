import Image from 'next/image';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import type {
	ProductDetailPagePropsType,
	VariantType,
	VariantsValueType,
} from '../../interfaces';
import {addToCart} from '../../redux';
import {getImageUrl} from '../../utils';
import {Button, NumberControl} from '../UI';
import {ProductVariantComponent} from './ProductVariantComponent';

function getProductVariants(data: ProductDetailPagePropsType[]) {
	const result = {};
	data.forEach((vData: VariantType) => {
		vData.variants.forEach((varaint: VariantsValueType) => {
			if (result[varaint.key]) {
				result[varaint.key].push(varaint.value);
			} else {
				result[varaint.key] = [varaint.value];
			}
		});
	});
	return result;
}

export function ProductDetailPage({product}: ProductDetailPagePropsType) {
	const dispatch = useDispatch();
	const [productVariant, setProductVariant] = useState(
		getProductVariants(product?.variant),
	);

	const addToBasketHandler = () => {
		dispatch(addToCart(product));
	};

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
			<div className="flex flex-col md:flex-row -mx-4">
				<div className="md:flex-1 px-4">
					<div x-data="image-1">
						<div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
							<div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
								<Image
									src={getImageUrl(product.image[0]).url()}
									alt={product.name}
									width={640}
									height={640}
								></Image>
							</div>
						</div>
						<div className="flex -mx-2 mb-4">
							{product.image.map((image, index) => {
								return (
									<div className="flex-1 px-2">
										<div className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
											<Image
												src={getImageUrl(image).url()}
												alt={product.name}
												width={100}
												height={100}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="md:flex-1 px-4">
					<h1 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
						{product.name}
					</h1>
					<p className="text-gray-500 text-sm">
						<a className="text-indigo-600 hover:underline">
							{product.vendor?.name}
						</a>
					</p>
					<div className="flex items-center space-x-4 my-4">
						<div>
							<div className="rounded-lg bg-gray-100 flex py-2 px-3">
								<span className="text-indigo-400 mr-1 mt-1">$</span>
								<span className="font-bold text-indigo-600 text-3xl">
									{product.price}
								</span>
							</div>
						</div>
					</div>
					<p className="text-gray-500">{product.details}</p>
					<div className="">
						<ProductVariantComponent productVariant={productVariant} />
					</div>
					<div className="flex py-4 space-x-4">
						<NumberControl title="Qunatity" min={0} max={5} />
						<Button
							title="Add To Cart"
							width="w-80"
							height="h-14"
							color="bg-white"
							hoverColor="bg-black"
							onClick={addToBasketHandler}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
