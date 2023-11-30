import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import UserService from "../services/UserService.ts";
import ProfileAvatar from "./ProfileAvatar.tsx";
import Typography from "@mui/material/Typography";
import OtherService from "../services/OtherService.ts";
import ProfileDialog from "../components/ProfileDialog.tsx";
import Close from "@mui/icons-material/Close";
import TrainerService from "../services/TrainerService.ts";

const AdminFormUsers = (props) => {
  const [pageState, setPageState] = React.useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 0,
    pagesize: 10,
    deleted: 0,
    order: "",
    field: "",
  });

  const columns = [
    {
      width: 100,
      field: "id",
      headerName: "Avatar",
      renderCell: (params) => <ProfileAvatar id={params.row.id} />,
    },
    {
      width: 180,
      field: "name",
      headerName: "Név",
      renderCell: (params) => (
        <ProfileDialog
          userid={params.row.id}
          name={
            params.row.lastname +
            " " +
            params.row.firstname +
            " (" +
            OtherService.getAge(params.row.dateofbirth) +
            ")"
          }
        />
      ),
    },
    {
      width: 130,
      field: "city",
      headerName: "Lakhely",
      renderCell: (params) => <Typography>{params.row.city}</Typography>,
    },
    {
      width: 70,
      field: "gender",
      headerName: "Nem",
      renderCell: (params) => (
        <Typography>{params.row.gender ? "Nő" : "Férfi"}</Typography>
      ),
    },
    {
      width: 200,
      field: "email",
      headerName: "Email",
      renderCell: (params) => params.row.email,
    },
    {
      width: 170,
      field: "További műveletek",
      headerName: "További műveletek",
      disableColumnMenu: true,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Close
          sx={{ color: "red", margin: "auto", cursor: "pointer" }}
          onClick={() => {
            handleDeleteButton(params.row.id);
          }}
        />
      ),
    },
  ];

  const handleDeleteButton = (id) => {
    const userResponse = window.confirm(
      "Biztosan törölni szeretnéd a profilt?"
    );

    if (userResponse) {
      TrainerService.getTrainerByUserid(id).then((res) => {
        if (res.data.content.length > 0) {
          TrainerService.deleteTrainer(res.data.content[0].id);
        }
      });
      UserService.deleteUser(id);

      setPageState((old) => ({
        ...old,
        deleted: pageState.deleted + 1,
      }));
    }
  };

  const handleSortModelChange = async (model) => {
    if (model.length > 0) {
      setPageState((old) => ({
        ...old,
        order: model[0].sort,
        field: model[0].field,
      }));
    } else {
      setPageState((old) => ({
        ...old,
        order: "",
        field: "",
      }));
    }
  };

  React.useEffect(() => {
    setPageState((old) => ({ ...old, isLoading: true }));
    UserService.getAllUser(
      pageState.page,
      pageState.pagesize,
      pageState.field,
      pageState.order
    ).then((res) => {
      setPageState((old) => ({
        ...old,
        isLoading: false,
        data: res.data.content,
        total: res.data.totalElements,
      }));
    });
  }, [
    pageState.page,
    pageState.pagesize,
    pageState.deleted,
    pageState.order,
    pageState.field,
  ]);

  return (
    <Box sx={{ pb: 5, pt: 5 }} style={{ backgroundColor: "#332D2D" }}>
      <Container component="main" maxWidth="md">
        <Typography
          style={{ textAlign: "center", color: "white" }}
          sx={{ paddingBottom: 3 }}
          variant="h3"
        >
          Összes felhasználó
        </Typography>
        <DataGrid
          autoHeight
          rowHeight={80}
          rows={pageState.data}
          columns={columns}
          rowCount={pageState.total}
          loading={pageState.isLoading}
          rowsPerPageOptions={[10, 25, 50, 100]}
          pageSize={pageState.pagesize}
          pagination
          page={pageState.page}
          paginationMode="server"
          onPageChange={(newPage) => {
            setPageState((old) => ({ ...old, page: newPage }));
          }}
          onPageSizeChange={(pageSize) => {
            setPageState((old) => ({ ...old, pagesize: pageSize }));
          }}
          onSortModelChange={(model) => handleSortModelChange(model)}
          style={{ backgroundColor: "white" }}
        />
      </Container>
    </Box>
  );
};
export default AdminFormUsers;
