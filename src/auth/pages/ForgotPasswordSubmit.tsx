import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BoxedLayout from "../../core/components/BoxedLayout";
import { useSnackbar } from "../../core/contexts/SnackbarProvider";
import { useForgotPasswordSubmit } from "../hooks/useForgotPasswordSubmit";

const ForgotPasswordSubmit = () => {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const { t } = useTranslation();

  const { forgotPasswordSubmit, isLoading } = useForgotPasswordSubmit();

  const formik = useFormik({
    initialValues: {
      code: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().required(t("common.validations.required")),
      newPassword: Yup.string().required(t("common.validations.required")),
      confirmPassword: Yup.string().required(t("common.validations.required")),
    }),
    onSubmit: ({ code, newPassword }) =>
      handleSubmitPassword(code, newPassword),
  });

  const handleSubmitPassword = async (code: string, newPassword: string) => {
    forgotPasswordSubmit({ code, newPassword })
      .then(() => {
        snackbar.success(t("auth.forgotPasswordSubmit.notifications.success"));
        navigate(`/${process.env.PUBLIC_URL}/login`);
      })
      .catch(() => {
        snackbar.error(t("common.errors.unexpected.subTitle"));
      });
  };

  return (
    <BoxedLayout>
      <Typography component="h1" variant="h5">
        {t("auth.forgotPasswordSubmit.title")}
      </Typography>
      <Typography marginTop={3}>
        {t("auth.forgotPasswordSubmit.subTitle")}
      </Typography>
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
          id="code"
          label={t("auth.forgotPasswordSubmit.form.code.label")}
          name="code"
          autoFocus
          disabled={isLoading}
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.touched.code && Boolean(formik.errors.code)}
          helperText={formik.touched.code && formik.errors.code}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="newPassword"
          label={t("auth.forgotPasswordSubmit.form.newPassword.label")}
          type="password"
          id="newPassword"
          disabled={isLoading}
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label={t("auth.forgotPasswordSubmit.form.confirmPassword.label")}
          type="password"
          id="confirmPassword"
          disabled={isLoading}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
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
          {t("auth.forgotPasswordSubmit.form.action")}
        </LoadingButton>
        <Button
          component={Link}
          to={`/${process.env.PUBLIC_URL}/login`}
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {t("auth.forgotPasswordSubmit.form.back")}
        </Button>
      </Box>
    </BoxedLayout>
  );
};

export default ForgotPasswordSubmit;
