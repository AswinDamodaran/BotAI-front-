import {
  Stack,
  Typography,
  useMediaQuery,
  Button,
  Drawer,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useOutletContext } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const { handleMobileView,setChat } = useOutletContext();
  const isMobile = useMediaQuery("(max-width:800px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Stack direction="row" >
      {isMobile && (
        <>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{color:"#9785BA"}} />
          </Button>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <SideBar closeMenu={toggleDrawer(false)} isMobile={isMobile} setChat={setChat} />
          </Drawer>
        </>
      )}
      <Typography
        sx={{ color: "#9785BA", p: 2 }}
        fontSize="28px"
        fontWeight={700}
      >
        Bot AI
      </Typography>
    </Stack>
  );
}

export default Nav;
