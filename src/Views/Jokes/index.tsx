import { useCallback, useState } from "react";
import { Stack, Divider, Button, Box, Link, Typography } from "@mui/material";

import { useJokes } from "../../Services/Jokes/hooks";
import Page from "../../Components/Page";
import JokeQuestionAnswer from "./Components/JokeQuestionAnswer";

export default function Jokes() {
  const [showAnswer, setShowAnswer] = useState(false);
  const { data, isError, isLoading, refetch } = useJokes();

  const onClickJoke = useCallback(() => {
    setShowAnswer(false);
    refetch();
  }, [refetch]);

  const onClickShowAnswer = useCallback(() => {
    setShowAnswer(showAnswer => !showAnswer);
  }, []);

  const renderResults = () => {
    if (isError) {
      return (
        <Box className="w-full h-56 flex items-center justify-center">
          <Typography className="text-red-500 uppercase">There was an error loading your joke.</Typography>
        </Box>
      );
    }
    if (isLoading) {
      return (
        <Box className="w-full h-56 flex items-center justify-center">
          <Typography className="uppercase">Loading your joke.</Typography>
        </Box>
      );
    }
    if (data) {
      return <JokeQuestionAnswer joke={data} showAnswer={showAnswer} onClick={onClickShowAnswer} />;
    }
  };

  return (
    <Page>
      <Stack divider={<Divider orientation="horizontal" flexItem />}>
        <Box className="h-32 flex justify-between items-center">
          <Button onClick={onClickJoke} className="h-16 bg-lime-500 rounded-full" variant="contained" size="medium">
            <Typography className="capitalize">Get an new random joke</Typography>
          </Button>
          <Link target="_blank" href="https://mwks-joke-service.azurewebsites.net/swagger/index.html">
            <Typography>View API Docs</Typography>
          </Link>
        </Box>
        <Box>{renderResults()}</Box>
      </Stack>
    </Page>
  );
}
