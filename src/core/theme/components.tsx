import { Theme } from "@material-ui/core";
import CheckCircle from "@material-ui/icons/CheckCircle";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

export const createThemeComponents = (theme: Theme) => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(3),
        "&.Mui-expanded:last-of-type": {
          marginBottom: theme.spacing(3),
        },
        "&:before": {
          content: "none",
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: theme.spacing(1, 3, 3),
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
      },
      content: {
        margin: 0,
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        "&.MuiAppBar-colorDefault": {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        color: "inherit",
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        padding: "16px 24px",
        textTransform: "none" as any,
      },
      label: {
        fontWeight: theme.typography.fontWeightMedium,
      },
      text: {
        padding: "16px 16px",
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true, // No more ripple, on the whole application
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        justifyContent: "flex-end",
        padding: "0 24px 24px 24px",
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: "24px 24px 0 24px",
      },
    },
  },
  MuiCheckbox: {
    defaultProps: {
      checkedIcon: <CheckCircle />,
      indeterminateIcon: <RemoveCircle />,
      icon: <RadioButtonUnchecked />,
    },
  },
  MuiChip: {
    styleOverrides: {
      label: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 24,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: 24,
        "& .MuiTypography-root": {
          fontSize: "1.25rem",
        },
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        border: "none; !important",
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        lineHeight: "inherit",
        textTransform: "none" as any,
        "&.MuiFab-secondary": {
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
      },
    },
  },
  MuiInternalClock: {
    styleOverrides: {
      clock: {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiInternalDateTimePickerTabs: {
    styleOverrides: {
      tabs: {
        backgroundColor: theme.palette.background.default,
        "& MuiTabs-indicator": {
          height: 0,
        },
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        height: 12,
      },
    },
  },
  MuiList: {
    defaultProps: {
      disablePadding: true,
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        paddingTop: 12,
        paddingBottom: 12,
        "&.Mui-selected": {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 40,
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        paddingRight: 8,
        paddingLeft: 8,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: 12,
        paddingBottom: 12,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.paper} inset`,
        },
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },
  MuiRadio: {
    defaultProps: {
      color: "primary" as "primary",
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        borderRadius: "50rem",
        padding: "10px 16px",
        maxWidth: "initial !important",
        minHeight: "initial !important",
        minWidth: "initial !important",
        textTransform: "none" as any,
        "&.Mui-selected": {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: "24px 16px",
      },
      sizeSmall: {
        padding: "12px 16px",
      },
    },
  },
  MuiTimeline: {
    styleOverrides: {
      root: {
        padding: "0 0 0 16px",
      },
    },
  },
  MuiTimelineContent: {
    styleOverrides: {
      root: {
        padding: "12px 16px",
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        color: theme.palette.text.secondary,
        borderRadius: "12px !important",
        border: "none",
        textTransform: "none" as any,
        "&.Mui-selected": {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.default,
        padding: 5,
      },
    },
  },
});
