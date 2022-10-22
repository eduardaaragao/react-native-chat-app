import {
  Center,
  extendTheme,
  Heading,
  HStack,
  NativeBaseProvider,
  Switch,
  Text,
  useColorMode,
} from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "./translations/i18next.config";
import LoginView from "./views/Authentication/Login/LoginView";

const i18next = i18n;

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// Extend  the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

const App = () => {
  const { t } = useTranslation();
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <Heading size="lg">{t("appName")}</Heading>
        <LoginView />
        <ToggleDarkMode />
      </Center>
    </NativeBaseProvider>
  );
};

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default App;
