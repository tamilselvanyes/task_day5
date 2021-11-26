//Implement in IIFE Function
//1. Print odd numbers in an array
var array_1 = [1,2,3,4,5,6];
var odd_array = [];
(function (){
    for(let i =0 ; i < array_1.length ; i++){
        if(array_1[i] % 2 !== 0){
            odd_array.push(array_1[i])
        }
    }
    console.log("odd numbers are " + odd_array.join(' '));
})();

//2. Convert all the strings to title caps in a string array
var array_2 = ["a","b","c","d","e","f"];
var caps_array =[];
(function (){
    for(let i =0 ; i < array_2.length ; i++){
            caps_array.push(array_2[i].toUpperCase())
    }
    console.log("Caps letters are "+ caps_array.join(' '));
})();


// 3. Sum of all numbers in an array
var array_3 = [1,2,3,4,5,6,7,8,9];
var sum =0;
(function (){
    for(let i =0 ; i < array_3.length ; i++){
            sum += array_3[i]
    }
    console.log("sum of the array " +sum);
}) ();

//4. Return all the prime numbers in an array
var array_4 = [1,2,3,4,5,6,7,8,9];
var prime_number = [];
(function (){
    for(let i =0 ; i < array_4.length ; i++){
        var isprime = true;
        // 1 neither prime not composite
        if(array_4[i] === 1){
            continue;
        }
        for(let j = 2 ; j < array_4[i]; j++){
            if (array_4[i] % j == 0) {
                isprime = false;
                break;
            }
        }
        if(isprime){
            prime_number.push(array_4[i])
        }
    }
    console.log("prime number: "+ prime_number);
})();



//5. Return all the palindromes in an array
var array_5 = ["tamil" , "malayalam" , "madam" , "banana"];
var palindrome = [];
(function (){
    for(let i =0 ; i< array_5.length ; i++){
        var arrayletters = array_5[i].split('');
        var reverseArrayletters = arrayletters.reverse();
        var reverseString = reverseArrayletters.join('');
    
        if(array_5[i] == reverseString) {
            palindrome.push(array_5[i])
        }
    }
    console.log("Palindrome words are   "+ palindrome);
})();


//6. Return median of two sorted arrays of same size
var array_6 = [10,11,24,28,40];
var array_7 = [1,2,3,4,5];
(function(){
    let compare =(i , j) => {
        return i-j;
    }
    let combinedArray = array_6.concat(array_7).sort(compare);
    let totalLength = combinedArray.length;
    if(totalLength % 2 === 0){
        console.log("median value is   "+ (combinedArray[(totalLength/2 -1)] + combinedArray [totalLength/2] ) /2);
    }else{
        console.log("median value is   "+ combinedArray[ Math.floor(totalLength / 2)]);
    }
})();


//7 .Remove duplicates from an array
var array_8 = [1,5,6,3,4,2,1,6,1,4,5,8,7,11];
var non_duplicate_array =[];
(function () {
    for(let i =0 ; i < array_8.length ; i++ ) {
        if(!non_duplicate_array.includes(array_8[i])){
            non_duplicate_array.push(array_8[i])
        }
    }
    function compare(i, j) {
        return i - j;
    }
    console.log("Non duplicate Array "+non_duplicate_array.sort(compare))
})();




// 8. Rotate an array by k times

var array_9 = [1,2,3,4,5,6,7,8,9];
var number_of_time = 4; //This will be input for eg choosen 4
(function (){
    for(let i = 1 ; i <= number_of_time ; i++){
            let last = array_9.pop();
            array_9.unshift(last);
        }
        console.log("Rotated array  " + array_9);
    })();
