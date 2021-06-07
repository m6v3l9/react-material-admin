import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { useTheme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import {
  Legend,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const SalesByAgeWidget = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = [
    {
      name: "18-39",
      uv: 30,
      fill: theme.palette.text.secondary,
    },
    {
      name: "40-59",
      uv: 45,
      fill: theme.palette.error.main,
    },
    {
      name: "60-79",
      uv: 60,
      fill: theme.palette.warning.main,
    },
    {
      name: "80+",
      uv: 75,
      fill: theme.palette.primary.main,
    },
  ];

  return (
    <Card>
      <CardHeader title={t("dashboard.salesByAge.title")} />
      <CardContent>
        <ResponsiveContainer width="99%" height={244}>
          <RadialBarChart
            barGap={1}
            innerRadius="15%"
            outerRadius="100%"
            barSize={16}
            data={data}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              dataKey={"value"}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background={{ fill: theme.palette.background.default }}
              cornerRadius={16}
              label={{ position: "insideStart", fill: "#fff", fontWeight: 700 }}
              dataKey="uv"
            />
            <Legend
              align="right"
              wrapperStyle={{ fontWeight: 700 }}
              iconSize={16}
              layout="vertical"
              verticalAlign="middle"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SalesByAgeWidget;
