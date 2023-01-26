import {ProductDetails} from '../../components';
import Layout from '../../components/Layout';
import type {ProductPagePropsType} from '../../interfaces';
import {fetchProduct} from '../../utils';

export async function getServerSideProps(context) {
	const product = await fetchProduct(context.params.slug);
	return {
		props: {product},
	};
}
export default function ProductPage({product}: ProductPagePropsType) {
	return (
		<Layout title="All Products" brandName="Pollux">
			<ProductDetails product={product} />
		</Layout>
	);
}
