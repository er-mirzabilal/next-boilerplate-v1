export const MuiTextField = {
  styleOverrides: {
    root: {
      "& label.Mui-focused": {
        color: "#525B78",
      },

      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          //   borderColor: 'red',
        },
        "&:hover fieldset": {
          // borderColor: 'rgba(243, 82, 63, 1)'
        },
        "&.Mui-focused fieldset": {
          borderColor: "#0F1117",
          outline: "none",
        },
        color: "white",
        fontSize: "22px",
        fontFamily: "Inter",
        fontWeight: 500,
        // lineHeight: '25px',
      },
    },
  },
};
