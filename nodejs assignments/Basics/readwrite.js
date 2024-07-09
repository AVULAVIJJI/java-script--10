const fs = require('fs')
let empdata = fs.resdFileSync(emp.txt,'utf-8')
fs.writeFileSync('data.txt',empdata)
console.log("Empolyee data write into new file ie data.txt")