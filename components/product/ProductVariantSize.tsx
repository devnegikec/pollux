import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {selectVariant} from '../../redux/productSlice';

export function ProductVariantSize({data, setCurrnetVaraint}) {
	const [selectedSize, setSelectedSize] = useState(null);
	const dispatch = useDispatch();

	const sizeSelector = (value) => {
		setSelectedSize(value);
		const selectdOption = {size: value};
		dispatch(selectVariant(selectdOption));
		setCurrnetVaraint((prev) => {
			return {...prev, ...selectdOption};
		});
	};

	return (
		<div className="mb-4">
			<ul className="colors flex flex-wrap -me-3">
				{data.map((value) => {
					const classValue = `cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black ${
						selectedSize === value ? 'border-black' : ''
					}`;
					return (
						<li onClick={() => sizeSelector(value)} className={classValue}>
							{value}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
