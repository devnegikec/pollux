import type {HomeHeroImagesType} from '../../interfaces';

export const fetchHomeHeroImages = async (): Promise<HomeHeroImagesType[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/images/hero`,
	);
	const data = await res.json();
	return data;
};
