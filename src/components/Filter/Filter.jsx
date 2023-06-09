import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import {
  Input,
  Container,
  Heading,
  Divider,
  AbsoluteCenter,
  Box,
} from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilterInput = evt => {
    dispatch(setFilter(evt.target.value.toLowerCase().trim()));
  };

  return (
    <Container py={4} px={4}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter px="4">
          <Heading as="h2" fontSize="l" align="center">
            Find contacts by name
          </Heading>
        </AbsoluteCenter>
      </Box>

      <Input
        as="input"
        onInput={onChangeFilterInput}
        name="filter"
        placeholder="Start typing a name..."
        minLength={3}
        id="filter"
      />
    </Container>
  );
};

export default Filter;
