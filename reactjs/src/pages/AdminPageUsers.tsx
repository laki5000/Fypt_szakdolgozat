import React from "react";
import Box from "@mui/material/Box";
import { withRouter } from "react-router-dom";
import DataGridForm from "../components/DataGridForm.tsx";

const AdminPageUsers = (props) => {
  React.useEffect(() => {
    if (!props.isAdmin) {
      props.history.push("/home");
    }
  }, []);

  return (
    <Box>
      <DataGridForm />
    </Box>
  );
};
export default withRouter(AdminPageUsers);
