import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

type OverviewWidgetProps = {
  color?: "primary" | "warning" | "error";
  description: string;
  title: string;
};

const OverviewWidget = ({ description, title }: OverviewWidgetProps) => {
  return (
    <Card>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom component="div" variant="h3">
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
