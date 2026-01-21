// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const num = req.params.num;
  const n = parseInt(num, 10);
  
  if (!num || isNaN(n)) {
	return res.status(400).send("Invalid number");
  }
  
  const fibN = fibonacci(n);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
