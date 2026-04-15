const calculateBtn = document.getElementById("calculateBtn");
// calculate the age when click button 
calculateBtn.addEventListener('click', () => {
    const birthDataValue = document.getElementById("birthData").value;
    const result = document.getElementById('result');
    // First check input
    if(birthDataValue === "") {
        result.innerText = `Please, Enter your birthdate`;
        return;
    } 
    const birthdate = new Date(birthDataValue);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())){
        age--;
    } 
    // check input is not future date
    if (birthdate > today) {
    result.innerText = "Birthdate can't be in the future!";
    return;
}

    // Display the result
        result.innerText = `Your Age is ${age} years old.`;
});
