import { Box, Image, Text } from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import defaultImg from '../../../public/AuthPageImg.jpeg';
const FeedPost = () => {
  return (
    <Box boxShadow={'lg'} px={4} borderRadius={5}>
      <PostHeader />
      <Box>
        <Text fontSize={'sm'}>this is a sample caption</Text>
        <Image borderRadius={4} src={defaultImg} alt='default image' />
      </Box>
      <PostFooter />
    </Box>
  );
};
export default FeedPost;
