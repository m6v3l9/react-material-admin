import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import QueryWrapper from "../../core/components/QueryWrapper";
import SettingsDrawer from "../../core/components/SettingsDrawer";
import { useSettings } from "../../core/contexts/SettingsProvider";
import AdminDrawer from "../components/AdminDrawer";

const AdminLayout = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const { collapsed, open, toggleDrawer } = useSettings();

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AdminDrawer
        collapsed={collapsed}
        mobileOpen={open}
        onDrawerToggle={toggleDrawer}
        onSettingsToggle={handleSettingsToggle}
      />
      <SettingsDrawer
        onDrawerToggle={handleSettingsToggle}
        open={settingsOpen}
      />
      <Box component="main" sx={{ flexGrow: 1, pb: 3, px: { xs: 3, sm: 6 } }}>
        <Toolbar />
        <QueryWrapper>
          <Outlet />
        </QueryWrapper>
      </Box>
    </Box>
  );
};

export default AdminLayout;
