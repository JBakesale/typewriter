typewriter = (str) => {
  let time = 0;
  for (const j of str) {
    setTimeout(() => {
      process.stdout.write(j);
    }, time);
    time += 50;
  }

  setTimeout(() => {
    console.log("\n");
  }, time + 50);
};

const sentence = "hello there from lighthouse labs";
typewriter(sentence);