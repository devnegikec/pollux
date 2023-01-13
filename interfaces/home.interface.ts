import React, {ReactNode} from 'react';

export default interface Asset {
	_ref: string;
	_type: string;
}

export interface ImageT {
	_key: string;
	_type: string;
	asset: Asset;
}

export interface HomeHeroImagesType {
	_id: string;
	title: string;
	name: string;
	primarytext: string;
	secondarytext: string;
	tertiartext: string;
	type: string;
	button: string;
	image: ImageT[];
}

export interface HeroImageCarouselProps extends React.HTMLProps<any> {
	images: HomeHeroImagesType[];
	children?: ReactNode;
}
export interface HeroImageCardProps extends React.HTMLProps<any> {
	image: HomeHeroImagesType;
	children?: ReactNode;
}
export interface HomePageProps extends React.HTMLProps<any> {
	images: HomeHeroImagesType[];
	children?: ReactNode;
}
