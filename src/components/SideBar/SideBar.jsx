import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import centerIcon from "../../assets/centerIcon.svg";
import EditPen from "../../assets/editpen.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function SideBar({ setChat, closeMenu, isMobile }) { 

    const navigate=useNavigate()

    const handleClick=()=>{
        setChat([])
        navigate("/")
        
    }

  return (
    <Stack spacing={3} width="100%">
      {isMobile && (
        <Stack pt={1} spacing={1} direction="row" display="flex" justifyContent="flex-end" onClick={()=> closeMenu(false)} >
          
          <Typography color="#0000009E" fontWeight={500}>
            Close
          </Typography>
          <CloseIcon/>
        </Stack>
      )}
      <Stack
        onClick={handleClick}
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
        p={{ xs: "10px", md: "20px" }}
        sx={{
          background:
            "linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4)",
        }}
      >
        <Box
          component="img"
          src={centerIcon}
          height={{ xs: 40, md: "15%" }}
          width={{ xs: 40, md: "15%" }}
          boxShadow={4}
          borderRadius="50%"
        />
        <Box p="1px 5px" fontWeight={400} fontSize="20px">
          New Chat
        </Box>
        <Box component="img" src={EditPen} />
      </Stack>
      <Stack display="flex" alignItems="center" width="100%">
        <Button
        onClick={()=>navigate("/history")}
          variant="contained"
          sx={{
            fontSize: "80%",
            width: "95%",
            borderRadius: "10px",
            fontWeight: 700,
            color: "#414146",
            background:
              "linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4)",
          }}
        >
          Past Conversations
        </Button>
      </Stack>
    </Stack>
  );
}

export default SideBar;
