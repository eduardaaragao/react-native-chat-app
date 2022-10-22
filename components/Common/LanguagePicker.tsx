import { Box, Center, CheckIcon, Select } from "native-base";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("");

  const languages = [
    { name: "en-US", label: "English" },
    { name: "pt-PT", label: "Português" },
  ];

  const handleChangeLanguage = (language: string) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <Center>
      <Box maxW="300">
        <Select
          selectedValue={language}
          minWidth="200"
          accessibilityLabel="Choose Language"
          placeholder="Choose Language"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => handleChangeLanguage(itemValue)}
        >
          {languages.map((language) => (
            <Select.Item label={language.label} value={language.name} />
          ))}
        </Select>
      </Box>
    </Center>
  );
};

export default LanguagePicker;
