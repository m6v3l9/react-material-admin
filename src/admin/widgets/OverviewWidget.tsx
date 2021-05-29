import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

type OverviewWidgetProps = {
  color?: "primary" | "warning" | "error";
  description: string;
  icon: React.ReactNode;
  title: string;
};

const OverviewWidget = ({
  color = "primary",
  description,
  icon,
  title,
}: OverviewWidgetProps) => {
  const theme = useTheme();
  const themeColor = theme.palette[color].main;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            aria-label="avatar"
            sx={{ bgcolor: themeColor, color: "background.paper" }}
          >
            {icon}
          </Avatar>
        }
      />
      <CardContent>
        <Typography
          color={themeColor}
          gutterBottom
          component="div"
          variant="h3"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OverviewWidget;
