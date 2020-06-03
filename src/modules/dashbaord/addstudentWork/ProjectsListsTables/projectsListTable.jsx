import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import { TablePagination } from "@material-ui/core";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#808080",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgb(0, 0, 0)",
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}))(Tooltip);

const PaginationTheme = withStyles({
  actions: {
    "& .MuiButtonBase-root:not([disabled])": {
      outline: "0 !important",
    },
  },
})(TablePagination);

const useStyles = makeStyles({
  containerDiv: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 60,
    marginBottom: 50,
  },
  table: {
    minWidth: 650,
  },
  viewAndEdit: {
    display: "flex",
    justifyContent: "center",
  },
  viewAndEditButton: {
    backgroundColor: "#808080",
    border: "none",
    width: 50,
    marginLeft: 5,
    marginRight: 5,
    outline: "0 !important",
  },
  iconsEditAndView: {
    color: "#ffffff",
    padding: 5,
  },
});

const ProjectsListTableComponent = (props) => {
  const { projectList } = props;
  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className={classes.containerDiv}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.cells}>
                Project Title
              </StyledTableCell>
              <StyledTableCell className={classes.cells} align="center">
                Batch
              </StyledTableCell>
              <StyledTableCell className={classes.cells} align="center">
                Technologies
              </StyledTableCell>
              <StyledTableCell className={classes.cells} align="center">
                Contact Person
              </StyledTableCell>
              <StyledTableCell className={classes.cells} align="center">
                Contact No
              </StyledTableCell>
              <StyledTableCell className={classes.cells} align="center">
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((projectList) => (
                <StyledTableRow key={projectList.projectName}>
                  <StyledTableCell
                    className={classes.cells}
                    component="th"
                    scope="row"
                  >
                    {projectList.projectName}
                  </StyledTableCell>
                  <StyledTableCell className={classes.cells} align="center">
                    {projectList.batch}
                  </StyledTableCell>
                  <StyledTableCell className={classes.cells} align="center">
                    {projectList.technologies}
                  </StyledTableCell>
                  <StyledTableCell className={classes.cells} align="center">
                    {projectList.contactPerson}
                  </StyledTableCell>
                  <StyledTableCell className={classes.cells} align="center">
                    {projectList.contctNo}
                  </StyledTableCell>
                  <StyledTableCell className={classes.cells} align="center">
                    <div className={classes.viewAndEdit}>
                      <LightTooltip title="View">
                        <button className={classes.viewAndEditButton}>
                          <VisibilityIcon
                            className={classes.iconsEditAndView}
                          />
                        </button>
                      </LightTooltip>
                      <LightTooltip title="Edit">
                        <button className={classes.viewAndEditButton}>
                          <EditIcon className={classes.iconsEditAndView} />
                        </button>
                      </LightTooltip>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <div>
          <PaginationTheme
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={projectList.length ? projectList.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      </TableContainer>
    </div>
  );
};

export default ProjectsListTableComponent;
