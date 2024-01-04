import { Box, Image } from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import defaultImg from '../../../public/AuthPageImg.jpeg';
const FeedPost = () => {
  return (
    <Box maxW={'500px'}>
      <PostHeader />
      <Box>
        <Image src={defaultImg} alt='default image' />
      </Box>
      <PostFooter />
    </Box>
  );
};
export default FeedPost;
