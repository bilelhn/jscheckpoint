
// String Manipulation Functions -----------------

// 1 - Reverse a string -------------

        // let a="informatique";

        // function reverseString(str){
        //     let arr=str.split('');
        //     let newArr = [];
        //     for (let i = arr.length - 1; i >= 0; i--) {
        //         newArr.push(arr[i]);
        //     }  return newArr.join('');
        // } 
        // console.log(reverseString(a));


// 2 - Count caracters  --------------
        
        // let a="informatique";
        //  function countCaracters(str){
        //     let arr=str.split('');
        //     return arr.length;
        //  }
        //  console.log(countCaracters(a));


// 3 - Capitalise the first letter --------------

        // let a="informatique";
        // function capitaliseCaracters(str){
        //     let newArr = [];
        //     let arr=str.split('');
        //                 let firstCar = arr[0].toUpperCase();
        //                 arr.shift(arr[0]); 
        //                 let secArr = firstCar + arr.join('');;
        //                 newArr.push(secArr); 
           
        //      return newArr.join('');
        // }
        // console.log(capitaliseCaracters(a));




// Array Functions -------------------------

// 1 - Find Maximum and Minimum

    // let arr = [12, 2, 7, 0, 15, 3];

    // let max = arr[0];
    // let min = arr[0];

    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    //     if (arr[i] < min) {
    //         min = arr[i];
    //     }
    // }

    // console.log("Maximum:", max);
    // console.log("Minimum:", min);

// 2 - Sum of Array ------------
    // let arr = [12, 2, 7, 50, 15, 3];

    // function sumArray(array) {
    //     let sum = 0; 
    //     for (let i = 0; i < array.length; i++) {
    //         sum += array[i]; 
    //     }
    //     return sum;
    // }

    // console.log(sumArray(arr));


 // 3 - Filter Array (string) -----------
    // let arr = [12, 2, "a", 50, "bilel", 3];
    // function filterArray(array){
    //     let newArr=[];
    //     for(let i=0; i<array.length; i++){
    //         if(typeof array[i] === "string"){
    //             newArr.push(array[i]);
    //         }
    //     } return newArr
    // }
    // console.log(filterArray(arr));




//     Mathematical Functions ----------

// 1 - Factorial -------------
        // function fact(number){
        
        //         if (number === 0){
        //          return 1;
        //         }  return number * fact(number-1);
        // }
        // console.log(fact(3));

// 2 - Prime Number Check -----------
        // function primeNumber(number){
        //         if(number % 2 === 0){
        //                 return "this number is prime";
        //         }else return "this number is not prime"
        // }
        // console.log(primeNumber(5));
        // console.log(primeNumber(6));


// 3- Fibonacci  -------------
       
//        function fiboCalc(n){
//         if(n>=0 && n<=1){
//                 return n;
//         } return fiboCalc(n-1) + fiboCalc(n-2);
//        }
//        console.log(fiboCalc(18));