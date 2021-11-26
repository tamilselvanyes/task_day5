//Implement in Anonymous Function
//1. Print odd numbers in an array
var array_1 = [1,2,3,4,5,6];
var odd_array = [];
var odd_numbersArray = function (a){
    for(let i =0 ; i < a.length ; i++){
        if(a[i] % 2 !== 0){
            odd_array.push(a[i])
        }
    }
    return odd_array;
}
console.log("odd numbers are" + odd_numbersArray(array_1).join(' '));

//2. Convert all the strings to title caps in a string array
var array_2 = ["a","b","c","d","e","f"];
var caps_array =[];
var caps_lettersArray = function (a){
    for(let i =0 ; i < a.length ; i++){
            caps_array.push(a[i].toUpperCase())
    }
    return caps_array;
}
console.log("Caps letters are "+ caps_lettersArray(array_2).join(' '));

// 3. Sum of all numbers in an array
var array_3 = [1,2,3,4,5,6,7,8,9];
var sum =0;
var sum_of_array = function (a){
    for(let i =0 ; i < a.length ; i++){
            sum += a[i]
    }
    return sum;
}
console.log("sum of the array " +sum_of_array(array_3));

//4. Return all the prime numbers in an array
var array_4 = [1,2,3,4,5,6,7,8,9];
var prime_number = [];
var prime_number_array = function (a){
    for(let i =0 ; i < a.length ; i++){
        var isprime = true;
        // 1 neither prime not composite
        if(a[i] === 1){
            continue;
        }
        for(let j = 2 ; j < a[i]; j++){
            if (a[i] % j == 0) {
                isprime = false;
                break;
            }
        }
        if(isprime){
            prime_number.push(a[i])
        }
    }
    return prime_number;
}
console.log("prime number: "+ prime_number_array(array_4));


//5. Return all the palindromes in an array
var array_5 = ["tamil" , "malayalam" , "madam" , "banana"];
var palindrome = [];
var Palindrome_Array = function (a){
    for(let i =0 ; i< a.length ; i++){
        var arrayletters = a[i].split('');
        var reverseArrayletters = arrayletters.reverse();
        var reverseString = reverseArrayletters.join('');
    
        if(a[i] == reverseString) {
            palindrome.push(a[i])
        }
    }
    return palindrome;
}
console.log("Palindrome words are   "+ Palindrome_Array(array_5));

//6. Return median of two sorted arrays of same size
var array_6 = [10,11,24,28,40];
var array_7 = [1,2,3,4,5]
var findMedianofArrays = function(a,b){
    let compare =(i , j) => {
        return i-j;
    }
    let combinedArray = array_6.concat(array_7).sort(compare);
    let totalLength = combinedArray.length;
    if(totalLength % 2 === 0){
        return (combinedArray[(totalLength/2 -1)] + combinedArray [totalLength/2] ) /2;
    }else{
        return combinedArray[ Math.floor(totalLength / 2)];
    }
}
console.log("median value is   "+ findMedianofArrays(array_6 , array_7 ));

//7 .Remove duplicates from an array
var array_8 = [1,5,6,3,4,2,1,6,1,4,5,8,7,11];
var non_duplicate_array =[];
var remove_DuplicateArray = function (a) {
    for(let i =0 ; i < a.length ; i++ ) {
        if(!non_duplicate_array.includes(a[i])){
            non_duplicate_array.push(a[i])
        }
    }
    function compare(i, j) {
        return i - j;
    }
    return non_duplicate_array.sort(compare);
}
console.log("Non duplicate Array "+remove_DuplicateArray(array_8))



// 8. Rotate an array by k times

var array_9 = [1,2,3,4,5,6,7,8,9];
var roatatedArray =[];
var number_of_time = 4; //This will be input for eg choosen 4
var getRoatedArray = function (a){
    for(let i = 1 ; i <= number_of_time ; i++){
            let last = a.pop();
            a.unshift(last);
        }
        return a;
    }
console.log("Rotated array" + getRoatedArray(array_9));