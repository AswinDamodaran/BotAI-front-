import { Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useOutlet, useOutletContext } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import IntialChat from "../components/IntialChat/IntialChat";
import data from "../aiData/sampleData.json";
import ChattingCard from "../components/ChattingCard/ChattingCard";
import FeedBackModal from "../components/FeedBackModal/FeedBackModal";
import ChatInput from "../components/ChatInput/ChatInput";

function MainPage() {
  const [showModal, setShowModel] = useState(false);
  const listRef = useRef(null);
  const [chatId, setChatId] = useState(1);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [scrollToBottom, setScrollToBottom] = useState(false);

  const { chat, setChat } = useOutletContext();

  const generateResponse = (input) => {
    const res = data.find(
      (item) => input.toLowerCase() == item.question.toLowerCase()
    );
    const ans = "Sorry, Did not understand your query";
    if (res != undefined) {
      ans = res.response;
    }
    setChat((prev) => [
      ...prev,
      {
        type: "Human",
        text: input,
        time: new Date(),
        id: chatId,
      },
      {
        type: "AI",
        text: ans,
        time: new Date(),
        id: chatId + 1,
      },
    ]);
    setChatId((prev) => prev + 2);
  };

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [scrollToBottom]);

  return (
    <Stack
      height="100vh"
      background="linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)"
    >
      <Nav />
      {chat.length == 0 && <IntialChat generateResponse={generateResponse} />}
      {chat.length > 0 && (
        <Stack
          height={1}
          flexGrow={0}
          p={{ xs: 2, md: 3 }}
          spacing={{ xs: 2, md: 3 }}
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "insert 0 0 8px rgba(0,0,0,0,1)",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(151, 133, 186,0.4)",
              borderRadius: "8px",
            },
          }}
          ref={listRef}
        >
          {chat.map((item, idx) => (
            <ChattingCard
              details={item}
              key={idx}
              updateChat={setChat}
              setSelectedChatId={setSelectedChatId}
              showFeedbackModal={() => setShowModel(true)}
            />
          ))}
        </Stack>
      )}
      <ChatInput
        generateResponse={generateResponse}
        setScroll={setScrollToBottom}
        chat={chat}
        clearChat={() => setChat([])}
      />
      <FeedBackModal
        open={showModal}
        updateChat={setChat}
        chatId={selectedChatId}
        handleClose={() => setShowModel(false)}
      />
    </Stack>
  );
}

export default MainPage;
