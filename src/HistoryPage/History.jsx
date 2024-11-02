import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import ChatFilter from "../components/ChatFilter/ChatFilter";
import ChatHistoryCard from "../components/ChatHistoryCard/ChatHistoryCard";

function History() {
  const [chat, setChat] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);

  useEffect(() => {
    const localChats = localStorage.getItem("chat") || [];
    if (localChats.length > 0) {
      setChat(JSON.parse(localChats));
      setFilteredChats(JSON.parse(localChats));
    }
  }, []);

  return (
    <Box
      height="100vh"
      overflow="hidden"
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "10px",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "insert 0 0 8px rgba(0,0,0,0,1",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          boxShadow: "rgba(151, 133, 186, 0.4",
          borderRadius: "8px",
        },
      }}
    >
      <Nav />
      <Box p={{ xs: 2, md: 3 }}>
        <Typography textAlign="center" mb={3} fontWeight={400} fontSize="28px">
          Conversation History
        </Typography>
        {chat.length > 0 && (
          <ChatFilter allChats={chat} setFilteredChats={setFilteredChats} />
        )}

        {chat.length === 0 && (
          <Typography textAlign="center" p={3} bgcolor="#fff" borderRadius={2}>
            No such chats
          </Typography>
        )}
        {filteredChats.length > 0 && (
          <Stack spacing={4}>
            {filteredChats.map((chat, idx) => (
              <ChatHistoryCard details={chat} key={idx} />
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export default History;
