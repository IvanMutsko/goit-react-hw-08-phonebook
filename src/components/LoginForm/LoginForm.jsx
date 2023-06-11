import { useAuth } from 'hooks';
import {
  Container,
  Input,
  FormLabel,
  Button,
  Stack,
  Divider,
  AbsoluteCenter,
  Box,
  Heading,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const { logIn } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      });
      form.reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container mt={6}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter px="4">
          <Heading as="h2" fontSize="xl" align="center">
            Log In
          </Heading>
        </AbsoluteCenter>
      </Box>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={2}>
          <FormLabel htmlFor="email" m="0">
            Email:
          </FormLabel>
          <Input
            type="email"
            as="input"
            name="email"
            placeholder="Email"
            minLength={3}
            id="email"
          />
          <FormLabel htmlFor="password" m="0">
            Password:
          </FormLabel>
          <Input
            type="password"
            as="input"
            name="password"
            placeholder="Password"
            minLength={3}
            id="password"
          />

          <Button type="submit" variant="brand" mt={2}>
            Log In
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
