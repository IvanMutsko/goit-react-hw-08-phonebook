import { Heading, Text, Flex, Image } from '@chakra-ui/react';
import phonebook from '../img/phonebook.svg';

export default function Home() {
  return (
    <Flex
      direction="column"
      minWidth="max-content"
      alignItems="center"
      gap="8"
      py="10"
    >
      <Heading as="h1" size="xl">
        Welcome to contacts book{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Heading>
      <Text fontSize="xl">
        Here you can create an account and save all your contacts.
      </Text>
      <Image
        src={phonebook}
        alt="logo phonebook"
        boxSize="200px"
        objectFit="cover"
      />
    </Flex>
  );
}
