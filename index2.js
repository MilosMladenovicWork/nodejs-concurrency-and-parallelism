import chalkAnimation from "chalk-animation";

console.log("Second nodejs script");

process.on("message", (m) => chalkAnimation.rainbow(`Child got message: ${m}`));
