import { scissors, spock, paper, lizard, rock } from "components/Game";
import { Choice, GameCard } from "types";

export const housePicked = (): GameCard => {
  const choices = [scissors, spock, paper, lizard, rock];

  const index = Math.floor(Math.random() * 5);

  return choices[index];
};

export const determineWinner = (
  player: Choice,
  house: Choice
): "win" | "draw" | "lose" => {
  if (player === "lizard") {
    if (house === "spock" || house === "paper") {
      return "win";
    }
    if (house === "lizard") {
      return "draw";
    }
  }

  if (player === "paper") {
    if (house === "rock" || house === "spock") {
      return "win";
    }
    if (house === "paper") {
      return "draw";
    }
  }

  if (player === "rock") {
    if (house === "lizard" || house === "scissors") {
      return "win";
    }
    if (house === "rock") {
      return "draw";
    }
  }

  if (player === "scissors") {
    if (house === "paper" || house === "lizard") {
      return "win";
    }
    if (house === "scissors") {
      return "draw";
    }
  }

  if (player === "spock") {
    if (house === "scissors" || house === "rock") {
      return "win";
    }
    if (house === "spock") {
      return "draw";
    }
  }

  return "lose";
};
