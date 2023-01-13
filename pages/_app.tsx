import {Roboto} from '@next/font/google';
import {Provider} from 'react-redux';
import '../styles/globals.css';

import {AppWrapper} from '../components';
import type {AppAllProps, AppData, SettingsType} from '../interfaces';
import {store} from '../redux/store';
import {fetchAppSettings} from '../utils';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-roboto',
});

let initData: AppData[] = [];
export default function App({Component, pageProps, stars}: AppAllProps) {
	return (
		<Provider store={store}>
			<AppWrapper stars={stars}>
				<div className={`${roboto.variable} font-sans`}>
					<Component {...pageProps} />
				</div>
			</AppWrapper>
		</Provider>
	);
}

setInterval(() => {
	initData = [];
}, 1000 * 60 * 5);

App.getInitialProps = async () => {
	initData = await fetchAppSettings();
	const appsettings: SettingsType = initData.reduce(
		(obj: SettingsType, item: AppData) =>
			Object.assign(obj, {[item.key]: item}),
		{},
	);

	return {
		stars: {appsettings},
	};
};
