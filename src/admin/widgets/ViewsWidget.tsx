import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  {
    name: "Jan",
    ig: 4,
    fb: 2.4,
    tw: 2,
  },
  {
    name: "Feb",
    ig: 3,
    fb: 1.4,
    tw: 2.2,
  },
  {
    name: "Mar",
    ig: 6,
    fb: 4.8,
    tw: 2.3,
  },
  {
    name: "Avr",
    ig: 6.7,
    fb: 3.9,
    tw: 2,
  },
];

const views = "6.967.431";

const ViewsWidget = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography
          align="center"
          component="div"
          marginBottom={2}
          variant="body2"
        >
          {t("admin.home.views.unit")}
        </Typography>
        <Typography align="center" component="div" variant="h2">
          {views}
        </Typography>
        <Box sx={{ height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis
                axisLine={false}
                dataKey="name"
                interval="preserveStartEnd"
                tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  boxShadow: theme.shadows[3],
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.background.paper,
                }}
              />
              <Area
                type="monotone"
                dataKey="fb"
                fill={theme.palette.primary.main}
                fillOpacity={0.3}
                stroke={theme.palette.primary.main}
                strokeWidth={6}
                activeDot={{ r: 8 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
        <Card sx={{ bgcolor: "background.default", mt: 5 }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: "background.paper", mr: 2 }}>
              <DashboardIcon />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography component="div" variant="h6">
                {t("admin.home.views.action")}
              </Typography>
            </Box>
            <IconButton
              aria-label="Go to dashboard"
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/admin/dashboard`}
            >
              <ChevronRightIcon />
            </IconButton>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default ViewsWidget;
