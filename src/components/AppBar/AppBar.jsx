import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import phonebook from '../../img/phonebook.svg';
import { useColorMode, Box, Image, Stack, Switch } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      px={4}
      borderBottom="2px"
      borderColor="brand.900"
      bg={colorMode === 'dark' ? 'brand.100' : 'brand.500'}
      position="fixed"
      l="0px"
      top="0px"
      w="100%"
      zIndex={1}
    >
      <Image
        src={phonebook}
        alt="logo phonebook"
        boxSize="50px"
        objectFit="cover"
      />

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
        <Switch colorScheme="brand" size="lg" onChange={toggleColorMode} />
      </Stack>
    </Box>
  );
};
