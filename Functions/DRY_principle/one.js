let studen1_marks = 93
let student1_maxmarks = 100
let student1_percentage = (studen1_marks/student1_maxmarks)*100
let student1_Grade

if (student1_percentage >= 90)
{
    student1_Grade = 'A'
}
else if (student1_percentage >= 80)
{
    student1_Grade = 'B'
}
else if (student1_percentage >= 70)
{
    student1_Grade = 'C'
}
else if (student1_percentage >= 60)
{
    student1_Grade = 'D'
}
else
{
    student1_Grade = 'F'
}
console.log(student1_Grade)