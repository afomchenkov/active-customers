import { Fragment, useState } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

type TableToolbarProps = {
  onAddNewCustomerClick: (event: React.MouseEvent<HTMLElement>) => void;
  onFilterInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterInputValue: string;
};

export const TableToolbar = ({
  onAddNewCustomerClick,
  onFilterInputChange,
  filterInputValue,
}: TableToolbarProps): React.JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isPopperOpen = Boolean(anchorEl);
  const id = isPopperOpen ? "filter-by-industry" : undefined;

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
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
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
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
