import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import GlobalStyles from "@material-ui/core/GlobalStyles";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useState } from "react";
import Logo from "./Logo";
import SettingsDrawer from "./SettingsDrawer";

type BoxedLayoutProps = {
  children: React.ReactNode;
};

const BoxedLayout = ({ children }: BoxedLayoutProps) => {
  const theme = useTheme();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Container component="main" maxWidth="xs">
      <GlobalStyles
        styles={{ body: { backgroundColor: theme.palette.background.paper } }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Logo sx={{ mb: 2 }} />
        {children}
        <Box>
          <IconButton
            color="primary"
            aria-label="settings"
            component="span"
            onClick={handleSettingsToggle}
          >
            <SettingsIcon />
          </IconButton>
          <SettingsDrawer
            onDrawerToggle={handleSettingsToggle}
            open={settingsOpen}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default BoxedLayout;
