import type {NextApiRequest, NextApiResponse} from 'next';
import {groq} from 'next-sanity';

import type {HomeHeroImagesType} from '../../../interfaces';
import {client} from '../../../utils';
const query = groq`*[_type == "appimages" && type == "home-hero-carousel"]{
  _id,
  name,
  title,
  primarytext,
  secondarytext,
  tertiartext,
  button,
  type,
  image,
}`;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const homeHeroImageList: HomeHeroImagesType = await client.fetch(query);
	res.status(200).json(homeHeroImageList);
}
