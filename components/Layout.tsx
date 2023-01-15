import Head from 'next/head';

import type {LayoutProps} from '../interfaces';
import {Footer, Header} from './common';

function Layout({title, brandName, children}: LayoutProps) {
	return (
		<>
			<Head>
				<title>{title ? `${title} - ${brandName}` : brandName}</title>
				<meta name="description" content="Ecommerce Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex min-h-screen flex-col justify-between">
				<Header />
				<main className="container mt-4">{children}</main>
				<Footer brandName={brandName} />
			</div>
		</>
	);
}

export default Layout;
