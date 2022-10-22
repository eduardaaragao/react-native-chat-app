import { extendTheme } from "native-base";

const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: "dark",
  colors: {
    // Add new color
    primary: {
      50: "#e5effa",
      100: "#c0cdee",
      200: "#929ad2",
      300: "#595fff",
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});

export default theme;
