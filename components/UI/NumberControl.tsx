import {MinusIcon, PlusIcon} from '@heroicons/react/24/outline';
import {useState} from 'react';
export function NumberControl({title, max, min}) {
	const [inputValue, setInputValue] = useState(min);
	const handleInputChange = (e) => {
		setInputValue(Number(e.target.value));
	};
	return (
		<div className="custom-number-input h-10 w-32">
			<label className="w-full text-gray-700 text-sm font-semibold">
				{title}
			</label>
			<div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
				<button
					onClick={() => setInputValue((prev) => prev - 1)}
					className="border text-gray-600 hover:text-gray-700 cursor-pointer"
				>
					<MinusIcon className="w-4 h-4" />
				</button>
				<input
					type="number"
					className="focus:outline-none text-center w-full bg-[#cac7c7] font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
					name="custom-input-number"
					value={inputValue}
					onChange={handleInputChange}
					min={min}
					max={max}
				></input>
				<button
					onClick={() => setInputValue((prev) => prev + 1)}
					className="border text-gray-600 hover:text-gray-700 cursor-pointer"
				>
					<PlusIcon className="w-4 h-4" />
				</button>
			</div>
		</div>
	);
}

{
	/* <style>
      input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }
</style> */
}
