import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import { Loader } from "./Loader";

type TableOverlayProps = {
  isLoading: boolean;
  error: string | null;
};

export const TableOverlay = ({
  isLoading,
  error,
}: TableOverlayProps): React.JSX.Element => {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: 600,
        alignContent: "center",
      }}
    >
      {isLoading && <Loader />}
      {error && (
        <Alert sx={{ width: "70%", margin: "0 auto" }} severity="error">
          {error}
        </Alert>
      )}
    </Paper>
  );
};
