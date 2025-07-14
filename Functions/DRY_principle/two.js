function calcGrade(student_marks, student_maxmarks)
{
    let student_percentage = (student_marks/student_maxmarks)*100
    let student_Grade

    if (student_percentage >= 90)
    {
        student_Grade = 'A'
    }
    else if (student_percentage >= 80)
    {
        student_Grade = 'B'
    }
    else if (student_percentage >= 70)
    {
        student_Grade = 'C'
    }
    else if (student_percentage >= 60)
    {
        student_Grade = 'D'
    }
    else
    {
        student_Grade = 'F'
    }
    console.log(student_Grade)  
}
calcGrade(93, 100)
calcGrade(65, 100)
calcGrade(35, 50)