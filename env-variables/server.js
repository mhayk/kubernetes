var http = require('http');

http.createServer((request, response) => {
	const name = process.env.NAME;
	const age = process.env.AGE;
	response.write(`Hello ${name}, you are ${age} years old.`);
	response.end()
}).listen(80)
