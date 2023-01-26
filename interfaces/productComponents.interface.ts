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
export interface VariantsValueType {
	_key: string;
	_type: string;
	key: string;
	value: string;
}

export interface VariantType {
	_id: string;
	title: string;
	price: number;
	costperitem: number;
	comparePrice: number;
	quantity: number;
	sku: string;
	barcode: string;
	variants: VariantsValueType[];
}

export interface ProductDetailType {
	_id: string;
	name: string;
	price: number;
	details: string;
	slug: string;
	status: string;
	inventory: number;
	vendor: VendorType;
	tax: number;
	isdiscount: boolean;
	image: ProductImageT[];
	variant: VariantType[];
}
