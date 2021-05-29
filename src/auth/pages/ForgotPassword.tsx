import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BoxedLayout from "../../core/components/BoxedLayout";
import { useSnackbar } from "../../core/contexts/SnackbarProvider";
import { useForgotPassword } from "../hooks/useForgotPassword";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const { t } = useTranslation();

  const { forgotPassword, isLoading } = useForgotPassword();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("common.validations.email"))
        .required(t("common.validations.required")),
    }),
    onSubmit: ({ email }) => handleForgotPassword(email),
  });

  const handleForgotPassword = async (email: string) => {
    forgotPassword({ email })
      .then(() => {
        snackbar.success(t("auth.forgotPassword.notifications.success"));
        navigate(`/${process.env.PUBLIC_URL}/forgot-password-submit`);
      })
      .catch(() => {
        snackbar.error(t("common.errors.unexpected.subTitle"));
      });
  };

  return (
    <BoxedLayout>
      <Typography component="h1" variant="h5">
        {t("auth.forgotPassword.title")}
      </Typography>
      <Typography marginTop={3}>{t("auth.forgotPassword.subTitle")}</Typography>
      <Box
        component="form"
        marginTop={3}
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label={t("auth.forgotPassword.form.email.label")}
          name="email"
          autoComplete="email"
          autoFocus
          disabled={isLoading}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isLoading}
          loading={isLoading}
          sx={{ mt: 2 }}
        >
          {t("auth.forgotPassword.form.action")}
        </LoadingButton>
        <Button
          component={RouterLink}
          to={`/${process.env.PUBLIC_URL}/login`}
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {t("auth.forgotPassword.form.back")}
        </Button>
      </Box>
    </BoxedLayout>
  );
};

export default ForgotPassword;
