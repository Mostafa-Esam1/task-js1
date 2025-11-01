// let name = prompt('what is your name');
// let year = prompt('enter your year');
// let thisYear = 2025;
// let age = thisYear - year;

// console.log('welcom '  +  name  + ' your age is : '  + age) ;

let orginPricee = +prompt('ادخل مبلغ الميراث  المراد توزيعه');
let boys = +prompt('كم عدد الاولاد');
let girls = +prompt('كم عدد البنات');
console.log('عدد الاولاد هو : ' + boys);
console.log('عد البنات هو : ' + girls);
let wife = orginPricee * (1/8);
console.log(' ميراث الزوجه : ' + wife);
 let originPriceAferWife = orginPricee - wife ;
 console.log('المبلغ المتبقي بعد نصيب الزوجه من الميراث : ' + originPriceAferWife );
 let boysShares = boys * 2;
 let girlsShares = girls * 1;
let totalShares = boysShares + girlsShares;
let totalPrice = originPriceAferWife / totalShares ;
console.log(totalPrice);
let finalPriceBoys = totalPrice * 2 ;
let  finalPriceGirls = totalPrice * 1;
console.log("نصيب كل ولد هو : " + finalPriceBoys );
console.log('نصيب كل بنت هو :' +finalPriceGirls );
