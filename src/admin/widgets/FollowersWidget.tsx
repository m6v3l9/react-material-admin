import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import React from "react";
import { useTranslation } from "react-i18next";

const socials = [
  {
    bgcolor: "primary.main",
    icon: <ThumbUpIcon sx={{ color: "#fff" }} />,
    name: "Likes",
    trend: <ArrowDropUpIcon sx={{ color: "success.main" }} />,
    unitKey: "admin.home.followers.units.likes",
    value: "26,789",
  },
  {
    bgcolor: "error.main",
    icon: <FavoriteIcon style={{ color: "#fff" }} />,
    name: "Love",
    trend: <ArrowRightIcon sx={{ color: "action.disabled" }} />,
    unitKey: "admin.home.followers.units.love",
    value: "6,754",
  },
  {
    bgcolor: "warning.main",
    icon: <EmojiEmotionsIcon style={{ color: "#fff" }} />,
    name: "Smiles",
    trend: <ArrowDropDownIcon sx={{ color: "error.main" }} />,
    unitKey: "admin.home.followers.units.smiles",
    value: "52,789",
  },
];

const FollowersWidget = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {socials.map((social) => (
        <Card key={social.name} sx={{ mb: 2 }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              aria-label={`${social.name} avatar`}
              sx={{ bgcolor: social.bgcolor, mr: 2 }}
            >
              {social.icon}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography component="div" variant="h6">
                {social.value}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                {t(social.name)}
              </Typography>
            </Box>
            {social.trend}
          </CardContent>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default FollowersWidget;
