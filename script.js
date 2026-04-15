const calculateBtn = document.getElementById("calculateBtn");
// calculate the age when click button 
calculateBtn.addEventListener('click', () => {
    const birthDataValue = document.getElementById("birthData").value;
    const birthdate = new Date(birthDataValue);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())){
        age--;
    }

    // Display the result
    const result = document.getElementById('result');
    result.innerText = `Your Age is ${age} years old.`;
});
