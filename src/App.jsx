


// import { useState } from 'react';
// import './App.css';
// import useCurrencyInfo from './hooks/useCurrencyInfo';
// import { InputBox } from './components/index.js';

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState('usd');
//   const [to, setTo] = useState('inr');
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const currencyInfo = useCurrencyInfo(); // Fetches all currency data
//   const options = Object.keys(currencyInfo); // Extracting available currency codes

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConvertedAmount(amount);
//     setAmount(convertedAmount);
//   };

//   const convert = () => {
//     // Check if the data is available before trying to calculate
//     if (currencyInfo[from] && currencyInfo[to]) {
//       const rate = currencyInfo[to].value / currencyInfo[from].value;
//       setConvertedAmount(amount * rate);
//     }
//   };

//   return (
//     <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{ backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form onSubmit={(e) => {
//             e.preventDefault();
//             convert();
//           }}>
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options} // Pass available currency options
//                 onCurrencyChange={(currency) => setFrom(currency)}
//                 onAmountChange={(amount) => setAmount(amount)}
//                 selectedCurrency={from}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >Swap</button>
//             </div>
//             <div className="w-full mb-1">
//               <InputBox
//                 label="To"
//                 currencyOptions={options} // Pass available currency options
//                 amount={convertedAmount}
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 selectedCurrency={to}
//                 amountDisabled
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//             >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;








// import { useState } from 'react';
// import './App.css';
// import useCurrencyInfo from './hooks/useCurrencyInfo';
// import { InputBox } from './components/index.js';

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState('usd');
//   const [to, setTo] = useState('inr');
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const currencyInfo = useCurrencyInfo(); // Fetches all currency data
//   const options = Object.keys(currencyInfo); // Extracting available currency codes

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConvertedAmount(amount);
//     setAmount(convertedAmount);
//   };

//   const convert = () => {
//     // Check if the data is available before trying to calculate
//     if (currencyInfo[from] && currencyInfo[to]) {
//       const rate = currencyInfo[to].value / currencyInfo[from].value;
//       setConvertedAmount(amount * rate);
//     }
//   };

//   return (
//     <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{ backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form onSubmit={(e) => {
//             e.preventDefault();
//             convert();
//           }}>
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options} // Pass available currency options
//                 onCurrencyChange={(currency) => setFrom(currency)}
//                 onAmountChange={(amount) => setAmount(amount)}
//                 selectedCurrency={from}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >Swap</button>
//             </div>
//             <div className="w-full mb-1">
//               <InputBox
//                 label="To"
//                 currencyOptions={options} // Pass available currency options
//                 amount={convertedAmount}
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 selectedCurrency={to}
//                 amountDisabled
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//               {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`} {/* Dynamic button label */}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components/index.js';

function App() {
  // Setting default values for 'from' and 'to'
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd'); // Default 'from' value is 'USD'
  const [to, setTo] = useState('inr'); // Default 'to' value is 'INR'
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(); // Fetch all currency data
  const options = Object.keys(currencyInfo); // Extract available currency codes

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    // Check if the data is available before trying to calculate
    if (currencyInfo[from] && currencyInfo[to]) {
      const rate = currencyInfo[to].value / currencyInfo[from].value;
      setConvertedAmount(amount * rate);
    }
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            {/* From InputBox */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options} // Pass available currency options
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from} // Set 'usd' as the default
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* To InputBox */}
            <div className="w-full mb-1">
              <InputBox
                label="To"
                currencyOptions={options} // Pass available currency options
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to} // Set 'inr' as the default
                amountDisabled
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`} {/* Dynamic button label */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
