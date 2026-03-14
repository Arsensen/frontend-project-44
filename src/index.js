import { welcomeUser } from "./helpers/welcome-user.js";

export const startGame = (launchGame, description) => {
  const name = welcomeUser();

  console.log(description);

  try {
    launchGame(name);
    console.log(`Congratulations, ${name}!`);
  } catch (e) {
    console.log(e.message);
  }
};
