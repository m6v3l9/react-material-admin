import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../auth/contexts/AuthProvider";

const AchievementWidget = () => {
  const { userInfo } = useAuth();
  const { t } = useTranslation();

  return (
    <Card sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main", mb: 3 }}>
          <StarIcon color="primary" />
        </Avatar>
        <Typography gutterBottom variant="h5" component="div">
          {t("admin.home.achievement.title", { name: userInfo?.firstName })}
        </Typography>
        <Typography marginBottom={3} variant="body2">
          {t("admin.home.achievement.description", {
            progress: userInfo?.progress,
          })}
        </Typography>
        <Button
          color="secondary"
          component={RouterLink}
          to={`/${process.env.PUBLIC_URL}/admin/profile`}
          variant="contained"
        >
          {t("admin.home.achievement.action")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AchievementWidget;
