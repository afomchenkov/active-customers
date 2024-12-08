import { Fragment, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

export const TableToolbar = ({
  onAddNewCustomerClick,
  onFilterInputChange,
  filterInputValue,
}: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isPopperOpen = Boolean(anchorEl);
  const id = isPopperOpen ? "simple-popper" : undefined;

  // event: React.MouseEvent<HTMLElement>
  const handleFilterClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Fragment>
      <Popper
        id={id}
        open={isPopperOpen}
        anchorEl={anchorEl}
        sx={{ zIndex: 10 }}
      >
        <ClickAwayListener onClickAway={handleFilterClick}>
          <Box
            sx={{
              border: "1px solid #cbcbcb",
              borderRadius: "5px",
              p: 2,
              bgcolor: "background.paper",
            }}
          >
            <TextField
              id="standard-basic"
              label="Filter by industry"
              variant="standard"
              onChange={onFilterInputChange}
              value={filterInputValue}
            />
          </Box>
        </ClickAwayListener>
      </Popper>
      <Toolbar
        sx={[
          {
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          },
        ]}
      >
        <Stack direction="row" spacing={2} sx={{ flex: "1 1 100%" }}>
          <Button variant="outlined" onClick={onAddNewCustomerClick}>
            Add new Customer
          </Button>
        </Stack>
        <Tooltip title="Filter By Industry" placement="left">
          <IconButton onClick={handleFilterClick} aria-describedby={id}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </Fragment>
  );
};
