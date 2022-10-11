import { Button, Input, Stack } from "native-base";

const LoginView = () => {
  return (
    <Stack space={2} w="100%" alignItems="center">
      <Input size="md" placeholder="E-mail" />
      <Input size="md" placeholder="Password" />
      <Button>Login</Button>
    </Stack>
  );
};

export default LoginView;
