import Image from 'next/image';
import {getImageUrl} from '../../utils';

export function ProductImages({images, name}) {
	return (
		<div className="col-span-5 grid grid-cols-2 gap-2.5">
			{images.map((image) => {
				return (
					<div
						className="col-span-1 transition duration-150 ease-in hover:opacity-90"
						key={image._key}
					>
						<Image
							src={getImageUrl(image).url()}
							alt={name}
							width={500}
							height={500}
							className="object-cover w-full"
						/>
					</div>
				);
			})}
		</div>
	);
}
