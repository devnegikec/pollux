import React, {ReactNode} from 'react';
import type {ProductType} from './productComponents.interface';

export interface LayoutProps extends React.HTMLProps<any> {
	title: string;
	brandName: string;
	children?: ReactNode;
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

export interface CollectionPropsType extends React.HTMLProps<any> {
	products: ProductType[];
	children?: ReactNode;
}
export interface ProductContainerPropsType extends React.HTMLProps<any> {
	products: ProductType[];
	children?: ReactNode;
}

export interface ProductItemPropsType extends React.HTMLProps<any> {
	product: ProductType;
	children?: ReactNode;
}
