import { useTranslation } from "react-i18next";
import {
  Legend,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { useTheme } from "@material-ui/core/styles";

const data = [
  {
    subject: "Marketing",
    A: 120,
    B: 110,
  },
  {
    subject: "Research",
    A: 98,
    B: 130,
  },
  {
    subject: "Sales",
    A: 86,
    B: 130,
  },
  {
    subject: "Ops",
    A: 99,
    B: 100,
  },
  {
    subject: "HR",
    A: 85,
    B: 90,
  },
  {
    subject: "Dev",
    A: 65,
    B: 85,
  },
];

const BudgetWidget = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader title={t("dashboard.budget.title")} />
      <CardContent>
        <ResponsiveContainer width="99%" height={260}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: theme.palette.text.secondary, fontSize: 14 }}
            />
            <Radar
              name={t("dashboard.budget.legend.expected")}
              dataKey="B"
              stroke={theme.palette.warning.main}
              strokeWidth={8}
              fill={theme.palette.warning.main}
            />
            <Radar
              name={t("dashboard.budget.legend.actual")}
              dataKey="A"
              stroke={theme.palette.primary.main}
              strokeWidth={8}
              fill={theme.palette.primary.main}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 16,
                boxShadow: theme.shadows[3],
                backgroundColor: theme.palette.background.paper,
                borderColor: theme.palette.background.paper,
              }}
            />
            <Legend wrapperStyle={{ fontSize: 14 }} />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BudgetWidget;
