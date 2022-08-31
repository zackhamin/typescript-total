var person = {
    name: "ishaq",
    age: 33,
    hobbies: ["cycling", "running"]
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.name);
