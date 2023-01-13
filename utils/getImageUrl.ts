// import createImageUrlBuilder from "@sanity/image-url";
import imageUrlBuilder from '@sanity/image-url';
import type {ImageT} from '../interfaces';
import {client} from './client';

export function getImageUrl(source: ImageT) {
	// return createImageUrlBuilder(client).image(source);
	return imageUrlBuilder(client).image(source);
}
