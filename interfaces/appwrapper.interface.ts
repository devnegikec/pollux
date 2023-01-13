import React, {ReactNode} from 'react';
import type {AppProps} from 'next/app';

export type SettingsType = Record<
	string,
	{_id: string; key: string; value: string}
>;

export interface AppWrapperProps extends React.HTMLProps<any> {
	stars: SettingsType;
	children: ReactNode;
}

export interface AppAllProps extends AppProps {
	stars: SettingsType;
}
