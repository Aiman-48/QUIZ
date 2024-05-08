import inquirer from "inquirer";
import chalk from "chalk";
// Prompt user for name
async function promptForName() {
    const { name } = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "What is your name?",
    });
    return name;
}
// Define the quiz questions dynamically
const questions = [
    {
        type: "list",
        name: "q1",
        message: "Which operator is used to concatenate strings in TypeScript?",
        choices: ["-", "+", "*"],
    },
    {
        type: "list",
        name: "q2",
        message: "What is the purpose of an assignment operator in TypeScript?",
        choices: ["To compare two values", "To perform mathematical calculations", "To assign a value to a variable"],
    },
    {
        type: "list",
        name: "q3",
        message: "Which operator in TypeScript is used for incrementing a value by 1?",
        choices: ["--", "++", "+="],
    },
    {
        type: "list",
        name: "q4",
        message: "What does the following TypeScript expression evaluate to: 10 <= 5?",
        choices: ["true", "false", "NaN"],
    },
    {
        type: "list",
        name: "q5",
        message: "What is the purpose of the modulus operator (%) in TypeScript?",
        choices: ["to perform division", "to find the remainder of a division operation", "to perform multiplication"],
    },
    {
        type: "list",
        name: "q6",
        message: "Which operator is used to perform exponentiation in TypeScript?",
        choices: ["^", "**", "%"],
    },
];
// Function to calculate the quiz score
function calculateScore(answers) {
    let score = 0;
    if (answers.q1 === "+")
        score++;
    if (answers.q2 === "To assign a value to a variable")
        score++;
    if (answers.q3 === "++")
        score++;
    if (answers.q4 === "false")
        score++;
    if (answers.q5 === "to find the remainder of a division operation")
        score++;
    if (answers.q6 === "**")
        score++;
    return score;
}
// Run the quiz
async function runQuiz() {
    console.log(chalk.yellow.bold("Welcome to the TypeScript Quiz!"));
    const name = await promptForName();
    console.log(chalk.yellow(`Hello, ${name}! Let's get started with the quiz.`));
    const answers = await inquirer.prompt(questions);
    const score = calculateScore(answers);
    console.log("");
    console.log(chalk.yellow("Your score:"), chalk.yellow(score, "out of", questions.length));
}
// Start the quiz
runQuiz();
