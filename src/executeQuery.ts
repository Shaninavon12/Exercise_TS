import { RowDataPacket, createConnection } from "mysql2";
let executeResult: RowDataPacket[];

export function query(): object {
	const connection = createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "Password123",
		database: "employeesdb",
	});

	connection.execute<RowDataPacket[]>(
		"SELECT * FROM employees",
		function (err, result) {
			if (err) {
				console.log(err);
			}
			executeResult = result;
		}
	);

	return executeResult;
}
