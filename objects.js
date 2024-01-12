// Objects
let product1 = {
  type: "Bike",
  model: "Royal-Enfield",
  price: 250,
  passenger: 2,
};

// Array of Objects
let products = [
  {
    type: "Bike",
    model: "Royal-Enfield",
    price: 250,
    passenger: 2,
    id: 1001,
  },
  {
    type: "Car",
    model: "Tesla",
    price: 2000,
    passenger: 5,
    id: 1002,
  },
  {
    type: "Bus",
    model: "Volvo",
    price: 35000,
    passenger: 60,
    id: 1003,
  },
  {
    type: "Flight",
    model: "Boeing-747",
    price: 75000,
    passenger: 300,
    id: 1004,
  },
  {
    type: "Train",
    model: "Vande-Bharat",
    price: 75000,
    passenger: 1000,
    id: 1005,
  },
];

products.forEach((p) =>
    console.log(`Transport Type: ${p.type}
Vehicle Model: ${p.model}
Ticket Cost: ${p.price}
Total Tickets: ${p.quantity}
`)
);

console.log(products.filter((p) => p.price === 75000));
console.log(products.filter((p) => p.model.includes("Tesla")));

const searchByType = (searchType) => {
  return products.filter((p) => p.type.includes(searchType));
};

const searchByModel = (searchModel) => {
  return products.filter((p) => p.model.includes(searchModel));
};

const searchByPrice = (searchPrice) => {
  return products.filter((p) => p.price === searchPrice);
};

const searchByPassenger = (searchPassenger) => {
  return products.filter((p) => p.quantity === searchPassenger);
};

const searchById = (searchID) => {
  return products.find((p) => p.id === searchID);
};

console.log(searchByType("Bus"));
console.log(searchByModel("Tesla"));
console.log(searchByPrice(75000));
console.log(searchByPassenger(1000));

console.log(searchById(1001));


const calculateTotal = () => {
    return products.reduce((total, p) => total+(p.price*p.quantity), 0);
}

console.log("Total: " + calculateTotal());
