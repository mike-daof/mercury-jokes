import { Box, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface QuotesProps {
  direction: "left" | "right";
  message: string;
}

export default function Quotes({ direction, message }: QuotesProps) {
  const directionClass = direction === "right" ? "flex-row-reverse" : "";
  return (
    <Box className={`w-full h-32 flex items-center relative ${directionClass}`}>
      {direction === "left" && (
        <Box className="absolute opacity-5 text-9xl rotate-180">
          <FormatQuoteIcon fontSize="inherit" />
        </Box>
      )}
      <Box className="top-quote px-12">
        <Typography className="text-2xl">{message}</Typography>
      </Box>
      {direction === "right" && (
        <Box className="absolute w-full opacity-5 text-9xl flex flex-row-reverse">
          <FormatQuoteIcon fontSize="inherit" />
        </Box>
      )}
    </Box>
  );
}
