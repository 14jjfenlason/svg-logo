require('colors');
const fs = require('fs');
const { generateSVG } = require('./lib/shapes');

import('inquirer').then(module => {
    const inquirer = module.default;inquirer
    .prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Enter 3 characters:',
            validate: function(value) {
                const isValid = value.length === 3;
                return isValid ? true : 'Enter 3 characters: ';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What text color would you like to use?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['triangle', 'circle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What shape color would you like to use?',
        }
    ])
    .then(answers => {
        // Generate SVG markup based on user input
        const svgMarkup = generateSVG(answers);

        // Write the SVG markup to a file
        fs.writeFileSync('logo.svg', svgMarkup);

        console.log('Generated logo.svg');
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
});