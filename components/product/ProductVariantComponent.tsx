import {useState} from 'react';
import {ProductVariantColor} from './ProductVariantColor';
import {ProductVariantSize} from './ProductVariantSize';

function getVariantOptions(varaints) {
	const result = {};
	varaints.forEach((varaint, index) => {
		varaint.variants.forEach((v) => {
			if (result[v.key]) {
				result[v.key].push(v.value);
			} else {
				result[v.key] = [v.value];
			}
		});
	});

	return result;
}

export function ProductVariantComponent({variant, setCurrnetVaraint}) {
	const productVariant = getVariantOptions(variant);

	const [variantKeys] = useState(Object.keys(productVariant));

	const renderVariantTypes = (key) => {
		if (key === 'size') {
			return (
				<ProductVariantSize
					data={productVariant[key]}
					setCurrnetVaraint={setCurrnetVaraint}
				/>
			);
		}
		if (key === 'color') {
			return (
				<ProductVariantColor
					data={productVariant[key]}
					setCurrnetVaraint={setCurrnetVaraint}
				/>
			);
		}
	};

	return (
		<div className="pb-3 border-b border-gray-300">
			{variantKeys.map((vKey) => {
				return (
					<div>
						<div className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
							{vKey}
						</div>
						{renderVariantTypes(vKey)}
					</div>
				);
			})}
		</div>
	);
}
