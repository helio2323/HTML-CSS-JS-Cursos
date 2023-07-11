const person = {
    name: "John",
    age: 30
}

Object.defineProperty(person, 'profession', {
    value: "Engineer",
    writable: false
})

person.name = "Jane"
person.profession = "Doctor"

console.log(person.name)
console.log(person.profession)