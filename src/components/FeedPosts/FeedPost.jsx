import { Box, Image, Text } from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import defaultImg from '../../../public/AuthPageImg.jpeg';
const FeedPost = () => {
  return (
    <Box boxShadow={'lg'} borderRadius={5} bg={'white'}>
      <PostHeader />
      <Box>
        <Text  px={5} fontSize={'sm'}>this is a sample caption</Text>
        <Image src={defaultImg} alt='default image' />
      </Box>
      <PostFooter />
    </Box>
  );
};
export default FeedPost;
