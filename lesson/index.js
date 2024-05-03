console.log('Objects! Objects everywhere!');

const obj = {
  key1: 'value1',
  key2: 2,
  key3: false,
  key4: {
    id: 'child-0',
  },
  key5: () => {},
};

const list = [
  {
    id: 'milk-0',
    name: 'Domik',
    price: '199',
  },
  {
    id: 'bread-0',
    name: 'Karusel',
    price: '59',
  },
  {
    id: 'juice-0',
    name: 'J7',
    price: '300',
  },
];

const findProductId = 'bread-0';

const cart = list.find((product) => product.id === findProductId);

// console.log(cart);

const productDictionary = list.reduce((acc, product) => {
  const { id } = product;
  acc[id] = product;

  return acc;
}, {});

// console.log(productDictionary);

const keys = Object.keys(productDictionary);
// console.log(keys);

const values = Object.values(productDictionary);
// console.log(values);

const entries = Object.entries(productDictionary);
// console.log(entries);

// console.log(productDictionary[findProductId].price);

const item = {
  id: 0,
  name: 'Pepe',
};

const { id, name } = item;
const [brand, price] = ['Drio', 15];

// console.log(brand, price);

// console.log(id);
// console.log(name);

const prices = list.map(({ id, price }) => {
  return { id, price };
});

// console.log(prices);

const newProduct = {
  id: 'orange-0',
  name: 'Sweet orange',
  price: '30',
};

const updatedCart = { ...productDictionary, [newProduct.id]: newProduct };

// console.log(updatedCart);

const manyNewItemsCart = [
  {
    id: 'orange-0',
    name: 'Sweet orange',
    price: '30',
  },
  {
    id: 'apple-0',
    name: 'Sweet appel',
    price: '20',
  },
  {
    id: 'banana-0',
    name: 'Sweet banana',
    price: '70',
  },
];

const updatedCart1 = manyNewItemsCart.reduce(
  (acc, product) => {
    // console.log('ACC:', acc);

    const updatedAcc = { ...acc, [product.id]: product };

    // console.log('Updated ACC:', updatedAcc);

    return updatedAcc;
  },
  { ...productDictionary }
);

// console.log('updatedCart1', updatedCart1);

const car = {
  wheels: 4,
  brand: 'Ford',
  name: 'Mondeo',
  abs: true,
  chairs: {
    massage: true,
    material: 'leather',
  },
};

const options = {
  music: true,
  esp: true,
  abs: true,
};

const newCar = Object.assign({}, car, { abs: false }, options);
const newCarSpread = { ...car, abs: false, ...options };

// console.log(newCar);
// console.log(newCarSpread);

Object.freeze(car);

Object.defineProperty(car, 'chairs', {
  massage: true,
  material: 'leather',
});

car.chairs = false;

console.log(car);
