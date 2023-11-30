import React from "react";
import AdminForm from "../components/AdminForm.tsx";
import Box from "@mui/material/Box";
import { withRouter } from "react-router-dom";

const AdminPage = (props) => {
  React.useEffect(() => {
    if (!props.isAdmin) {
      props.history.push("/home");
    }
  }, []);

  return (
    <Box>
      <AdminForm />
    </Box>
  );
};
export default withRouter(AdminPage);
