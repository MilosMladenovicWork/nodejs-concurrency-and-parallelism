import chalkAnimation from "chalk-animation";
import { exec, fork, spawn } from "child_process";

const ls = spawn("ls");

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

exec("./command.sh", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

const child = fork("./index2.js");

child.on("exit", () => {
  console.log("child exited");
});

child.send("Sending message from parent to child");

child.on("message", (m) => chalkAnimation.rainbow(`Parent got message: ${m}`));
