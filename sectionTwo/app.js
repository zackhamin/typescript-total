//union types
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(1, 9, "number"));
console.log(combine("12", "12", "text"));
console.log(combine("Ishaq", "Shamia", "text"));
