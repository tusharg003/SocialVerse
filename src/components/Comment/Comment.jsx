import { Avatar, Box, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';

const Comment = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikeCount] = useState(0);

  const handleCommentLike = () => {
    if (liked) {
      setLikeCount(likes - 1);
      setLiked(!liked);
    } else {
      setLikeCount(likes + 1);
      setLiked(!liked);
    }
  };
  return (
    <Flex minW={'300px'} gap={2}  mb={2}>
      <Avatar size={'sm'} />
      <Flex
        flexDirection={'column'}
        justifyContent={'space-between'}
        flexGrow={1}>
        <Flex justifyContent={'flex-start'}flexDir={'column'}>
          <Box fontSize={'14'} fontWeight={'700'}>
            Username
          </Box>
          <Box fontSize={'14'} fontWeight={'500'}>
            this is a comment Lorem ipsum dolor 
          </Box>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Box fontSize={'11'}>3weeks ago</Box>
          <Flex fontSize={'11'} fontWeight={'500'} gap={3}>
            <Button
              size={'xs'}
              fontSize={'11'}
              variant={'ghost'}
              py={0}
              onClick={handleCommentLike}>
              Like
            </Button>

            {likes > 0 && (
              <Flex alignItems={'center'} gap={1}>
                {likes} <BiSolidLike />
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Comment;
