import {DesktopHeader} from '../desktop/DesktopHeader';
import {MobileHeader} from '../mobile/MobileHeader';

export function Header() {
	const brandName = 'Pollux';
	const items = [];

	return (
		<>
			<div className="md:hidden">
				<MobileHeader itemInCart={10} brandName={brandName} />
			</div>
			<div className="hidden md:block">
				<DesktopHeader itemInCart={10} brandName={brandName} />
			</div>
		</>
	);
}
