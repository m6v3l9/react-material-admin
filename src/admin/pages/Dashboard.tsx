import Grid from "@material-ui/core/Grid";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import React from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import ActivityWidget from "../widgets/ActivityWidget";
import BudgetWidget from "../widgets/BudgetWidget";
import CircleProgressWidget from "../widgets/CircleProgressWidget";
import OverviewWidget from "../widgets/OverviewWidget";
import ProgressWidget from "../widgets/ProgressWidget";
import SalesByAgeWidget from "../widgets/SalesByAgeWidget";
import SalesByCategoryWidget from "../widgets/SalesByCategoryWidget";
import SalesHistoryWidget from "../widgets/SalesHistoryWidget";
import TeamProgressWidget from "../widgets/TeamProgressWidget";
import UsersWidget from "../widgets/UsersWidget";

const overviewItems = [
  {
    unit: "dashboard.overview.visits",
    value: "20 700",
  },
  {
    unit: "dashboard.overview.sales",
    value: "$ 1 550",
  },
  {
    unit: "dashboard.overview.orders",
    value: "149",
  },
  {
    unit: "dashboard.overview.users",
    value: "657",
  },
];

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title={t("dashboard.title")} />
      </AdminAppBar>
      <Grid container spacing={2}>
        {overviewItems.map((item, index) => (
          <Grid key={index} item xs={6} md={3}>
            <OverviewWidget description={t(item.unit)} title={item.value} />
          </Grid>
        ))}
        <Grid item xs={12} md={8}>
          <ActivityWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <BudgetWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <SalesHistoryWidget value={567} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProgressWidget
            avatar={<SupervisorAccountIcon />}
            mb={2}
            title={t("dashboard.visitProgress.title")}
            value={75}
          />
          <ProgressWidget
            avatar={<ShoppingBasketIcon />}
            mb={2}
            title={t("dashboard.orderProgress.title")}
            value={50}
          />
          <ProgressWidget
            avatar={<AttachMoneyIcon />}
            title={t("dashboard.salesProgress.title")}
            value={25}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CircleProgressWidget
            height={204}
            title={t("dashboard.progress.title")}
            value={75}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <UsersWidget />
        </Grid>
        <Grid item xs={12} md={8}>
          <TeamProgressWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <SalesByCategoryWidget />
        </Grid>
        <Grid item xs={12} md={8}>
          <SalesByAgeWidget />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
