const coding=["js","rb","py","java","cpp"]

// const value=coding.forEach( (item)=>{
//     console.log(item);
//     return item
    
// })
// console.log(value);

// Filter Method
const mynums=[1,2,3,4,5,6,7,8,9,10]

//  const newnums=mynums.filter( (num)=> num > 4)
//  console.log(newnums);

//ANother way
// const newnums=mynums.filter( (num)=>{
//     return num > 4  
// })

//we can use forEach

// const newnums=[]
// mynums.forEach( (num)=>{
//     if (num > 4) {
//         newnums.push(num)
        
//     }
// })
// console.log(newnums);


const books=[
    {title:'Book one', genere:'Fiction',publish:1981,
    edition:2004},
    {title:'Book two', genere:' Non-Fiction',publish:1992,
    edition:2008},
    {title:'Book three', genere:'history',publish:1999,
    edition:2005},
    {title:'Book four', genere:'Non-Fiction',publish:1989,
    edition:2010},
    {title:'Book five', genere:'science',publish:2009,
    edition:2014},
    {title:'Book six', genere:'Fiction',publish:1987,
    edition:2010},
    {title:'Book seven', genere:'history',publish:1986,
    edition:1996},
];

// let  userBooks=books.filter( (bk)=> bk.genere==="history")
 userBooks=books.filter( (bk)=>{
    return bk.publish >= 1981 && bk.genere==="science"})
console.log(userBooks);

 