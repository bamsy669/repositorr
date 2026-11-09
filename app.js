//map, filter, reduce, 2

const fruits=['banana','KIWi','mango','apple','orANge']

const upperFruits=fruits.map((fr)=>{
    console.log(fr);
    return fr.charAt(0).toUpperCase() + fr.slice(1).toLocaleLowerCase();
    
})
console.log(upperFruits);


const minFruits=fruits.filter((fr)=>fr!=='mango')
console.log(minFruits);



const letters=fruits.reduce((total,fr)=>{
    console.log(total,"total");
    console.log(fr, fr.length);
    return total+fr.length
    
    
},0)
console.log(letters);


const students=[
    {id:1, name:'Aibek', age:16},
    {id:2, name:'Altyn', age:18},
    {id:3, name:'Alinur', age:20},
]


const mature=students
.filter((stud)=>stud.age<=18)
.reduce((total, st)=>total+st.age,0)
console.log(mature);


const totalAge=students.reduce((total, student)=>student.age+total, 0)
console.log(totalAge);

