const n = 0;

setTimeout(() => {
  console.log('FINISH');
}, 5000);

const promise = new Promise((resolve) => {
  resolve('Promise resolved');
});

promise.then(console.log);

const getCurrentTime = () => {
  return new Date();
};

console.log(getCurrentTime());

setTimeout(() => {
  console.log(3);
});

console.log(1);

const p = new Promise((resolve) => {
  resolve(console.log(2));
});

p.then(() => console.log(5));

console.log(4);
