import {useEffect, useState} from 'react';

import {ProductContainer} from '../../components';
import Layout from '../../components/Layout';
import type {CollectionPropsType} from '../../interfaces';
import {fetchProductsByPageNumber} from '../../utils';

export async function getServerSideProps() {
	const products = await fetchProductsByPageNumber();
	return {
		props: {products},
	};
}

export default function All({products}: CollectionPropsType) {
	const [state, setState] = useState({
		error: '',
		loading: false,
	});

	const {loading, error} = state;

	useEffect(() => {
		if (products.length > 0) {
			setState({...state, loading: false});
		}
	}, [products, state]);
	return (
		<Layout title="All Products" brandName="Pollux">
			{loading ? (
				<div className="text-3xl">Loading....</div>
			) : error ? (
				<div>{error}</div>
			) : (
				<ProductContainer products={products} />
			)}
		</Layout>
	);
}
