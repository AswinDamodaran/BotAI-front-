import { Typography } from "@mui/material";
import { Box, Grid, Stack } from "@mui/system";
import React from "react";
import centerIcon from "../../assets/centerIcon.svg";
import Card from "../Card/Card";

function IntialChat({ generateResponse }) {
  const initialData = [
    {
      heading: "Hi, what is the weather",
      subText: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is my location",
      subText: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is the temperature",
      subText: "Get immediate AI generated response",
    },
    {
      heading: "Hi, how are you",
      subText: "Get immediate AI generated response",
    },
  ];

  return (
    <Stack
      height={1}
      justifyContent="flex-end"
      alignItems="center"
      p={{ xs: 1, md: 3 }}
    >
      <Stack alignItems="center" spacing={1}>
        <Typography
          variant="h2"
          sx={{ fontWeight: 500, fontSize: "28px", textAlign: "center" }}
        >
          How Can I Help You Today?
        </Typography>
        <Box
          component="img"
          src={centerIcon}
          height={{ xs: 42, md: 70 }}
          width={{ xs: 42, md: 70 }}
          boxShadow={4}
          borderRadius="50%"
        />
      </Stack>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        mt={{ xs: 5, md: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        {initialData.map((item) => (
          <Grid
            item
            key={item.heading}
            xs={12}
            md={6}
            width={{ xs: "80%", md: "40%" }}
          >
            <Card
              heading={item.heading}
              subText={item.subText}
              handleClick={generateResponse}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default IntialChat;
