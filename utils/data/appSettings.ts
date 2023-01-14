import fetch from 'cross-fetch';
import type {AppData} from '../../interfaces';

export const fetchAppSettings = async (): Promise<AppData[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/settings`);
	return await res.json();
};
