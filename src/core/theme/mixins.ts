const mixins = {
  toolbar: {
    minHeight: 80,
    "@media (min-width:600px)": {
      minHeight: 104,
    },
    "@media (min-width:0px) and (orientation: landscape)": {
      minHeight: 80,
    },
  },
};

export default mixins;
