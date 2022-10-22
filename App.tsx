import { Center, NativeBaseProvider } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import theme from "./theme/theme.config";
import i18n from "./translations/i18next.config";
import LoginView from "./views/Authentication/Login/LoginView";

const i18next = i18n;

// Extend  the theme

const App = () => {
  const { t } = useTranslation();
  return (
    <NativeBaseProvider theme={theme}>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <LoginView />
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
