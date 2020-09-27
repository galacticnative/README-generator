// function to generate markdown for README
function generateMarkdown(data) {
    return `
## Title: ${data.title}

    
## Description 
${data.description} 


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation 
${data.install}


## Usage 
${data.usage}
    

## Credits 
${data.credits}


## License 
${data.license}

---
🏆 
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Contributing 
${data.contribute}


## Tests 
${data.tests}

 `;
}
  
module.exports = generateMarkdown;