// function checkForProperty(object, property) {
//   return object.hasOwnProperty(property);
// }

// console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'top')); // true
// console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle')); // false

// const bien = [
//     {
//         "ocean" : {
//             "nuob bien":"xnah duong", 
//             "dienj tich" : "100k",
//             "su da dang" : 1000,
//             "loai vat": {
//                 "ca sau":false,
//                 "shark": {
//                     "ca map trang":"30kg",
//                     "ca map ho": "50kg"
//                 },
//                 "do sau" : ["20km, 100km"],
//             },
//             "nang tien ca":true
//         },
//     }, 

//     {
//         "an do duong":{
//             "nuoc bien": "xanh lam",
//             "dien tich": "10km",
//             "su da dang": {
//                 "nui lua":true,
//                 "ghost": true,
//             }
//         }
//     }
// ]

// console.log(bien[0].ocean["loai vat"].shark["ca map ho"])



// const myMusic = [
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     }
//   ];

// console.log(myMusic[0].formats[2])


// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
  
//     if (value === "") {
//       delete records[id][prop];
//     } else if (prop !== "tracks" && value !== "") {
//       records[id][prop] = value
//     } else if (prop === "tracks" && value !== "") {
//        if (records[id].hasOwnProperty("tracks") === false) {
//          records[id][prop] = [];
//        } 
//          records[id][prop].push(value)
//     } 
  
//     return records;
//   }
  
// console.log(updateRecords(recordCollection, 5439, 'tracks', 'tam'));


// function multiplyAll(arr) {
//   let product = 1;
  
//   for (let i = 0; i < arr.length; i ++) { // 0 1 2
//     for ( let j = 0; j < arr[i].length; j ++) {      //    01 01 012
//         console.log(product *= arr[i][j]) // 2 * 3 * 4 * 5 * 6 * 7
//     }
//   }

//   return product;
// }

// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));  // 1 * 2 * 3 * 4 * 5 * 6 * 7 


// function multiply(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return multiply(arr, n - 1 ) + arr[n-1];    
//   }
// }

// console.log(multiply([2, 3, 4], 1)) ; 
// console.log(multiply([2, 3, 4, 5], 4)) 
// ([2, 3, 4, 5], 0) = 0, 
// ([2, 3, 4, 5], 1) => ([2, 3, 4, 5], 0) + 2 =>    2
// ([2, 3, 4, 5], 2) => ([2, 3, 4, 5], 1) + 3 =>    5                         
// ([2, 3, 4, 5], 3) => ([2, 3, 4, 5], 2) + 4 =>    9
// ([2, 3, 4, 5], 4) => ([2, 3, 4, 5], 3) + 5 =>    14



// var result = [];
// let i = 0;
// while (i < 5) {
//   i++;
//   result.push(i);
// }

// console.log(result)

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr)


// function myTest() {
//     const loc = "foo";
//     console.log(loc);
//   }
  
//   myTest();
//   console.log(loc); ////// it not worked
// function myLocalScope() {

//     let myVar = "myVar is not defined"
//       console.log('inside myLocalScope', myVar);
//     }
//     myLocalScope();
    
    
//     console.log('outside myLocalScope', myVar);

// function myFun() {
//     console.log("Hello");
//     return "World";
//     console.log("byebye")
//   }
// console.log(myFun())



// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   function updateRecords(records, id, prop, value) {
    
//         if (value == "") {
//            delete records[id][prop];
//         }
//         else if (prop == "tracks") {
//             records[id].hasOwnProperty("tracks") || [];
//             records[id][prop].push(value)
//         } else {
//             records[id][prop] = value
//         }


//     return records;
//   }

// console.log(recordCollection, 2548, "tracks", "")


// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return []
//   }
//   else {
//     const total = rangeOfNumbers(Math.floor(Math.random() * (endNum - startNum + 1))) - startNum;
//     total.push(endNum)
//     return total
//   }
// };
// console.log(rangeOfNumbers(1, 5))


// const object1 = {
//     text: "hello world",
// };
// const object2 = object1; /////////////   object chúng ta set nó = object 1
// console.log(object2 === object1); ///// chúng chỉ so sánh tham số(references) chứ không so sánh giá trị bên trong

// const object3 = {
//     text: "hello world",   //// object3 có cùng nội dung với object 1 nhưng không false, vì như đã nói trên, chúng chỉ so sánh tham số, muốn để object 3 === object 1 thì phải là như bước trên.
// };
// console.log(object3 === object1) 



// const object100 = {
//     text: "toi yeu ban",
//     number: 278,
// };
// // shortcut 
// let {text, number} = object100;
// console.log(text, number)

// // short hand
// const object99 = {
//     text: text,   // thuộc tính tên text và biến text được tạo ra ở phía trên
//    // text // nếu thuộc tính và tên biến giống nhau
// };
// console.log(text)


// const object = {
//     message: function name() {
//         console.log("hello world");
//     },
// };

// object.message() ////  kết quả là hello world;

// // shorthand
// const object0 = {
//     message() {   // không cần đặt function như phía trên 
//         console.log("bye world");
//     }
// };
// object0.message()


// function tam(str, num) {
//     return str.repeat(num) 
// }

// console.log(tam("tam", 3))


