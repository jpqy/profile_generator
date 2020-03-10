const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let name, activity, listen, meal, eat, sport, power;

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      listen = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          eat = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              power = answer;
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${eat} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


