import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const meetings = [
  {
    id: "1",
    person: "Emmy Anderson",
    date: "8:00 - 10:00",
    image: "img/portrait-1.jpg",
  },
  {
    id: "2",
    person: "Joy McGlynn",
    date: "11:00 - 12:00",
    image: "img/portrait-2.jpg",
  },
  {
    id: "3",
    person: "Mara Dach",
    date: "14:00 - 15:00",
    image: "img/portrait-3.jpg",
  },
];

const MeetingWidgets = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Typography component="h2" marginBottom={3} variant="h4">
        {t("admin.home.meeting.title")}
      </Typography>
      {meetings.map((meeting) => (
        <Card key={meeting.id} sx={{ mb: 2 }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt={`${meeting.person} avatar`}
              src={meeting.image}
              sx={{ mr: 2 }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography component="div" variant="h6">
                {meeting.person}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                {meeting.date}
              </Typography>
            </Box>
            <IconButton
              aria-label="Go to meeting details"
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/admin/calendar`}
            >
              <ChevronRightIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
      <Button
        aria-label="Add new meeting"
        color="secondary"
        component={RouterLink}
        fullWidth
        to={`/${process.env.PUBLIC_URL}/admin/calendar`}
        variant="contained"
      >
        <AddIcon />
      </Button>
    </React.Fragment>
  );
};

export default MeetingWidgets;
