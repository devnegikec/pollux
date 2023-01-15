import React, {ReactNode} from 'react';

export interface LayoutProps extends React.HTMLProps<any> {
	title: string;
	brandName: string;
	children: ReactNode;
}

export interface MobileHeaderProps extends React.HTMLProps<any> {
	itemInCart: number;
	brandName: string;
	children?: ReactNode;
}

export interface DesktopHeaderProps extends React.HTMLProps<any> {
	itemInCart: number;
	brandName: string;
	children?: ReactNode;
}
