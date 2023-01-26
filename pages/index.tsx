import {HeroImageCarousel} from '../components';
import Layout from '../components/Layout';
import type {HomeHeroImagesType, HomePageProps} from '../interfaces';
import {fetchHomeHeroImages} from '../utils';

export async function getServerSideProps() {
	const images: HomeHeroImagesType[] = await fetchHomeHeroImages();
	return {
		props: {images},
	};
}

export default function Home(porps: HomePageProps) {
	return (
		<Layout title="home" brandName="Pollux">
			<HeroImageCarousel images={porps.images} />
		</Layout>
	);
}
