import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import phonebook from '../../img/phonebook.svg';
import { useColorMode, Box, Image, Stack, Switch, Container } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      borderBottom="2px"
      borderColor={colorMode === 'dark' ? 'brand.900' : 'brand.400'}
      bg={colorMode === 'dark' ? 'brand.500' : 'brand.50'}
      position="sticky"
      l="0px"
      top="0px"
      w="100%"
      zIndex={1}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="3xl"
        py={2}
        px={4}
      >
        <NavLink to="/">
          <Image
            src={phonebook}
            alt="logo phonebook"
            boxSize="50px"
            objectFit="cover"
          />
        </NavLink>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px={4}
        >
          {' '}
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>

        <Stack direction="row">
          <Switch colorScheme="gray" size="lg" onChange={toggleColorMode} />
        </Stack>
      </Container>
    </Box>
  );
};
