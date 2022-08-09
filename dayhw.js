//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i=0; i<dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            console.log(`Matched ${dog_names[i]}`)
        }else{
            console.log("No Matches")
        }
    }
} 
findWords()

//==================Exercise #2 ==========//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(){
    for(let i=0; i<arr.length; i++){
        if(i%2==0){
            arr.splice(i,1,"even index")
        }
    }
    console.log(arr)
}
replaceEvens()

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// 1. Write a function to print "hello_USERNAME!" USERNAME is the input of the function.
function helloUser(name){
    console.log(`hello_${name}!`)
}
helloUser("Jody")

// 2. Write a JavaScript function, 
// first_odds that prints the odd numbers from 1-100 and returns nothing
function firstOdds(){
    for(let i=1; i<=100; i++){
        if(i%2==1){
            console.log(i)
        }
    }
}
firstOdds()

//3. Please write a Python function, max_num_in_list to return the max number of a given list
function maxNumInList(list){
    let max = list[0]
    for(let i=0; i<list.length; i++){
        if(list[i]>max){
            max = list[i]
        }
    }
    return max
}
console.log(maxNumInList([112,24,3,404,5,694,750,800,925,100]))

// 4. Write a function to return if the given year is a leap year. A leap year is
// divisible by 4, but not divisible by 100, unless it is also divisible by 400. 
// The return should be boolean Type (true/false).
function leapYear(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true
    }else{
        return false
    }
}
console.log(leapYear(1912))

// 5. Write a function to check to see if all numbers in list are consecutive numbers. 
// For example, [2,3,4,5,6,7] are consecutive numbers, but [1,2,4,5] are not consecutive numbers. 
// The return should be boolean Type.
function consecutive(list){
    for(let i=0; i<list.length; i++){
        if(list[i]!=list[i+1]-1){
            return false
        }
    }
    return true
}
console.log(consecutive([2,3,4,5,6,7]))
console.log(consecutive([1,2,4,5]))