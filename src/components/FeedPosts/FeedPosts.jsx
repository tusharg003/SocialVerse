import { VStack } from '@chakra-ui/react';
import FeedPost from './FeedPost';

const FeedPosts = () => {
  return (
    <VStack gap={5} py={4} px={2} >
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </VStack>
  );
};
export default FeedPosts;
