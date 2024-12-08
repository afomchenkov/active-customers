import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loader = (): React.JSX.Element => {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
};
