var http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
	const url = request.url;
	if (url === '/') {
		const name = process.env.NAME;
		const age = process.env.AGE;
		response.write(`Hello ${name}, you are ${age} years old.`);
		response.end()
	} else if (url === '/configmap') {
		const data = fs.readFileSync('./input.txt',
			{ encoding: 'utf8', flag: 'r' });
		response.write(data);
		response.end();
	} else if (url === '/secret') {
		const user = process.env.USER;
		const password = process.env.PASSWORD;
		response.write(`User: ${user}, Password: ${password}`);
		response.end()
	}
}).listen(80)
