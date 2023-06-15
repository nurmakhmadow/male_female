let students = [
    {
        name: "Dilshod",
        age: 23,
        gender: "male"
    },
    {
        name: "Emin",
        age: 18,
        gender: "female"
    },
    {
        name: "Aziz",
        age: 16,
        gender: "male"
    },
    {
        name: "Jafar",
        age: 12,
        gender: "female"
    },
    {
        name: "Mexrshod",
        age: 27,
        gender: "female"
    },
    {
        name: "Samir",
        age: 6,
        gender: "male"
    }
]

let male = 0
let female = 0

students.forEach(baby => {
    if(baby.gender === 'male'){
        male++
    } else if(baby.gender === 'female') {
        female++
    }
}) 

console.log(female);

console.log(male);