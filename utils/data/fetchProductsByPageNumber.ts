import fetch from 'cross-fetch';
import type {ProductType} from '../../interfaces';

export const fetchProductsByPageNumber = async (
	page = 0,
): Promise<ProductType[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/list?page=${page}`,
	);
	const data = await res.json();
	return data;
};
