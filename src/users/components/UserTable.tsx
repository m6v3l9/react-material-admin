import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PersonIcon from "@material-ui/icons/Person";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Empty from "../../core/components/Empty";
import * as selectUtils from "../../core/utils/selectUtils";
import { User } from "../types/user";

interface HeadCell {
  id: string;
  label: string;
  align: "center" | "left" | "right";
}

const headCells: HeadCell[] = [
  {
    id: "user",
    align: "left",
    label: "userManagement.table.headers.user",
  },
  {
    id: "gender",
    align: "center",
    label: "userManagement.table.headers.gender",
  },
  {
    id: "role",
    align: "center",
    label: "userManagement.table.headers.role",
  },
  {
    id: "status",
    align: "center",
    label: "userManagement.table.headers.status",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead({
  onSelectAllClick,
  numSelected,
  rowCount,
}: EnhancedTableProps) {
  const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow sx={{ "& th": { border: 0 } }}>
        <TableCell sx={{ py: 0 }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all users",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align} sx={{ py: 0 }}>
            {t(headCell.label)}
          </TableCell>
        ))}
        <TableCell align="right" sx={{ py: 0 }}>
          {t("userManagement.table.headers.actions")}
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

type UserRowProps = {
  index: number;
  onCheck: (id: string) => void;
  onDelete: (userIds: string[]) => void;
  onEdit: (user: User) => void;
  processing: boolean;
  selected: boolean;
  user: User;
};

const UserRow = ({
  index,
  onCheck,
  onDelete,
  onEdit,
  processing,
  selected,
  user,
}: UserRowProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();

  const labelId = `enhanced-table-checkbox-${index}`;
  const openActions = Boolean(anchorEl);

  const handleOpenActions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseActions = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleCloseActions();
    onDelete([user.id]);
  };

  const handleEdit = () => {
    handleCloseActions();
    onEdit(user);
  };

  return (
    <TableRow
      aria-checked={selected}
      tabIndex={-1}
      key={user.id}
      selected={selected}
      sx={{ "& td": { bgcolor: "background.paper", border: 0 } }}
    >
      <TableCell
        padding="checkbox"
        sx={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}
      >
        <Checkbox
          color="primary"
          checked={selected}
          inputProps={{
            "aria-labelledby": labelId,
          }}
          onClick={() => onCheck(user.id)}
        />
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ mr: 3 }}>
            <PersonIcon />
          </Avatar>
          <Box>
            <Typography component="div" variant="h6">
              {`${user.lastName} ${user.firstName}`}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {user.email}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="center">{user.gender}</TableCell>
      <TableCell align="center">{user.role}</TableCell>
      <TableCell align="center">
        {user.disabled ? (
          <Chip label="Disabled" />
        ) : (
          <Chip color="primary" label="Active" />
        )}
      </TableCell>
      <TableCell
        align="right"
        sx={{ borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}
      >
        <IconButton
          id="user-row-menu-button"
          aria-label="user actions"
          aria-controls="user-row-menu"
          aria-haspopup="true"
          aria-expanded={openActions ? "true" : "false"}
          disabled={processing}
          onClick={handleOpenActions}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="user-row-menu"
          anchorEl={anchorEl}
          aria-labelledby="user-row-menu-button"
          open={openActions}
          onClose={handleCloseActions}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleEdit}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>{" "}
            {t("common.edit")}
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>{" "}
            {t("common.delete")}
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

type UserTableProps = {
  processing: boolean;
  onDelete: (userIds: string[]) => void;
  onEdit: (user: User) => void;
  onSelectedChange: (selected: string[]) => void;
  selected: string[];
  users?: User[];
};

const UserTable = ({
  onDelete,
  onEdit,
  onSelectedChange,
  processing,
  selected,
  users = [],
}: UserTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = selectUtils.selectAll(users);
      onSelectedChange(newSelecteds);
      return;
    }
    onSelectedChange([]);
  };

  const handleClick = (id: string) => {
    let newSelected: string[] = selectUtils.selectOne(selected, id);
    onSelectedChange(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  if (users.length === 0) {
    return <Empty title="No user yet" />;
  }

  return (
    <React.Fragment>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          sx={{
            minWidth: 600,
            borderCollapse: "separate",
            borderSpacing: "0 1rem",
          }}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={users.length}
          />
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <UserRow
                  index={index}
                  key={user.id}
                  onCheck={handleClick}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  processing={processing}
                  selected={isSelected(user.id)}
                  user={user}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
};

export default UserTable;
