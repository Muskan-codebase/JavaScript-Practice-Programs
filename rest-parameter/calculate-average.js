// Write a function that accepts a name as the first argument and any number of marks as the remaining arguments, then returns their average.

function calculateAverage(name, ...marks) {

    if (marks.length === 0) {
        console.log(`There are no marks`);
    }

    const totalMarks = marks.reduce((prev, next) => prev + next);

    const average = totalMarks / marks.length;

    console.log(`Student Name: ${name}`);
    console.log(`Percentage: ${average}%`);
}

calculateAverage("Muskan Mujavar", 65, 75, 80, 85, 89);