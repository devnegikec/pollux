import type {FooterPropType} from '../../interfaces';

export function Footer({brandName}: FooterPropType) {
	return (
		<footer className="flex h-10 justify-center items-center shadow-inner">
			<p>Copyright © 2022 {brandName}</p>
		</footer>
	);
}
