// proble 3 
const numbers = [2,3,5,1,4,6,7,9,8,10,20,19,18,16,17,11,12,13,15,14];
numbers.sort((a, b) => a - b);

console.log(numbers);



// problem 5
var result = []
for(let i=1; i<=50; i++){
    if (i%3 == 0 || i%5 == 0){
        result.push(i);
    }
}

console.log(result)

// problem 6
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var result = friends[0];
for (let i=0; i<friends.length; i++){
    // console.log(friends[i].length);
    if(friends[i].length > result.length ){
        result = friends[i]
    }
}

console.log(result)

// problem 7
var numbersArr = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var newNumbers = new Set(numbersArr);
console.log(...newNumbers);
// problem 8
var maxNumber = Math.max(...numbersArr);
console.log(maxNumber)


// problem 8 

var payments = [1000,2000,2500] ;
var living_cost =  5000 ;

function monthlySavings(incomes, cost){
    console.log(incomes, cost);
    let total_income = 0
    let tax = 0
    incomes.forEach(income => {
        total_income += income
        if(income > 3000){
            const calculated_tax = income * 0.2
            tax += calculated_tax
        }
    });

    const savings = total_income - (tax + cost)

    if(savings <= 0){
        console.log("Earn more")
    }
    console.log(savings);
}


monthlySavings(payments,living_cost)