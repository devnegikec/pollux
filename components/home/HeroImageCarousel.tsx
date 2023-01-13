import {useEffect, useState} from 'react';

import type {HeroImageCarouselProps} from '../../interfaces';
import {HeroImageCard} from './HeroImageCard';

export function HeroImageCarousel(props: HeroImageCarouselProps) {
	const {images} = props;
	const [current, setCurrent] = useState(0);
	const [currentImageData, setCurrentImageData] = useState(images?.[0] ?? []);
	const imageDataLength = images?.length ?? 0;

	useEffect(() => {
		const interval = setInterval(() => {
			const cur: number = current < imageDataLength - 1 ? current + 1 : 0;
			setCurrentImageData(images[cur]);
			setCurrent(cur);
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, [current, imageDataLength, images]);

	const handleImageSlider = (index: number) => {
		setCurrentImageData(images[index]);
		setCurrent(index);
	};

	return (
		<section className="relative w-screen mt-20">
			<HeroImageCard image={currentImageData} />
			<div className="absolute bottom-20 left-20 p-5 flex justify-center items-center">
				{images.map((imageData, index) => {
					const spanClass =
						index === current
							? 'w-10 h-2 bg-white opacity-1 mr-2'
							: ' w-10 h-1 bg-white opacity-50 mr-2';
					return (
						<span
							key={imageData._id}
							className={spanClass}
							onClick={() => {
								handleImageSlider(index);
							}}
						></span>
					);
				})}
			</div>
		</section>
	);
}
