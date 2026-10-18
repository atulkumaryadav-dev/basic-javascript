let student={

    name: "Atul yadav",
    age: 22,
    skills: ["java", "javascript"],
    master: "job"
};

console.log(student.name);
console.log(student.age);
console.log(student.skills);

// for (const key in student) {
//     if (!Object.hasOwn(student, key)) continue;
    
//     console.log(key,student[key]);
    
// }


for (const key in student) {
    
    console.log(key,student[key]); 
    
}