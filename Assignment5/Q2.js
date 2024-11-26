var users=[{name:"Rishav",age:"21",hobbies:["Codding","Series"]},
    {name:"Ankesh",age:"23",hobbies:["Codding","Reading"]},
    {name:"Iswar",age:"19",hobbies:["Movies","Singing"]}
]

var allHobbies=[];

console.log("Names and Age:")
for(var i=0;i<users.length;i++){
    const {name,age}=users[i];
    allHobbies=[...allHobbies,...users[i].hobbies];
    console.log(name,age);
}

console.log("\nAll Hobbies:");
console.log(allHobbies);