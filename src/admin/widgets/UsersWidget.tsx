import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PersonIcon from "@material-ui/icons/Person";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const users = [
  {
    id: "1",
    firstName: "Rhys",
    gender: "M",
    lastName: "Arriaga",
    role: "Admin",
  },
  {
    id: "2",
    firstName: "Laura",
    gender: "F",
    lastName: "Core",
    role: "Member",
  },
  {
    id: "3",
    firstName: "Joshua",
    gender: "M",
    lastName: "Jagger",
    role: "Member",
  },
];

const UsersWidget = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader title={t("dashboard.users.title")} />
      <CardContent>
        <List>
          {users.map((user) => (
            <ListItem disableGutters key={user.id}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${user.lastName} ${user.firstName}`}
                primaryTypographyProps={{
                  fontWeight: theme.typography.fontWeightMedium,
                }}
                secondary={user.role}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Go to user details"
                  component={RouterLink}
                  edge="end"
                  to={`/${process.env.PUBLIC_URL}/admin/user-management`}
                >
                  <ChevronRightIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UsersWidget;
