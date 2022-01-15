const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return "No primo";
  return n > 1 ? "Primo" : "No primo";
}

const isPair = n => n % 2 === 0 ? "Par" : "Impar";

const numberToArray = n => {
   const res = [];
   while(n){
      const last = n % 10;
      res.unshift(last);
      n = Math.floor(n / 10);
   };

   return res;
};

let n1 = 1, n2 = 1, nextTerm;

for (let i = 1; i <= 50; i++) {
  console.log(`${i}. ${numberToArray(n1)}, ${isPrime(n1)}, ${isPair(n1)}`);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
