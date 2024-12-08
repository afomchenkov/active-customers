import { memo } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const AppHeader = (): React.JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Customers Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default memo(AppHeader);
