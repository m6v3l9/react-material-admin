import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTranslation } from "react-i18next";

interface SelectToolbarProps {
  onCancel: () => void;
  onDelete: (userIds: string[]) => void;
  processing: boolean;
  selected: string[];
}

const SelectToolbar = ({
  onCancel,
  onDelete,
  processing,
  selected,
}: SelectToolbarProps) => {
  const { t } = useTranslation();

  const numSelected = selected.length;

  return (
    <Toolbar sx={{ ml: 1, px: { xs: 3, sm: 6 } }}>
      <IconButton edge="start" onClick={onCancel}>
        <CloseIcon />
      </IconButton>
      <Typography
        color="inherit"
        sx={{ flexGrow: 1 }}
        variant="h6"
        component="div"
      >
        {numSelected} {t("common.selected")}
      </Typography>

      {numSelected > 0 && (
        <Tooltip title={t("common.delete") as string}>
          <IconButton disabled={processing} onClick={() => onDelete(selected)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default SelectToolbar;
