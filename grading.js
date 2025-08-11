function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        let diff = 5 - grades[i] % 5;
        if (grades[i] >= 38) {
            if (diff < 3) {
                grades[i] = grades[i] + diff;
            } else {
                continue;
            }
        }
    }
    return grades;
}

console.log(gradingStudents([84, 29, 57, 38, 42, 44, 54, 51, 89, 91, 92, 93]));