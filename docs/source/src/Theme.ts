import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#C5C5C5",
    },
    background: {
      default: "#161513",
    },
  },
  typography: {
    fontFamily: ['"Helvetica Neue"'].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          scrollPaddingTop: "100px", // Adiciona padding no scroll
        },
        // Estilos específicos para cada seção
        "#sobre, #skills, #projetos": {
          scrollMarginTop: "100px", // Adiciona margem no scroll
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
