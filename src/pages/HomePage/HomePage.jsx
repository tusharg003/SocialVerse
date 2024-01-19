import { Box, Container, Flex } from '@chakra-ui/react';
import FeedPosts from '../../components/FeedPosts/FeedPosts';
// import FeedPostModal from '../../components/FeedPosts/FeedPostModal';

const HomePage = () => {
  return (
    <>
      {/* <FeedPostModal /> */}
      <Box bg={'gray.100'}>
        <Container maxW={'container.sm'} minH='100vh' pt={3}>
          {' '}
          <Flex gap={'5em'}>
            <Box flex={2} py={0} w={{ base: '100%', md: '80%' }} px={2}>
              <FeedPosts />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
export default HomePage;


