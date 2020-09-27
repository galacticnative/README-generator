const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')

const promptQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project TITLE?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a project description!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you INSTALL the project?',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter the project installation process!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'USAGE: Provide instructions and examples of use.',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter your project use/instructions!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'license',
        message: 'What LICENSES are used for the project?',
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('Please enter your project licenses!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'CREDIT your collaborators by listing them.',
        validate: creditsInput => {
          if (creditsInput) {
            return true;
          } else {
            console.log('Please enter a collaborator or type none!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'CONTRIBUTIONS: Provide guidelines for developers to contribute to your project.',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('Please enter your project guidelines to contribute!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write and provide examples to TEST your project.',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please enter test examples or write "none"');
            return false;
          }
        }
    },
    ]);
};


// function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) throw err;
    })

}

// function to initialize program
function init() {
    promptQuestions()
    .then(inputData => {
        const createReadme = generateMarkdown(inputData)
        writeToFile(createReadme)
    })
}

// function call to initialize program
init();