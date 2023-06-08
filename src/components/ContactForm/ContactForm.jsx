import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';
import toast from 'react-hot-toast';
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Container,
  Heading,
  Icon,
  Button,
  FormLabel,
  InputLeftAddon,
  Divider,
  AbsoluteCenter,
  Box,
} from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';

const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;

    const isNameAlreadyExist = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase()
    );

    if (isNameAlreadyExist) {
      toast.error(`${name} is already in contacts.`, {
        position: 'top-center',
      });
      return;
    }

    const newContact = {
      name,
      number: formatPhoneNumber(number),
    };

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <Container py={4} px={4}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          <Heading as="h2" fontSize="xl" align="center">
            Add new contact
          </Heading>
        </AbsoluteCenter>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormLabel for="name" m="0">
            Name:
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={BsFillPersonFill} color="gray.300" />
            </InputLeftElement>

            <Input
              as="input"
              name="name"
              placeholder="Name"
              minLength={3}
              id="name"
            />
          </InputGroup>
          <FormLabel for="number" m="0">
            Phone:
          </FormLabel>
          <InputGroup>
            <InputLeftAddon>+38</InputLeftAddon>
            <Input
              as="input"
              name="number"
              placeholder="(096)-11-11-111"
              minLength={10}
              maxLength={10}
              id="number"
            />
          </InputGroup>
          <Button type="submit" variant="brand" mt={2}>
            Add contact
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default ContactForm;

/* =========================== */
