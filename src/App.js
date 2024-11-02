import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [chat, setChat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App" >
      <CssBaseline />
      <Grid
        container
        sx={{
          background:
            "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        }}
      >
        <Grid
          item
          xs={12}
          md={2.5}
          sx={{
            bgcolor: "#AF9FCD",
            position: { xs: "fixed", md: "relative" },
            height: "100vh",
            zIndex: { xs: 999, md: 1 },
            boxShadow: { xs: menuOpen ? 10 : 0, md: 0 },
            "@media (max-width:800px)": {
              width: "70%",
              transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 400ms ease",
            },
          }}
          position={{ xs: "fixed", md: "relative" }}
          height={"100vh"}
          zIndex={{ xs: 999, md: 1 }}
          boxShadow={{ xs: menuOpen ? 10 : 0, md: 0 }}
        >
          {/* <SideBar setChat={setChat} closeMenu={() => setMenuOpen(false)} /> */}
        </Grid>
        <Grid item xs={12} md={9.5}>
          <Outlet context={{chat: chat, setChat: setChat, handleMobileView: setMenuOpen}} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
