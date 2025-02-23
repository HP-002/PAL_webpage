const filePath = '';

const fileContent = fs.readFileSync(filePath, 'utf-8'); // Read entire file
const linesArray = fileContent.split(/\r?\n/); // Split into lines

console.log(linesArray);