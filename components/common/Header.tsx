import {useSelector} from 'react-redux';

import {selectCartItems} from '../../redux';
import {DesktopHeader} from '../desktop/DesktopHeader';
import {MobileHeader} from '../mobile/MobileHeader';

export function Header() {
	const brandName = 'Pollux';
	const items = useSelector(selectCartItems);

	return (
		<>
			<div className="md:hidden">
				<MobileHeader itemInCart={items.length} brandName={brandName} />
			</div>
			<div className="hidden md:block">
				<DesktopHeader itemInCart={items.length} brandName={brandName} />
			</div>
		</>
	);
}
