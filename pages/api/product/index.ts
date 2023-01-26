import type {NextApiRequest, NextApiResponse} from 'next';
import {groq} from 'next-sanity';

import type {ProductDetailType} from '../../../interfaces';

import {client} from '../../../utils';
// import Category from "../../../types/category.type";

const query = groq`*[_type == "product" && slug.current == $slug] {
  _id,
    name,
    price,
    details,
    slug,
    status,
    inventory,
    'vendor': vendor -> {
      _id,
      name,
      type,
      code,
    },
    tax,
    isdiscount,
    image,
    'variant': variant[]-> {
      _id,
      title,
      price,
      costperitem,
      comparePrice,
      quantity,
      sku,
      barcode,
      variants,
    }
}[0]`;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ProductDetailType>,
) {
	const slug = req.query.slug;
	const product = await client.fetch(query, {slug});
	const data = addOptions(product);
	res.status(200).json(data);
}

function addOptions(data) {
	if (data.variant.length <= 0) {
		return;
	}
	data.variant.forEach((varaint) => {
		const options = {};
		varaint.variants.forEach((v) => {
			options[v.key] = v.value;
		});
		varaint.options = options;
	});

	return data;
}
