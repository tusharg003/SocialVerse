import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from '@chakra-ui/react';
import FeedPost from './FeedPost';
import { useEffect, useState } from 'react';

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20);
  }, []);

  return (
    <VStack gap={5} py={4} px={2}>
      {isLoading == true ? (
        [0, 1, 2, 3].map((_, idx) => (
          <VStack
            as={Container}
            key={idx}
            gap={4}
            alignItems={'flex-start'}
            mb={5}>
            <Flex gap='2'>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={'flex-start'}>
                <Skeleton h={'10px'} w={'200px'} />
                <Skeleton h={'10px'} w={'200px'} />
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'500px'}>contents wrapeed</Box>
            </Skeleton>
          </VStack>
        ))
      ) : (
        <>
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
    </VStack>
  );
};
export default FeedPosts;
