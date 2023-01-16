import type {NextApiRequest, NextApiResponse} from 'next';
import {groq} from 'next-sanity';

import type {ProductType} from '../../../interfaces';
import {client} from '../../../utils';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ProductType[]>,
) {
	const query = groq`*[_type == "product"] | order(_createdAt) [$start...$end] {
    _id,
      title,
      name,
      image,
      rating,
      price,
      status,
      inventory,
      _createdAt,
      'vendor': vendor -> {
        _id,
        name,
        type,
        code,
      },
      'slug': slug.current
  }`;

	let start = 0;
	const itemPerPage = 10;
	let end = start + itemPerPage;

	const page = Number(req.query.page);
	if (page) {
		start = (page - 1) * itemPerPage;
		end = start + itemPerPage;
	}

	const result: ProductType[] = await client.fetch(query, {start, end});
	res.status(200).json(result);
}
