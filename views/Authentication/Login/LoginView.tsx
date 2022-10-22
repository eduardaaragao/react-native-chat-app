import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import ToggleMode from "../../../components/Common/ToggleMode";

const LoginView = () => {
  const { t } = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Center w="100%">
        <Heading size="lg">{t("phoneNumber")}</Heading>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>{t("enterPhone")}</FormControl.Label>
              <Input keyboardType="number-pad" variant="outline" size="2xl" />
            </FormControl>

            <HStack justifyContent="center" textAlign="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                {t("fourDigitMessage")}
              </Text>
            </HStack>
          </VStack>
          <Button
            mt="2"
            size="lg"
            variant="solid"
            backgroundColor="primary.900"
          >
            {t("signIn")}
          </Button>
        </Box>
        <ToggleMode />
      </Center>
    </TouchableWithoutFeedback>
  );
};

export default LoginView;
