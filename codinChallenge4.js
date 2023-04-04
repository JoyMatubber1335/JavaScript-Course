
const bill=275;
// consol.log(`${(bill>=50 && bill<=300)? '15':'20' }  is the ans `)
const tip  =bill>=50 && bill<=300 ? 15 :20;
console.log(tip);

const totalBill= bill+((bill*tip)/100);
console.log(totalBill);

 
