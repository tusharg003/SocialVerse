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
import { BiSolidLike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';

const PostFooter = ({ openModal }) => {
  const [likes, setLikes] = useState(1000);
  const [isLiked, setIsLiked] = useState(false);
  const [commmenting, setIsCommenting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikeBtnClick = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes(likes - 1);
    } else {
      setIsLiked(true);
      setLikes(likes + 1);
    }
  };

  const handleCommentBtnClick = () => {
    setIsCommenting(!commmenting);
  };

  useEffect(() => {
    if (commmenting && inputRef.current) {
      inputRef.current.focus();
    }
  }, [commmenting]);

  const handleSaveBtnClick = () => {
    setIsSaved(!isSaved);
  };
  const inputRef = useRef(null);

  return (
    <VStack w={'100%'} pb={2} px={5}>
      <Flex
        fontSize={14}
        justifyContent={'space-between'}
        width={'inherit'}
        px={4}
        mt={2}>
        <Box>{likes} Likes</Box>
        <Box cursor={'pointer'} onClick={openModal}>
          69 Comments
        </Box>
      </Flex>
      {/* <Box h={'2px'} w={'100%'} bgColor={'gray.400'}></Box> */}
      <Divider />
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Button
          w={{ md: '2rem' }}
          gap={1}
          flexGrow={1}
          bg={'white'}
          onClick={handleLikeBtnClick}>
          {isLiked ? <BiSolidLike size={'1.2em'} /> : <BiLike size={'1.2em'} />}
          <Text pr={2} fontSize={'sm'}>
            {isLiked ? 'Liked' : 'Like'}
          </Text>
        </Button>
        <Button
          w={{ md: '2rem' }}
          gap={1}
          flexGrow={1}
          onClick={handleCommentBtnClick}
          bg={'white'}>
          <LiaComment size={'1.2em'} /> <Text fontSize={'sm'}>Comment</Text>
        </Button>
        <Button
          w={{ md: '2rem' }}
          gap={1}
          flexGrow={1}
          bg={'white'}
          display={'flex'}
          onClick={handleSaveBtnClick}>
          {isSaved ? (
            <FaBookmark size={'1em'} />
          ) : (
            <FaRegBookmark size={'1em'} />
          )}
          <Text fontSize={'sm'}>{isSaved ? 'Unsave' : 'Save'}</Text>
        </Button>
      </Flex>

      {/* Comment input section */}
      {commmenting && (
        <>
          <Text
            alignSelf={'start'}
            cursor={'pointer'}
            fontWeight={600}
            fontSize={'sm'}
            _hover={{ textDecoration: 'underline' }}
            onClick={openModal}>
            View all comments
          </Text>
          <Divider />
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
        </>
      )}
    </VStack>
  );
};
export default PostFooter;
