export interface JokeRandomData {
  id: number;
  joke: string;
  punchLine: string;
}

export const fetchJokeRandom = async (): Promise<JokeRandomData> => {
  const response = await fetch("https://mwks-joke-service.azurewebsites.net/api/joke/random");
  return response.json();
};
