import { Box, Select, Typography,MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';

function ChatFilter({ allChats, setFilteredChats }) {
  const [option, setOption] = useState("All Ratings");

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    if (option == "All Ratings") {
      setFilteredChats(allChats);
    } else {
      const filtered = allChats.filter((item) => {
        let found = false;
        item.chat.forEach((ch) => {
          if (ch.rating == option) {
            found = true;
          }
        });
        return found;
      });
      setFilteredChats(filtered);
    }
  }, [option]);

  return (
    <Box mb={3} >
      <Typography fontSize={12} mb={1} fontWeight={500} color="#0000009E" >
        Filter by rating:
      </Typography>
      <Select
        size="small"
        sx={{ minWidth: { xs: 1, md: 160 } }}
        value={option}
        onChange={handleChange}
      >
         <MenuItem value={"All Ratings"}>All Ratings</MenuItem>
        <MenuItem value={1}><StarIcon color="gold" />1 Star</MenuItem>
        <MenuItem value={2}><StarIcon color="gold" />2 Stars</MenuItem>
        <MenuItem value={3}><StarIcon color="gold" />3 Stars</MenuItem>
        <MenuItem value={4}><StarIcon color="gold" />4 Stars</MenuItem>
        <MenuItem value={5}><StarIcon color="gold" />5 Stars</MenuItem>
      </Select>
    </Box>
  );
}

export default ChatFilter;
