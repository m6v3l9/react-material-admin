import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import useTheme from "@material-ui/core/styles/useTheme";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

type CircleProgressWidgetProps = {
  height?: number;
  title: string;
  value: number;
};

const CircleProgressWidget = ({
  height = 120,
  title,
  value,
}: CircleProgressWidgetProps) => {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <ResponsiveContainer width="99%" height={height}>
          <RadialBarChart
            innerRadius="85%"
            outerRadius="85%"
            barSize={32}
            data={[{ fill: theme.palette.primary.main, value }]}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              dataKey={"value"}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              cornerRadius={16}
              label={{
                fill: theme.palette.text.primary,
                fontSize: theme.typography.h1.fontSize,
                fontWeight: theme.typography.h1.fontWeight,
                position: "center",
              }}
              background={{ fill: theme.palette.background.default }}
              dataKey="value"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CircleProgressWidget;
