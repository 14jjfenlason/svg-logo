function generateSVG({ characters, textColor, shape, shapeColor }) {
    let shapeSVG;
    let textX;
    let textY;

    switch (shape) {
        case 'triangle':
            shapeSVG = `<polygon points="50,0 100,100 0,100" fill="${shapeColor}" />`;
            textX = 50;
            textY = 65;
            break;
        case 'circle':
            shapeSVG = `<circle cx="50" cy="50" r="50" fill="${shapeColor}" />`;
            textX = 50;
            textY = 60;
            break;
        case 'square':
            shapeSVG = `<rect x="0" y="0" width="100" height="100" fill="${shapeColor}" />`;
            textX = 50;
            textY = 60;
            break;
        default:
            shapeSVG = '';
            textX = 0;
            textY = 0;
            break;
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSVG}<text x="${textX}" y="${textY}" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${characters}</text></svg>`;
}

module.exports = { generateSVG };