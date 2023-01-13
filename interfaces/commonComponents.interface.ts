import {ReactNode} from 'react';

export interface FooterPropType extends React.HTMLProps<any> {
	brandName: string;
	children?: ReactNode;
}
