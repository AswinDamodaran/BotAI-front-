import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Card({ heading, subText, handleClick }) {
  return (
    <Stack
      bgcolor="#FFFFFF"
      p={{ xs: 1, md: 3 }}
      box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      spacing={1}
      onClick={() => handleClick(heading)}
      borderRadius="10px"
      sx={{ cursor: "pointer" }}
    >
      <Box>
        <Typography variant="heading" fontSize="20px" fontWeight={700}>
          {heading}
        </Typography>
        <Typography fontSize="16px" fontWeight={400} color="#00000080">
          {subText}
        </Typography>
      </Box>
    </Stack>
  );
}

export default Card;
