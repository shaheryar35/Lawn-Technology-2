import React from "react";
import SimpleBottomNavigation from "../NavBarComponent/NavBar";
import { Container, Typography, TablePagination } from "@material-ui/core";
import RecentActivity from "../Charts/RecentActivity";
import RecentActivityTable from "../Table/RecentActivityTable";

export const Dashboard = ()=>  {
      const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    return (
      <div>
        <SimpleBottomNavigation />
        <Container>
          <Typography variant="h4" component="h3">
            Dashboard
          </Typography>

          <RecentActivity />


          <Typography variant="h4" component="h3">
            Recent Searches
          </Typography>
          <RecentActivityTable />
          <TablePagination
      component="div"
      count={100}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
        </Container>
      </div>
    );

}
export default Dashboard;
