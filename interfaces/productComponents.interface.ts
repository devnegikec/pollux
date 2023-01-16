export interface ImageAsset {
	_ref: string;
	_type: string;
}

export interface ProductImageT {
	_key: string;
	_type: string;
	asset: ImageAsset;
}

export interface VendorType {
	_id: string;
	name: string;
	type: string;
	code: string;
}

export interface ProductType {
	__createdAt: string;
	_id: string;
	name: string;
	price: number;
	inventory: number;
	rating: number;
	slug: string;
	status: string;
	vendor: VendorType;
	image: ProductImageT[];
}
