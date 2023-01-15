import Image from 'next/image';

import type {HeroImageCardProps} from '../../interfaces';
import {getImageUrl} from '../../utils';

export function HeroImageCard(props: HeroImageCardProps) {
	const {name, primarytext, secondarytext, tertiartext, button, _id, image} =
		props.image;

	return (
		<div className="block" key={_id}>
			<Image
				src={getImageUrl(image[0]).url()}
				alt={name}
				width={500}
				height={500}
				className="w-screen transform transition scale-125 duration-500"
			/>
			<div className="absolute top-1/4 p-20 text-white">
				<div className="uppercase text-xl mb-2">{name}</div>
				<div className="uppercase text-5xl font-extrabold">{primarytext}</div>
				<div className="uppercase text-8xl font-extrabold mb-4">
					{secondarytext}
				</div>
				<div className="mb-10">{tertiartext}</div>
				<button className="pl-5 pr-5 pb-3 pt-3 bg-white text-black text-xs font-bold uppercase trasition duration-500 ease-in hover:bg-black hover:text-white">
					{button}
				</button>
			</div>
		</div>
	);
}
