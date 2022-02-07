let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let sumResultsInSubject = 0;
    let numberOfResults = 0;
    for (let i in arr) {
        const studentObject = arr[i];
        const resultObject = studentObject["results"];
        if (subject in resultObject) {
            oneResultInSubject = resultObject[subject];
            sumResultsInSubject += parseInt(oneResultInSubject);
            numberOfResults += 1;
        }
    }
    return sumResultsInSubject / numberOfResults;
}

let result = averagePoints(students, "science");
console.log(result)