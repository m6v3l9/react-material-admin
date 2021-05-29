import { createTheme as createMuiTheme } from "@material-ui/core";
import { createThemeComponents } from "./components";
import mixins from "./mixins";
import { darkPalette, lightPalette } from "./palette";
import shape from "./shape";
import transitions from "./transitions";
import typography from "./typography";

export const createTheme = (
  direction: "ltr" | "rtl",
  mode: "dark" | "light"
) => {
  const palette = mode === "dark" ? darkPalette : lightPalette;

  // Create base theme
  const baseTheme = createMuiTheme({
    direction,
    mixins,
    palette,
    shape,
    transitions,
    typography,
  });

  // Inject base theme to be used in components
  return createMuiTheme(
    {
      components: createThemeComponents(baseTheme),
    },
    baseTheme
  );
};
