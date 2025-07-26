let students=[
    {name:"deepu", age: 21},
    {name:"divya", age: 19},
    {name:"padma", age: 18},
    {name:"tulasi", age: 20}
]
function displayStudents() {
    const list=document.getElementById("studentslist");
    list.innerHTML = "";

 students.forEach((student, index) => {
    let li=document.createElement("li");
    li.textContent=`${index+1}. ${student.name}-Age: ${student.age}`;
    list.appendChild(li);
 });

} 
function sortByName() {
    students.sort((a, b) => a.name.localecompare(b.name));
    displayStudents();
}

function sortByAge() {
    students.sort((a,b) => a.age-b.age);
    displayStudents();
}
