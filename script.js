const obj = { one: "1", two: "2", three: "3" };
const newObj = {};

for (let key in obj) {
    newObj[key] = obj[key];
}
newObj.one = "4";

console.log(obj);
console.log(newObj);