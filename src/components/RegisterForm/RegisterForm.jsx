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

export const RegisterForm = () => {
  const { register } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      await register({
        name,
        email,
        password,
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
            Register
          </Heading>
        </AbsoluteCenter>
      </Box>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={2}>
          <FormLabel htmlFor="name" m="0">
            Name:
          </FormLabel>
          <Input
            type="text"
            as="input"
            name="name"
            placeholder="Name"
            minLength={3}
            id="name"
            isRequired
          />

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
            isRequired
          />

          <FormLabel htmlFor="password" m="0">
            Password:
          </FormLabel>
          <Input
            type="password"
            as="input"
            name="password"
            placeholder="Password"
            minLength={7}
            maxLength={12}
            id="password"
            isRequired
          />

          <Button type="submit" variant="brand" mt={2}>
            Register
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
