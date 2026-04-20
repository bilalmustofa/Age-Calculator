const calculateBtn = document.getElementById("calculateBtn");
const userInput = document.getElementById("birthDate");
userInput.max = new Date().toISOString().split('T')[0]; // is not allow for user to insert future dob

// calculate the age when click button 
calculateBtn.addEventListener('click', () => {
    const birthdate = new Date(userInput.value);

    const dayBirthdate = birthdate.getDate() + 1;
    const monthBirthdate = birthdate.getMonth() + 1;
    const yearBirthdate = birthdate.getFullYear();

    const today = new Date();
    
    const dayToday = today.getDate();
    const monthToday = today.getMonth() + 1;
    const yearToday = today.getFullYear();

    let dayDifference, monthDifference, yearDifference;

    yearDifference = yearToday - yearBirthdate;

    if(monthToday >= monthBirthdate){
        monthDifference = monthToday - monthBirthdate;
    } else {
        yearDifference--;
        monthDifference = 12 + monthToday - monthBirthdate;
    }

    if(dayToday >= dayBirthdate){
        dayDifference = dayToday - dayBirthdate;
    } else {
        monthDifference--;
        dayDifference = getDaysInMonth(yearBirthdate, monthBirthdate) + dayToday - dayBirthdate;
    }

    if(monthDifference < 0){
        monthDifference = 11;
        yearDifference--;
    }

    
    // Display the result
    const result = document.getElementById('result');
    result.innerText = `Your Age is ${yearDifference} Years, ${monthDifference} Months and ${dayDifference} Days.`;
});

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
