import AdminMenu from "../components/adminMenu";
import LineWithTitle from "../components/lineWithTitle";

export default function AdminPage() {
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
  