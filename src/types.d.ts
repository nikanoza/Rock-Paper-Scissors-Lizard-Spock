import { ReactNode } from "react";

export type GameCard = {
  image: ReactNode;
  name: string;
  colorTop: string;
  colorBottom: string;
};

export type Choice = "scissors" | "spock" | "paper" | "lizard" | "rock" | "";
