// import { useEffect, useState } from "react";


// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({})

//     useEffect(() => {
//         fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_UFMaAJsAD9Vtxe9uUlbr4jMucbZhfzGA9VHTX6Yx/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])

//     console.log(data)
//     return data
// }

// export default useCurrencyInfo;




// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_UFMaAJsAD9Vtxe9uUlbr4jMucbZhfzGA9VHTX6Yx&currencies=${currency}`)
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return res.json();
//             })
//             .then((res) => {
//                 setData(res.data[currency]);
//                 console.log("Fetched data: ", res.data[currency]);
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     }, [currency]);

//     console.log("Current state data: ", data);
//     return data;
// }

// export default useCurrencyInfo;




// import { useEffect, useState } from "react";

// function useCurrencyInfo() {
//     const [data, setData] = useState({});
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_UFMaAJsAD9Vtxe9uUlbr4jMucbZhfzGA9VHTX6Yx`)
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return res.json();
//             })
//             .then((res) => {
//                 setData(res.data);
//                 console.log("Fetched data: ", res.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setError(error);
//             });
//     }, []);

//     if (error) {
//         return { error };
//     }

//     return data;
// }

// export default useCurrencyInfo;






import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetching all currencies instead of just one
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_UFMaAJsAD9Vtxe9uUlbr4jMucbZhfzGA9VHTX6Yx`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((res) => {
                setData(res.data);
                console.log("Fetched data: ", res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(error);
            });
    }, []);

    if (error) {
        return { error };
    }

    return data;
}

export default useCurrencyInfo;


// 