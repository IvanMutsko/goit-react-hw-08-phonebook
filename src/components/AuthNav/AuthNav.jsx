import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex display="flex" gap="4">
      <Link as={NavLink} to="/register" variant="brand">
        Register
      </Link>
      <Link as={NavLink} to="/login" variant="brand">
        Log In
      </Link>
    </Flex>
  );
};
