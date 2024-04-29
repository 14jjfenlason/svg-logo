const { generateSVG } = require('./shapes');

describe('generateSVG', () => {
    it('should generate SVG markup for a triangle shape', () => {
        const input = {
            characters: 'ABC',
            textColor: 'black',
            shape: 'triangle',
            shapeColor: 'red'
        };
        const expected = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="50,0 100,100 0,100" fill="red" /><text x="50" y="65" fill="black" text-anchor="middle" alignment-baseline="middle">ABC</text></svg>`;
        expect(generateSVG(input).replace(/\s+/g, '')).toEqual(expected.replace(/\s+/g, ''));
    });

    it('should generate SVG markup for a circle shape', () => {
        const input = {
            characters: 'DEF',
            textColor: 'blue',
            shape: 'circle',
            shapeColor: 'green'
        };
        const expected = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="50" cy="50" r="50" fill="green" /><text x="50" y="60" fill="blue" text-anchor="middle" alignment-baseline="middle">DEF</text></svg>`;
        expect(generateSVG(input).replace(/\s+/g, '')).toEqual(expected.replace(/\s+/g, ''));
    });

    it('should generate SVG markup for a square shape', () => {
        const input = {
            characters: 'GHI',
            textColor: 'purple',
            shape: 'square',
            shapeColor: 'yellow'
        };
        const expected = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="0" y="0" width="100" height="100" fill="yellow" /><text x="50" y="60" fill="purple" text-anchor="middle" alignment-baseline="middle">GHI</text></svg>`;
        expect(generateSVG(input).replace(/\s+/g, '')).toEqual(expected.replace(/\s+/g, ''));
    });
});