import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Customer, CustomerProject } from "../../types";
import { parseDateString } from "../../utils";

type CustomersTableProjectsProps = {
  row: Customer;
  open: boolean;
};

type ProjectsTableProps = {
  projects: CustomerProject[];
};

const ProjectsTable = ({ projects }: ProjectsTableProps): React.JSX.Element => {
  return (
    <Table sx={{ marginTop: 1 }} size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell>Project name</TableCell>
          <TableCell>Contact</TableCell>
          <TableCell align="right">Start date</TableCell>
          <TableCell align="right">End date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell component="th" scope="row">
              {project.name}
            </TableCell>
            <TableCell>{project.contact}</TableCell>
            <TableCell align="right">
              {parseDateString(project.start_date)}
            </TableCell>
            <TableCell align="right">
              {parseDateString(project.end_date)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const CustomersTableProjects = ({
  row,
  open,
}: CustomersTableProjectsProps): React.JSX.Element => {
  const { about, projects } = row;

  return (
    <TableRow sx={{ backgroundColor: "#e7e7e7" }}>
      <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="subtitle1" gutterBottom component="div">
              About Company
            </Typography>
            <Paper elevation={0} sx={{ margin: 1, backgroundColor: "inherit" }}>
              {about || "No data"}
            </Paper>
            <Divider />
            <Typography variant="subtitle1" gutterBottom component="div">
              Projects
            </Typography>
            {!!projects.length ? (
              <ProjectsTable projects={projects} />
            ) : (
              <Paper
                elevation={0}
                sx={{ margin: 1, backgroundColor: "inherit" }}
              >
                No data
              </Paper>
            )}
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
