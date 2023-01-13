import React, {ReactNode} from 'react';

export interface LayoutProps extends React.HTMLProps<any> {
	title: string;
	brandName: string;
	children: ReactNode;
}
