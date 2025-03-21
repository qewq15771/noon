/*
 * Generic webserver instance for the examples
 * @Author Alexander P. Cerutti
 * Requires express to run
 */

import express from "express";
export let app = express();

app.use(express.json());

app.listen(8080, "0.0.0.0", () => {
	console.log("Webserver started.");
});
