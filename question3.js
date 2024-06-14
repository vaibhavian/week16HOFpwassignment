
const inventoryUSD = {
    "apple": 2.5,
    "banana": 1.5,
    "orange": 3,
    "mango": 4,
    "grapes": 5
};


function convertToINR(priceUSD) {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
}


const inventoryINR = Object.fromEntries(
    Object.entries(inventoryUSD).map(([item, priceUSD]) => {
        return [item, convertToINR(priceUSD)];
    })
);


console.log("Converted Inventory (in INR):", inventoryINR);
