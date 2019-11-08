var arr = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
console.log(arr);

arr.push(-1);
console.log(arr);

arr.unshift(1000);
console.log(arr);

arr.push("Last array element");
console.log(arr);

console.log(arr.splice(3, 1));
console.log(arr);

function filtered(el) {
    return (typeof el === "number")
}
arr = arr.filter(filtered);
console.log(arr);

function exp(num) {
    return Math.pow(num, 2);
}
var newArr = arr.map(exp);
console.log(newArr);


var largest = 0;

for (var i = 0; i < newArr.length; i++) {
    if (largest < newArr[i]) {
        largest = newArr[i];
    }
}
console.log(largest);