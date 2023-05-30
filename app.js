const express = require("express");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
const app = express();
require("dotenv").config();
require("express-async-errors");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
	res.send("<h1>Store API</h1><a href='/api/v1/products'>PRoducts</a>");
});

app.use("/api/v1/products", productsRouter);

app.use(errorHandlerMiddleware);
app.use(notFound);

const port = process.env.PORT || 3000;

async function start() {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`Server is running at port ${port}`));
	} catch (error) {
		console.log(error);
	}
}

start();
