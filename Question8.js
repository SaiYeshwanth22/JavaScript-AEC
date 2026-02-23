let userObj = {
    name: "Sai",
    age: 21,
    email: "sai@example.com"
};

let jsonString = JSON.stringify(userObj);
console.log(jsonString);

let convertedObj = JSON.parse(jsonString);
console.log(convertedObj.name);