import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const TableToolbar = ({ onFilterClick, onAddNewCustomer }: any) => {
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
      ]}
    >
      <Stack direction="row" spacing={2} sx={{ flex: "1 1 100%" }}>
        <Button variant="outlined" onClick={onAddNewCustomer}>Add new Customer</Button>
      </Stack>
      <Tooltip title="Filter list">
        <IconButton onClick={onFilterClick}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};
