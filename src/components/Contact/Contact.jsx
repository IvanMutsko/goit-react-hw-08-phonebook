import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Flex, Avatar, Box, Text, Button, Divider } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Flex align="center" p={2}>
        <Avatar src="https://bit.ly/broken-link" />
        <Box ml="3">
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm">{number}</Text>
        </Box>
        <Button type="button" onClick={handleDelete} variant="brand" ml="auto">
          <DeleteIcon />
        </Button>
      </Flex>
      <Divider />
    </>
  );
};