// const myArray = [100, 20, 30, 40];
// myArray.splice(1, 3)
// console.log(myArray)

// let random = 0;
// while (random < 0.5) {
//     random = Math.random()
// };
// console.log(random)

// const food = {

// }
// function countWords(words) {
//     for (let i = 0; i < words.length; i ++) { //// 0 1 2 3
//         if (food[words[i]] === undefined) {
//             food[words[i]] = 1;
//         }
//        else {
//         food[words[i]] += 1
//        }
//     }
//     return food 
// }

// console.log(countWords(["apple", "grape", "apple", "apple", "banana", "banana"]))
// function findIndex(array, word) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === word) {
//         return i;
//       }
//     }

//     return -1;
//   };
// //////////////////
//   function unique(array) {
//     const result = [];

//     for (let i = 0; i < array.length; i++) {
//       const word = array[i];
//       if (findIndex(result, word) === -1) {
//         result.push(word);
//       }
//     }

//     return result;
//   }

//   console.log(unique(['green', 'red', 'blue', 'red']));
//   console.log(unique(['red', 'green', 'green', 'red']));

// const minhtam = {
//   tuoi: 23,
//   "nghe nghiep": "lap trinh vien frontend",
//   fun: function () {
//     return "huynh minh tam"
//   }
// }
// console.log(minhtam.fun())
// console.log(minhtam.tuoi)
// console.log(minhtam["nghe nghiep"])


// function nameT(param) {
//     param()
// }
// nameT(function () {
//   console.log("hello world")
// })




///////////////// add không trả về một giá trị, nó chỉ in ra thôi
// const add = function () {
//   console.log(2 + 3)
// }
// function runTwice(fun) {
//   fun();
//   fun()
// }
// runTwice(function() {
//   console.log("12b")
// })
// runTwice(add)         /////////// add ở đây không cần ()



// console.log([1, 3, 3].map((value, index) => {
//   return value * 2;
// }))
// console.log([3, 5, 6].filter(value => value > 4))  //// shorthand


// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     const failureItems = [];
//     for (let i = 0; i < arr.length; i++) {
//        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
//     };
  
//     return failureItems;
//   };
  
//   const failuresList = makeList(result.failure);
//   console.log(failuresList)


  // const bicycle = {
  //   gear: 2,
  //   setGear(newGear)  {
  //     this.gear = newGear;
  //   }
  // };
  // // Only change code above this line
  // bicycle.setGear(3);
  // console.log(bicycle.gear);

//   var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( let i of Object.keys(clothingItem) ) {
//     console.log(i, clothingItem[i] )
// }



// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");
// console.log(bestBoxers);


// const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
// const tam = new Set(repetitiveFruits);
// console.log(tam)


// function addTaxToPrice(taxRate, ...itemsBought) {
//   return itemsBought.map(item => item * taxRate)
// }

// let shoppingcart = addTaxToPrice(1.1, 46, 89, 35, 79);
// console.log(shoppingcart)


// const meal = ["soup", "steak", "ice cream"]
// let [starter] = meal;
// console.log(starter);


// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce((accumulator, currentValue, index) => {
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}`);
//     return accumulator + currentValue;
// }, 0);

// console.log(result)


// const drinks = [
//   {tea: {
//     part: 'leaf',
//     caffeine: '15–70 mg/cup',
//     age: '4,000+ years'
//   }},
//   {coffee: {
//     part: 'bean',
//     caffeine: '80–185 mg/cup',
//     age: '1,000+ years'
//   }}
// ];

// // const food = drinks.flatMap((drink) =>  {return [drink[Object.keys(drink)].part, drink[Object.keys(drink)].age]})
// const food = drinks.flatMap((drink) =>  {return [Object.values(drink)[0].part, Object.values(drink)[0].age]})
// console.log(food)



// function handle(cb) {
//   return cb()
// }
// class Cat {
//   constructor(name, color, type) {
//     this.name = name
//     this.color = color
//     this.type = type
      // this.meow = this.meow.bind(this)
//   }

//   meow() {
//     console.log(`${this.name} meows: meow meow meow!`)
//   }

//   run() {
//     this.meow()
        // handle(this.meow)
//   }
// }

// let value = new Cat('Alex', 'Yellow', 'Bengal')

// // Lỗi vì giá trị của this phụ thuộc vào ngữ cảnh lúc run-time. Lúc này this nó là undefined
// value.run() // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
// value.meow()


// function findNumber(number, callback) {
//   const result = []
//   for (let i = 0; i <= number; i++) {
//     if (callback(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// function isEven(i) {
//   return i % 2 === 0;
// }

// console.log(findNumber(20, isEven));



// const func = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello minh tam")
//   }, 1000);
// })

// const newVar = func().then((value) => {
//   console.log(value)
//   return 100
// }).catch((value) => {
//   console.log(value)
// })

// newVar.then((value) => {
//   console.log(value)
// })



// const p2func = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("tam")
//   }, 1000);
// })

// async function handle() {
//     try {
//       const value = await p2func()
//       console.log(value)
//     } catch (err) {
//       console.log(err)
//     }
// }

// handle()

const data = {
  name: "tam",
  number: 20,
  ny: "yen"
}

const {name} = data

[nameName] = "hello world"