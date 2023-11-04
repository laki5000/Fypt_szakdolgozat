import React from "react";
import AdminMenu from "../components/adminMenu";
import LineWithTitle from "../components/lineWithTitle";

const AdminPage = (props) => {
  return (
    <div>
      <div>
        <LineWithTitle title="Admin menü"/>
      </div>
      <div>
        <AdminMenu/>
      </div>
    </div>
  );
}
export default AdminPage;  