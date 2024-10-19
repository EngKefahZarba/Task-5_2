const inputBox = document.getElementById("input-box");
const resultBox = document.getElementById("result-box");
const inputCategory = document.getElementById("input-category");
const resultCategory = document.getElementById("result-category");
const clear = document.querySelector("button");
const conversionFactors = {
    centimeter:{
        millimeter:10,
        centimeter:1,
        inch: 1 / 2.54,
        meter: 0.01,
        yard: 1 / 91.44,
        mile: 1 / 1609344,
        Kilometer: 0.00001
    },
    meter:{
        millimeter:1000,
        centimeter:100,
        inch:39.3701,
        meter:1,
        yard:1.0936133,
        mile: 1 / 1609.344,
        Kilometer:0.001
    },
    Kilometer:{
        millimeter:1000000,
        centimeter:100000,
        inch:39370.1,
        meter:1000,
        yard:1093.6133,
        mile: 0.621371,
        Kilometer:1
    },   
}
inputBox.addEventListener('input', updateResult);
inputCategory.addEventListener('change', updateResult);
resultCategory.addEventListener('change', updateResult);
clear.addEventListener('click', clearInput);
// clear input function
function clearInput(){
    inputBox.value="";
    resultBox.value="";
}
// update result function
function updateResult(){
    const inputValue = parseFloat(inputBox.value);
    const inputCategoryVal = inputCategory.value;
    const resultCategoryVal = resultCategory.value;
    const conversionFactor = conversionFactors[inputCategoryVal][resultCategoryVal];
    resultBox.value = isNaN(inputValue) ? "" : inputValue * conversionFactor ;
}