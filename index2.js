console.log("Second nodejs script");

process.on("message", (m) => console.log(`Child got message: ${m}`));

process.send("I am about to exit");
