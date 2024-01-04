import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  VStack,
} from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';
import { FaBookmark } from 'react-icons/fa';
import { BiSolidComment } from 'react-icons/bi';
import { BiSolidLike } from 'react-icons/bi';
import { useRef } from 'react';

const PostFooter = () => {
  const inputRef = useRef(null);
  return (
    <VStack w={'100%'} pb={2}>
      <Flex
        fontSize={14}
        justifyContent={'space-between'}
        width={'inherit'}
        px={4}
        mt={1}>
        <Box>36 Likes</Box>
        <Box>69 Comments</Box>
      </Flex>
      <Box h={'1px'} w={'100%'} bgColor={'gray.400'}></Box>
      <Flex width={'100%'} justifyContent={'space-around'}>
        <Button width={'30%'} py={3} gap={2}>
          <BiSolidLike size={'17px'} />
        </Button>
        <Button
          width={'30%'}
          py={3}
          gap={2}
          onClick={() => inputRef.current.focus()}>
          <BiSolidComment size={'17px'} />
        </Button>
        <Button width={'30%'} py={3} gap={2}>
          <FaBookmark size={'17px'} />
        </Button>
      </Flex>
      <Box h={'1px'} w={'100%'} bgColor={'gray.400'}></Box>

      {/* Comment input section */}
      <InputGroup size={'sm'} borderRadius={3} py={1}>
        <InputLeftAddon border={'hidden'} cursor={'pointer'}>
          <Avatar size={'xs'} />
        </InputLeftAddon>
        <Input
          variant={'flushed'}
          placeholder='Post a Comment!'
          ref={inputRef}
        />

        <InputRightAddon
          border={'hidden'}
          cursor={'pointer'}
          borderRadius={'50%'}
          p={2}
          _hover={{ bg: 'gray.300' }}
          transition={'0.2s ease-in-out'}>
          <IoSend />
        </InputRightAddon>
      </InputGroup>
    </VStack>
  );
};
export default PostFooter;
