type AppData = {
	_id: string;
	key: string;
	value: string;
};
export const fetchAppSettings = async (): Promise<AppData[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/settings`);
	return await res.json();
};
