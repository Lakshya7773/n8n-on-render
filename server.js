import { exec } from "child_process";
exec("n8n start", (error, stdout, stderr) => {
  console.log(stdout);
  console.error(stderr);
});
