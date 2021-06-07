import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import LinearProgress from "@material-ui/core/LinearProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

const targets = [
  { name: "Views", nameKey: "admin.home.targets.views", value: 75 },
  { name: "Followers", nameKey: "admin.home.targets.followers", value: 50 },
  { name: "Income", nameKey: "admin.home.targets.income", value: 25 },
];

const PersonalTargetsWidget = () => {
  const { t } = useTranslation();

  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader title={t("admin.home.targets.title")} />
      <CardContent>
        <List>
          {targets.map((target) => (
            <ListItem disableGutters key={target.name}>
              <ListItemText>
                <Box sx={{ display: "flex", mb: 1 }}>
                  <Typography component="div" variant="h6">
                    {t(target.nameKey)}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Typography component="div" variant="h6">
                    {`${target.value}%`}
                  </Typography>
                </Box>
                <LinearProgress
                  aria-label={`${t(target.nameKey)} progress`}
                  sx={{
                    color:
                      target.value >= 75
                        ? "primary.main"
                        : target.value <= 25
                        ? "error.main"
                        : "warning.main",
                  }}
                  color="inherit"
                  variant="determinate"
                  value={target.value}
                />
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PersonalTargetsWidget;
