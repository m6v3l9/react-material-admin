import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { useTheme } from "@material-ui/core/styles";

const data = [
  {
    name: "Jan",
    ex: 4000,
    in: 2400,
  },
  {
    name: "Feb",
    ex: 3000,
    in: 2398,
  },
  {
    name: "Mar",
    ex: 2000,
    in: 6800,
  },
  {
    name: "Apr",
    ex: 2780,
    in: 3908,
  },
  {
    name: "May",
    ex: 1890,
    in: 4800,
  },
  {
    name: "Jun",
    ex: 2390,
    in: 3800,
  },
];

const ExpensesWidget = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader title={t("dashboard.expenses.title")} />
      <CardContent>
        <ResponsiveContainer width="99%" height={260}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <XAxis
              axisLine={false}
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
              tickLine={false}
              dataKey="name"
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
            <Bar
              name={t("dashboard.expenses.legend.internal")}
              dataKey="in"
              stackId="a"
              fill={theme.palette.primary.main}
              radius={[0, 0, 50, 50]}
            />
            <Bar
              name={t("dashboard.expenses.legend.external")}
              dataKey="ex"
              stackId="a"
              fill={theme.palette.warning.main}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ExpensesWidget;
