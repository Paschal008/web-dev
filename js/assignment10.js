const score = prompt("Enter your score (0-100):");

if (score >= 70 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 60 && score < 70) {
    console.log("Grade: B");
} else if (score >= 50 && score < 60) {
    console.log("Grade: C");
} else if (score >= 40 && score < 50) {
    console.log("Grade: D");
} else if (score >= 0 && score < 40) {
    console.log("Grade: F");
} else {
    console.log("Score Invalid. Please enter a score between 0 and 100.");
}
