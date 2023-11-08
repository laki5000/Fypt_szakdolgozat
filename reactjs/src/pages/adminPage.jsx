import React, { useEffect } from "react";
import AdminMenu from "../components/adminMenu";

const AdminPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <AdminMenu />
    </div>
  );
};
export default AdminPage;
