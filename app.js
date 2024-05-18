// grading system
document.getElementById("submitbtn").addEventListener(
    "click" , (event) =>{
        const marksValue = document.getElementById("marks").value;
        const finalResult = document.getElementById("result");
        const p = document.createElement("p");
        console.log("fdafasdfa")
        p.innerHTML = "";

        if (marksValue >= 80 && marksValue <= 100) {
            p.innerHTML = "Congratulations😊. You get A+";
        } else if (marksValue >= 70 && marksValue < 80) {
            p.innerHTML = "Congratulations😊. You get A";
        } else if (marksValue >= 60 && marksValue < 70) {
            p.innerHTML = "Congratulations😊. You get A-";
        } else if (marksValue >= 50 && marksValue < 60) {
            p.innerHTML = "You get B";
        } else if (marksValue >= 40 && marksValue < 50) {
            p.innerHTML = "You get c";
        } else if (marksValue >= 33 && marksValue < 40) {
            p.innerHTML = "You get D";
        } else if ( marksValue < 33) {
            p.innerHTML = "You failed in the exam. You will do better in the future."
        }
        else {
            p.innerHTML = "Invalid marks";
        }

        finalResult.append(p);

    }
)


// is odd or even 
document.getElementById("numberbtn").addEventListener(
    "click" , (event) =>{
        const numberValue = document.getElementById("number").value;
        console.log(numberValue)
        const finalResult = document.getElementById("isEvenResult");
        const p = document.createElement("p");
        p.innerHTML = ``;

        if(numberValue %2 == 0){
            p.innerHTML = `${numberValue} : This is even number `
        }else{
            p.innerHTML = `${numberValue} : This is odd number `
        }

        finalResult.append(p);

    }
)

// is leap year  
document.getElementById("yearbtn").addEventListener(
    "click" , (event) =>{
        const yearValue = document.getElementById("year").value;
        // console.log(yearValue)
        const finalResult = document.getElementById("isLeapYear");
        const p = document.createElement("p");
        p.innerHTML = ``;
        p.innerHTML = `: This is a leap year`;
        if (yearValue % 400 == 0) {
            p.innerHTML = `${yearValue} is a leap year`;
        } else if (yearValue % 100 == 0) {
            p.innerHTML = `${yearValue} is not a leap year`;
        } else if (yearValue % 4 == 0) {
            p.innerHTML = `${yearValue} is a leap year`;
        } else {
            p.innerHTML = `${yearValue} is not a leap year`;
        }

        finalResult.append(p);

    }
)





