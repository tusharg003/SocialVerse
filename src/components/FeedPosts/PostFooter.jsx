import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';
import { LiaComment } from 'react-icons/lia';
import { BiLike } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import { LiaBookmark } from 'react-icons/lia';
const PostFooter = () => {
  const [commmenting, setIsCommenting] = useState(false);
  const handleCommentBtnClick = () => {
    setIsCommenting(!commmenting);
  };

  useEffect(() => {
    if (commmenting && inputRef.current) {
      inputRef.current.focus();
    }
  }, [commmenting]);

  const inputRef = useRef(null);
  return (
    <VStack w={'100%'} pb={2} px={5}>
      <Flex
        fontSize={14}
        justifyContent={'space-between'}
        width={'inherit'}
        px={4}
        mt={2}>
        <Box>36 Likes</Box>
        <Box>69 Comments</Box>
      </Flex>
      {/* <Box h={'2px'} w={'100%'} bgColor={'gray.400'}></Box> */}
      <Divider />
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Button gap={1} flexGrow={1} bg={'white'} display={'flex'}>
          <BiLike size={'1.2em'} />
          <Text fontSize={'sm'}>Like</Text>
        </Button>
        <Button
          gap={1}
          flexGrow={1}
          onClick={handleCommentBtnClick}
          bg={'white'}>
          <LiaComment size={'1.2em'} /> <Text fontSize={'sm'}>Comment</Text>
        </Button>
        <Button gap={1} flexGrow={1} bg={'white'} display={'flex'}>
          <LiaBookmark size={'1.2em'} /> <Text fontSize={'sm'}>Save</Text>
        </Button>
      </Flex>
      <Divider />

      {/* Comment input section */}
      {commmenting && (
        <InputGroup size={'sm'} borderRadius={3} py={1}>
          <InputLeftAddon border={'hidden'} cursor={'pointer'} bg={'white'}>
            <Avatar size={'xs'} />
          </InputLeftAddon>
          <Input
            variant={'flushed'}
            placeholder='Post a Comment!'
            ref={inputRef}
          />

          <InputRightAddon
            as={Button}
            ml={3}
            bg={'white'}
            border={'hidden'}
            borderRadius={'50%'}
            p={2}
            transition={'0.2s ease-in-out'}>
            <IoSend />
          </InputRightAddon>
        </InputGroup>
      )}
    </VStack>
  );
};
export default PostFooter;
