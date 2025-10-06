import { exec } from "child_process";
import dotenv from "dotenv";

dotenv.config();

exec("n8n start", (error, stdout, stderr) => {
  console.log(stdout);
  console.error(stderr);
});
