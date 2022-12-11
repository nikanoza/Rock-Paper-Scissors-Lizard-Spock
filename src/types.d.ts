import { ReactNode } from "react";

export type Choice = "scissors" | "spock" | "paper" | "lizard" | "rock" | "";

export type GameCard = {
  image: ReactNode;
  name: Choice;
  colorTop: string;
  colorBottom: string;
};
