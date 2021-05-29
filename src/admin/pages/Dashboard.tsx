import Grid from "@material-ui/core/Grid";
import AttachMoney from "@material-ui/icons/AttachMoney";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import BudgetWidget from "../widgets/BudgetWidget";
import ExpectationsWidget from "../widgets/ExpectationsWidget";
import ExpensesWidget from "../widgets/ExpensesWidget";
import OverviewWidget from "../widgets/OverviewWidget";
import SalesByAgeWidget from "../widgets/SalesByAgeWidget";
import SalesByCategoryWidget from "../widgets/SalesByCategoryWidget";
import TeamProgressWidget from "../widgets/TeamProgressWidget";

const overviewItems = [
  {
    color: "primary" as "primary",
    icon: PersonIcon,
    unit: "dashboard.overview.visits",
    value: "204 000",
  },
  {
    color: "warning" as "warning",
    icon: AttachMoney,
    unit: "dashboard.overview.sales",
    value: "515 000",
  },
  {
    color: "error" as "error",
    icon: ShoppingBasket,
    unit: "dashboard.overview.orders",
    value: "14 000",
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
          <Grid key={index} item xs={12} md={4}>
            <OverviewWidget
              color={item.color}
              description={t(item.unit)}
              icon={<item.icon />}
              title={item.value}
            />
          </Grid>
        ))}
        <Grid item xs={12} lg={8}>
          <ExpectationsWidget />
        </Grid>
        <Grid item xs={12} lg={4}>
          <SalesByCategoryWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <ExpensesWidget />
        </Grid>
        <Grid item xs={12} md={8}>
          <TeamProgressWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <BudgetWidget />
        </Grid>
        <Grid item xs={12} md={8}>
          <SalesByAgeWidget />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
