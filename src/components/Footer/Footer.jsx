import { useColorMode, Flex, Text, Image, Link } from '@chakra-ui/react';
import github from '../../img/github.svg';

export const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="footer"
      position="fixed"
      l="0px"
      bottom="0px"
      py={2}
      w="100%"
      justify="center"
      borderTop="2px"
      borderColor="brand.900"
      bg={colorMode === 'dark' ? 'brand.100' : 'brand.500'}
    >
      <Text fontSize="xl" mr={2}>
        Created by Ivan Mutsko
      </Text>
      <Link href="https://github.com/IvanMutsko" isExternal>
        <Image
          src={github}
          alt="logo github"
          boxSize="30px"
          objectFit="cover"
        />
      </Link>
    </Flex>
  );
};
