import React from "react";
import Box from "@mui/material/Box";
import { withRouter } from "react-router-dom";
import AdminFormUsers from "../components/AdminFormUsers.tsx";

const AdminPageUsers = (props) => {
  React.useEffect(() => {
    if (!props.isAdmin) {
      props.history.push("/home");
    }
  }, []);

  return (
    <Box>
      <AdminFormUsers />
    </Box>
  );
};
export default withRouter(AdminPageUsers);
