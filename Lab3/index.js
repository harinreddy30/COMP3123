const http = require("http");
const employees = require("./Employee.js");

console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 7500;

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
        return;
    }

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Welcome to Lab Exercise 03</h1>");
        return;
    }

    if (req.url === '/employee') {
        if (employees.length === 0) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "No employees found" }));
            return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(employees));
        return;
    }

    if (req.url.startsWith('/employee/')) {
        const id = req.url.split('/')[2];
        const employee = employees.find(emp => emp.id === Number(id));
        
        if (employee) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employee));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Employee not found" }));
        }
        return;
    }

    if (req.url === '/employee/names') {
        const names = employees.map(emp => `${emp.firstName} ${emp.lastName}`);
        names.sort();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(names));
        return;
    }

    if (req.url === '/employee/totalsalary') {
        const totalSalary = employees.reduce((total, emp) => total + emp.Salary, 0);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ total_salary: totalSalary }));
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
