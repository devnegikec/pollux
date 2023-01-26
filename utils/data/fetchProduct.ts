import type {ProductType} from '../../interfaces';

export const fetchProduct = async (slug: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/product?slug=${slug}`,
	);
	const data = await res.json();
	const product: ProductType = data;
	return product;
};
