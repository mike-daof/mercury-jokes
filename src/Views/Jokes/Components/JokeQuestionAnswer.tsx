import { Stack, Button, Typography, Box } from "@mui/material";

import { JokeRandomData } from "../../../Services/Jokes/api";
import Quotes from "../../../Components/Quotes";

export interface JokeQuestionAnswerProps {
  joke: JokeRandomData;
  showAnswer: boolean;
  onClick: () => void;
}

export default function JokeQuestionAnswer({ joke, showAnswer, onClick }: JokeQuestionAnswerProps) {
  return (
    <Stack direction="column" alignItems="center">
      <Quotes direction="left" message={joke.joke} />

      <Button onClick={onClick} className="h-16 rounded-full capitalize" variant="contained" size="medium">
        <Typography className="capitalize">{showAnswer ? "Hide punchline" : "Show punchline"}</Typography>
      </Button>
      {showAnswer && (
        <Box className="transition duration-700 ease-in-out w-full">
          <Quotes direction="right" message={joke.punchLine} />
        </Box>
      )}
    </Stack>
  );
}
