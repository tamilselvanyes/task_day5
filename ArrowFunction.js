//Implement in Anonymous Function
//1. Print odd numbers in an array
var array_1 = [1,2,3,4,5,6];
var odd_array = [];
var odd_numbersArray =  (a) =>{
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
var caps_lettersArray = (a) => {
    for(let i =0 ; i < a.length ; i++){
            caps_array.push(a[i].toUpperCase())
    }
    return caps_array;
}
console.log("Caps letters are "+ caps_lettersArray(array_2).join(' '));

// 3. Sum of all numbers in an array
var array_3 = [1,2,3,4,5,6,7,8,9];
var sum =0;
var sum_of_array =(a) => {
    for(let i =0 ; i < a.length ; i++){
            sum += a[i]
    }
    return sum;
}
console.log("sum of the array " +sum_of_array(array_3));

//4. Return all the prime numbers in an array
var array_4 = [1,2,3,4,5,6,7,8,9];
var prime_number = [];
var prime_number_array = (a) => {
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
var Palindrome_Array = (a) => {
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

// Output:
// odd numbers are1 3 5
// Caps letters are A B C D E F
// sum of the array 45
// prime number: 2,3,5,7
// Palindrome words are   malayalam,madam
