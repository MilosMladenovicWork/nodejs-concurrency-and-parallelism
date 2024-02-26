console.log("Second nodejs script");

process.on("message", (m) => console.log(`Child got message: ${m}`));
