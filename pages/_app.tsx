import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Roboto} from '@next/font/google';
import {Provider} from 'react-redux';

import {store} from '../redux/store';
import {AppWrapper} from '../components';
import {fetchAppSettings} from '../utils';
import type {SettingsType, AppAllProps, AppData} from '../interfaces';

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
