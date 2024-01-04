import { VStack } from '@chakra-ui/react';
import FeedPost from './FeedPost';

const FeedPosts = () => {
  return (
    <VStack gap={10}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </VStack>
  );
};
export default FeedPosts;
