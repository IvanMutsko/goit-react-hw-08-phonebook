import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { delSeparators, formatPhoneNumber } from 'utils/formatPhoneNumber';
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  Button,
  FormLabel,
  InputLeftAddon,
} from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';

export const UpdateContact = ({ id, name, number, onSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;

    const updatedContact = {
      id,
      name,
      number: formatPhoneNumber(number),
    };


    try {
      await dispatch(updateContact(updatedContact)).unwrap();
      form.reset();
      onSubmit();
    } catch (e) {
      console.log(e);
    }
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormLabel htmlFor="name" m="0">
            Name:
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={BsFillPersonFill} color="gray.300" />
            </InputLeftElement>

            <Input
              as="input"
              name="name"
              defaultValue={name}
              minLength={3}
              id="name"
            />
          </InputGroup>
          <FormLabel htmlFor="number" m="0">
            Phone:
          </FormLabel>
          <InputGroup>
            <InputLeftAddon>+38</InputLeftAddon>
            <Input
              as="input"
              name="number"
              minLength={10}
              maxLength={10}
              id="number"
              defaultValue={delSeparators(number)}
            />
          </InputGroup>
          <Button type="submit" variant="brand" mt={4}>
            Update contact
          </Button>
        </Stack>
      </form>
    </>
  );
};
