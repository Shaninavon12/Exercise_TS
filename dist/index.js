"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const mysql2_1 = require("mysql2");
let executeResult;
function query() {
    const connection = (0, mysql2_1.createConnection)({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Password123',
        database: 'employeesdb'
    });
    connection.execute('SELECT * FROM employees', function (err, result) {
        if (err) {
            console.log(err);
        }
        executeResult = result;
    });
    return executeResult;
}
exports.query = query;
