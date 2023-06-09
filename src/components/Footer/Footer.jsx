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
      borderColor={colorMode === 'dark' ? 'brand.900' : 'brand.400'}
      bg={colorMode === 'dark' ? 'brand.500' : 'brand.50'}
      zIndex="1"
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
