import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import youIcon from "../../assets/You.svg";
import AIicon from "../../assets/soulai.svg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { format } from "date-fns";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function ChattingCard({
  details,
  updateChat,
  setSelectedChatId,
  showFeedbackModal,
  readOnly = false,
  
}) {
  const [isRating, setIsRating] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (isRating) {
      updateChat(prev=>(
        prev.map((item) => {
            if (item.id == details.id) {
              return { ...item, rating: rating || 0 };
            } else {
              return { ...item };
            }
          }
      )
      ));
    }
  }, [rating]);

  return (
    <Stack
      p={{ xs: 1, md: 2 }}
      boxShadow={
        "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
      }
      borderRadius="20px"
      direction="row"
      spacing={{ xs: 1, md: 3 }}
      sx={{
        "&:hover .feedback-btns": {
          visibility: "visible",
          opacity: 1,
          
        },
        background:readOnly ? "linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)":" #D7C7F421"
      }}
      
      
    >
      <Box
        component="img"
        borderRadius="50%"
        sx={{ objectFit: "cover" }}
        flexShrink={0}
        width={{ xs: 30, md: 68 }}
        height={{ xs: 30, md: 68 }}
        src={details.type == "AI" ? AIicon : youIcon}
      />
      <Box>
        <Typography
          variant="heading"
          fontWeight={700}
          fontSize={{ xs: 14, md: 16 }}
        >
          {details.type == "AI" ? "Soul AI" : "You"}
        </Typography>
        <Typography fontSize={{ xs: 12, md: 15 }}>{details.text}</Typography>
        <Stack direction="row" gap={2} alignItems="center" mt={1}>
          <Typography fontSize={{ xs: 8, md: 12 }} color="#0000009E">
            {format(details.time, "hh:mm a")}
          </Typography>
          {details.type == "AI" && !readOnly && (
            <Stack
              direction="row"
              sx={{
                opacity: { xs: 1, md: 0 },
                transition: "opacity 400ms ease",
              }}
              visibility={{ xs: "visible", md: "hidden" }}
              className="feedback-btns"
            >
              <IconButton
                size="small"
                onClick={() => setIsRating((prev) => !prev)}
              >
                {!isRating && <ThumbUpIcon fontSize="inherit" />}
                {isRating && <ThumbUpOffAltIcon fontSize="inherit" />}
              </IconButton>
              <IconButton
                size="small"
                onClick={() => {
                  setSelectedChatId(details.id);
                  showFeedbackModal();
                }}
              >
                <ThumbDownIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          )}
        </Stack>
        {(isRating || details.rating > 0) && details.type == "AI" && (
          <Box pt={{ xs: 1, md: 2 }}>
            <Typography
              component="legend"
              fontSize={{ xs: 10, md: 12 }}
              mb={0.5}
            >
              {readOnly ? "rating:" : "Rate this response"}
            </Typography>
            <Rating
              name="simple-controlled"
              value={details.rating > 0 ? details.rating : rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              sx={{ width: "auto" }}
              readOnly={readOnly}
            />
          </Box>
        )}
        {details.feedback && (
          <Typography py={1} fontSize={{ xs: 10, md: 16 }}>
            <Box component="span" fontWeight={600}>
              Feedback:
            </Box>
            <Box component="span">{` ${details.feedback}`}</Box>
          </Typography>
        )}
      </Box>
    </Stack>
  );
}

export default ChattingCard;
