import {MinusIcon, PlusIcon} from '@heroicons/react/24/outline';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux';
/**
 *
 * @param param
 * @returns
 * varify if selected quantity can be added to the product or not
 * if avaialbe product is less then the quantity avaialble don't allow to add
 * if same product added multiple tiem show only one item in cart
 *
 */
export function ProductAddToCart({
	product,
	selectedProductVariant,
	quantity,
	isProductHasVariant,
}) {
	console.log('quantity:-', quantity);
	const [count, setCount] = useState(0);
	const [cls, setCls] = useState('');
	const [avaialbeCount, setAvaialbeCount] = useState(quantity);

	const dispatch = useDispatch();
	const increment = () => {
		if (count >= avaialbeCount) {
			return;
		}
		setCount((prevCont) => prevCont + 1);
	};

	const decrement = () => {
		setCount((prevCont) => prevCont - 1);
	};

	const addProductToCart = () => {
		let selectedProduct = product;
		if (isProductHasVariant) {
			selectedProduct = selectedProductVariant;
		}
		setAvaialbeCount(avaialbeCount - count);
		dispatch(
			addToCart({
				count,
				product: selectedProduct,
			}),
		);
	};
	useEffect(() => {
		console.log('avaialbeCount:-', avaialbeCount);
		if (isProductHasVariant && selectedProductVariant === null) {
			setCls(
				'text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:shadow-cart w-full md:w-6/12 xl:w-full bg-black focus-visible:outline-none focus:outline-none bg-gray-400 hover:bg-gray-400',
			);
		} else if (count > 0 && avaialbeCount > 0) {
			setCls(
				'text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:shadow-cart w-full md:w-6/12 xl:w-full bg-black',
			);
		}
	}, [isProductHasVariant, selectedProductVariant, count, avaialbeCount]);

	return (
		<div className="flex items-center space-s-4 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48 border-b border-gray-300 py-8">
			<div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
				<button
					onClick={decrement}
					className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading"
				>
					<MinusIcon className="w-4 h-4" />
				</button>
				<span className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24">
					{count}
				</span>
				<button
					onClick={increment}
					className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading"
				>
					<PlusIcon className="w-4 h-4" />
				</button>
			</div>
			<button onClick={addProductToCart} className={cls}>
				<span className="py-2 3xl:px-8">Add to cart</span>
			</button>
		</div>
	);
}
