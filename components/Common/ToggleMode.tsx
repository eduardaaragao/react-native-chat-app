import { HStack, Switch, Text, useColorMode } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";

// Color Switch Component
const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { t } = useTranslation();

  return (
    <HStack space={2} alignItems="center">
      <Text>{t("darkMode")}</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>{t("lightMode")}</Text>
    </HStack>
  );
};

export default ToggleMode;
