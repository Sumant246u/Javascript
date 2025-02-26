//Reduce method
const myNums=[1,2,3,4]

//  const myTotal=myNums.reduce(function (accumulator,currval) {
//     console.log(`accumulator:${accumulator} and currval: ${currval}`);
//     return accumulator +  currval
//  },0)

 //write reduce in Arrow function
 const myTotal=myNums.reduce( (acc,curr)=> acc+ curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:'Js course',
        price:2999
    },
    {
        itemName:'python course',
        price:299
    },
    {
        itemName:'mob dev course',
        price:5999
    },
    {
        itemName:'data science course',
        price:12999
    },
]

 const pricetopay=shoppingCart.reduce( (acc,item)=> acc + item.
 price,0)
 console.log(pricetopay);
 
