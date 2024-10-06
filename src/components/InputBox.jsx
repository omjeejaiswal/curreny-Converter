// import React, {useId} from 'react'

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectedCurrency = "usd",
//     amountDisabled = false,
//     currrencyDisabled = false,
//     className = "",
// }) {

//     const id = useId()
//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//         <div className='w-1-2'>
//             <label htmlFor={id}  className='text-black/40 mb-2 inline-block'>{label}</label>
//             <input 
//             id={id}
//             type="number"
//             className='outline-none w-full bg-transparent py-1.5'
//             placeholder='Amount'
//             disabled={amountDisabled}
//             value={amount}
//             onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//              />
//         </div>
//         <div className='w-1/2 flex flex-wrap justify-end text-right'>
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select 
//         className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
//         value={selectedCurrency}
//         onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
//         disabled={currrencyDisabled}
//         >
//             {currencyOptions.map((currency) => (
//                 <option key={currency} value={currency}>{currency}</option>
//             ))}
//         </select>
//         </div>
//     </div>
//   )
// }

// export default InputBox





// import React, { useId } from 'react';

// function InputBox({
//   label,
//   amount,
//   onAmountChange,
//   onCurrencyChange,
//   currencyOptions = [],
//   selectedCurrency = "usd",
//   amountDisabled = false,
//   currrencyDisabled = false,
//   className = "",
// }) {
//   const id = useId();

//   const handleAmountChange = (e) => {
//     const value = e.target.value;

//     // Allow empty input and prevent leading zeroes
//     if (value === "" || value.match(/^[1-9]\d*$/) || value === "0") {
//       onAmountChange && onAmountChange(value);
//     }
//   };

//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//       <div className='w-1-2'>
//         <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
//         <input 
//           id={id}
//           type="text"  // Change to text to handle zero and blank cases
//           className='outline-none w-full bg-transparent py-1.5'
//           placeholder='Amount'
//           disabled={amountDisabled}
//           value={amount}  // Keep it as string to handle leading zeroes
//           onChange={handleAmountChange}  // Use updated handler
//         />
//       </div>
//       <div className='w-1/2 flex flex-wrap justify-end text-right'>
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select 
//           className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
//           value={selectedCurrency}
//           onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
//           disabled={currrencyDisabled}
//         >
//           {currencyOptions.map((currency) => (
//             <option key={currency} value={currency}>{currency}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default InputBox;



import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currrencyDisabled = false,
  className = "",
}) {
  const id = useId();

  const handleAmountChange = (e) => {
    const value = e.target.value;

    // Check if the input is empty, if so, allow it
    if (value === "") {
      onAmountChange && onAmountChange("");
      return;
    }

    // Remove leading zeroes if a number is entered
    const newValue = value.replace(/^0+/, '');

    // Allow only digits (and potentially allow a decimal point)
    if (/^\d*\.?\d*$/.test(newValue)) {
      onAmountChange && onAmountChange(newValue);
    }
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1-2'>
        <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input 
          id={id}
          type="text"  // Use text to handle leading zeroes and decimals
          className='outline-none w-full bg-transparent py-1.5'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}  // Keep it as string to handle leading zeroes
          onChange={handleAmountChange}  // Use updated handler
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select 
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectedCurrency}
          onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
          disabled={currrencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
