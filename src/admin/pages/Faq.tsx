import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";

const questions = [
  {
    title: "faq.questions.title1",
    answer: "faq.questions.answer1",
  },
  {
    title: "faq.questions.title2",
    answer: "faq.questions.answer2",
  },
  {
    title: "faq.questions.title3",
    answer: "faq.questions.answer3",
  },
  {
    title: "faq.questions.title4",
    answer: "faq.questions.answer4",
  },
  {
    title: "faq.questions.title5",
    answer: "faq.questions.answer5",
  },
  {
    title: "faq.questions.title6",
    answer: "faq.questions.answer6",
  },
];

const Faq = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar />
      </AdminAppBar>
      <Container maxWidth="sm">
        <Typography align="center" marginBottom={6} variant="h2">
          {t("faq.title")}
        </Typography>
        {questions.map((question, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="p" variant="h6">
                {t(question.title)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                {t(question.answer)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Link
          component={RouterLink}
          to={`/${process.env.PUBLIC_URL}/admin/help`}
          variant="body2"
        >
          {t("faq.noAnswerLink")}
        </Link>
      </Container>
    </React.Fragment>
  );
};

export default Faq;
