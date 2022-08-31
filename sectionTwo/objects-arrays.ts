// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "ishaq",
//   age: 33,
//   hobbies: ["cycling", "running"],
//   role: [1, "engineer"], //tuple
// };

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

//hobby becomes a string type because hobbies is an array of strings. i.e.
// all string methods are available without typescript issues.
// console.log(person.name);

enum Role {
  ADMIN = 1,
  READ_ONLY = 1,
  AUTHOR = "true",
}

const person = {
  name: "ishaq",
  age: 33,
  hobbies: ["cycling", "running"],
  role: Role.ADMIN,
};
