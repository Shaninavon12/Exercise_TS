// CR minor [naming]: rename this file, index.ts is not an indicative name. should be reserved for imports/exports only.
import { createConnection } from "mysql2";

// CR minor [syntax]: why object type? there isn't a more indicative type for SQL query result?
let executeResult: object;

export function query(): object {
	const connection = createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "Password123",
		database: "employeesdb",
	});

	connection.execute("SELECT * FROM employees", function (err, result) {
		if (err) {
			console.log(err);
		}
		executeResult = result;
	});

	return executeResult;
}
