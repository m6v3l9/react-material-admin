import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import useTheme from "@material-ui/core/styles/useTheme";
import { useTranslation } from "react-i18next";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

type ProfileCompletionProps = {
  value: number;
};

const ProfileCompletion = ({ value }: ProfileCompletionProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Card sx={{ mt: 6 }}>
      <CardHeader title={t("profile.completion.title")} />
      <CardContent>
        <ResponsiveContainer width="99%" height={260}>
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

export default ProfileCompletion;
