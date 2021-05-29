import { PaletteMode } from "@material-ui/core";

const palette = {
  grey: {
    "50": "#F2F2F7",
    "100": "#F2F2F7",
    "200": "#D1D1D6",
    "300": "#C7C7CC",
    "400": "#AEAEB2",
    "500": "#8E8E93",
    "600": "#636366",
    "700": "#48484A",
    "800": "#2C2C2E",
    "900": "#1C1C1E",
  },
  contrastThreshold: 3,
};

export const darkPalette = {
  ...palette,
  mode: "dark" as PaletteMode,
  error: {
    main: "#ff6961",
  },
  info: {
    main: "#70D7FF",
  },
  primary: {
    main: "#409cff",
  },
  secondary: {
    main: "#1C1C1E",
  },
  success: {
    main: "#30DB5B",
  },
  warning: {
    main: "#ffb340",
  },
  text: {
    primary: "#f2f2f7",
    secondary: "#aeaeb2",
    disabled: "#636366",
  },
  divider: "#48484A",
  background: {
    paper: "#1C1C1E",
    default: "#2C2C2E",
  },
  action: {
    selectedOpacity: 0,
    selected: "#2C2C2E",
  },
};

export const lightPalette = {
  ...palette,
  mode: "light" as PaletteMode,
  error: {
    main: "#ff3b30",
  },
  info: {
    main: "#00714A",
  },
  primary: {
    main: "#007AFF",
  },
  secondary: {
    main: "#FFFFFF",
  },
  success: {
    main: "#34C759",
  },
  warning: {
    main: "#ffcc00",
  },
  text: {
    primary: "#1C1C1E",
    secondary: "#636366",
    disabled: "#C7C7CC",
  },
  divider: "#E5E5EA",
  background: {
    paper: "#fff",
    default: "#f2f2f7",
  },
  action: {
    selectedOpacity: 0,
    selected: "#f2f2f7",
  },
};
