import { memo } from "react";
import Typography from "@mui/material/Typography";

const AppFooter = (): React.JSX.Element => {
  return (
    <Typography variant="body2" color="textSecondary" align="center" marginTop={'3em'}>
      {"Customers Application"}
    </Typography>
  );
};

export default memo(AppFooter);
