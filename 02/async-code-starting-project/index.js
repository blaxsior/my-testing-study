import { generateToken } from "./async/async-example.js";

generateToken('test@test.com', (err, token) => {
  console.log(token);
});
